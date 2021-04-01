import { Request, Response } from 'express';
import connection from '../../connection';

const changeTeacherKlass = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const teacherId = Number(req.params.id);
    const klassId = Number(req.body.class_id);

    await updateTeacherKlass(teacherId, klassId);
    const response = res.status(200).send({
      message: 'Modificado com sucesso!',
      teacher_id: teacherId,
      class_id: klassId,
    });
    return response;
  } catch (error) {
    res.status(400).send('error');
    throw new Error(error.message);
  }
};

const updateTeacherKlass = async (
  teacherId: number,
  klassId: number
): Promise<number> => {
  const result: number = await connection('Teacher')
    .update({ class_id: klassId })
    .where({ id: teacherId });

  return result;
};

export default changeTeacherKlass;
