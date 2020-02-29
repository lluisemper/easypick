const BASE_URL = 'http://localhost:4000';
const APP_ID=process.env.REACT_APP_ID;
const APP_KEY=process.env.REACT_APP_KEY;
let mysearch="";

export default {

  postImage: (imageArr) => {
    return fetchRequest(`/picture`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(imageArr)

    });
  },

  getPictureDescription: () => {
    return fetchRequest(`/picture/tags`);
  },

  getRecipes: (mysearch) => {
    return fetchRecipes(mysearch);
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

const fetchRecipes = (mysearch) => {
  const URL_API = `https://api.edamam.com/search?q=${mysearch}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  console.log('URL_API', URL_API);
  return fetch(`${URL_API}`)
  .then(res => res.status <= 400 ? res : Promise.reject(res))
  .then(res => res.status === 200 ? res.json() : res)
  .catch((err) => {
    console.log(`${err.message} while fetching /${URL_API}`)
  });
}

// res.status <= 400 ? res : Promise.reject(res)