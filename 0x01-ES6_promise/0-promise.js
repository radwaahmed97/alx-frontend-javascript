export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    const response = { data: 'Fetched' };
    resolve(response);
  });
}
