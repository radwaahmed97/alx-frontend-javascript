export default function concatArrays(array1, array2, string) {
  const concatedarray = [...array1, ...array2, ...string];
  return concatedarray;
}
