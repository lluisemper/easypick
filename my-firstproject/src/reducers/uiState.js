//DESCRIVES HOW YOUR ACTIONS TRANSFROM THE STATE TO ANOTHER STATE
const INITIAL_STATE = {
  searchInput:"",
  pickTag: [],
  recipes: [],
  tag: [],
  filter: ""
}
const uiState = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "SEARCH":
      return {...state, searchInput:action.searchInput}; //update our store
    case "MYTAG":
      const index = state.pickTag.indexOf(action.pickTag);
      const newPickTags = [...state.pickTag];
      if (index >= 0) newPickTags.splice(index, 1);
      else newPickTags.push(action.pickTag)
      return {...state, pickTag: newPickTags}
    case "MYRECIPERENDER":
      return {...state, recipes: action.recipes}
    case "MYTAGRENDER":
      return {...state, tag: action.tag}
    case "MYFILTER":
    if( state.filter === action.filter) { 
      return {...state, filter:""}
    }
      return {...state, filter: action.filter}
    default :
      return state
  }
}

export default uiState