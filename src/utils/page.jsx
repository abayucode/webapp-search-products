export default async function fetchUtil(url, request) {
  try {
    const result = await fetch(url, request)
    
    return result.json()

  } catch (error) {
    console.error(error)
  }
}
