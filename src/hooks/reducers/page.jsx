import { DISPLAY_PRODUCT_FAILED, DISPLAY_PRODUCT_LOADING, DISPLAY_PRODUCT_SUCCESS } from "@/hooks/actions/page";

export const initialState = {
  displayProductData: [],
  error: null,
  loading: true,
}

export default function appReducers(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_PRODUCT_LOADING:
      return {
        ...state,
        displayProductData: null,
        error: null
      }
    case DISPLAY_PRODUCT_FAILED:
      return {
        ...state,
        displayProductData: null,
        error: action.error
      }
    case DISPLAY_PRODUCT_SUCCESS:
      return {
        ...state,
        displayProductData: action.payload,
        error: null
      }
    default:
      return state;
  }
}