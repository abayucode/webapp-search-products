import { DISPLAY_PRODUCT_FAILED, DISPLAY_PRODUCT_LOADING, DISPLAY_PRODUCT_SUCCESS } from "@/hooks/actions/display-product/page";

export const initialState = {
  result: [],
  error: null,
  loading: true,
}

export default function displayProduct(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_PRODUCT_LOADING:
      return {
        ...state,
        result: null,
        error: null
      }
    case DISPLAY_PRODUCT_FAILED:
      return {
        ...state,
        result: null,
        error: action.error
      }
    case DISPLAY_PRODUCT_SUCCESS:
      return {
        ...state,
        result: action.payload,
        error: null
      }
    default:
      return state;
  }
}