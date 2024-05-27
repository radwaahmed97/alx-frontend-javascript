export default function appendToEachArrayValue(array, appendString) {
  const newarray = [];
  for (const index of array) {
    const value = index;
    newarray.push(appendString + value);
  }

  return newarray;
}
