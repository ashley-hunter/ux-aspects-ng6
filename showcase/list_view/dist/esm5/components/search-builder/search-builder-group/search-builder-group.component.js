/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { SearchBuilderGroupService } from './search-builder-group.service';
import { SearchBuilderService } from '../search-builder.service';
var SearchBuilderGroupComponent = /** @class */ (function () {
    function SearchBuilderGroupComponent(searchBuilderGroupService, _searchBuilderService) {
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
    SearchBuilderGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // ensure we have a name otherwise throw an error
        if (!this.id) {
            throw new Error('Search builder group must have a name attribute.');
        }
        // otherwise register the group
        this.searchBuilderGroupService.init(this.id);
    };
    /**
     * @param {?} field
     * @return {?}
     */
    SearchBuilderGroupComponent.prototype.removeField = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        this.searchBuilderGroupService.remove(field);
        this.remove.emit(field);
    };
    SearchBuilderGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-search-builder-group',
                    template: "<h4 class=\"search-group-title\">{{ header }}</h4>\n\n<main class=\"search-group-content\">\n\n  <section class=\"search-group-operator search-group-operator-{{ operator }}\" [class.hidden-operator]=\"searchBuilderGroupService.getQuery().length < 2\">{{ operator }}</section>\n\n  <section class=\"search-group-items\">\n\n    <div class=\"search-group-item-container\" *ngFor=\"let field of searchBuilderGroupService.getQuery()\">\n\n      <div class=\"search-group-item\">\n        <ng-container *uxSearchBuilderOutlet=\"field.type; context: field\"></ng-container>\n      </div>\n\n      <div class=\"search-group-item-remove\" (click)=\"removeField(field)\">\n        <span class=\"hpe-icon hpe-close\"></span>\n      </div>\n    </div>\n\n    <!-- Placeholder Item -->\n    <ng-container *ngIf=\"showPlaceholder\">\n\n      <!-- The Default Placeholder -->\n      <div class=\"search-group-item-container placeholder-item\" *ngIf=\"!placeholder\">\n        \n        <div class=\"search-group-item\">\n          <label class=\"form-label\">New field</label>\n          <div class=\"form-control\"></div>\n        </div>\n  \n      </div>\n\n      <!-- Allow a custom placeholder -->\n    <ng-container *ngTemplateOutlet=\"placeholder\"></ng-container>\n\n    </ng-container>\n\n  </section>\n\n  <section class=\"search-builder-group-add-field\" (click)=\"add.emit($event)\">\n\n    <button type=\"button\" class=\"btn btn-icon btn-circular button-accent\" aria-label=\"Add Field\">\n      <span class=\"hpe-icon hpe-add\" aria-hidden=\"true\"></span>\n    </button>\n\n    <span class=\"search-builder-group-add-field-label\">{{ addText }}</span>\n\n  </section>\n\n</main>\n\n<hr class=\"search-builder-group-divider\">\n",
                    providers: [SearchBuilderGroupService]
                },] },
    ];
    /** @nocollapse */
    SearchBuilderGroupComponent.ctorParameters = function () { return [
        { type: SearchBuilderGroupService, },
        { type: SearchBuilderService, },
    ]; };
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
    return SearchBuilderGroupComponent;
}());
export { SearchBuilderGroupComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJ1aWxkZXItZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoLWJ1aWxkZXIvc2VhcmNoLWJ1aWxkZXItZ3JvdXAvc2VhcmNoLWJ1aWxkZXItZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7SUF3RS9ELHFDQUFtQix5QkFBb0QsRUFBVSxxQkFBMkM7UUFBekcsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUFVLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBc0I7d0JBUjVFLEtBQUs7dUJBQzFCLGFBQWE7K0JBRUosS0FBSzttQkFFQyxJQUFJLFlBQVksRUFBYztzQkFDZCxJQUFJLFlBQVksRUFBMkI7S0FFNEI7Ozs7SUFFakksOENBQVE7OztJQUFSOztRQUdFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDYixNQUFNLElBQUksS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7U0FDckU7O1FBR0QsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDOUM7Ozs7O0lBRUQsaURBQVc7Ozs7SUFBWCxVQUFZLEtBQThCO1FBQ3hDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDekI7O2dCQXJGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLGtzREFvRFg7b0JBQ0MsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7aUJBQ3ZDOzs7O2dCQTVEUSx5QkFBeUI7Z0JBQ3pCLG9CQUFvQjs7O3VCQThEMUIsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSztnQ0FDTCxLQUFLO29DQUNMLEtBQUs7d0JBRUwsTUFBTTsyQkFDTixNQUFNOztzQ0F4RVQ7O1NBOERhLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNlYXJjaEJ1aWxkZXJHcm91cFNlcnZpY2UgfSBmcm9tICcuL3NlYXJjaC1idWlsZGVyLWdyb3VwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTZWFyY2hCdWlsZGVyU2VydmljZSB9IGZyb20gJy4uL3NlYXJjaC1idWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTZWFyY2hCdWlsZGVyR3JvdXBRdWVyeSB9IGZyb20gJy4uL2ludGVyZmFjZXMvZ3JvdXAtcXVlcnkuaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndXgtc2VhcmNoLWJ1aWxkZXItZ3JvdXAnLFxyXG4gIHRlbXBsYXRlOiBgPGg0IGNsYXNzPVwic2VhcmNoLWdyb3VwLXRpdGxlXCI+e3sgaGVhZGVyIH19PC9oND5cclxuXHJcbjxtYWluIGNsYXNzPVwic2VhcmNoLWdyb3VwLWNvbnRlbnRcIj5cclxuXHJcbiAgPHNlY3Rpb24gY2xhc3M9XCJzZWFyY2gtZ3JvdXAtb3BlcmF0b3Igc2VhcmNoLWdyb3VwLW9wZXJhdG9yLXt7IG9wZXJhdG9yIH19XCIgW2NsYXNzLmhpZGRlbi1vcGVyYXRvcl09XCJzZWFyY2hCdWlsZGVyR3JvdXBTZXJ2aWNlLmdldFF1ZXJ5KCkubGVuZ3RoIDwgMlwiPnt7IG9wZXJhdG9yIH19PC9zZWN0aW9uPlxyXG5cclxuICA8c2VjdGlvbiBjbGFzcz1cInNlYXJjaC1ncm91cC1pdGVtc1wiPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtZ3JvdXAtaXRlbS1jb250YWluZXJcIiAqbmdGb3I9XCJsZXQgZmllbGQgb2Ygc2VhcmNoQnVpbGRlckdyb3VwU2VydmljZS5nZXRRdWVyeSgpXCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICp1eFNlYXJjaEJ1aWxkZXJPdXRsZXQ9XCJmaWVsZC50eXBlOyBjb250ZXh0OiBmaWVsZFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtZ3JvdXAtaXRlbS1yZW1vdmVcIiAoY2xpY2spPVwicmVtb3ZlRmllbGQoZmllbGQpXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJocGUtaWNvbiBocGUtY2xvc2VcIj48L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLSBQbGFjZWhvbGRlciBJdGVtIC0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dQbGFjZWhvbGRlclwiPlxyXG5cclxuICAgICAgPCEtLSBUaGUgRGVmYXVsdCBQbGFjZWhvbGRlciAtLT5cclxuICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1ncm91cC1pdGVtLWNvbnRhaW5lciBwbGFjZWhvbGRlci1pdGVtXCIgKm5nSWY9XCIhcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWxcIj5OZXcgZmllbGQ8L2xhYmVsPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbFwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gIFxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwhLS0gQWxsb3cgYSBjdXN0b20gcGxhY2Vob2xkZXIgLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwicGxhY2Vob2xkZXJcIj48L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPC9zZWN0aW9uPlxyXG5cclxuICA8c2VjdGlvbiBjbGFzcz1cInNlYXJjaC1idWlsZGVyLWdyb3VwLWFkZC1maWVsZFwiIChjbGljayk9XCJhZGQuZW1pdCgkZXZlbnQpXCI+XHJcblxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWljb24gYnRuLWNpcmN1bGFyIGJ1dHRvbi1hY2NlbnRcIiBhcmlhLWxhYmVsPVwiQWRkIEZpZWxkXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiaHBlLWljb24gaHBlLWFkZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIDxzcGFuIGNsYXNzPVwic2VhcmNoLWJ1aWxkZXItZ3JvdXAtYWRkLWZpZWxkLWxhYmVsXCI+e3sgYWRkVGV4dCB9fTwvc3Bhbj5cclxuXHJcbiAgPC9zZWN0aW9uPlxyXG5cclxuPC9tYWluPlxyXG5cclxuPGhyIGNsYXNzPVwic2VhcmNoLWJ1aWxkZXItZ3JvdXAtZGl2aWRlclwiPlxyXG5gLFxyXG4gIHByb3ZpZGVyczogW1NlYXJjaEJ1aWxkZXJHcm91cFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hCdWlsZGVyR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG9wZXJhdG9yOiBTZWFyY2hCdWlsZGVyR3JvdXBPcGVyYXRvciA9ICdhbmQnO1xyXG4gIEBJbnB1dCgpIGFkZFRleHQ6IHN0cmluZyA9ICdBZGQgYSBmaWVsZCc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KCkgc2hvd1BsYWNlaG9sZGVyOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKSBhZGQ6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVtb3ZlOiBFdmVudEVtaXR0ZXI8U2VhcmNoQnVpbGRlckdyb3VwUXVlcnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxTZWFyY2hCdWlsZGVyR3JvdXBRdWVyeT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHNlYXJjaEJ1aWxkZXJHcm91cFNlcnZpY2U6IFNlYXJjaEJ1aWxkZXJHcm91cFNlcnZpY2UsIHByaXZhdGUgX3NlYXJjaEJ1aWxkZXJTZXJ2aWNlOiBTZWFyY2hCdWlsZGVyU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgIC8vIGVuc3VyZSB3ZSBoYXZlIGEgbmFtZSBvdGhlcndpc2UgdGhyb3cgYW4gZXJyb3JcclxuICAgIGlmICghdGhpcy5pZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlYXJjaCBidWlsZGVyIGdyb3VwIG11c3QgaGF2ZSBhIG5hbWUgYXR0cmlidXRlLicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG90aGVyd2lzZSByZWdpc3RlciB0aGUgZ3JvdXBcclxuICAgIHRoaXMuc2VhcmNoQnVpbGRlckdyb3VwU2VydmljZS5pbml0KHRoaXMuaWQpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRmllbGQoZmllbGQ6IFNlYXJjaEJ1aWxkZXJHcm91cFF1ZXJ5KTogdm9pZCB7XHJcbiAgICB0aGlzLnNlYXJjaEJ1aWxkZXJHcm91cFNlcnZpY2UucmVtb3ZlKGZpZWxkKTtcclxuICAgIHRoaXMucmVtb3ZlLmVtaXQoZmllbGQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU2VhcmNoQnVpbGRlckdyb3VwT3BlcmF0b3IgPSAnYW5kJyB8ICdvcicgfCAnbm90JztcclxuIl19