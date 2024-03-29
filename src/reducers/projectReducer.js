import { HANDLE_TOGGLE } from '../actions/nav';
import { ANIMATE_MOUSE_OVER } from '../actions/slideAbout';

export const initialState = {
  backgroundColor: 'black',
  visibility: 'hidden',
  toggle: false,
  loading: true,
  animate: false,
};

const projectReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_TOGGLE:
      return {
        ...state,
        toggle: !state.toggle,
        loading: false,
      };
    case ANIMATE_MOUSE_OVER:
      return {
        ...state,
        animate: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default projectReducer;
