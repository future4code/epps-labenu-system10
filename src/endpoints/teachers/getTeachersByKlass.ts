import { Request, Response } from 'express';
import connection from '../../connection';
import Teacher from '../../types/teacher';

const getTeachersByKlass = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    const klassId = Number(req.params.id);
    const teachers = await queryTeachersByKlass(klassId);

    if (teachers.length < 1) {
      res.status(404).send({ message: 'No teachers found.' });
      throw new Error('No teachers found.');
    }

    const response = res.status(200).send(teachers);

    return response;
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const queryTeachersByKlass = async (klassId: number): Promise<Teacher[]> => {
  const result = await connection
    .select('*')
    .from('Teacher')
    .where('class_id', '=', klassId);

  return result;
};

export default getTeachersByKlass;
