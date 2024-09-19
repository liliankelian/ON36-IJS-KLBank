import { Injectable } from '@nestjs/common';
import * as fs from 'fs'
import * as path from 'path'
import { Client } from 'src/client/client';

@Injectable()
export class ClientRepository {

    protected filePath = path.resolve('src/_data/client.json');

    public readClient(): Client[] {
        const data = fs.readFileSync(this.filePath,'utf8');
        return JSON.parse(data) as Client[]
    }

    public writeClient(savings:Client[]): void{
        fs.writeFileSync(this.filePath, JSON.stringify(savings, null, 2), 'utf8');
    }
 
}