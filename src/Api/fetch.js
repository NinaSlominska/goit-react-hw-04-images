const API_KEY = '32924633-fe951661f7e48cba387e32cda';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = (nextName, page = 1) => {
  return fetch(
    `${BASE_URL}?q=${nextName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => {
    if (!res.ok) {
      return alert(`Not found`);
    }
    return res.json();
  });
};
