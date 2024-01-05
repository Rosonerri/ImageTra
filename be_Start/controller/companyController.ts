import { Request, Response } from "express";
import companyModel from "../model/companyModel";

export const createCompany = async (req: Request, res: Response) => {
  try {
    const { companyName, logo } = req.body;

    const company = await companyModel.create({
      companyName,
      logo,
    });

    return res.status(201).json({
      message: "company created",
      data: company,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};

export const readCompanies = async (req: Request, res: Response) => {
  try {
    const company = await companyModel.find();

    return res.status(201).json({
      message: "companies Found",
      data: company,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};

export const readCompany = async (req: Request, res: Response) => {
  try {
    const { companyID } = req.params;
    const company = await companyModel.findById(companyID);

    return res.status(201).json({
      message: "company created",
      data: company,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};
