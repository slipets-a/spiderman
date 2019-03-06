const compact = (array: Array<any>): Array<any> => {
  return Array.isArray(array) ? array.filter(element => !!element) : [];
};
export default compact;
