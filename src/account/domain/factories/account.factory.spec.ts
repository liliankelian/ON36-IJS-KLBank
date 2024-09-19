import { AccountType } from "../../../commom/types/account.type"
import { AccountFactory } from "../factories/account.factory"
import { CheckingAccount } from "../models/checking-account"
import { SavingsAccount } from "../models/savings-account"

describe('Fábrica de Contas', () => {
    test('Criação de Conta Poupança', () => {
        const accountFactory = new AccountFactory();

        const retornado = accountFactory.createAccount(AccountType.savings,3,1)

        if(retornado instanceof SavingsAccount){
            expect(retornado.ID).toBe(3);
            expect(retornado.balance).toBe(0)
            expect(retornado.clientID).toBe(1)
            expect(retornado.rate).toBe(0.2)
            expect(retornado.type).toBe(AccountType.savings)
        }

    })

    test('Criação de Conta Corrente', () => {
        const accountFactory = new AccountFactory();

        const retornado = accountFactory.createAccount(AccountType.checking,2,3)

        if(retornado instanceof CheckingAccount){
            expect(retornado.ID).toBe(2);
            expect(retornado.balance).toBe(0)
            expect(retornado.clientID).toBe(3)
            expect(retornado.limit).toBe(500)
            expect(retornado.type).toBe(AccountType.checking)
        }

    })
})