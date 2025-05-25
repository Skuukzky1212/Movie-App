export const currencyFormatter = (
  number,
  locales = "en-US",
  currency = "USD",
) => {
  const formater = new Intl.NumberFormat(locales, {
    style: "currency",
    currency: currency,
  });
  return formater.format(number);
};
