import { BaseAppEntity } from 'src/shared/utils/app-base.entity';
export declare class ShortUrl extends BaseAppEntity {
    id: number;
    shortCode: string;
    redirectUrl: string;
}
