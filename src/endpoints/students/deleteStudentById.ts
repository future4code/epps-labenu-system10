import { Request, Response } from 'express';
import connection from '../../connection';

const deleteStudentById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id as string;
    const student = await queryStudentById(id);
    if (!student) {
      res.status(404).send({ message: `No student with id: ${id}` });
      throw new Error(`No student with id: ${id}`);
    }
    res.status(200).send(`Success! The student with id ${id} was deleted`);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const queryStudentById = async (id: string) => {
  const result = await connection
    .delete('*')
    .from('Student')
    .where('id', '=', id);

  return result;
};

export default deleteStudentById;
