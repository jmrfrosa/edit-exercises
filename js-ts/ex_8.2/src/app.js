export async function fetchData() {
  const data = await fetch('http://some-url.com/coffee')

  return await data.json()
}
