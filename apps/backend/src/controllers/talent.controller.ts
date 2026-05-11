import { Request, Response, NextFunction } from "express";
import { submitTalent, listTalents, deleteTalent } from "../services/talent.service";

export const submit = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const talent = await submitTalent(req.body);
    return res.status(201).json({ status: "success", data: talent });
  } catch (error) {
    return next(error);
  }
};

export const list = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const talents = await listTalents();
    return res.status(200).json({ status: "success", data: talents });
  } catch (error) {
    return next(error);
  }
};

export const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await deleteTalent(req.params.id);
    return res.status(200).json({ status: "success", message: "Talent profile deleted" });
  } catch (error) {
    return next(error);
  }
};
