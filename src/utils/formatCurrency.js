export function formatCurrency(value) {
  if (value === null || value === undefined) return "—";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatNumber(value, decimals = 6) {
  if (value === null || value === undefined) return "—";
  return Number(value).toFixed(decimals);
}
