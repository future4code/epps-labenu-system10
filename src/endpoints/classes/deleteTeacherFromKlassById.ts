import { Request, Response } from 'express';
import { resolveSoa } from 'node:dns';
import connection from '../../connection';
import deleteStudentFromKlassById from './deleteStudentFromKlassById';

const deleteTeacherFromKlassById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id as string;
    const teacher = await queryTeacherKlassById(Number(id));
    if (!teacher) {
      res.status(404).send({ message: `No teacher found with id ${id}` });
    }
    res
      .status(200)
      .send(
        `Success! The teacher with id ${id} has been removed from the class.`
      );
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const queryTeacherKlassById = async (id: number) => {
  const result = await connection
    .delete('class_id')
    .from('Teacher')
    .where('id', '=', id);

  return result;
};

export default deleteTeacherFromKlassById;
