import { Request, Response } from 'express';
import connection from '../../connection';
import Student from '../../types/student';

const getStudentsByKlass = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    const klassId = Number(req.params.id);
    const students = await queryStudentsByKlass(klassId);

    if (students.length < 1) {
      res.status(404).send({ message: 'No students found.' });
      throw new Error('No students found.');
    }
    const response = res.status(200).send({ message: 'Success!', students });

    return response;
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const queryStudentsByKlass = async (klassId: number): Promise<Student[]> => {
  const result = await connection
    .select('*')
    .from('Student')
    .where('class_id', '=', klassId);
  return result;
};

export default getStudentsByKlass;
