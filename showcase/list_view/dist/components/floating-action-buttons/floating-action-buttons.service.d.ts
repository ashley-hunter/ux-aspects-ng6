import { BehaviorSubject } from 'rxjs';
export declare class FloatingActionButtonsService {
    open$: BehaviorSubject<boolean>;
    open(): void;
    toggle(): void;
    close(): void;
}
