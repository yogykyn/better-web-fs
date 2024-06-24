export function generateRandomCharacters(length: number): string {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

export function convertToUNIXTime(value: number | string | Date): number {
  if (typeof value === 'string') return parseInt(value);
  else if (value instanceof Date) return value.getTime();
  else return value;
}
