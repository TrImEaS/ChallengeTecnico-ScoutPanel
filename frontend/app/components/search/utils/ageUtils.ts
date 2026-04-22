export const formatAgeInput = (val: string, minLimit = 15, maxLimit = 60): string | null => {
  if (val === "") return "";
  
  const numericVal = val.replace(/\D/g, "");
  if (numericVal === "") return "";

  const num = parseInt(numericVal, 10);
  
  if (num > maxLimit) return maxLimit.toString();
  if (numericVal.length >= 2 && num < minLimit) return minLimit.toString();

  return numericVal;
};
