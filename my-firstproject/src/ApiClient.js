const BASE_URL = 'http://localhost:4000';
const APP_ID = process.env.REACT_APP_ID;
const APP_KEY = process.env.REACT_APP_KEY;

export default {

  postImage: (imageArr) => {
    return fetchRequest(`/picture`, {
      credentials:"include",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(imageArr)
    });
  },
  
  postToken: (loginInf) => {
    return fetchRequest(`/`, {
      credentials:"include",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginInf)

    });
  },

  getPictureDescription: () => {
    return fetchRequest(`/picture/tags`, {
      credentials:"include"
    });
  },

  getRecipes: (mysearch, filter) => {
    return fetchRecipes(mysearch, filter);
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

const fetchRecipes = (mysearch, filter) => {
  const URL_API = `https://api.edamam.com/search?q=${mysearch}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=30${filter ? '&health=' + filter : ''}`;
  return fetch(`${URL_API}`)
    .then(res => res.status <= 400 ? res : Promise.reject(res))
    .then(res => res.status === 200 ? res.json() : res)
    .catch((err) => {
      console.log(`${err.message} while fetching /${URL_API}`)
    });
}

