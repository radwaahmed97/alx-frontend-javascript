export default function getResponseFromAPI() {
    return new Promise((resolve) => {
        const result = { data: 'Fetched' };
        resolve(result);
    });
}