import express from 'express'
const app = express();
import bodyParser from 'body-parser'
import cors from 'cors'
import responseTime from 'response-time'

const corsOptions = {
    origin: true
}

app.use(cors(corsOptions))

app.use(bodyParser.json({ limit: '50mb' }));

import dotenv from 'dotenv'
dotenv.config();

const env = process.env.NODE_ENV || 'development';

if (env === 'development')
    app.use(responseTime())

import { router as mediaRouter } from './routers/mediaRouter';
app.use('/media', mediaRouter);

import { router as albumRouter } from './routers/albumRouter';
app.use('/albums', albumRouter);

import { router as labelRouter } from './routers/labelRouter';
app.use('/labels', labelRouter);

import { router as servicesRouter } from './routers/servicesRouter';
app.use('/services', servicesRouter);

import { router as faceRouter } from './routers/faceRouter';
app.use('/face', faceRouter);

const port = parseInt(process.env.PORT || "4000");
const host = process.env.IMAGESTORE_HOST || "localhost"
app.listen(port, host, () => console.log(`Listening on port ${host}:${port}`));