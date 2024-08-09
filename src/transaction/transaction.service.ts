import { Injectable, NotFoundException } from '@nestjs/common';
import { TransactionRepository } from 'src/_repositories/transaction.repository';
import { Transaction } from './transaction';
import { TransactionType } from './transaction.type';
import { SavingsAccountService } from 'src/savings-account/savings-account.service';

@Injectable()
export class TransactionService {
    private idCounter: number;

    constructor(
        private readonly transactionRepository: TransactionRepository,  
        private readonly accountService: SavingsAccountService
    ){
        const transactions = this.transactionRepository.readTransaction()
        this.idCounter = transactions.length > 0 ? transactions[transactions.length -1].ID + 1 : 1
    }

    create(accountID:number, amount:number, type: TransactionType): Transaction{
        const account = this.accountService.findById(accountID);

        if(!account){
            throw new NotFoundException(`Conta não encontrado ${accountID}`);
        }

        const newTransaction = {
            ID: this.idCounter++,
            accountID,
            amount,
            type,
            date:new Date()
        }

        const transactions = this.transactionRepository.readTransaction()
        transactions.push(newTransaction);
        this.transactionRepository.writeTransaction(transactions);
        return newTransaction
    }

    findById(id:number): Transaction{
        const transactions = this.transactionRepository.readTransaction();
        const transaction = transactions.find(transaction => transaction.ID === id);

        if(!transaction){
            console.log(`Poupança com o ID ${id} não encontrado`)
        }

        return transaction;
    }

    findAll():Transaction[]{
        return this.transactionRepository.readTransaction();
    }

    findByAccountID(accountID:number):Transaction[]{
        const account = this.accountService.findById(accountID);

        if(!account){
            throw new NotFoundException(`Conta não encontrado ${accountID}`);
        }

        const transactions = this.transactionRepository.readTransaction();
        const transactionsFilter = transactions.filter(transaction => transaction.accountID === accountID);

        return transactionsFilter;
    }

    updateAmount(id:number, amount: number): Transaction{
        const transactions = this.transactionRepository.readTransaction();
        const transaction = transactions.find(transaction => transaction.ID === id);
        
        if(!transaction){
            throw new NotFoundException(`Conta não encontrado ${id}`);
        }

        transaction.amount = amount;
        this.transactionRepository.writeTransaction(transactions);
        return transaction

    }

    remove(id:number):void{
        const transactions = this.transactionRepository.readTransaction();
        const transactionIndex = transactions.findIndex(transaction => transaction.ID === id);

        transactions.splice(transactionIndex, 1)

        this.transactionRepository.writeTransaction(transactions)
    }
}
