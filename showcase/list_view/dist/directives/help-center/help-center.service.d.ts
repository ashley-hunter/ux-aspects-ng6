import { BehaviorSubject } from 'rxjs';
export declare class HelpCenterService {
    items: BehaviorSubject<HelpCenterItem[]>;
    registerItem(item: HelpCenterItem): void;
    unregisterItem(item: HelpCenterItem): void;
}
export interface HelpCenterItem {
    icon?: string;
    title: string;
    select?: () => void;
}
