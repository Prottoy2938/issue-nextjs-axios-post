export default (req, res) => {
    if (req.method === 'POST') {
      console.log(req)
      console.log(req.body) //this returns an empty object, why??
    } else {
      // Handle any other HTTP method
    }
    res.statusCode = 200
    res.json({ name: 'John Doe' })
  }```