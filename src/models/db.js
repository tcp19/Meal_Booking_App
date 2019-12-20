import pg from 'pg';
import config from '../config/config';
import dotenv from 'dotenv';

dotenv.config();
let connectionString;
const environmentVariable = process.env.NODE_ENV;

if (environmentVariable == 'test') {
  connectionString = config['test'];

} else if (environmentVariable == 'production') {
  connectionString = config['production'];
}
else {
  connectionString = config['development'];
}
const pool = new pg.Pool(
  connectionString
);

console.log(connectionString);
pool.on('connect', () => { });

const UserTable = async () => {
  const CreateTable = `CREATE TABLE IF NOT EXISTS
    users(
        id SERIAL PRIMARY KEY UNIQUE,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        category VARCHAR(50) NOT NULL, 
        email VARCHAR(50) NOT NULL,
        password VARCHAR(20) NOT NULL
        )`
  try {
    await pool.query(CreateTable)
    console.log('user table created')

  }
  catch (e) {
    console.log(e)
  }

}

UserTable();

export default pool;