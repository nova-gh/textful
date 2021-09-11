// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function (req, res) {
  // only listen to POST reqs
  if (req.method === 'POST') {
    res.status(200).json({ name: "John Doe" });
  } else {
    throw new Error {
      "HTTP method not supported in this endpoint!"
    }
  }
  
}
