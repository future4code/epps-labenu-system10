import { Request, Response } from 'express';
import connection from '../../connection';
import Klass from '../../types/klass';

export const getAllKlasses = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const klasses = await queryAllClasses();
    res.status(200).send(klasses);
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
