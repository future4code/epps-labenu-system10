import express, { Express } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';

import createKlass from './endpoints/classes/createKlass';
import createStudent from './endpoints/students/createStudent';
import getStudentAgeById from './endpoints/students/getStudentAgeById';
import createTeacher from './endpoints/teachers/createTeacher';
import changeStudentKlass from './endpoints/students/changeStudentKlass';
import getAllStudents from './endpoints/students/getAllStudents';
import getAllTeachers from './endpoints/teachers/getAllTeachers';
import getAllKlasses from './endpoints/classes/getAllKlasses';
import getStudentsByKlass from './endpoints/students/getStudentsByKlass';
import getTeachersByKlass from './endpoints/teachers/getTeachersByKlass';
import getStudentsByHobby from './endpoints/students/getStudentsByHobby';
import changeTeacherKlass from './endpoints/teachers/changeTeacherKlass';
import deleteStudentFromKlassById from './endpoints/classes/deleteStudentFromKlassById';
import deleteTeacherFromKlassById from './endpoints/classes/deleteTeacherFromKlassById';
import changeModuleById from './endpoints/classes/changeModuleById';

const app: Express = express();

app.use(express.json());
app.use(cors());

// Class endpoint routes
app.get('/classes', getAllKlasses);
app.post('/classes', createKlass);
app.put('/classes/:id', changeModuleById);
app.delete('/classes/student/:id', deleteStudentFromKlassById);
app.delete('/classes/teacher/:id', deleteTeacherFromKlassById);

// Teacher endpoint routes
app.get('/teachers', getAllTeachers);
app.get('/teachers/class/:id', getTeachersByKlass);
app.post('/teachers', createTeacher);
app.put('/teacher/:id', changeTeacherKlass);

// Student endpoint routes
app.get('/students', getAllStudents);
app.get('/students/class/:id', getStudentsByKlass);
app.get('/students/hobby', getStudentsByHobby);
app.get('/students/:id', getStudentAgeById);
app.post('/students', createStudent);
app.put('/student/:id', changeStudentKlass);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running on http://localhost:${address.port}`);
  } else {
    console.error('Failed running the server.');
  }
});
