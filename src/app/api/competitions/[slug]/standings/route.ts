export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const competitionName = params.slug
  const res = await fetch(`${process.env.API_URL_ROOT}/competitions/${competitionName}/standings`, {
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': process.env.API_KEY || ''
    }
  })
  const data = await res.json()

  return Response.json({ data })
}
