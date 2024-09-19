import { ClientFisical } from 'src/client-fisical/client-fisical';
export declare class ClientFisicalRepository {
    private readonly filePath;
    readClientFisical(): ClientFisical[];
    writeClientFisical(savings: ClientFisical[]): void;
}
