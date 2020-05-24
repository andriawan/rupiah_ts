# Rupiah
### Indonesian Currency (format number to indonesian currency)

## **Installation in Deno**
```ts
import Rupiah from 'https://deno.land/x/rupiah_ts/rupiah.ts'

let rupiah = new Rupiah(350000);
console.log(rupiah.format);
```

## **Set Default Prefix and Suffix**
default prefix is configured as ```Rp .``` and suffix is configured as ```,00``` you can set custom prefix and suffix with this following API

```ts
import Rupiah from 'https://deno.land/x/rupiah/rupiah.ts'

let rupiah = new Rupiah(350000);
rupiah.setPrefix = "RP .";
rupiah.setSuffix = ",-";
console.log(rupiah.format);
```

## **Development**
This repo is in early development stage. PRs is wellcomed.

## **Test**
Just run from cli
```
deno test
```
