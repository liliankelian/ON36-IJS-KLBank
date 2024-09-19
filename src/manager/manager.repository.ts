import { Injectable } from '@nestjs/common';
import * as fs from 'fs'
import * as path from 'path'
import { Manager } from 'src/manager/manager';

@Injectable()
export class ManagerRepository {

    private readonly filePath = path.resolve('src/_data/manager.json');

    public readManager(): Manager[] {
        const data = fs.readFileSync(this.filePath,'utf8');
        return JSON.parse(data) as Manager[]
    }

    public writeManager(savings:Manager[]): void{
        fs.writeFileSync(this.filePath, JSON.stringify(savings, null, 2), 'utf8');
    }
 
}