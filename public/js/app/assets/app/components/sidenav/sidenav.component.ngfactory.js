/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from './sidenav.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '../../../../node_modules/@angular/material/typings/index.ngfactory';
import * as i3 from '@angular/material';
import * as i4 from '@angular/router';
import * as i5 from '@angular/common';
import * as i6 from '@angular/platform-browser';
import * as i7 from '@angular/flex-layout/flexbox/api/class';
import * as i8 from '@angular/flex-layout/media-query/media-monitor';
import * as i9 from './sidenav.component';
import * as i10 from '../../services/user.service';
var styles_SidenavComponent = [i0.styles];
export var RenderType_SidenavComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_SidenavComponent, data: {} });
function View_SidenavComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 10, 'button', [['class',
                'mat-menu-item'], ['md-menu-item', ''], ['role', 'menuitem']], [[1, 'tabindex', 0],
            [1, 'aria-disabled', 0], [1, 'disabled', 0]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 1)._checkDisabled($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                var pd_1 = (_co.openLoginForm() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i2.View_MdMenuItem_0, i2.RenderType_MdMenuItem)), i1.ɵdid(49152, [[12, 4]], 0, i3.MdMenuItem, [i1.ElementRef], null, null), (_l()(), i1.ɵted(0, ['\n            '])),
        (_l()(), i1.ɵeld(0, null, 0, 3, 'md-icon', [['class', 'mat-icon'], ['role',
                'img']], null, null, null, i2.View_MdIcon_0, i2.RenderType_MdIcon)),
        i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE],
            i1.ElementRef], null, null), i1.ɵdid(638976, null, 0, i3.MdIcon, [i1.Renderer2, i1.ElementRef, i3.MdIconRegistry, [8, null]], null, null), (_l()(), i1.ɵted(0, ['account_circle'])), (_l()(),
            i1.ɵted(0, ['\n            '])), (_l()(), i1.ɵeld(0, null, 0, 1, 'span', [], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['Login'])), (_l()(), i1.ɵted(0, ['\n        ']))], function (_ck, _v) {
        _ck(_v, 5, 0);
    }, function (_ck, _v) {
        var currVal_0 = i1.ɵnov(_v, 1)._getTabIndex();
        var currVal_1 = i1.ɵnov(_v, 1).disabled.toString();
        var currVal_2 = i1.ɵnov(_v, 1)._getDisabledAttr();
        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);
    });
}
function View_SidenavComponent_2(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 11, 'a', [['class',
                'mat-menu-item'], ['md-menu-item', ''], ['role', 'menuitem'], ['routerLink', '/register']], [[1, 'tabindex', 0], [1, 'aria-disabled', 0], [1, 'disabled', 0], [1, 'target', 0], [8, 'href',
                4]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 1)._checkDisabled($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                var pd_1 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i2.View_MdMenuItem_0, i2.RenderType_MdMenuItem)), i1.ɵdid(49152, [[12, 4]], 0, i3.MdMenuItem, [i1.ElementRef], null, null), i1.ɵdid(671744, null, 0, i4.RouterLinkWithHref, [i4.Router, i4.ActivatedRoute, i5.LocationStrategy], { routerLink: [0,
                'routerLink'] }, null), (_l()(), i1.ɵted(0, ['\n            '])), (_l()(),
            i1.ɵeld(0, null, 0, 3, 'md-icon', [['class', 'mat-icon'], ['role', 'img']], null, null, null, i2.View_MdIcon_0, i2.RenderType_MdIcon)),
        i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE],
            i1.ElementRef], null, null), i1.ɵdid(638976, null, 0, i3.MdIcon, [i1.Renderer2, i1.ElementRef, i3.MdIconRegistry, [8, null]], null, null), (_l()(), i1.ɵted(0, ['account_circle'])), (_l()(),
            i1.ɵted(0, ['\n            '])), (_l()(), i1.ɵeld(0, null, 0, 1, 'span', [], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['Register'])), (_l()(), i1.ɵted(0, ['\n        ']))], function (_ck, _v) {
        var currVal_5 = '/register';
        _ck(_v, 2, 0, currVal_5);
        _ck(_v, 6, 0);
    }, function (_ck, _v) {
        var currVal_0 = i1.ɵnov(_v, 1)._getTabIndex();
        var currVal_1 = i1.ɵnov(_v, 1).disabled.toString();
        var currVal_2 = i1.ɵnov(_v, 1)._getDisabledAttr();
        var currVal_3 = i1.ɵnov(_v, 2).target;
        var currVal_4 = i1.ɵnov(_v, 2).href;
        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
    });
}
function View_SidenavComponent_3(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 10, 'button', [['class',
                'mat-menu-item'], ['md-menu-item', ''], ['role', 'menuitem']], [[1, 'tabindex', 0],
            [1, 'aria-disabled', 0], [1, 'disabled', 0]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 1)._checkDisabled($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                var pd_1 = (_co.logout() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i2.View_MdMenuItem_0, i2.RenderType_MdMenuItem)), i1.ɵdid(49152, [[12, 4]], 0, i3.MdMenuItem, [i1.ElementRef], null, null), (_l()(), i1.ɵted(0, ['\n            '])),
        (_l()(), i1.ɵeld(0, null, 0, 3, 'md-icon', [['class', 'mat-icon'], ['role',
                'img']], null, null, null, i2.View_MdIcon_0, i2.RenderType_MdIcon)),
        i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE],
            i1.ElementRef], null, null), i1.ɵdid(638976, null, 0, i3.MdIcon, [i1.Renderer2, i1.ElementRef, i3.MdIconRegistry, [8, null]], null, null), (_l()(), i1.ɵted(0, ['account_circle'])), (_l()(),
            i1.ɵted(0, ['\n            '])), (_l()(), i1.ɵeld(0, null, 0, 1, 'span', [], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['Logout'])), (_l()(), i1.ɵted(0, ['\n        ']))], function (_ck, _v) {
        _ck(_v, 5, 0);
    }, function (_ck, _v) {
        var currVal_0 = i1.ɵnov(_v, 1)._getTabIndex();
        var currVal_1 = i1.ɵnov(_v, 1).disabled.toString();
        var currVal_2 = i1.ɵnov(_v, 1)._getDisabledAttr();
        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);
    });
}
export function View_SidenavComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 179, 'md-sidenav-container', [['class', 'mat-sidenav-container'], ['fullscreen', '']], [[2, 'mat-sidenav-transition',
                null]], null, null, i2.View_MdSidenavContainer_0, i2.RenderType_MdSidenavContainer)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null),
        i1.ɵdid(1097728, null, 1, i3.MdSidenavContainer, [[2, i3.Dir], i1.ElementRef,
            i1.Renderer2, i1.NgZone], null, null), i1.ɵqud(603979776, 1, { _sidenavs: 1 }), (_l()(), i1.ɵted(1, ['\n    '])), (_l()(), i1.ɵeld(0, null, 0, 125, 'md-sidenav', [['class', 'app-sidenav mat-sidenav'], ['mode', 'push'],
            ['tabIndex', '-1']], [[1, 'align', 0], [2, 'mat-sidenav-closed', null],
            [2, 'mat-sidenav-closing', null], [2, 'mat-sidenav-end', null],
            [2, 'mat-sidenav-opened', null], [2, 'mat-sidenav-opening', null],
            [2, 'mat-sidenav-over', null], [2, 'mat-sidenav-push', null],
            [2, 'mat-sidenav-side', null]], [[null, 'transitionend'],
            [null, 'keydown']], function (_v, en, $event) {
            var ad = true;
            if (('transitionend' === en)) {
                var pd_0 = (i1.ɵnov(_v, 7)._onTransitionEnd($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('keydown' === en)) {
                var pd_1 = (i1.ɵnov(_v, 7).handleKeydown($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i2.View_MdSidenav_0, i2.RenderType_MdSidenav)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null), i1.ɵdid(1228800, [[1, 4], ['sidenav', 4]], 0, i3.MdSidenav, [i1.ElementRef, i3.FocusTrapFactory, [2, i6.DOCUMENT]], { mode: [0, 'mode'] }, null),
        i1.ɵdid(933888, null, 0, i7.ClassDirective, [i8.MediaMonitor, i1.IterableDiffers,
            i1.KeyValueDiffers, i1.ElementRef, i1.Renderer, i1.Renderer2], { classBase: [0,
                'classBase'] }, null), (_l()(), i1.ɵted(0, ['\n        '])), (_l()(),
            i1.ɵeld(0, null, 0, 119, 'md-list', [['class', 'mat-list'], ['role', 'list']], null, null, null, i2.View_MdList_0, i2.RenderType_MdList)),
        i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE],
            i1.ElementRef], null, null), i1.ɵdid(49152, null, 0, i3.MdList, [], null, null), i1.ɵdid(16384, null, 0, i3.MdListCssMatStyler, [], null, null), (_l()(),
            i1.ɵted(0, ['\n            '])), (_l()(), i1.ɵeld(0, null, 0, 21, 'md-list-item', [['class', 'mat-list-item'], ['role', 'listitem']], null, [[null,
                'focus'], [null, 'blur']], function (_v, en, $event) {
            var ad = true;
            if (('focus' === en)) {
                var pd_0 = (i1.ɵnov(_v, 17)._handleFocus() !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i1.ɵnov(_v, 17)._handleBlur() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i2.View_MdListItem_0, i2.RenderType_MdListItem)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null), i1.ɵdid(1097728, null, 2, i3.MdListItem, [i1.Renderer2, i1.ElementRef, [2, i3.MdList], [2, i3.MdNavListCssMatStyler]], null, null), i1.ɵqud(603979776, 2, { _lines: 1 }), i1.ɵqud(335544320, 3, { _hasAvatar: 0 }), (_l()(), i1.ɵted(2, ['\n                '])), (_l()(), i1.ɵeld(0, null, 2, 14, 'button', [['class', 'mat-button'], ['md-button', '']], [[8,
                'disabled', 0]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 25).onClick() !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                var pd_1 = (i1.ɵnov(_v, 7).toggle() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i2.View_MdButton_0, i2.RenderType_MdButton)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null), i1.ɵdid(180224, null, 0, i3.MdButton, [i1.Renderer2, i1.ElementRef, i3.Platform, i3.FocusOriginMonitor], null, null), i1.ɵdid(16384, null, 0, i3.MdButtonCssMatStyler, [], null, null), i1.ɵdid(16384, null, 0, i4.RouterLink, [i4.Router, i4.ActivatedRoute, [8, null], i1.Renderer, i1.ElementRef], { routerLink: [0, 'routerLink'] }, null), i1.ɵpad(1), (_l()(), i1.ɵted(0, ['\n                    '])), (_l()(), i1.ɵeld(0, null, 0, 3, 'md-icon', [['class', 'mat-icon'], ['role', 'img']], null, null, null, i2.View_MdIcon_0, i2.RenderType_MdIcon)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null),
        i1.ɵdid(638976, null, 0, i3.MdIcon, [i1.Renderer2, i1.ElementRef, i3.MdIconRegistry,
            [8, null]], null, null), (_l()(), i1.ɵted(0, ['home'])),
        (_l()(), i1.ɵted(0, ['\n                    '])), (_l()(), i1.ɵeld(0, null, 0, 1, 'span', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Home'])), (_l()(), i1.ɵted(0, ['\n                '])), (_l()(), i1.ɵted(2, ['\n            '])), (_l()(),
            i1.ɵted(0, ['\n            '])), (_l()(), i1.ɵeld(0, null, 0, 21, 'md-list-item', [['class', 'mat-list-item'], ['role', 'listitem']], null, [[null,
                'focus'], [null, 'blur']], function (_v, en, $event) {
            var ad = true;
            if (('focus' === en)) {
                var pd_0 = (i1.ɵnov(_v, 40)._handleFocus() !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i1.ɵnov(_v, 40)._handleBlur() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i2.View_MdListItem_0, i2.RenderType_MdListItem)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null), i1.ɵdid(1097728, null, 2, i3.MdListItem, [i1.Renderer2, i1.ElementRef, [2, i3.MdList], [2, i3.MdNavListCssMatStyler]], null, null), i1.ɵqud(603979776, 4, { _lines: 1 }), i1.ɵqud(335544320, 5, { _hasAvatar: 0 }), (_l()(), i1.ɵted(2, ['\n                '])), (_l()(), i1.ɵeld(0, null, 2, 14, 'button', [['class', 'mat-button'], ['md-button', '']], [[8,
                'disabled', 0]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 48).onClick() !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                var pd_1 = (i1.ɵnov(_v, 7).toggle() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i2.View_MdButton_0, i2.RenderType_MdButton)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null), i1.ɵdid(180224, null, 0, i3.MdButton, [i1.Renderer2, i1.ElementRef, i3.Platform, i3.FocusOriginMonitor], null, null), i1.ɵdid(16384, null, 0, i3.MdButtonCssMatStyler, [], null, null), i1.ɵdid(16384, null, 0, i4.RouterLink, [i4.Router, i4.ActivatedRoute, [8, null], i1.Renderer, i1.ElementRef], { routerLink: [0, 'routerLink'] }, null), i1.ɵpad(1), (_l()(), i1.ɵted(0, ['\n                    '])), (_l()(), i1.ɵeld(0, null, 0, 3, 'md-icon', [['class', 'mat-icon'], ['role', 'img']], null, null, null, i2.View_MdIcon_0, i2.RenderType_MdIcon)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null),
        i1.ɵdid(638976, null, 0, i3.MdIcon, [i1.Renderer2, i1.ElementRef, i3.MdIconRegistry,
            [8, null]], null, null), (_l()(), i1.ɵted(0, ['code'])),
        (_l()(), i1.ɵted(0, ['\n                    '])), (_l()(), i1.ɵeld(0, null, 0, 1, 'span', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Technical Events'])), (_l()(),
            i1.ɵted(0, ['\n                '])), (_l()(), i1.ɵted(2, ['\n            '])),
        (_l()(), i1.ɵted(0, ['\n            '])), (_l()(), i1.ɵeld(0, null, 0, 21, 'md-list-item', [['class', 'mat-list-item'], ['role', 'listitem']], null, [[null, 'focus'], [null, 'blur']], function (_v, en, $event) {
            var ad = true;
            if (('focus' === en)) {
                var pd_0 = (i1.ɵnov(_v, 63)._handleFocus() !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i1.ɵnov(_v, 63)._handleBlur() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i2.View_MdListItem_0, i2.RenderType_MdListItem)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null), i1.ɵdid(1097728, null, 2, i3.MdListItem, [i1.Renderer2, i1.ElementRef, [2, i3.MdList], [2, i3.MdNavListCssMatStyler]], null, null), i1.ɵqud(603979776, 6, { _lines: 1 }), i1.ɵqud(335544320, 7, { _hasAvatar: 0 }), (_l()(), i1.ɵted(2, ['\n                '])), (_l()(), i1.ɵeld(0, null, 2, 14, 'button', [['class', 'mat-button'], ['md-button', '']], [[8,
                'disabled', 0]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 71).onClick() !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                var pd_1 = (i1.ɵnov(_v, 7).toggle() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i2.View_MdButton_0, i2.RenderType_MdButton)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null), i1.ɵdid(180224, null, 0, i3.MdButton, [i1.Renderer2, i1.ElementRef, i3.Platform, i3.FocusOriginMonitor], null, null), i1.ɵdid(16384, null, 0, i3.MdButtonCssMatStyler, [], null, null), i1.ɵdid(16384, null, 0, i4.RouterLink, [i4.Router, i4.ActivatedRoute, [8, null], i1.Renderer, i1.ElementRef], { routerLink: [0, 'routerLink'] }, null), i1.ɵpad(1), (_l()(), i1.ɵted(0, ['\n                    '])), (_l()(), i1.ɵeld(0, null, 0, 3, 'md-icon', [['class', 'mat-icon'], ['role', 'img']], null, null, null, i2.View_MdIcon_0, i2.RenderType_MdIcon)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null),
        i1.ɵdid(638976, null, 0, i3.MdIcon, [i1.Renderer2, i1.ElementRef, i3.MdIconRegistry,
            [8, null]], null, null), (_l()(), i1.ɵted(0, ['event'])),
        (_l()(), i1.ɵted(0, ['\n                    '])), (_l()(), i1.ɵeld(0, null, 0, 1, 'span', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Non-Technical Events'])),
        (_l()(), i1.ɵted(0, ['\n                '])), (_l()(), i1.ɵted(2, ['\n            '])),
        (_l()(), i1.ɵted(0, ['\n            '])), (_l()(), i1.ɵeld(0, null, 0, 21, 'md-list-item', [['class', 'mat-list-item'], ['role', 'listitem']], null, [[null, 'focus'], [null, 'blur']], function (_v, en, $event) {
            var ad = true;
            if (('focus' === en)) {
                var pd_0 = (i1.ɵnov(_v, 86)._handleFocus() !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i1.ɵnov(_v, 86)._handleBlur() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i2.View_MdListItem_0, i2.RenderType_MdListItem)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null), i1.ɵdid(1097728, null, 2, i3.MdListItem, [i1.Renderer2, i1.ElementRef, [2, i3.MdList], [2, i3.MdNavListCssMatStyler]], null, null), i1.ɵqud(603979776, 8, { _lines: 1 }), i1.ɵqud(335544320, 9, { _hasAvatar: 0 }), (_l()(), i1.ɵted(2, ['\n                '])), (_l()(), i1.ɵeld(0, null, 2, 14, 'button', [['class', 'mat-button'], ['md-button', '']], [[8,
                'disabled', 0]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 94).onClick() !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                var pd_1 = (i1.ɵnov(_v, 7).toggle() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i2.View_MdButton_0, i2.RenderType_MdButton)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null), i1.ɵdid(180224, null, 0, i3.MdButton, [i1.Renderer2, i1.ElementRef, i3.Platform, i3.FocusOriginMonitor], null, null), i1.ɵdid(16384, null, 0, i3.MdButtonCssMatStyler, [], null, null), i1.ɵdid(16384, null, 0, i4.RouterLink, [i4.Router, i4.ActivatedRoute, [8, null], i1.Renderer, i1.ElementRef], { routerLink: [0, 'routerLink'] }, null), i1.ɵpad(1), (_l()(), i1.ɵted(0, ['\n                    '])), (_l()(), i1.ɵeld(0, null, 0, 3, 'md-icon', [['class', 'mat-icon'], ['role', 'img']], null, null, null, i2.View_MdIcon_0, i2.RenderType_MdIcon)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null),
        i1.ɵdid(638976, null, 0, i3.MdIcon, [i1.Renderer2, i1.ElementRef, i3.MdIconRegistry,
            [8, null]], null, null), (_l()(), i1.ɵted(0, ['class'])),
        (_l()(), i1.ɵted(0, ['\n                    '])), (_l()(), i1.ɵeld(0, null, 0, 1, 'span', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Workshops'])), (_l()(), i1.ɵted(0, ['\n                '])), (_l()(), i1.ɵted(2, ['\n            '])), (_l()(),
            i1.ɵted(0, ['\n            '])), (_l()(), i1.ɵeld(0, null, 0, 21, 'md-list-item', [['class', 'mat-list-item'], ['role', 'listitem']], null, [[null,
                'focus'], [null, 'blur']], function (_v, en, $event) {
            var ad = true;
            if (('focus' === en)) {
                var pd_0 = (i1.ɵnov(_v, 109)._handleFocus() !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i1.ɵnov(_v, 109)._handleBlur() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i2.View_MdListItem_0, i2.RenderType_MdListItem)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null), i1.ɵdid(1097728, null, 2, i3.MdListItem, [i1.Renderer2, i1.ElementRef, [2, i3.MdList], [2, i3.MdNavListCssMatStyler]], null, null), i1.ɵqud(603979776, 10, { _lines: 1 }), i1.ɵqud(335544320, 11, { _hasAvatar: 0 }), (_l()(), i1.ɵted(2, ['\n                '])), (_l()(), i1.ɵeld(0, null, 2, 14, 'button', [['class', 'mat-button'], ['md-button', '']], [[8,
                'disabled', 0]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 117).onClick() !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                var pd_1 = (i1.ɵnov(_v, 7).toggle() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i2.View_MdButton_0, i2.RenderType_MdButton)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null), i1.ɵdid(180224, null, 0, i3.MdButton, [i1.Renderer2, i1.ElementRef, i3.Platform, i3.FocusOriginMonitor], null, null), i1.ɵdid(16384, null, 0, i3.MdButtonCssMatStyler, [], null, null), i1.ɵdid(16384, null, 0, i4.RouterLink, [i4.Router, i4.ActivatedRoute, [8, null], i1.Renderer, i1.ElementRef], { routerLink: [0, 'routerLink'] }, null), i1.ɵpad(1), (_l()(), i1.ɵted(0, ['\n                    '])), (_l()(), i1.ɵeld(0, null, 0, 3, 'md-icon', [['class', 'mat-icon'], ['role', 'img']], null, null, null, i2.View_MdIcon_0, i2.RenderType_MdIcon)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null),
        i1.ɵdid(638976, null, 0, i3.MdIcon, [i1.Renderer2, i1.ElementRef, i3.MdIconRegistry,
            [8, null]], null, null), (_l()(), i1.ɵted(0, ['contacts'])),
        (_l()(), i1.ɵted(0, ['\n                    '])), (_l()(), i1.ɵeld(0, null, 0, 1, 'span', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Contacts'])), (_l()(), i1.ɵted(0, ['\n                '])), (_l()(), i1.ɵted(2, ['\n            '])), (_l()(),
            i1.ɵted(0, ['\n        '])), (_l()(), i1.ɵted(0, ['\n    '])), (_l()(), i1.ɵted(1, ['\n    '])), (_l()(), i1.ɵeld(0, null, 1, 28, 'md-toolbar', [['class',
                'mat-toolbar'], ['color', 'black'], ['role', 'toolbar']], null, null, null, i2.View_MdToolbar_0, i2.RenderType_MdToolbar)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE],
            i1.ElementRef], null, null), i1.ɵdid(49152, null, 0, i3.MdToolbar, [i1.Renderer2, i1.ElementRef], { color: [0, 'color'] }, null),
        (_l()(), i1.ɵted(0, ['\n        '])), (_l()(), i1.ɵeld(0, null, 0, 7, 'button', [['class', 'app-icon-button']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 7).toggle() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(933888, null, 0, i7.ClassDirective, [i8.MediaMonitor, i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer,
            i1.Renderer2], { classBase: [0, 'classBase'] }, null), (_l()(), i1.ɵted(null, ['\n            '])), (_l()(), i1.ɵeld(0, null, null, 3, 'md-icon', [['class', 'mat-icon'], ['role', 'img']], null, null, null, i2.View_MdIcon_0, i2.RenderType_MdIcon)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null),
        i1.ɵdid(638976, null, 0, i3.MdIcon, [i1.Renderer2, i1.ElementRef, i3.MdIconRegistry,
            [8, null]], null, null), (_l()(), i1.ɵted(0, ['menu'])),
        (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵted(0, [' '])), (_l()(),
            i1.ɵeld(0, null, 0, 1, 'label', [['id', 'heading']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['OZmenta 2K17'])), (_l()(), i1.ɵted(0, ['\n        '])), (_l()(), i1.ɵeld(0, null, 0, 1, 'span', [['class', 'app-filler']], null, null, null, null, null)), i1.ɵdid(933888, null, 0, i7.ClassDirective, [i8.MediaMonitor, i1.IterableDiffers, i1.KeyValueDiffers,
            i1.ElementRef, i1.Renderer, i1.Renderer2], { classBase: [0, 'classBase'] }, null), (_l()(), i1.ɵted(0, ['\n        '])), (_l()(), i1.ɵeld(16777216, null, 0, 8, 'button', [['aria-haspopup', 'true'], ['class', 'mat-mini-fab'],
            ['md-mini-fab', '']], [[8, 'disabled', 0]], [[null, 'mousedown'],
            [null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('mousedown' === en)) {
                var pd_0 = (i1.ɵnov(_v, 155)._handleMousedown($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                var pd_1 = (i1.ɵnov(_v, 155).toggleMenu() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i2.View_MdButton_0, i2.RenderType_MdButton)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null), i1.ɵdid(180224, null, 0, i3.MdButton, [i1.Renderer2, i1.ElementRef, i3.Platform, i3.FocusOriginMonitor], null, null), i1.ɵdid(16384, null, 0, i3.MdMiniFab, [[2, i3.MdButton],
            [8, null]], null, null), i1.ɵdid(4341760, null, 0, i3.MdMenuTrigger, [i3.Overlay, i1.ElementRef, i1.ViewContainerRef, [2, i3.Dir]], { menu: [0, 'menu'] }, null), (_l()(), i1.ɵeld(0, null, 0, 3, 'md-icon', [['class', 'mat-icon'], ['role', 'img']], null, null, null, i2.View_MdIcon_0, i2.RenderType_MdIcon)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null),
        i1.ɵdid(638976, null, 0, i3.MdIcon, [i1.Renderer2, i1.ElementRef, i3.MdIconRegistry,
            [8, null]], null, null), (_l()(), i1.ɵted(0, ['add'])),
        (_l()(), i1.ɵted(0, ['\n    '])), (_l()(), i1.ɵted(1, ['\n    '])), (_l()(), i1.ɵeld(0, null, 1, 13, 'md-menu', [['role', 'menu']], null, null, null, i2.View_MdMenu_0, i2.RenderType_MdMenu)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null), i1.ɵdid(1228800, [['menu', 4]], 1, i3.MdMenu, [i1.ElementRef], null, null), i1.ɵqud(603979776, 12, { items: 1 }), (_l()(), i1.ɵted(0, ['\n        '])), (_l()(), i1.ɵand(16777216, null, 0, 1, null, View_SidenavComponent_1)), i1.ɵdid(16384, null, 0, i5.NgIf, [i1.ViewContainerRef,
            i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(0, ['\n        '])),
        (_l()(), i1.ɵand(16777216, null, 0, 1, null, View_SidenavComponent_2)),
        i1.ɵdid(16384, null, 0, i5.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i1.ɵted(0, ['\n        '])), (_l()(), i1.ɵand(16777216, null, 0, 1, null, View_SidenavComponent_3)), i1.ɵdid(16384, null, 0, i5.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(0, ['\n    '])), (_l()(), i1.ɵted(1, ['\n    '])),
        (_l()(), i1.ɵeld(16777216, null, 1, 1, 'router-outlet', [], null, null, null, null, null)), i1.ɵdid(212992, null, 0, i4.RouterOutlet, [i4.ChildrenOutletContexts, i1.ViewContainerRef,
            i1.ComponentFactoryResolver, [8, null], i1.ChangeDetectorRef], null, null), (_l()(), i1.ɵted(1, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_10 = 'push';
        _ck(_v, 7, 0, currVal_10);
        var currVal_11 = 'app-sidenav';
        _ck(_v, 8, 0, currVal_11);
        var currVal_13 = _ck(_v, 26, 0, '/');
        _ck(_v, 25, 0, currVal_13);
        _ck(_v, 30, 0);
        var currVal_15 = _ck(_v, 49, 0, '/tevents');
        _ck(_v, 48, 0, currVal_15);
        _ck(_v, 53, 0);
        var currVal_17 = _ck(_v, 72, 0, '/ntevents');
        _ck(_v, 71, 0, currVal_17);
        _ck(_v, 76, 0);
        var currVal_19 = _ck(_v, 95, 0, '/workshops');
        _ck(_v, 94, 0, currVal_19);
        _ck(_v, 99, 0);
        var currVal_21 = _ck(_v, 118, 0, '/contacts');
        _ck(_v, 117, 0, currVal_21);
        _ck(_v, 122, 0);
        var currVal_22 = 'black';
        _ck(_v, 134, 0, currVal_22);
        var currVal_23 = 'app-icon-button';
        _ck(_v, 137, 0, currVal_23);
        _ck(_v, 141, 0);
        var currVal_24 = 'app-filler';
        _ck(_v, 149, 0, currVal_24);
        var currVal_26 = i1.ɵnov(_v, 164);
        _ck(_v, 155, 0, currVal_26);
        _ck(_v, 158, 0);
        var currVal_27 = !_co.isLoggedIn();
        _ck(_v, 168, 0, currVal_27);
        var currVal_28 = !_co.isLoggedIn();
        _ck(_v, 171, 0, currVal_28);
        var currVal_29 = _co.isLoggedIn();
        _ck(_v, 174, 0, currVal_29);
        _ck(_v, 178, 0);
    }, function (_ck, _v) {
        var currVal_0 = i1.ɵnov(_v, 2)._enableTransitions;
        _ck(_v, 0, 0, currVal_0);
        var currVal_1 = null;
        var currVal_2 = i1.ɵnov(_v, 7)._isClosed;
        var currVal_3 = i1.ɵnov(_v, 7)._isClosing;
        var currVal_4 = i1.ɵnov(_v, 7)._isEnd;
        var currVal_5 = i1.ɵnov(_v, 7)._isOpened;
        var currVal_6 = i1.ɵnov(_v, 7)._isOpening;
        var currVal_7 = i1.ɵnov(_v, 7)._modeOver;
        var currVal_8 = i1.ɵnov(_v, 7)._modePush;
        var currVal_9 = i1.ɵnov(_v, 7)._modeSide;
        _ck(_v, 5, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);
        var currVal_12 = (i1.ɵnov(_v, 23).disabled || null);
        _ck(_v, 21, 0, currVal_12);
        var currVal_14 = (i1.ɵnov(_v, 46).disabled || null);
        _ck(_v, 44, 0, currVal_14);
        var currVal_16 = (i1.ɵnov(_v, 69).disabled || null);
        _ck(_v, 67, 0, currVal_16);
        var currVal_18 = (i1.ɵnov(_v, 92).disabled || null);
        _ck(_v, 90, 0, currVal_18);
        var currVal_20 = (i1.ɵnov(_v, 115).disabled || null);
        _ck(_v, 113, 0, currVal_20);
        var currVal_25 = (i1.ɵnov(_v, 153).disabled || null);
        _ck(_v, 151, 0, currVal_25);
    });
}
export function View_SidenavComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'app-sidenav', [], null, null, null, View_SidenavComponent_0, RenderType_SidenavComponent)), i1.ɵdid(49152, null, 0, i9.SidenavComponent, [i3.MdDialog, i10.UserService], null, null)], null, null);
}
export var SidenavComponentNgFactory = i1.ɵccf('app-sidenav', i9.SidenavComponent, View_SidenavComponent_Host_0, {}, {}, []);
