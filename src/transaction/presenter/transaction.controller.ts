import { Body, Controller, Get, ParseIntPipe, Post } from '@nestjs/common';
import { TransactionType } from '../../commom/types/transaction.type';
import { TransactionService } from '../application/transaction.service';
import { Transaction } from './transaction';

@Controller('transaction')
export class TransactionController {
    constructor(private readonly transactionsService: TransactionService){}
    
    @Post()
    create(
        @Body('accountID', ParseIntPipe) accountID : number, 
        @Body('amount', ParseIntPipe) amount: number,
        @Body('type') type: TransactionType
    ): Transaction
        {
            return this.transactionsService.create(accountID, amount, type )
        }

    @Get()
    findAll():Transaction[]{
        return this.transactionsService.findAll();
    }


}
