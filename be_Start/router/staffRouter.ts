import { Router } from "express";
import { createStaff, readStaff } from "../controller/staffController";

const router: Router = Router();

router.route("/create-staff/:companyID").post(createStaff);
router.route("/read-company-staff/:companyID").get(readStaff);

export default router;
