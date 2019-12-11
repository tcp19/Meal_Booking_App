import express from 'express';
import bodyParser from 'body-parser';

// formated response
import jsonResponse from './helpers/jsonResponse';

const app = express();

// configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    return jsonResponse.success(res, 'success', 200, 'welcome to the Meal App api');
})

app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})