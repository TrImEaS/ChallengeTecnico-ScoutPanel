export function getAge (birthDate: string): string {
  if (!birthDate) return "";
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  return `${today.getFullYear() - birthDateObj.getFullYear()}y`;
}