import express from 'express';
import dotenv from 'dotenv';

// Configure .env
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
  res.send('hello');
})

app.listen(PORT, () => {
  console.log(`Server runing on PORT ${PORT} visit http://localhost:${PORT}`);
})