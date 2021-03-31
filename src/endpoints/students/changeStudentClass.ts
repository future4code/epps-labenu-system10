import { Request, Response } from 'express';
import connection from '../../connection';

const changeStudentClass = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const studentId = Number(req.params.id);
    const classId = Number(req.body.class_id);

    await updateStudentClass(studentId, classId);

    const response = res
      .status(200)
      .send({ message: 'Success!', classId: classId });

    return response;
  } catch (err) {
    res.status(400).send({ message: err.message });
    throw new Error(err.message);
  }
};

const updateStudentClass = async (
  studentId: number,
  classId: number
): Promise<number> => {
  const result = await connection('Student')
    .update({
      id: studentId,
      class_id: classId,
    })
    .where('id', studentId);

  return result;
};

export default changeStudentClass;
