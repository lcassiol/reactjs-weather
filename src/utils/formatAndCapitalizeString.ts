const dateOptions = { weekday: 'long' };
export default function formatAndCapitalizeString(date: string): string {
  const dateStr = new Date(date)
    .toLocaleDateString('pt-BR', dateOptions)
    .split('-')[0];
  return dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
}
