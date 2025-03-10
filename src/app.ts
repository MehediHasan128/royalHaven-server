import cors from 'cors';
import express, { Application } from 'express';


const app: Application = express()

// Perser

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})