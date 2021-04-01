import { Request, Response } from 'express';
import connection from '../../connection';

const changeModuleById = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    const id = Number(req.params.id);
    const module = Number(req.body.module);
    const klassId = await updateModuleById(id, module);
    let response = res;

    if (!klassId) {
      response = res
        .status(404)
        .send({ message: `No class found with id ${id}` });
    } else {
      response = res.status(200).send({
        message: `Success! The module was updated to ${module}`,
        class_id: klassId,
      });
    }

    return response;
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const updateModuleById = async (id: number, module: number) => {
  const result = await connection('Class')
    .update({ module: module })
    //"module", "=", `${module}`
    .where({ id: id });

  return result;
};

export default changeModuleById;
