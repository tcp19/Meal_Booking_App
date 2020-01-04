import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

// formated response
import jsonResponse from './helpers/jsonResponse';

// import routes
import registerRoute from './routes/register';
import menuRoute from './routes/menuRouter';

// Configure .env
dotenv.config();
const app = express();

// configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

const PORT = process.env.PORT || 4000;

// routes
app.get('/', (req, res) => {
  return jsonResponse.success(res, 'success', 200, 'welcome to the Meal App api');
})
app.use('/api/v1', registerRoute);
app.use('/api/v1', menuRoute);



app.listen(PORT, () => {
  console.log(`Server runing on PORT ${PORT} visit http://localhost:${PORT}`);
});

export default app;