import { Account } from "../../domain/models/account";

export abstract class AccountRepository {
    abstract create(account: Account): Promise<Account>;
    abstract modify(account: Account): Promise<Account>;
    abstract close(AccountId: string): Promise<Account>;
    abstract readAccount(): Account[];
    abstract writeAccount(accounts: Account[]): Promise<Account[]>;
  }