import { Request, Response} from "express"
import { CreateUserService } from "../services/CreateUserService";


class CreateAnnotationController{

    async handle(request:Request, response: Response) {
        const {description, propose, day, period, status} = request.body;

        const createUserService = new CreateUserService()
        const user = await createUserService.execute({ description, propose, day, period, status});
        console.log("controller", user);
        
        response.status(201).json(user);
    }
}



export{ CreateAnnotationController }
