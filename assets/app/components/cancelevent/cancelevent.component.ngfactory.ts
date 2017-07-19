/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './cancelevent.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/material';
import * as i3 from '../../../../node_modules/@angular/material/typings/index.ngfactory';
import * as i4 from './cancelevent.component';
const styles_CancelEventComponent:any[] = [i0.styles];
export const RenderType_CancelEventComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_CancelEventComponent,data:{}});
export function View_CancelEventComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),2,'h1',[['class',
      'mat-dialog-title'],['md-dialog-title','']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i2.MdDialogTitle,
      ([] as any[]),(null as any),(null as any)),(_l()(),i1.ɵted((null as any),['Confirmation'])),
      (_l()(),i1.ɵted((null as any),['\n'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          2,'div',[['class','mat-dialog-content'],['md-dialog-content','']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),i1.ɵdid(16384,
          (null as any),0,i2.MdDialogContent,([] as any[]),(null as any),(null as any)),
      (_l()(),i1.ɵted((null as any),['Please confirm that you want to cancel the registration to this event'])),
      (_l()(),i1.ɵted((null as any),['\n'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          16,'div',[['class','mat-dialog-actions'],['md-dialog-actions','']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),i1.ɵdid(16384,
          (null as any),0,i2.MdDialogActions,([] as any[]),(null as any),(null as any)),
      (_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          5,'button',[['class','mat-button'],['md-button',''],['md-dialog-close','confirm'],
              ['type','button']],[[8,'disabled',0],[1,'aria-label',0]],[[(null as any),
              'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,15).dialogRef.close(i1.ɵnov(_v,15).dialogResult)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },i3.View_MdButton_0,i3.RenderType_MdButton)),i1.ɵdid(16384,(null as any),
          0,i2.MdPrefixRejector,[[2,i2.MATERIAL_COMPATIBILITY_MODE],i1.ElementRef],
          (null as any),(null as any)),i1.ɵdid(180224,(null as any),0,i2.MdButton,
          [i1.Renderer2,i1.ElementRef,i2.Platform,i2.FocusOriginMonitor],(null as any),
          (null as any)),i1.ɵdid(16384,(null as any),0,i2.MdButtonCssMatStyler,([] as any[]),
          (null as any),(null as any)),i1.ɵdid(16384,(null as any),0,i2.MdDialogClose,
          [i2.MdDialogRef],{dialogResult:[0,'dialogResult']},(null as any)),(_l()(),
          i1.ɵted(0,['Yes'])),(_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),i1.ɵeld(0,
          (null as any),(null as any),5,'button',[['class','mat-button'],['md-button',
              ''],['md-dialog-close','cancel'],['type','button']],[[8,'disabled',0],
              [1,'aria-label',0]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,22).dialogRef.close(i1.ɵnov(_v,22).dialogResult)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },i3.View_MdButton_0,i3.RenderType_MdButton)),i1.ɵdid(16384,(null as any),
          0,i2.MdPrefixRejector,[[2,i2.MATERIAL_COMPATIBILITY_MODE],i1.ElementRef],
          (null as any),(null as any)),i1.ɵdid(180224,(null as any),0,i2.MdButton,
          [i1.Renderer2,i1.ElementRef,i2.Platform,i2.FocusOriginMonitor],(null as any),
          (null as any)),i1.ɵdid(16384,(null as any),0,i2.MdButtonCssMatStyler,([] as any[]),
          (null as any),(null as any)),i1.ɵdid(16384,(null as any),0,i2.MdDialogClose,
          [i2.MdDialogRef],{dialogResult:[0,'dialogResult']},(null as any)),(_l()(),
          i1.ɵted(0,['No'])),(_l()(),i1.ɵted((null as any),['\n']))],(_ck,_v) => {
    const currVal_2:any = 'confirm';
    _ck(_v,15,0,currVal_2);
    const currVal_5:any = 'cancel';
    _ck(_v,22,0,currVal_5);
  },(_ck,_v) => {
    const currVal_0:any = (i1.ɵnov(_v,13).disabled || (null as any));
    const currVal_1:any = i1.ɵnov(_v,15).ariaLabel;
    _ck(_v,11,0,currVal_0,currVal_1);
    const currVal_3:any = (i1.ɵnov(_v,20).disabled || (null as any));
    const currVal_4:any = i1.ɵnov(_v,22).ariaLabel;
    _ck(_v,18,0,currVal_3,currVal_4);
  });
}
export function View_CancelEventComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'app-cancelevent',
      ([] as any[]),(null as any),(null as any),(null as any),View_CancelEventComponent_0,
      RenderType_CancelEventComponent)),i1.ɵdid(49152,(null as any),0,i4.CancelEventComponent,
      [i2.MdDialogRef],(null as any),(null as any))],(null as any),(null as any));
}
export const CancelEventComponentNgFactory:i1.ComponentFactory<i4.CancelEventComponent> = i1.ɵccf('app-cancelevent',
    i4.CancelEventComponent,View_CancelEventComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvcHJpbmMvRGVza3RvcC9vem1lbnRhMmsxNy9hc3NldHMvYXBwL2NvbXBvbmVudHMvY2FuY2VsZXZlbnQvY2FuY2VsZXZlbnQuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL3ByaW5jL0Rlc2t0b3Avb3ptZW50YTJrMTcvYXNzZXRzL2FwcC9jb21wb25lbnRzL2NhbmNlbGV2ZW50L2NhbmNlbGV2ZW50LmNvbXBvbmVudC50cyIsIm5nOi8vL0M6L1VzZXJzL3ByaW5jL0Rlc2t0b3Avb3ptZW50YTJrMTcvYXNzZXRzL2FwcC9jb21wb25lbnRzL2NhbmNlbGV2ZW50L2NhbmNlbGV2ZW50LmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvcHJpbmMvRGVza3RvcC9vem1lbnRhMmsxNy9hc3NldHMvYXBwL2NvbXBvbmVudHMvY2FuY2VsZXZlbnQvY2FuY2VsZXZlbnQuY29tcG9uZW50LnRzLkNhbmNlbEV2ZW50Q29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGgxIG1kLWRpYWxvZy10aXRsZT5Db25maXJtYXRpb248L2gxPlxyXG48ZGl2IG1kLWRpYWxvZy1jb250ZW50PlBsZWFzZSBjb25maXJtIHRoYXQgeW91IHdhbnQgdG8gY2FuY2VsIHRoZSByZWdpc3RyYXRpb24gdG8gdGhpcyBldmVudDwvZGl2PlxyXG48ZGl2IG1kLWRpYWxvZy1hY3Rpb25zPlxyXG4gIDxidXR0b24gbWQtYnV0dG9uIG1kLWRpYWxvZy1jbG9zZT1cImNvbmZpcm1cIj5ZZXM8L2J1dHRvbj5cclxuICA8YnV0dG9uIG1kLWJ1dHRvbiBtZC1kaWFsb2ctY2xvc2U9XCJjYW5jZWxcIj5ObzwvYnV0dG9uPlxyXG48L2Rpdj4iLCI8YXBwLWNhbmNlbGV2ZW50PjwvYXBwLWNhbmNlbGV2ZW50PiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0FBO01BQUE7TUFBQSxxQ0FBQTtNQUFBLDJDQUFvQjtNQUFpQix1Q0FDckM7VUFBQTtVQUFBLGlFQUFBO1VBQUE7TUFBdUI7TUFBMkUsdUNBQ2xHO1VBQUE7VUFBQSxpRUFBQTtVQUFBO01BQXVCLHlDQUNyQjtVQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtVQUFBLHFEQUFBO1VBQUE7VUFBQSxvQ0FBQTtVQUFBO1VBQUEsc0JBQUE7VUFBQSxvQ0FBQTtVQUFBLGtFQUE0QztpQkFBQSxhQUFZLHlDQUN4RDtVQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtVQUFBLHFEQUFBO1VBQUE7VUFBQSxvQ0FBQTtVQUFBO1VBQUEsc0JBQUE7VUFBQSxvQ0FBQTtVQUFBLGtFQUEyQztpQkFBQSxZQUFXO0lBRHBDO0lBQWxCLFlBQWtCLFNBQWxCO0lBQ2tCO0lBQWxCLFlBQWtCLFNBQWxCOztJQURBO0lBQUE7SUFBQSxZQUFBLFVBQUEsU0FBQTtJQUNBO0lBQUE7SUFBQSxZQUFBLFVBQUEsU0FBQTs7OztvQkNKRjtNQUFBO3FDQUFBLFVBQUE7TUFBQTs7OyJ9