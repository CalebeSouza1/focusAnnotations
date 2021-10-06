import { request, response, Router } from "express";
import { CreateAnnotationController } from "./controllers/CreateAnnotationController";


const router = Router();

const createAnnotationController = new CreateAnnotationController();


router.post("/annotations", createAnnotationController.handle);

router.put("/alteration", createAnnotationController.handle)

router.get("/list", createAnnotationController.handle)

export { router };