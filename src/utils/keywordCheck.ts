import { KEYWORDS } from "./keywords";

export const containsKeyword = (text: string): boolean => {
  return KEYWORDS.some((keyword) =>
    text.toLowerCase().includes(keyword)
  );
};
