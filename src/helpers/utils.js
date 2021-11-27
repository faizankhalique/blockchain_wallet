export const modifyLabel = (str, v) => {
  var strLength = str.length;
  if (str.length >= v)
    return `${str.substring(0, strLength / 2)}...${str.substring(
      strLength / 2
    )}`;
  else return str;
};
