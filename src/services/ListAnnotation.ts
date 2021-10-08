import { getCustomRepository } from "typeorm"
import { AnnotationsRepositories } from "../repositories/AnnotationsRepositories"


class ListAnnotation{

    async execute (status:boolean) {
        const annotationsRepositories = getCustomRepository(AnnotationsRepositories);
         console.log('Services', status)
        const annotations = await annotationsRepositories.find({status});

        return annotations
    }
}


export {ListAnnotation}
