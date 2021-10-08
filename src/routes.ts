import { request, response, Router } from "express";
import { CreateAnnotationController } from "./controllers/CreateAnnotationController";
import { CreateUpdateController } from "./controllers/CreateUpdateController";
import { ListAnnotationController } from "./controllers/ListAnnotationController"


const router = Router();

const createAnnotationController = new CreateAnnotationController();
const createUpdateController = new CreateUpdateController();
const listAnnotationController = new ListAnnotationController();

router.post("/annotations", createAnnotationController.handle);
router.put("/alteration/:id", createUpdateController.handle);

router.get("/annotations/list", listAnnotationController.handle);

export { router };