// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('======================================')
    console.log('req.body', req.body)
    console.log('======================================')
    console.log('req.headers.origin', req.headers)
    console.log('======================================')
  res.statusCode = 200
  res.json({ headersDetail: req.headers })
  } else {
    res.statusCode = 200
    res.json({ message: 'not POST', headersDetail: req.headers })
  }
}