class Rupiah {
  private rawNumber: number = 0;
  private prefix: string = "Rp";
  private suffix: string = ",00";
  private separator: string = ".";
  static readonly ANGKA_DASAR = [
    "Satu",
    "Dua",
    "Tiga",
    "Empat",
    "Lima",
    "Enam",
    "Tujuh",
    "Delapan",
    "Sembilan",
    "Sepuluh",
    "Sebelas",
    "Dua Belas",
    "Tiga Belas",
    "Empat Belas",
    "Lima Belas",
    "Enam Belas",
    "Tujuh Belas",
    "Delapan Belas",
    "Sembilan Belas",
  ];
  static readonly PULUHAN = [
    "Sepuluh",
    "Dua Puluh",
    "Tiga Puluh",
    "Empat Puluh",
    "Lima Puluh",
    "Enam Puluh",
    "Tujuh Puluh",
    "Delapan Puluh",
    "Sembilan Puluh",
  ];

  static readonly BILANGAN_BESAR = ["Ribu", "Juta", "Miliar", "Triliun"];

  constructor(input: number) {
    this.rawNumber = input;
  }

  private isTruthy = (item: any): boolean => {
    return !!item;
  };

  private chunk = (number: number): Array<number> => {
    let thousands = [];

    while (number > 0) {
      thousands.push(number % 1000);
      number = Math.floor(number / 1000);
    }

    return thousands;
  };

  private appendBilanganBesar = (chunk: any, exp: number): string => {
    let scale;
    if (!chunk) {
      return "";
    }
    scale = Rupiah.BILANGAN_BESAR[exp - 1];
    if (chunk === "Satu" && scale === "Ribu") {
      return "Seribu";
    } else {
      return [chunk, scale].filter(this.isTruthy).join(" ");
    }
  };

  private indonesianTerbilang = (number: number): string => {
    let thousands,
      hundreds,
      tens,
      ones,
      words = [];

    if (number < 20) {
      return Rupiah.ANGKA_DASAR[number - 1]; // may be undefined
    }

    if (number < 100) {
      ones = number % 10;
      tens = (number / 10) | 0; // equivalent to Math.floor(number / 10)

      words.push(Rupiah.PULUHAN[tens - 1]);
      words.push(this.indonesianTerbilang(ones));

      return words.filter(this.isTruthy).join(" ");
    }

    hundreds = (number / 100) | 0;

    if (hundreds === 1) {
      words.push("Seratus");
    } else {
      let data = this.indonesianTerbilang(hundreds);
      words.push(data);
      words.push("Ratus");
    }
    words.push(this.indonesianTerbilang(number % 100));
    return words.filter(this.isTruthy).join(" ");
  };

  get format(): string {
    let rupiah = "";
    [...this.rawNumber.toString()].reverse().forEach((value, index, array) => {
      rupiah += value;
      if ((index + 1) % 3 == 0 && index + 1 != array.length)
        rupiah += this.separator;
    });

    return this.prefix + [...rupiah].reverse().join("") + this.suffix;
  }

  get terbilang(): string {
    return (
      this.chunk(this.rawNumber)
        .map(this.indonesianTerbilang)
        .map(this.appendBilanganBesar)
        .filter(this.isTruthy)
        .reverse()
        .join(" ") + " Rupiah"
    );
  }

  set setRawNumber(input: number) {
    this.rawNumber = input;
  }

  set setPrefix(input: string) {
    this.prefix = input;
  }

  set setSuffix(input: string) {
    this.suffix = input;
  }

  set setSeparator(input: string) {
    this.separator = input;
  }
}

export default Rupiah;
