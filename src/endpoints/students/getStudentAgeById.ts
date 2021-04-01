// DB CONNECTION
import { Request, Response } from 'express';
import connection from '../../connection';
import Student from '../../types/student';

// HTTP METHOD (PROMISE)
const getStudentAgeById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const studentId = req.params.id as string;
    const student = await queryStudentAgeById(Number(studentId));

    const studentDate = student.birth_date;

    const today = new Date();

    const studentAge = today.getFullYear() - studentDate.getFullYear();

    const response = res.status(200).send({ student, age: studentAge });

    return response;
  } catch (err) {
    res.status(400).send({ message: err.message });
    throw new Error(err.message);
  }
};

// SQL QUERY (PROMISE)
const queryStudentAgeById = async (id: number): Promise<Student> => {
  const result = await connection.raw(`
  SELECT * FROM Student
  WHERE id = "${id}";
  `);

  console.log(result);

  return result[0][0];
};

export default getStudentAgeById;
