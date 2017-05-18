import 'whatwg-fetch';

//  Public functions (because of export)
export function getUsers() {
  return get('users');
}

// Private functions
function get(url) {
  return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  return console.log(error); // eslint-disable-line no-console
}

// TODO: Add support for put, post, and delete
