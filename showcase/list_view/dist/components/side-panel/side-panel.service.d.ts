import { BehaviorSubject } from 'rxjs';
export declare class SidePanelService {
    open$: BehaviorSubject<boolean>;
    open(): void;
    close(): void;
}
