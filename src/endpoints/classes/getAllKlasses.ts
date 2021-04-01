import { Request, Response } from 'express';
import connection from '../../connection';
import Klass from '../../types/klass';

const getAllKlasses = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    const klasses = await queryAllClasses();
    const response = res.status(200).send(klasses);

    return response;
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const queryAllClasses = async (): Promise<Klass[]> => {
  const result = await connection.raw(`
    SELECT * FROM Class
    `);
  return result[0];
};

export default getAllKlasses;
