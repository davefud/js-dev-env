/*
  Handles pointing the baseUrl for the app and according to
  the environment. This means in dev environment it will
  point to the mock API, but will point to the real API
  if the hostname is other than localhost.
*/

export default function getBaseUrl() {
  const inDevelopment = window.location.hostname === 'localhost';
  return inDevelopment ? 'http://localhost:3001/' : '/';
}
