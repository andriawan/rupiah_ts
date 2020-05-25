# Rupiah
### Indonesian Currency (format number to indonesian currency)

## **Installation in Deno**
```ts
import Rupiah from 'https://deno.land/x/rupiah_ts/rupiah.ts'

let rupiah = new Rupiah(350000);
console.log(rupiah.format);
// result Rp. 350.000,00
```
## **Terbilang**
You can also make number to terbilang (words version of rupiah)
```ts
import Rupiah from 'https://deno.land/x/rupiah_ts/rupiah.ts'

let rupiah = new Rupiah(350000);
console.log(rupiah.terbilang);
// result Tiga Ratus Lima Puluh Ribu Rupiah
```

## **Set Prefix and Suffix**
Default prefix is configured as ```Rp. ``` and suffix is configured as ```,00``` you can set custom prefix and suffix with this following API

```ts
import Rupiah from 'https://deno.land/x/rupiah/rupiah.ts'

let rupiah = new Rupiah(350000);
rupiah.setPrefix = "RP .";
rupiah.setSuffix = ",-";
console.log(rupiah.format);
```

## **Separator**
Default separator is configured as ```. ``` you can set custom prefix and suffix with this following API

```ts
import Rupiah from 'https://deno.land/x/rupiah/rupiah.ts'

let rupiah = new Rupiah(350000);
rupiah.setSeparator = "-";
console.log(rupiah.format);
// result 350-000
```

## **Development**
This repo is in early development stage. PRs is wellcomed.

## **Test**
Just run from cli
```
deno test
```

## Feature Roadmap 

- [x] Rupiah Format
- [x] Terbilang

## **Miscellaneous**
This work is inspired by gist from https://gist.github.com/faisalman/845309 with refactoring code into more modern javascript way. Terbilang version is inspired by stackoverflow thread https://codereview.stackexchange.com/questions/90349/changing-number-to-words-in-javascript
