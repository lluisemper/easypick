const getRecipes = async (searchInput) => {
  const URL_API = `https://api.edamam.com/search?q=${searchInput}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const response = await fetch(URL_API);
  const data = await response.json();
  setRecipes(data.hits);
}

export default getRecipes;