import { Injectable } from '@nestjs/common';
import { SavingsAccount } from './savings-account.model';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class SavingsAccountsService {

    //private SavingsAccount: SavingsAccount;
    private readonly filepath = path.resolve('src/db/json/savings-accounts.json');
       
    readAccounts(): SavingsAccount[] {
        const data = fs.readFileSync(this.filepath, 'utf8');
        return JSON.parse(data) as SavingsAccount[];
    }

    writeAccounts(accounts:SavingsAccount[]): void {
        fs.writeFileSync(this.filepath, JSON.stringify(accounts,null,2 ), 'utf8'); 
    }
    

    deposit(value: number, account:SavingsAccount): SavingsAccount {
        account.balance += value;
        return account;
    };
    
    checkBalance(account:SavingsAccount): number{
        return account.balance;
    };
   
    withdraw(value: number, ID: number): SavingsAccount {
        const accounts = this.readAccounts();
        const account = accounts.find(account => account.ID === Number(ID));

        if(!account){
            console.log(`Account with id ${ID} not found`);
            return;
        }

        if(account.balance < value){
            console.log("Saldo insuficiente");
            return;
        }   

        account.balance -= value;
        return account;
    }

    transfer(value: number, IDsender: number, IDrecipient:number): SavingsAccount {
        const accounts = this.readAccounts();
        const sender = accounts.find(account => account.ID === Number(IDsender));
        const recipient = accounts.find(account => account.ID === Number(IDrecipient));

        if(!sender){
            console.log(`Account with id ${IDsender} not found`);
            return;
        }
        if(!recipient){
            console.log(`Account with id ${IDrecipient} not found`);
            return;
        }

        if(sender.balance < value){
            console.log("Saldo insuficiente");
            return;
        }   

        sender.balance -= value;
        this.deposit(value, recipient);
        return sender;
    
    }
}
