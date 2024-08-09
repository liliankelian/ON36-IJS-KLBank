import { Transaction } from './transaction';

describe('Transaction', () => {
  it('should be defined', () => {
    expect(new Transaction(10,1,200,'credit',new Date())).toBeDefined();
  });
});
