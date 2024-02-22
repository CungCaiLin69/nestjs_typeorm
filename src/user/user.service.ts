import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(private dbService: PrismaService) {}

    async findAll(){
        return await this.dbService.user.findMany();
    }

    async createData(data: CreateUserDto){
        return await this.dbService.user.create({
            data
        })
    }

    async updateData(id: number, data: any){
        return await this.dbService.user.update({
            data,
            where: {
                id
            }
        })
    }

    async deleteUser(id: number){
        return await this.dbService.user.delete({
            where: {
                id
            }
        })
    }
}
