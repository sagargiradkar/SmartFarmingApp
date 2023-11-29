// redux/reducers/cropReducer.js
const initialState = {
    selectedCrop: null,
  };
  
  const cropReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECT_CROP':
        return {
          ...state,
          selectedCrop: action.payload,
        };
      case 'DESELECT_CROP':
        return {
          ...state,
          selectedCrop: null,
        };
      default:
        return state;
    }
  };
  
  export default cropReducer;
  