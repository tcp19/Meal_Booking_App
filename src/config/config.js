import dotenv from 'dotenv';


dotenv.config();


export const PRODUCTION = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE
}
export const DEVELOPMENT = {
  user: process.env.DEV_USER,
  password: process.env.DEV_PASSWORD,
  server: process.env.DEV_SERVER,
  port: process.env.DEV_PORT,
  database: process.env.DEV_DATABASE
}
export const TEST = {
  user: process.env.TEST_USER,
  password: process.env.TEST_PASSWORD,
  server: process.env.TEST_SERVER,
  port: process.env.TEST_PORT,
  database: process.env.TEST_DATABASE
}