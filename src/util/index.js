export const formatNumber = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatCurrency = (x) => {
  return `$${formatNumber(x)}`;
};

export const formatSignedPercent = (x) => {
  let sign = x>=0?'+':''
  return `${sign}${formatNumber(x)}%`;
};

export const formatFixed2 = (x) => {
  return Number.parseFloat(x).toFixed(2);
};

export const formatCurrencyFixed2 = (x) => {
  return formatCurrency(formatFixed2(x));
}