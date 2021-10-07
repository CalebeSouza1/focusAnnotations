import { getCustomRepository } from "typeorm"
import { AnnotationsRepositories } from "../repositories/AnnotationsRepositories"


class ListUser{

    async execute(id: string, data: any) {
        const annotationsRepositories = getCustomRepository(AnnotationsRepositories);

        const annotations = await annotationsRepositories.find()

        return annotations
    }
}


export {ListUser}
