import { Request, Response } from 'express';
import connection from '../../connection';

const deleteTeacherFromKlassById = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    const id = req.params.id as string;
    const teacher = await queryTeacherKlassById(Number(id));
    let response = res;

    if (!teacher) {
      response = res
        .status(404)
        .send({ message: `No teacher found with id ${id}` });
    } else {
      response = res
        .status(200)
        .send(
          `Success! The teacher with id ${id} has been removed from the class.`
        );
    }

    return response;
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
