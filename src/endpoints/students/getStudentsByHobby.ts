import { Request, Response } from 'express';
import connection from '../../connection';
import Student from '../../types/student';

const getStudentsByHobby = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    const hobby = req.query.hobby as string;
    const students = await queryStudentsByHobby(hobby);
    if (students.length < 1) {
      res
        .status(404)
        .send({ message: `No students found with hobby: ${hobby}` });
      throw new Error(`No students found with hobby: ${hobby}`);
    }
    const response = res.status(200).send({ message: 'Success!', students });

    return response;
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const queryStudentsByHobby = async (hobby: string): Promise<Student[]> => {
  console.log(hobby);
  const result = await connection
    .select('*')
    .from('Student')
    .where('hobby', 'LIKE', `%${hobby}%`);
  console.log(result);
  return result;
};

export default getStudentsByHobby;
