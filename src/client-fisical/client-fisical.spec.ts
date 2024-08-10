import { Fisical } from '../person/fisical';
import { ClientFisical } from './client-fisical';

describe('ClientFisical', () => {
  it('should be defined', () => {
    expect(new ClientFisical(1,1,[],new Fisical('1111','1111',new Date(),'Andre Kelian','andre@teste.com','Avenida Brasil','11 2222'))).toBeDefined();
  });
});
