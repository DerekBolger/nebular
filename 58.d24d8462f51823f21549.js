(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{nVOV:function(n,t,e){"use strict";e.r(t);var i=e("CcnG"),l=function(){return function(){}}(),u=e("pMnS"),o=e("ZYCi"),r=e("F/XL"),c=e("vubp"),a=e("jvbL"),s=(e("hzLA"),function(){function n(n,t,e,i,l){this.communicator=n,this.themeService=t,this.router=e,this.analytics=i,this.document=l,this.alive=!0}return n.prototype.ngOnInit=function(){this.setupId(),this.subscribeOnThemeSwitch(),this.analytics.trackEvent("initExampleView",this.id)},n.prototype.ngAfterViewInit=function(){var n=this;Object(r.a)(null).pipe(Object(c.a)(500)).subscribe(function(){return n.sendHeight()})},n.prototype.ngOnDestroy=function(){this.alive=!1},n.prototype.setupId=function(){this.id=this.getId()},n.prototype.subscribeOnThemeSwitch=function(){var n=this;this.communicator.receive(this.id).pipe(Object(a.a)(function(){return n.alive})).subscribe(function(t){return n.changeTheme(t)})},n.prototype.changeTheme=function(n){this.themeService.changeTheme(n.theme),this.sendHeight()},n.prototype.getId=function(){var n=this.router.url.split("/");return n.splice(0,2),n.join("/")},n.prototype.sendHeight=function(){this.communicator.send({id:this.id,height:this.document.body.clientHeight})},n}()),h=e("VkvS"),p=e("4vXS"),b=e("LA7j"),f=e("MGne"),d=i.vb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;background-color:#f1f2f3}"]],data:{}});function m(n){return i.Rb(0,[(n()(),i.xb(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),i.wb(1,212992,null,0,o.q,[o.b,i.T,i.j,[8,null],i.h],null,null)],function(n,t){n(t,1,0)},null)}function g(n){return i.Rb(0,[(n()(),i.xb(0,0,null,null,1,"ngd-example",[],null,null,null,m,d)),i.wb(1,4440064,null,0,s,[h.a,p.a,o.l,b.a,f.b],null,null)],function(n,t){n(t,1,0)},null)}var y=i.tb("ngd-example",s,g,{},{},[]),v=function(){return function(n){this.themeService=n,this.themeService.changeTheme("default")}}(),x=i.vb({encapsulation:0,styles:[["[_nghost-%COMP%]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;color:gray;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:5rem}"]],data:{}});function w(n){return i.Rb(0,[(n()(),i.Pb(-1,null,[" Example not found. "]))],null,null)}function j(n){return i.Rb(0,[(n()(),i.xb(0,0,null,null,1,"ngd-example-404",[],null,null,null,w,x)),i.wb(1,49152,null,0,v,[p.a],null,null)],null,null)}var k=i.tb("ngd-example-404",v,j,{},{},[]),O=function(){return e.e(59).then(e.bind(null,"VJpy")).then(function(n){return n.PlaygroundModuleNgFactory})},S=function(){return function(){}}();e.d(t,"NgdExampleModuleNgFactory",function(){return F});var F=i.ub(l,[],function(n){return i.Eb([i.Fb(512,i.j,i.gb,[[8,[u.a,y,k]],[3,i.j],i.z]),i.Fb(1073742336,o.p,o.p,[[2,o.u],[2,o.l]]),i.Fb(1073742336,S,S,[]),i.Fb(1073742336,l,l,[]),i.Fb(1024,o.j,function(){return[[{path:"",component:s,children:[{path:"",loadChildren:O},{path:"**",component:v}]}]]},[])])})}}]);