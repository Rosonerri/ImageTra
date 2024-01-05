import { Request, Response } from "express";
import companyModel from "../model/companyModel";
import staffModel from "../model/staffModel";
import mongoose from "mongoose";

export const createStaff = async (req: Request, res: Response) => {
  try {
    const { companyID } = req.params;
    const { staffName, profile, taskCompleted } = req.body;

    const company = await companyModel.findById(companyID);

    if (company) {
      const staff = await staffModel.create({
        staffName,
        images: ["TY", "KL", "OP"],
        profile,
        taskCompleted,
      });

      company.staff.push(new mongoose.Types.ObjectId(staff._id));
      company.save();

      return res.status(201).json({
        message: "staff created",
        data: staff,
      });
    } else {
      return res.status(404).json({
        message: "No compnay found",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};

export const readStaff = async (req: Request, res: Response) => {
  try {
    const { companyID } = req.params;

    const company = await companyModel.findById(companyID).populate({
      path: "staff",
      options: {
        sort: {
          createdAt: -1,
        },
      },
    });

    return res.status(200).json({
      message: "view staff",
      data: company,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};
