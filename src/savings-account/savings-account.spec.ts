import { SavingsAccount } from './savings-account';

 describe('SavingsAccount', () => {
   it('should be defined', () => {
     expect(new SavingsAccount(1,100,1,1)).toBeDefined();
   });
});
