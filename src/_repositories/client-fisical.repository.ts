import * as fs from 'fs'
import * as path from 'path'
import { ClientFisical } from 'src/client-fisical/client-fisical';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientFisicalRepository {

    private readonly filePath = path.resolve('src/_data/client-fisical.json');

    public readClientFisical(): ClientFisical[] {
        const data = fs.readFileSync(this.filePath,'utf8');
        return JSON.parse(data) as ClientFisical[]
    }

    public writeClientFisical(savings:ClientFisical[]): void{
        fs.writeFileSync(this.filePath, JSON.stringify(savings, null, 2), 'utf8');
    }
 
}