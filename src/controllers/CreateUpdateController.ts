import { Request, Response } from "express";
import { UpdateService } from "../services/UpdateService";



class CreateUpdateController {

    async handle(request: Request, response: Response){
        const {id} = request.params;
        const {description, propose, day, period, status} = request.body;


        const updateService = new UpdateService();

        const compliment = await updateService.execute(id, {description, propose, day, period, status})

        return response.json(compliment);
    }
}


export{CreateUpdateController}