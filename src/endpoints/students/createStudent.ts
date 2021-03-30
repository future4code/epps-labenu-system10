import { Request, Response } from 'express';
import connection from '../../connection';
import Student from '../../types/student';

const createStudent = async (req: Request, res: Response): Promise<void> => {
  try {
    const student: Student = await insertStudent({
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      birth_date: req.body.birth_date,
    });

    res.status(201).send({ message: 'OK', student });
  } catch (err) {
    res.status(400).send({ message: err.message });
    throw new Error(err.message);
  }
};

const insertStudent = async (data: Student): Promise<Student> => {
  const result: Student = await connection
    .insert({
      name: data.name,
      email: data.email,
      birth_date: data.birth_date,
    })
    .into('Student');
  console.log(result, 'aaa');
  return result;
};

export default createStudent;
