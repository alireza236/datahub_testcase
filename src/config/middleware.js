 import express from 'express';
 import morgan from 'morgan';
 import compression from 'compression';
 const isDev = process.env.NODE_ENV === 'development';
 const isProd = process.env.NODE_ENV === 'production';

 export default app => {
     if (isProd) {
         app.use(compression());
     }

     app.use(express.json());

     app.use(express.urlencoded({
         extended: true
     }));


     if (isDev) {
         app.use(morgan('dev'));
     }
 };
