import { Body, Controller, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { SavingsAccountService } from './savings-account.service';
import { SavingsAccount } from './savings-account';

@Controller('savings-account')
export class SavingsAccountController {
    constructor (private readonly savingsService: SavingsAccountService){}

    @Post()
    create( 
        @Body('clientID', ParseIntPipe) clientID: number, 
        @Body('balance', ParseIntPipe) balance : number, 
        @Body('rate') rate :number,
        @Body('isManager',ParseBoolPipe) isManager: boolean
    ): SavingsAccount{
        return this.savingsService.create(clientID, balance, rate, isManager)
    }

    @Get(':id')
    findById(@Param('id') id:ParseIntPipe): SavingsAccount {
        return this.savingsService.findById(Number(id));
    }

    @Get()
    findAll(){
        return this.savingsService.findAll();
    }

    @Patch(':id/balance')
    updateBalance(@Param('id') id: ParseIntPipe, @Body('balance') balance: ParseIntPipe): SavingsAccount{
        return this.savingsService.updateBalance(Number(id),Number(balance))
    }

    @Delete(':id')
    delete(@Param('id') id: ParseIntPipe): void {
        return this.savingsService.remove(Number(id))
    }

}
