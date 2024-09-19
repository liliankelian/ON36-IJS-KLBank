import { Injectable } from '@nestjs/common'
import * as fs from 'fs'
import * as path from 'path'
import { Account } from '../entities/account';

@Injectable()
export class InFileAccountRepository{
    private readonly filePath = path.resolve('src/_data/account.json');

    public readAccount(): Account[]{
        const data = fs.readFileSync(this.filePath,'utf8')
        return JSON.parse(data) as Account[]
    }

    public writeAccount(checkings:Account[]):void{
        fs.writeFileSync(this.filePath, JSON.stringify(checkings, null, 2), 'utf8')
    }
}