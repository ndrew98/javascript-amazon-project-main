//formatting the currency to two decimal places

/**
 * formats the price to two decimal places
 * @param {number} priceCents - the price in cents
 * @returns {string} - the price in dollars
 */
export function formatCurrency(priceCents) {
    return (priceCents / 100).toFixed(2);
}

export default formatCurrency;
