export const numberFormatter = (amount: number) => {
  return Intl.NumberFormat('fa-IR', {}).format(amount)
}
