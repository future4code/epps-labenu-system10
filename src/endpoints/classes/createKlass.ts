import { Request, Response } from 'express';
import connection from '../../connection';
import Klass, { KlassModules, KlassType } from '../../types/klass';

const createKlass = async (req: Request, res: Response): Promise<Response> => {
  try {
    const klassModule: KlassModules | undefined = req.body.module;
    const klassId = req.body.id;
    const klassType: KlassType = req.body.type;

    if (Number(klassModule) < 0 || Number(klassModule) > 7) {
      throw new Error(
        `Class module needs to be between 1 and 7. Current value: ${
          klassModule as undefined
        }`
      );
    }

    const klass: Klass = {
      id: klassId,
      name:
        klassType === 'noturna'
          ? req.body.name + '-na-night'
          : (req.body.name as string),
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      module: klassModule as KlassModules,
      type: klassType as KlassType,
    };

    await insertKlass(klass);

    const response = res.status(201).send({ message: 'Success!', klass });

    return response;
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
      type: data.type,
    })
    .into('Class');

  return result[0];
};

export default createKlass;
