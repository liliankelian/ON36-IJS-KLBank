import * as fs from 'fs'
import * as path from 'path'
import { SavingsAccount } from '../entities/savings-account';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SavingsAccountRepository {

    private readonly filePath = path.resolve('src/_data/savings-account.json');

    public readSavingsAccount(): SavingsAccount[] {
        const data = fs.readFileSync(this.filePath,'utf8');
        return JSON.parse(data) as SavingsAccount[]
    }

    public writeSavingsAccount(savings:SavingsAccount[]): void{
        fs.writeFileSync(this.filePath, JSON.stringify(savings, null, 2), 'utf8');
    }
 
}