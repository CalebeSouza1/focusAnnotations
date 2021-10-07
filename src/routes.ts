import { request, response, Router } from "express";
import { CreateAnnotationController } from "./controllers/CreateAnnotationController";
import { CreateUpdateController } from "./controllers/CreateUpdateController";


const router = Router();

const createAnnotationController = new CreateAnnotationController();
const createUpdateController = new CreateUpdateController();


router.post("/annotations", createAnnotationController.handle);

router.put("/alteration/:id", createUpdateController.handle);


export { router };