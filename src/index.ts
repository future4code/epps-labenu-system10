import express, { Express } from 'express';

import cors from 'cors';
import { AddressInfo } from 'net';

import createKlass from './endpoints/classes/createKlass';
import createStudent from './endpoints/students/createStudent';

const app: Express = express();

app.use(express.json());
app.use(cors());

// Endpoint routes
app.post('/classes', createKlass);
app.post('/students', createStudent);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running on http://localhost:${address.port}`);
  } else {
    console.error('Failed running the server.');
  }
});
