const chunk = (array: Array<any>, size = 1) => {
  if (!Array.isArray(array) || !array.length) {
    return [];
  }
  const repetitions = Math.ceil(array.length / size);
  const result = [];
  for (let repetition = 0; repetition < repetitions; repetition++) {
    result.push(array.slice(repetition * size, repetition * size + size));
  }
  return result;
};

export default chunk;
