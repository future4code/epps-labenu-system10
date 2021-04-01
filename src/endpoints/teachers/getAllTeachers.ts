import { Request, Response } from 'express';
import connection from '../../connection';
import Teacher from '../../types/teacher';

const getAllTeachers = async (req: Request, res: Response): Promise<void> => {
  try {
    const teachers = await queryAllTeachers();
    res.status(200).send(teachers);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const queryAllTeachers = async (): Promise<Teacher[]> => {
  const result = await connection.raw(`
    SELECT * FROM Teacher
    `);
  return result[0];
};

export default getAllTeachers;
