import { Request, Response } from 'express';
import connection from '../../connection';
import Teacher from '../../types/teacher';

const createTeacher = async (req: Request, res: Response): Promise<void> => {
  try {
    const teacherId = req.body.id;
    const teacher: Teacher = {
      id: teacherId,
      name: req.body.name,
      email: req.body.email,
      birth_date: req.body.birth_date,
    };

    await insertTeacher(teacher);

    res.status(201).send({ teacher });
  } catch (err) {
    res.status(400).send({ message: err.message });
    throw new Error(err.message);
  }
};

const insertTeacher = async (teacher: Teacher): Promise<Teacher> => {
  const result: Teacher[] = await connection
    .insert({
      id: teacher.id,
      name: teacher.name,
      email: teacher.email,
      birth_date: teacher.birth_date,
    })
    .into('Teacher');

  return result[0];
};

export default createTeacher;
