const CURRENCY_FORMATTER = Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
})

export function formatPrice(number: number) {
    return CURRENCY_FORMATTER.format(number)
}