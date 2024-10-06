import fetchUtil from "@/utils/page"

export default async function displayProducts(url, body) {
  try {
    const result = await fetchUtil(url, {
      'content-type': 'application/json'
    }, body)

    return result;

    } catch (error) {
      console.error('ini errornya suu ', error)
    }
}