import { Injectable } from '@nestjs/common'
import * as fs from 'fs'
import * as path from 'path'
import { CheckingAccount } from '../entities/checking-account'

@Injectable()
export class CheckingAccountRepository{
    private readonly filePath = path.resolve('src/_data/checking-account.json');

    public readCheckingAccount(): CheckingAccount[]{
        const data = fs.readFileSync(this.filePath,'utf8')
        return JSON.parse(data) as CheckingAccount[]
    }

    public writeCheckingAccount(checkings:CheckingAccount[]):void{
        fs.writeFileSync(this.filePath, JSON.stringify(checkings, null, 2), 'utf8')
    }
}