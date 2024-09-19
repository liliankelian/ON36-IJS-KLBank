import { Client } from 'src/client/client';
export declare class ClientRepository {
    protected filePath: string;
    readClient(): Client[];
    writeClient(savings: Client[]): void;
}
