import { getCustomRepository} from "typeorm"
import { AnnotationsRepositories } from "../repositories/AnnotationsRepositories"

interface IUserRequest {
    description?: string;
    propose?: string;
    day?: Date;
    period?: string;
    status?: boolean;
}

class UpdateService {
    
    async execute( id: string, data:IUserRequest) {

        const annotationsRepository = getCustomRepository(AnnotationsRepositories);

       await annotationsRepository.update(id, data);
       const newAnnotations = await annotationsRepository.findOne(id)
        return newAnnotations; 
       

    }
}

export { UpdateService }