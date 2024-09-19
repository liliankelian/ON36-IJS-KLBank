import { Body, Controller, ParseBoolPipe, ParseIntPipe, Post } from '@nestjs/common';
import { Account } from './account';
import { AccountService } from '../application/account.service';
import { AccountType } from '../../commom/types/account.type';

@Controller('account')
export class AccountController {

    constructor(private readonly accountService: AccountService){}

    @Post()
    create( 
        @Body('type') type : AccountType,
        @Body('clientID', ParseIntPipe) clientID: number,  
        @Body('isManager',ParseBoolPipe) isManager: boolean
        
    ): Account{
        return this.accountService.createAccount(type, clientID, isManager)
    }
}
