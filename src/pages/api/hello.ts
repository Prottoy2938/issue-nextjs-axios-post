import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
      console.log(req)
      console.log(req.body) 
    } else {
      // Handle any other HTTP method
    }
    res.statusCode = 200
    res.json({ name: 'John Doe' })
  }