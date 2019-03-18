const concat = (array: Array<any>, ...rest: Array<any>) => {
  if (!Array.isArray(array)) {
    return [];
  }
  if (!rest.length) {
    return array;
  }
  const result = [...array];

  rest.forEach(element => {
    if (Array.isArray(element)) {
      element.forEach(el => result.push(el));
    } else {
      result.push(element);
    }
  });
  return result;
};

export default concat;
