import { Request, Response } from 'express';
import connection from '../../connection';
import Klass from '../../types/klass';

const createKlass = async (req: Request, res: Response): Promise<void> => {
  try {
    const klassId = req.body.id;
    const klass: Klass = {
      id: klassId,
      name: req.body.name,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      module: req.body.module,
    };

    await insertKlass(klass);

    res.status(201).send({ message: 'OK', klass });
  } catch (err) {
    res.status(400).send({ message: err.message });
    throw new Error(err.message);
  }
};

const insertKlass = async (data: Klass): Promise<Klass> => {
  const result: Klass[] = await connection
    .insert({
      id: data.id,
      name: data.name,
      start_date: data.start_date,
      end_date: data.end_date,
      module: data.module,
    })
    .into('Class');

  return result[0];
};

export default createKlass;
