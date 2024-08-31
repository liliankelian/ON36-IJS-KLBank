import { AccountRepository } from '../_repositories/account.repository';
import { AccountService } from './account.service';
import { AccountFactory } from './account.factory';
import { AccountType } from './account.type';
import { SavingsAccount } from '../savings-account/savings-account';

describe('AccountService', () => {
  let service: AccountService;

  test('Criar uma conta poupança pelo serviço', () => {
    const accountRepository = new AccountRepository()
    const accountFactory = new AccountFactory()

    const accountService = new AccountService(accountRepository,accountFactory)

    const resultado = accountService.createAccount(AccountType.savings,10,true)

    const esperado = new SavingsAccount(6,0,10,0.2)

    expect(resultado).toStrictEqual(esperado)

  })
  
});
