export async function GET() {
  // const areaCode = [2077, 2224, 2081, 2072, 2088, 2114]
  const res = await fetch(`${process.env.API_URL_ROOT}/competitions?areas=2072`, {
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': process.env.API_KEY || ''
    }
  })
  const data = await res.json()

  return Response.json({ data })
}
