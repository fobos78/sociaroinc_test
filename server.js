import express from 'express';


const app = express();

app.use(express.json());

app.get('/api/key', (req, res) => {
  const KEY = '8ddb2ae4d480545c1441bb2374c9ff6d';
  console.log(KEY);
  res.json({ KEY });
});

app.listen(process.env.PORT ?? 3001, () => {
  console.log('Server is runing...');
});
