export function formatCurrency(value, useCents = false) {
  if (value === null || value === undefined) return "—";
  const numValue = Number(value);
  const absoluteValue = Math.abs(numValue);
  
  const formatted = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: useCents ? 2 : 0,
    maximumFractionDigits: useCents ? 2 : 0,
  }).format(absoluteValue);

  return `$ ${formatted}`;
}

export function formatNumber(value, decimals = 6) {
  if (value === null || value === undefined) return "—";
  return Number(value).toFixed(decimals);
}
