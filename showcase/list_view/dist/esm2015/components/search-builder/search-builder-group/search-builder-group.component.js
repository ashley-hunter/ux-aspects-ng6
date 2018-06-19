/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { SearchBuilderGroupService } from './search-builder-group.service';
import { SearchBuilderService } from '../search-builder.service';
export class SearchBuilderGroupComponent {
    /**
     * @param {?} searchBuilderGroupService
     * @param {?} _searchBuilderService
     */
    constructor(searchBuilderGroupService, _searchBuilderService) {
        this.searchBuilderGroupService = searchBuilderGroupService;
        this._searchBuilderService = _searchBuilderService;
        this.operator = 'and';
        this.addText = 'Add a field';
        this.showPlaceholder = false;
        this.add = new EventEmitter();
        this.remove = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // ensure we have a name otherwise throw an error
        if (!this.id) {
            throw new Error('Search builder group must have a name attribute.');
        }
        // otherwise register the group
        this.searchBuilderGroupService.init(this.id);
    }
    /**
     * @param {?} field
     * @return {?}
     */
    removeField(field) {
        this.searchBuilderGroupService.remove(field);
        this.remove.emit(field);
    }
}
SearchBuilderGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-search-builder-group',
                template: `<h4 class="search-group-title">{{ header }}</h4>

<main class="search-group-content">

  <section class="search-group-operator search-group-operator-{{ operator }}" [class.hidden-operator]="searchBuilderGroupService.getQuery().length < 2">{{ operator }}</section>

  <section class="search-group-items">

    <div class="search-group-item-container" *ngFor="let field of searchBuilderGroupService.getQuery()">

      <div class="search-group-item">
        <ng-container *uxSearchBuilderOutlet="field.type; context: field"></ng-container>
      </div>

      <div class="search-group-item-remove" (click)="removeField(field)">
        <span class="hpe-icon hpe-close"></span>
      </div>
    </div>

    <!-- Placeholder Item -->
    <ng-container *ngIf="showPlaceholder">

      <!-- The Default Placeholder -->
      <div class="search-group-item-container placeholder-item" *ngIf="!placeholder">
        
        <div class="search-group-item">
          <label class="form-label">New field</label>
          <div class="form-control"></div>
        </div>
  
      </div>

      <!-- Allow a custom placeholder -->
    <ng-container *ngTemplateOutlet="placeholder"></ng-container>

    </ng-container>

  </section>

  <section class="search-builder-group-add-field" (click)="add.emit($event)">

    <button type="button" class="btn btn-icon btn-circular button-accent" aria-label="Add Field">
      <span class="hpe-icon hpe-add" aria-hidden="true"></span>
    </button>

    <span class="search-builder-group-add-field-label">{{ addText }}</span>

  </section>

</main>

<hr class="search-builder-group-divider">
`,
                providers: [SearchBuilderGroupService]
            },] },
];
/** @nocollapse */
SearchBuilderGroupComponent.ctorParameters = () => [
    { type: SearchBuilderGroupService, },
    { type: SearchBuilderService, },
];
SearchBuilderGroupComponent.propDecorators = {
    "id": [{ type: Input },],
    "header": [{ type: Input },],
    "operator": [{ type: Input },],
    "addText": [{ type: Input },],
    "placeholder": [{ type: Input },],
    "showPlaceholder": [{ type: Input },],
    "add": [{ type: Output },],
    "remove": [{ type: Output },],
};
function SearchBuilderGroupComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SearchBuilderGroupComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SearchBuilderGroupComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SearchBuilderGroupComponent.propDecorators;
    /** @type {?} */
    SearchBuilderGroupComponent.prototype.id;
    /** @type {?} */
    SearchBuilderGroupComponent.prototype.header;
    /** @type {?} */
    SearchBuilderGroupComponent.prototype.operator;
    /** @type {?} */
    SearchBuilderGroupComponent.prototype.addText;
    /** @type {?} */
    SearchBuilderGroupComponent.prototype.placeholder;
    /** @type {?} */
    SearchBuilderGroupComponent.prototype.showPlaceholder;
    /** @type {?} */
    SearchBuilderGroupComponent.prototype.add;
    /** @type {?} */
    SearchBuilderGroupComponent.prototype.remove;
    /** @type {?} */
    SearchBuilderGroupComponent.prototype.searchBuilderGroupService;
    /** @type {?} */
    SearchBuilderGroupComponent.prototype._searchBuilderService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJ1aWxkZXItZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoLWJ1aWxkZXIvc2VhcmNoLWJ1aWxkZXItZ3JvdXAvc2VhcmNoLWJ1aWxkZXItZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQTREakUsTUFBTTs7Ozs7SUFZSixZQUFtQix5QkFBb0QsRUFBVSxxQkFBMkM7UUFBekcsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUFVLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBc0I7d0JBUjVFLEtBQUs7dUJBQzFCLGFBQWE7K0JBRUosS0FBSzttQkFFQyxJQUFJLFlBQVksRUFBYztzQkFDZCxJQUFJLFlBQVksRUFBMkI7S0FFNEI7Ozs7SUFFakksUUFBUTs7UUFHTixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2IsTUFBTSxJQUFJLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO1NBQ3JFOztRQUdELElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQzlDOzs7OztJQUVELFdBQVcsQ0FBQyxLQUE4QjtRQUN4QyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3pCOzs7WUFyRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW9EWDtnQkFDQyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzthQUN2Qzs7OztZQTVEUSx5QkFBeUI7WUFDekIsb0JBQW9COzs7bUJBOEQxQixLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7Z0NBQ0wsS0FBSztvQkFFTCxNQUFNO3VCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTZWFyY2hCdWlsZGVyR3JvdXBTZXJ2aWNlIH0gZnJvbSAnLi9zZWFyY2gtYnVpbGRlci1ncm91cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2VhcmNoQnVpbGRlclNlcnZpY2UgfSBmcm9tICcuLi9zZWFyY2gtYnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2VhcmNoQnVpbGRlckdyb3VwUXVlcnkgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2dyb3VwLXF1ZXJ5LmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3V4LXNlYXJjaC1idWlsZGVyLWdyb3VwJyxcclxuICB0ZW1wbGF0ZTogYDxoNCBjbGFzcz1cInNlYXJjaC1ncm91cC10aXRsZVwiPnt7IGhlYWRlciB9fTwvaDQ+XHJcblxyXG48bWFpbiBjbGFzcz1cInNlYXJjaC1ncm91cC1jb250ZW50XCI+XHJcblxyXG4gIDxzZWN0aW9uIGNsYXNzPVwic2VhcmNoLWdyb3VwLW9wZXJhdG9yIHNlYXJjaC1ncm91cC1vcGVyYXRvci17eyBvcGVyYXRvciB9fVwiIFtjbGFzcy5oaWRkZW4tb3BlcmF0b3JdPVwic2VhcmNoQnVpbGRlckdyb3VwU2VydmljZS5nZXRRdWVyeSgpLmxlbmd0aCA8IDJcIj57eyBvcGVyYXRvciB9fTwvc2VjdGlvbj5cclxuXHJcbiAgPHNlY3Rpb24gY2xhc3M9XCJzZWFyY2gtZ3JvdXAtaXRlbXNcIj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWdyb3VwLWl0ZW0tY29udGFpbmVyXCIgKm5nRm9yPVwibGV0IGZpZWxkIG9mIHNlYXJjaEJ1aWxkZXJHcm91cFNlcnZpY2UuZ2V0UXVlcnkoKVwiPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqdXhTZWFyY2hCdWlsZGVyT3V0bGV0PVwiZmllbGQudHlwZTsgY29udGV4dDogZmllbGRcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWdyb3VwLWl0ZW0tcmVtb3ZlXCIgKGNsaWNrKT1cInJlbW92ZUZpZWxkKGZpZWxkKVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaHBlLWljb24gaHBlLWNsb3NlXCI+PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS0gUGxhY2Vob2xkZXIgSXRlbSAtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93UGxhY2Vob2xkZXJcIj5cclxuXHJcbiAgICAgIDwhLS0gVGhlIERlZmF1bHQgUGxhY2Vob2xkZXIgLS0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtZ3JvdXAtaXRlbS1jb250YWluZXIgcGxhY2Vob2xkZXItaXRlbVwiICpuZ0lmPVwiIXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsXCI+TmV3IGZpZWxkPC9sYWJlbD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICBcclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8IS0tIEFsbG93IGEgY3VzdG9tIHBsYWNlaG9sZGVyIC0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInBsYWNlaG9sZGVyXCI+PC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDwvc2VjdGlvbj5cclxuXHJcbiAgPHNlY3Rpb24gY2xhc3M9XCJzZWFyY2gtYnVpbGRlci1ncm91cC1hZGQtZmllbGRcIiAoY2xpY2spPVwiYWRkLmVtaXQoJGV2ZW50KVwiPlxyXG5cclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1pY29uIGJ0bi1jaXJjdWxhciBidXR0b24tYWNjZW50XCIgYXJpYS1sYWJlbD1cIkFkZCBGaWVsZFwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImhwZS1pY29uIGhwZS1hZGRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICA8c3BhbiBjbGFzcz1cInNlYXJjaC1idWlsZGVyLWdyb3VwLWFkZC1maWVsZC1sYWJlbFwiPnt7IGFkZFRleHQgfX08L3NwYW4+XHJcblxyXG4gIDwvc2VjdGlvbj5cclxuXHJcbjwvbWFpbj5cclxuXHJcbjxociBjbGFzcz1cInNlYXJjaC1idWlsZGVyLWdyb3VwLWRpdmlkZXJcIj5cclxuYCxcclxuICBwcm92aWRlcnM6IFtTZWFyY2hCdWlsZGVyR3JvdXBTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQnVpbGRlckdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBvcGVyYXRvcjogU2VhcmNoQnVpbGRlckdyb3VwT3BlcmF0b3IgPSAnYW5kJztcclxuICBASW5wdXQoKSBhZGRUZXh0OiBzdHJpbmcgPSAnQWRkIGEgZmllbGQnO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBJbnB1dCgpIHNob3dQbGFjZWhvbGRlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgYWRkOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlbW92ZTogRXZlbnRFbWl0dGVyPFNlYXJjaEJ1aWxkZXJHcm91cFF1ZXJ5PiA9IG5ldyBFdmVudEVtaXR0ZXI8U2VhcmNoQnVpbGRlckdyb3VwUXVlcnk+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZWFyY2hCdWlsZGVyR3JvdXBTZXJ2aWNlOiBTZWFyY2hCdWlsZGVyR3JvdXBTZXJ2aWNlLCBwcml2YXRlIF9zZWFyY2hCdWlsZGVyU2VydmljZTogU2VhcmNoQnVpbGRlclNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAvLyBlbnN1cmUgd2UgaGF2ZSBhIG5hbWUgb3RoZXJ3aXNlIHRocm93IGFuIGVycm9yXHJcbiAgICBpZiAoIXRoaXMuaWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZWFyY2ggYnVpbGRlciBncm91cCBtdXN0IGhhdmUgYSBuYW1lIGF0dHJpYnV0ZS4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBvdGhlcndpc2UgcmVnaXN0ZXIgdGhlIGdyb3VwXHJcbiAgICB0aGlzLnNlYXJjaEJ1aWxkZXJHcm91cFNlcnZpY2UuaW5pdCh0aGlzLmlkKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUZpZWxkKGZpZWxkOiBTZWFyY2hCdWlsZGVyR3JvdXBRdWVyeSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWFyY2hCdWlsZGVyR3JvdXBTZXJ2aWNlLnJlbW92ZShmaWVsZCk7XHJcbiAgICB0aGlzLnJlbW92ZS5lbWl0KGZpZWxkKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNlYXJjaEJ1aWxkZXJHcm91cE9wZXJhdG9yID0gJ2FuZCcgfCAnb3InIHwgJ25vdCc7XHJcbiJdfQ==