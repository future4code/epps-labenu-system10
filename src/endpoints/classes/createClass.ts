import { Request, Response } from 'express';
import connection from '../../connection';

const createClass = async (): Promise<void> => {
  try {
    const data = "it's working";

    await insertClass(data);
  } catch (err) {
    // res.status(400).send({ message: err.message });
    throw new Error(err.message);
  }
};

const insertClass = async (data: string): Promise<string> => {
  const result: string[] = await [data];
  return result[0];
};

export default createClass;
