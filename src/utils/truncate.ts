export function truncate(str: string, maxLength?: number): string {
  const length = maxLength ?? 30;
  if (str.length <= length) return str;
  return str.slice(0, length - 3) + '...';
}
