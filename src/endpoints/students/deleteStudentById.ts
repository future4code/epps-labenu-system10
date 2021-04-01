// DB CONNECTION
import { Request, Response } from 'express';
import connection from '../../connection';
import Student from '../../types/student';

// HTTP METHOD (PROMISE)
const deleteStudentById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const studentId = req.params.id as string;
    const student = await queryStudentById(Number(studentId));

    res.status(200).send({ student, message: 'Foi deletado com sucesso!' });
  } catch (err) {
    res.status(400).send({ message: 'Aff' });
    throw new Error(err.message);
  }
};

// SQL QUERY (PROMISE)
const queryStudentById = async (studentId: number): Promise<Student> => {
  const result = await connection.raw(`
  DELETE FROM Student
  WHERE id = "${studentId}";
  `);

  console.log(studentId);
  return result[0][0];
};

export default deleteStudentById;
