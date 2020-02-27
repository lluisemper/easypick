const BASE_URL = 'http://localhost:4000';

export default {

  postImage: (imageArr) => {
    return fetchRequest(`/picture`, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(imageArr)
    });
  },
  getPictureDescription: () => {
    return fetchRequest(`/picture/tags`);
  }
}

const fetchRequest = (url, options) => {
  return fetch(`${BASE_URL}${url}`, options)
    .then(res => res.status <= 400 ? res : Promise.reject(res))
    .then(res => res.status === 204 ? res : res.json())
    .catch((err) => {
      console.log(`${err.message} while fetching ${url}`)
    });
};