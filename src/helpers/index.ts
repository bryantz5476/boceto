//COLOCA EL SIGNO DE DOLAR EN LADO IZQUIERD

export function formatCurrency(quantity: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency', currency: 'USD'
    }).format(quantity)
}