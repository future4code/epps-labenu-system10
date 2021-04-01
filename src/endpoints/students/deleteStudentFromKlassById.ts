import { Request, Response } from 'express';
import connection from '../../connection';

const deleteStudentFromKlassById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const student = await queryStudentKlassById(id);
    if (!student) {
      res.status(404).send({ message: `No student with id: ${id}` });
      throw new Error(`No student with id: ${id}`);
    }
    res
      .status(200)
      .send(
        `Success! The student with id ${id} has been removed from the class.`
      );
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const queryStudentKlassById = async (id: number) => {
  const result = await connection
    .delete('class_id')
    .from('Student')
    .where('id', '=', id);

  return result;
};

export default deleteStudentFromKlassById;
