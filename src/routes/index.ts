// Express Router import
import { Router } from 'express';

// Students imports
import createStudent from '../endpoints/students/createStudent';
import getStudentAgeById from '../endpoints/students/getStudentAgeById';
import changeStudentKlass from '../endpoints/students/changeStudentKlass';
import getAllStudents from '../endpoints/students/getAllStudents';
import deleteStudentById from '../endpoints/students/deleteStudentById';
import getStudentsByHobby from '../endpoints/students/getStudentsByHobby';
import getStudentsByKlass from '../endpoints/students/getStudentsByKlass';

// Teachers imports
import getTeachersByKlass from '../endpoints/teachers/getTeachersByKlass';
import changeTeacherKlass from '../endpoints/teachers/changeTeacherKlass';
import createTeacher from '../endpoints/teachers/createTeacher';
import getAllTeachers from '../endpoints/teachers/getAllTeachers';

// Classes imports
import deleteStudentFromKlassById from '../endpoints/classes/deleteStudentFromKlassById';
import createKlass from '../endpoints/classes/createKlass';
import getAllKlasses from '../endpoints/classes/getAllKlasses';
import changeModuleById from '../endpoints/classes/changeModuleById';
import deleteTeacherFromKlassById from '../endpoints/classes/deleteTeacherFromKlassById';

const routes = Router();

// Class endpoint routes
routes.get('/classes', getAllKlasses);
routes.post('/classes', createKlass);
routes.put('/class/:id', changeModuleById);
routes.delete('/classes/student/:id', deleteStudentFromKlassById);
routes.delete('/classes/teacher/:id', deleteTeacherFromKlassById);

// Teacher endpoint routes
routes.get('/teachers', getAllTeachers);
routes.get('/teachers/class/:id', getTeachersByKlass);
routes.post('/teachers', createTeacher);
routes.put('/teacher/:id', changeTeacherKlass);

// Student endpoint routes
routes.get('/students', getAllStudents);
routes.get('/students/class/:id', getStudentsByKlass);
routes.get('/students/hobby', getStudentsByHobby);
routes.get('/students/:id', getStudentAgeById);
routes.post('/students', createStudent);
routes.put('/student/:id', changeStudentKlass);
routes.delete('/student/:id', deleteStudentById);

export default routes;
