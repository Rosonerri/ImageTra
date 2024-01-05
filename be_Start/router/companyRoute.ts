import { Router } from "express";
import {
  createCompany,
  readCompanies,
  readCompany,
} from "../controller/companyController";

const router: Router = Router();

router.route("/create-company").post(createCompany);
router.route("/read-company").get(readCompanies);
router.route("/read-one-company/:companyID").get(readCompany);

export default router;
