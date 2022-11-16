export function formatCurrency(value: number) {
    return new Intl.NumberFormat('pr-BR', { style: 'currency', currency: 'BRL' }).format(value);
}
