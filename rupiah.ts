class Rupiah {
    private rawNumber: Number = 0;
    private prefix : String = "Rp. ";
    private suffix : String = ",00";

    constructor(input : Number){
        this.rawNumber = input;
    }

    get format() : String {
        let rupiah = "";
        [...this.rawNumber.toString()].reverse().forEach((value, index, array) => {
            rupiah += value;
            if((index + 1) %3 == 0 && (index + 1 != array.length)) rupiah += ".";
          });
          
        return this.prefix + [...rupiah].reverse().join('') + this.suffix;
    }

    set setRawNumber(input: Number){
        this.rawNumber = input;
    }

    set setPrefix(input: String){
        this.prefix = input;
    }

    set setSuffix(input: String){
        this.suffix = input;
    }
}

export default Rupiah;