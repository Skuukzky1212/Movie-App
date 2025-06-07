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

export const dateFormatter = (date, locales = "en-US") => {
  const formatter = new Intl.DateTimeFormat(locales, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const dateObj = new Date(date); 
  return formatter.format(dateObj);
};
