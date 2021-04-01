import { Request, Response } from 'express';
import connection from '../../connection';

const changeStudentKlass = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    const studentId = Number(req.params.id);
    const classId = Number(req.body.class_id);

    await updateStudentKlass(studentId, classId);

    const response = res
      .status(200)
      .send({ message: 'Success!', classId: classId });

    return response;
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const updateStudentKlass = async (
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

export default changeStudentKlass;
