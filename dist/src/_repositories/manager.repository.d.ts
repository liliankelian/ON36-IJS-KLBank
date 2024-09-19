import { Manager } from 'src/manager/manager';
export declare class ManagerRepository {
    private readonly filePath;
    readManager(): Manager[];
    writeManager(savings: Manager[]): void;
}
