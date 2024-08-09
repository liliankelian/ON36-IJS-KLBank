import { Injectable } from '@nestjs/common';
import * as fs from 'fs'
import * as path from 'path'
import { Transaction } from 'src/transaction/transaction';

@Injectable()
export class TransactionRepository {

    private readonly filePath = path.resolve('src/_data/transaction.json');

    public readTransaction(): Transaction[] {
        const data = fs.readFileSync(this.filePath,'utf8');
        return JSON.parse(data) as Transaction[]
    }

    public writeTransaction(savings:Transaction[]): void{
        fs.writeFileSync(this.filePath, JSON.stringify(savings, null, 2), 'utf8');
    }
 
}