const BASE_URL_DOMAIN = 'https://jsonplaceholder.typicode.com';

export const getEndpoint = (endpoint: string) => {
  return `${BASE_URL_DOMAIN}/${endpoint}`;
};
