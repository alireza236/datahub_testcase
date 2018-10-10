import express from 'express'
import createError from 'http-errors';
import debug from 'debug';
import http from 'http';
import db from './config/database';
import constants from './config/constant';
import middlewaresConfig from './config/middleware';
import apiRoutes from './modules';

const app = express()

middlewaresConfig(app);

app.get('/',(req, res)=>{
   res.status(200).json({status:"Succes"})
})

apiRoutes(app);

app.listen(constants.PORT,()=>{
	console.log(` Server running on port: ${constants.PORT} --- Running on ${process.env.NODE_ENV} --- Service is running`);
})