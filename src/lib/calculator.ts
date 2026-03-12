// Discount rates based on consumer type
const DISCOUNT_RATES = {
  residencial: 0.15,
  comercial: 0.20,
  rural: 0.18,
  industrial: 0.30,
};

export type ConsumerType = keyof typeof DISCOUNT_RATES;

export interface CalculatorResult {
  monthlySavings: number;
  yearlySavings: number;
  newBillAmount: number;
  discountPercentage: number;
}

/**
 * Calculates the estimated savings based on bill amount and consumer type.
 */
export function calculateSavings(
  billAmount: number,
  type: ConsumerType
): CalculatorResult | null {
  if (!billAmount || billAmount < 50) return null; // Minimum eligible bill

  const rate = DISCOUNT_RATES[type];
  const monthlySavings = billAmount * rate;
  const yearlySavings = monthlySavings * 12;
  const newBillAmount = billAmount - monthlySavings;
  const discountPercentage = Math.round(rate * 100);

  return {
    monthlySavings,
    yearlySavings,
    newBillAmount,
    discountPercentage,
  };
}

/**
 * Formats a number to BRL currency string (e.g., R$ 1.500,00)
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

/**
 * Parses a BRL currency string back to number
 * Ex: "R$ 1.500,00" -> 1500.00
 */
export function parseCurrencyString(value: string): number {
  // Remove R$, dots, and replace comma with dot
  const cleanStr = value.replace(/[^\d,-]/g, "").replace(",", ".");
  const num = parseFloat(cleanStr);
  return isNaN(num) ? 0 : num;
}

/**
 * Formats raw number input to currency string while typing
 */
export function formatInputAsCurrency(value: string): string {
  // Only keep numbers
  const digits = value.replace(/\D/g, "");
  if (!digits) return "";

  // Convert to float (divide by 100 for cents)
  const floatValue = parseFloat(digits) / 100;
  
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(floatValue);
}
