//DESCRIVES WHAT ARE YOU GONNA DO

export const mySearchAction = (searchInput) => {
  return{
    type: 'SEARCH',
    searchInput
  }
} 

export const myTagSelection = (pickTag) => {
  return {
    type: 'MYTAG',
    pickTag
  }
}

export const myRecipeRender = (recipes) => {
  return {
    type: 'MYRECIPERENDER',
    recipes
  }
}
export const myTagRender = (tag) => {
  return {
    type: 'MYTAGRENDER',
    tag
  }
}

export const myfilterSelection = (filter) => {
  return {
    
    type: 'MYFILTER',
    filter
  }
}