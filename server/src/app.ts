import express from 'express';

const app = express();
const port = 2001;

app.get('/', (req, res) => {
  res.send('Hello world!');
});

// @ts-ignore
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});