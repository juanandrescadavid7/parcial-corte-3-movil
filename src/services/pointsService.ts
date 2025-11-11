import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    private users: User[] = [
        { id: uuidv4(), username: 'admin', password: 'admin123', firstName: 'CIONA', lastName: 'Admin', email: 'admin@ciona.local', role: 'admin', status: 'ACTIVE', createdAt: new Date().toISOString() },
        { id: uuidv4(), username: 'cruz', password: '123456', firstName: 'Juan', lastName: 'Cruz', email: 'cruz@ciona.local', role: 'client', status: 'ACTIVE', createdAt: new Date().toISOString() },
        { id: uuidv4(), username: 'osorio', password: '123456', firstName: 'Sebastian', lastName: 'Osorio', email: 'osorio@ciona.local', role: 'client', status: 'ACTIVE', createdAt: new Date().toISOString() },
    ];
    findByUsername(username: string){ return this.users.find(u=>u.username.toLowerCase()===username.toLowerCase()); }
    getAll(){ return this.users; }
}


//realizpo la muestra del CRUD