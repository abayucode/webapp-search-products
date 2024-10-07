import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { displayProductAction, displayProductError, displayProductSuccess } from "../actions/page"
import fetchUtil from "@/utils/page"

export const useDisplayProducts = () => {
  const { dispatch } = useContext(AppContext)

  const postData = async (body) => {
    dispatch(displayProductAction(body))

    try {
      const response = await fetchUtil('http://localhost:8081/api/v1.0/b2c/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })

      dispatch(displayProductSuccess(response))
      
    } catch (error) {
      console.log(error);
      dispatch(displayProductError(error))
    }

  }

  return { postData };

}