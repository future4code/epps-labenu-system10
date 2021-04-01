import { Request, Response } from 'express';
import connection from '../../connection';
import Student from '../../types/student';

const createStudent = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    const studentId = req.body.id;
    const classId = req.body.class_id;

    const student: Student = {
      id: studentId,
      name: req.body.name,
      email: req.body.email,
      birth_date: req.body.birth_date,
      class_id: classId,
      hobby: req.body.hobby,
    };

    await insertStudent(student);

    const response = res.status(201).send({ message: 'Success!', student });

    return response;
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const insertStudent = async (data: Student): Promise<Student> => {
  const result: Student[] = await connection
    .insert({
      name: data.name,
      email: data.email,
      birth_date: data.birth_date,
      class_id: data.class_id,
      hobby: data.hobby,
    })
    .into('Student');
  console.log('id', result[0]);
  return result[0];
};

export default createStudent;
