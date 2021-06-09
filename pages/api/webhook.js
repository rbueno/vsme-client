import Cors from 'cors'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

const cors = initMiddleware(
  Cors({
    origin: function(origin, callback) {
      console.log('cors origin é: ', origin)
      return callback(null, true)
    }
  })
 );

export default async function handler(req, res) {
  await cors(req, res);

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
