import { Request, Response } from 'express';
import connection from '../../connection';
import Teacher from '../../types/teacher';

const createTeacher = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const teacherId = req.body.id;
    const classId = req.body.class_id;
    const teacher: Teacher = {
      id: teacherId,
      name: req.body.name,
      email: req.body.email,
      birth_date: req.body.birth_date,
      class_id: classId,
      expertise: req.body.expertise,
    };

    await insertTeacher(teacher);

    const response = res.status(201).send({ message: 'Success!', teacher });

    return response;
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
      class_id: teacher.class_id,
      expertise: teacher.expertise,
    })
    .into('Teacher');

  return result[0];
};

export default createTeacher;
