export const getImageLink = (filename: string) => `https://image.tmdb.org/t/p/original/${filename}`

export const getYearFromDate = (date: string) => new Date(date).getFullYear()

export const formatRuntime = (number: number) => `${Math.floor(number / 60)}.${number % 60} h`

export const formatMoney = (budget: string) => {
    const formatter = new Intl.NumberFormat('en-US', { currency: 'USD', style: 'currency' })
    return formatter.format(+budget)
}
