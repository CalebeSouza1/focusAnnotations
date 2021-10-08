import { Request, Response} from "express";
import {ListAnnotation } from "../services/ListAnnotation"

class ListAnnotationController{
    async handle(request: Request, response: Response) {
    const {status} = request.body;
    
        const listAnnotation = new ListAnnotation();
        const compliments = await listAnnotation.execute(status);

        return response.json(compliments);
    }
}

export{ ListAnnotationController }