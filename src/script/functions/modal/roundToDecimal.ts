export default function roundToDecimal(value: number): number {
  const factor = Math.pow(10, 1);
  return Math.round(value * factor) / factor;
}