// eslint-disable-next-line import/prefer-default-export
export const replaceAt = (
  string: string,
  index: number,
  replacement: string
) => {
  if (index >= string.length) {
    return string.valueOf();
  }

  return string.substring(0, index) + replacement + string.substring(index + 1);
};

export const getRandomString = (list: string[]): string => {
  return list[Math.floor(Math.random() * list.length)];
};
