import { SavingsAccount } from './savings-account';

 describe('SavingsAccount', () => {
   it('should be defined', () => {
     expect(new SavingsAccount(2,30,0.5)).toBeDefined();
   });
});
