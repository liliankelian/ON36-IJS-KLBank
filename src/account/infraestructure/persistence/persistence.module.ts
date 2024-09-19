import { Module } from '@nestjs/common';
import { InFileAccountRepository } from './repositories/account.repository';
import { AccountRepository } from '../../application/ports/account.repository';

@Module({
  imports: [],
  providers: [
    {
      provide: AccountRepository,
      useClass: InFileAccountRepository, // É aqui que nós vinculamos uma porta e a um adaptador (a ideia aqui é dizer para o NestJS usar o InMemoryAlunoRepository sempre que alguém pedir por um AlunoRepository - isso facilita muito a troca de adaptadores, vc não precisa mudar nada no resto do código, só aqui).
    },
  ],
  exports: [AccountRepository],
})
export class InFileAlunoPersistenceModule {}
