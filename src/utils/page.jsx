export default async function fetchUtil(url, headers, body) {
  try {
    const result = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    })

    return result.json()

  } catch (error) {
    console.error(error)
  }
}
