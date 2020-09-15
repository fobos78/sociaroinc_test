import express from 'express';

const app = express();

app.use(express.json());

app.get('/api/key', (req, res) => {
  //const KEY = '8ddb2ae4d480545c1441bb2374c9ff6d';
  const KEY = '330216f9e3042b8a57a7865c3de67865';
  console.log(KEY);
  res.json({ KEY });
});

app.listen(process.env.PORT ?? 3001, () => {
  console.log('Server is runing...');
});
