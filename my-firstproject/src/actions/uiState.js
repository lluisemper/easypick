//DESCRIVES WHAT ARE YOU GONNA DO

export const mySearchAction = (searchInput) => {
  return{
    type: 'SEARCH',
    searchInput
  }
} 

export const myRecipeSearch = () => {
  return {
    type: 'MYRECIPE'
  }
}