import { Request, Response } from 'express';
import connection from '../../connection';
import Student from '../../types/student';

const getAllStudents = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    const students = await queryAllStudents();
    const response = res.status(200).send(students);

    return response;
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const queryAllStudents = async (): Promise<Student[]> => {
  const result = await connection.raw(`
    SELECT * FROM Student
    `);
  return result[0];
};

export default getAllStudents;
