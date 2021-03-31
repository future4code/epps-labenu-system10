import { Request, Response } from 'express';
import connection from '../../connection';
import Student from '../../types/student';

const getStudentsByKlass = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const klassId = Number(req.params.id);
    const students = await queryStudentsByKlass(klassId);
    const response = res.status(200).send(students);

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
  console.log(result);
  return result;
};

export default getStudentsByKlass;
