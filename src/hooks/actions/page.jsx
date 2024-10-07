export const DISPLAY_PRODUCT_SUCCESS = "DISPLAY_PRODUCT_SUCCESS";
export const DISPLAY_PRODUCT_LOADING = "DISPLAY_PRODUCT_LOADING";
export const DISPLAY_PRODUCT_FAILED = "DISPLAY_PRODUCT_FAILED";

export function displayProductAction(value) {
  return {
    type: DISPLAY_PRODUCT_LOADING,
    value: value
  }
}

export function displayProductSuccess(result) {
  return {
    type: DISPLAY_PRODUCT_SUCCESS,
    payload: result
  }
}

export function displayProductError(error) {
  return {
    type: DISPLAY_PRODUCT_FAILED,
    error: error
  }
}
