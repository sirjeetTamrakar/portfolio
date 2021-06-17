// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({ status: 'ok' })
  const body = JSON.parse(req.body)
  console.log(body)
}
