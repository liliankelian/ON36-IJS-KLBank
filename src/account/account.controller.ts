import { Body, Controller, ParseBoolPipe, ParseIntPipe, Post } from '@nestjs/common';
import { Account } from './account';
import { AccountService } from './account.service';
import { AccountType } from './account.type';

@Controller('account')
export class AccountController {

    constructor(private readonly accountService: AccountService){}

    @Post()
    create( 
        @Body('type') type : AccountType,
        @Body('clientID', ParseIntPipe) clientID: number, 
        @Body('balance', ParseIntPipe) balance : number, 
        @Body('isManager',ParseBoolPipe) isManager: boolean,
        @Body('rate') rate? :number,
        @Body('limit') limit? : number
        
    ): Account{
        return this.accountService.createAccount(type, clientID, balance, isManager, rate, limit)
    }
}
