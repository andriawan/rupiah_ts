import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import Rupiah from "./rupiah.ts";

Deno.test("test correct format function", () => {
  let rupiah = new Rupiah(2000);
  assertEquals(rupiah.format, "Rp. 2.000,00");
});

Deno.test("test correct terbilang function", () => {
  let rupiah = new Rupiah(2000);
  assertEquals(rupiah.terbilang, "Dua Ribu Rupiah");
});
