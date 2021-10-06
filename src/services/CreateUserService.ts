import { getCustomRepository} from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest {
    id?: string;
    description: string;
    propose: string;
    day: Date;
    period: string;
    status: boolean;
    
}


class CreateUserService {
    
    async execute(data:IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        const user = usersRepository.create(data);
        console.log("service", user);
        await usersRepository.save(user);

        return user; 
       

    }
}

export { CreateUserService }