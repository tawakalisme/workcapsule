export function numberFormat(number) {
  const formatNumbering = new Intl.NumberFormat("id-ID");
  return formatNumbering.format(number);
}

export function priceFormat(currency) {
  const price = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  });
  return price.format(currency);
}
