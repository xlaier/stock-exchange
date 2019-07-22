import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { serverPort } from '../etc/config.json';

import * as db from './utils/DataBaseUtils.js';

db.setUpConnection();

// Initialization of express application
const app = express();

app.use( bodyParser.json() );

app.use(cors({ origin: '*' }));

app.get('/tools', (req, res) => {
	db.listTools().then(data => res.send(data));
});

app.post('/tools', (req, res) => {
	db.createTool(req.body).then(data => res.send(data));
});

app.delete('/tools/:id', (req, res) => {
	db.deleteTool(req.params.id).then(data => res.send(data));
});

const server = app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});