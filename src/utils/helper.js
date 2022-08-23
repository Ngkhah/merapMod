export const isValueParam = (str) => {
  if (str !== undefined && str !== '' && str !== null) {
    return true;
  }else {
    return false;
  }
}