import { BehaviorSubject } from 'rxjs';
export declare class TypeaheadService {
    open$: BehaviorSubject<boolean>;
    highlightedElement$: BehaviorSubject<HTMLElement>;
}
