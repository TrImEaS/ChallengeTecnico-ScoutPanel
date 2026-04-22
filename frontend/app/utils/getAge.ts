export function getAge(birthDate: string | null | undefined): string {
  if (!birthDate) return "";
  const birthDateObj = new Date(birthDate);
  if (isNaN(birthDateObj.getTime())) return "";
  const today = new Date();
  return `${today.getFullYear() - birthDateObj.getFullYear()}y`;
}