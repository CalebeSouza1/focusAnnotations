import { EntityRepository, Repository } from "typeorm";
import {Annotation} from "../entities/Annotation"

@EntityRepository(Annotation) 
class AnnotationsRepositories extends Repository<Annotation> {

}

export {AnnotationsRepositories}
