// redux/actions/cropActions.js
export const selectCrop = (crop) => {
    return {
      type: 'SELECT_CROP',
      payload: crop,
    };
  };
  
  export const deselectCrop = () => {
    return {
      type: 'DESELECT_CROP',
    };
  };
  