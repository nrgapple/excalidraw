(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{15:function(e,t,n){e.exports=n(16)},16:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),o=n(5),l=n(4),i=n(6),c=n(8),s=n(2),u=n.n(s),d=n(9),h=n.n(d),f=n(12),p=n(14),v=n(7),g=(n(26),Array.of());function m(){return Math.floor(Math.random()*Math.pow(2,31))}function y(e,t){var n=Math.random;Math.random=function(e){return function(){return(Math.pow(2,31)-1&(e=Math.imul(48271,e)))/Math.pow(2,31)}}(e);var r=t();return Math.random=n,r}function w(e,t,n,r,a,o){var l,i,c=a-n,s=o-r,u=c*c+s*s,d=-1;0!==u&&(d=((e-n)*c+(t-r)*s)/u),d<0?(l=n,i=r):d>1?(l=a,i=o):(l=n+d*c,i=r+d*s);var h=e-l,f=t-i;return Math.hypot(h,f)}function x(e,t,n){if(t){var r=t.fillStyle;"string"===typeof n.viewBackgroundColor?(t.fillStyle=n.viewBackgroundColor,t.fillRect(-.5,-.5,H.width,H.height)):t.clearRect(-.5,-.5,H.width,H.height),t.fillStyle=r,g.forEach((function(r){if(r.draw(e,t,n),r.isSelected){var a=B(r),o=D(r),l=O(r),i=X(r),c=t.getLineDash();t.setLineDash([8,4]),t.strokeRect(a-4+n.scrollX,l-4+n.scrollY,o-a+8,i-l+8),t.setLineDash(c)}}));var a=function(e,t,n,r){var a=e*e/(e+Math.abs(n)),o={x:(n>0?0:e-a)+4,y:t-6-4,width:a-8,height:6},l=t*t/(t+Math.abs(r));return{horizontal:o,vertical:{x:e-6-4,y:(r>0?0:t-l)+4,width:6,height:l-12}}}(t.canvas.width,t.canvas.height,n.scrollX,n.scrollY);t.fillStyle="rgba(0,0,0,0.3)",t.fillRect(a.horizontal.x,a.horizontal.y,a.horizontal.width,a.horizontal.height),t.fillRect(a.vertical.x,a.vertical.y,a.vertical.width,a.vertical.height),t.fillStyle=r}}function k(e){var t=e.exportBackground,n=e.exportVisibleOnly,r=e.exportPadding,a=void 0===r?10:r,o=e.viewBackgroundColor;if(!g.length)return window.alert("Cannot export empty canvas.");Y(),h.a.render(u.a.createElement(K,null),W,(function(){var e=1/0,r=0,l=1/0,i=0;g.forEach((function(t){e=Math.min(e,B(t)),r=Math.max(r,D(t)),l=Math.min(l,O(t)),i=Math.max(i,X(t))}));var c=document.createElement("canvas"),s=c.getContext("2d");c.style.display="none",document.body.appendChild(c),c.width=n?r-e+2*a:H.width,c.height=n?i-l+2*a:H.height,t||x(q,F,{viewBackgroundColor:null,scrollX:0,scrollY:0}),s.drawImage(H,n?e-a:0,n?l-a:0,n?r-e+2*a:H.width,n?i-l+2*a:H.height,0,0,n?c.width:H.width,n?c.height:H.height),t||x(q,F,{viewBackgroundColor:o,scrollX:0,scrollY:0});var u=document.createElement("a");u.setAttribute("download","excalidraw.png"),u.setAttribute("href",c.toDataURL("image/png")),u.click(),u.remove(),c!==H&&c.remove()}))}function E(e,t,n,r,a){return[(e-n)*Math.cos(a)-(t-r)*Math.sin(a)+n,(e-n)*Math.sin(a)+(t-r)*Math.cos(a)+r]}var S=f.a.generator(null,null);function C(e){return"text"===e.type}function b(e){var t=e.width,n=e.height,r=Math.hypot(t-0,n-0),a=Math.min(30,r/2),o=t-(t-0)/r*a,l=n-(n-0)/r*a,i=E(o,l,t,n,-20*Math.PI/180),s=Object(c.a)(i,2),u=s[0],d=s[1],h=E(o,l,t,n,20*Math.PI/180),f=Object(c.a)(h,2);return[0,0,t,n,u,d,f[0],f[1]]}function M(e){if("selection"===e.type)e.draw=function(t,n,r){var a=r.scrollX,o=r.scrollY,l=n.fillStyle;n.fillStyle="rgba(0, 0, 255, 0.10)",n.fillRect(e.x+a,e.y+o,e.width,e.height),n.fillStyle=l};else if("rectangle"===e.type){var t=y(e.seed,(function(){return S.rectangle(0,0,e.width,e.height,{stroke:e.strokeColor,fill:e.backgroundColor})}));e.draw=function(n,r,a){var o=a.scrollX,l=a.scrollY;r.translate(e.x+o,e.y+l),n.draw(t),r.translate(-e.x-o,-e.y-l)}}else if("ellipse"===e.type){var n=y(e.seed,(function(){return S.ellipse(e.width/2,e.height/2,e.width,e.height,{stroke:e.strokeColor,fill:e.backgroundColor})}));e.draw=function(t,r,a){var o=a.scrollX,l=a.scrollY;r.translate(e.x+o,e.y+l),t.draw(n),r.translate(-e.x-o,-e.y-l)}}else{if("arrow"===e.type){var r=b(e),a=Object(c.a)(r,8),o=a[0],l=a[1],i=a[2],s=a[3],u=a[4],d=a[5],h=a[6],f=a[7],p=y(e.seed,(function(){return[S.line(u,d,i,s,{stroke:e.strokeColor}),S.line(o,l,i,s,{stroke:e.strokeColor}),S.line(h,f,i,s,{stroke:e.strokeColor})]}));return void(e.draw=function(t,n,r){var a=r.scrollX,o=r.scrollY;n.translate(e.x+a,e.y+o),p.forEach((function(e){return t.draw(e)})),n.translate(-e.x-a,-e.y-o)})}if(!C(e))throw new Error("Unimplemented type "+e.type);e.draw=function(t,n,r){var a=r.scrollX,o=r.scrollY,l=n.font;n.font=e.font;var i=n.fillStyle;n.fillStyle=e.strokeColor,n.fillText(e.text,e.x+a,e.y+e.actualBoundingBoxAscent+o),n.fillStyle=i,n.font=l}}}function B(e){return e.width>=0?e.x:e.x+e.width}function D(e){return e.width>=0?e.x+e.width:e.x}function O(e){return e.height>=0?e.y:e.y+e.height}function X(e){return e.height>=0?e.y+e.height:e.y}function Y(){g.forEach((function(e){e.isSelected=!1}))}function T(){for(var e=g.length-1;e>=0;--e)g[e].isSelected&&g.splice(e,1)}var U="ArrowLeft",I="ArrowRight",L="ArrowDown",N="ArrowUp",A="Escape",P="Delete",R="Backspace",z=[{icon:v.d,value:"selection"},{icon:v.e,value:"rectangle"},{icon:v.a,value:"ellipse"},{icon:v.c,value:"arrow"},{icon:v.b,value:"text"}],j=z.map((function(e){return e.value[0]}));function J(e){return z.reduce((function(t,n){return n.value[0]!==e?t:n.value}),"selection")}function V(e){return e===U||e===I||e===L||e===N}var K=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={draggingElement:null,elementType:"selection",exportBackground:!1,exportVisibleOnly:!0,exportPadding:10,currentItemStrokeColor:"#000000",currentItemBackgroundColor:"#ffffff",viewBackgroundColor:"#ffffff",scrollX:0,scrollY:0},n.onResize=function(){n.forceUpdate()},n.onKeyDown=function(e){if("INPUT"!==e.target.nodeName)if(e.key===A)Y(),n.forceUpdate(),e.preventDefault();else if(e.key===R||e.key===P)T(),n.forceUpdate(),e.preventDefault();else if(V(e.key)){var t=e.shiftKey?5:1;g.forEach((function(n){n.isSelected&&(e.key===U?n.x-=t:e.key===I?n.x+=t:e.key===N?n.y-=t:e.key===L&&(n.y+=t))})),n.forceUpdate(),e.preventDefault()}else"a"===e.key&&e.metaKey?(g.forEach((function(e){e.isSelected=!0})),n.forceUpdate(),e.preventDefault()):j.includes(e.key.toLowerCase())&&n.setState({elementType:J(e.key)})},n}return Object(i.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onKeyDown,!1),window.addEventListener("resize",this.onResize,!1);var e=function(){try{var e=localStorage.getItem("excalidraw"),t=localStorage.getItem("excalidraw-state");return e&&(g=JSON.parse(e)).forEach((function(e){return M(e)})),t?JSON.parse(t):null}catch(n){return g=[],null}}();e&&this.setState(e)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown,!1),window.removeEventListener("resize",this.onResize,!1)}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"container",onCut:function(t){t.clipboardData.setData("text/plain",JSON.stringify(g.filter((function(e){return e.isSelected})))),T(),e.forceUpdate(),t.preventDefault()},onCopy:function(e){e.clipboardData.setData("text/plain",JSON.stringify(g.filter((function(e){return e.isSelected})))),e.preventDefault()},onPaste:function(t){var n,r=t.clipboardData.getData("text");try{n=JSON.parse(r)}catch(t){}Array.isArray(n)&&n.length>0&&n[0].type&&(Y(),n.forEach((function(e){e.x+=10,e.y+=10,e.seed=m(),M(e),g.push(e)})),e.forceUpdate()),t.preventDefault()}},u.a.createElement("div",{className:"sidePanel"},u.a.createElement("h4",null,"Shapes"),u.a.createElement("div",{className:"panelTools"},z.map((function(t){var n=t.value,r=t.icon;return u.a.createElement("label",{key:n,className:"tool"},u.a.createElement("input",{type:"radio",checked:e.state.elementType===n,onChange:function(){e.setState({elementType:n}),Y(),e.forceUpdate()}}),u.a.createElement("div",{className:"toolIcon"},u.a.createElement(p.a,{icon:r})))}))),u.a.createElement("h4",null,"Colors"),u.a.createElement("div",{className:"panelColumn"},u.a.createElement("label",null,u.a.createElement("input",{type:"color",value:this.state.viewBackgroundColor,onChange:function(t){e.setState({viewBackgroundColor:t.target.value})}}),"Background"),u.a.createElement("label",null,u.a.createElement("input",{type:"color",value:this.state.currentItemStrokeColor,onChange:function(t){e.setState({currentItemStrokeColor:t.target.value})}}),"Shape Stroke"),u.a.createElement("label",null,u.a.createElement("input",{type:"color",value:this.state.currentItemBackgroundColor,onChange:function(t){e.setState({currentItemBackgroundColor:t.target.value})}}),"Shape Background")),u.a.createElement("h4",null,"Export"),u.a.createElement("div",{className:"panelColumn"},u.a.createElement("button",{onClick:function(){k({exportBackground:e.state.exportBackground,exportVisibleOnly:e.state.exportVisibleOnly,exportPadding:e.state.exportPadding,viewBackgroundColor:e.state.viewBackgroundColor})}},"Export to png"),u.a.createElement("label",null,u.a.createElement("input",{type:"checkbox",checked:this.state.exportBackground,onChange:function(t){e.setState({exportBackground:t.target.checked})}}),"background"),u.a.createElement("label",null,u.a.createElement("input",{type:"checkbox",checked:this.state.exportVisibleOnly,onChange:function(t){e.setState({exportVisibleOnly:t.target.checked})}}),"visible area only"),u.a.createElement("div",null,"(padding:",u.a.createElement("input",{type:"number",value:this.state.exportPadding,onChange:function(t){e.setState({exportPadding:Number(t.target.value)})},disabled:!this.state.exportVisibleOnly}),"px)"))),u.a.createElement("canvas",{id:"canvas",width:window.innerWidth-250,height:window.innerHeight,onWheel:function(t){t.preventDefault();var n=t.deltaX,r=t.deltaY;e.setState((function(e){return{scrollX:e.scrollX-n,scrollY:e.scrollY-r}}))},onMouseDown:function(t){var n=t.clientX-t.target.offsetLeft-e.state.scrollX,r=t.clientY-t.target.offsetTop-e.state.scrollY,a=function(e,t,n,r,a){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,i={type:e,x:t,y:n,width:o,height:l,isSelected:!1,strokeColor:r,backgroundColor:a,seed:m(),draw:function(e,t,n){}};return i}(e.state.elementType,n,r,e.state.currentItemStrokeColor,e.state.currentItemBackgroundColor),o=!1,l=document.documentElement.style.cursor;if("selection"===e.state.elementType){var i=g.find((function(e){return function(e,t,n){if("ellipse"===e.type){var r=Math.abs(t-e.x-e.width/2),a=Math.abs(n-e.y-e.height/2),o=.707,l=.707,i=e.width/2,s=e.height/2;return[0,1,2,3].forEach((function(e){var t=i*o,n=s*l,c=(i*i-s*s)*Math.pow(o,3)/i,u=(s*s-i*i)*Math.pow(l,3)/s,d=t-c,h=n-u,f=r-c,p=a-u,v=Math.hypot(h,d),g=Math.hypot(p,f);o=Math.min(1,Math.max(0,(f*v/g+c)/i)),l=Math.min(1,Math.max(0,(p*v/g+u)/s));var m=Math.hypot(l,o);o/=m,l/=m})),Math.hypot(i*o-r,s*l-a)<10}if("rectangle"===e.type){var u=B(e),d=D(e),h=O(e),f=X(e);return w(t,n,u,h,d,h)<10||w(t,n,d,h,d,f)<10||w(t,n,d,f,u,f)<10||w(t,n,u,f,u,h)<10}if("arrow"===e.type){var p=b(e),v=Object(c.a)(p,8),g=v[0],m=v[1],y=v[2],x=v[3],k=v[4],E=v[5],S=v[6],C=v[7];return w(t-=e.x,n-=e.y,k,E,y,x)<10||w(t,n,g,m,y,x)<10||w(t,n,S,C,y,x)<10}if("text"===e.type){var M=B(e),Y=D(e),T=O(e),U=X(e);return t>=M&&t<=Y&&n>=T&&n<=U}if("selection"===e.type)return console.warn("This should not happen, we need to investigate why it does."),!1;throw new Error("Unimplemented type "+e.type)}(e,n,r)}));i?i.isSelected||(t.shiftKey||Y(),i.isSelected=!0):Y(),(o=g.some((function(e){return e.isSelected})))&&(document.documentElement.style.cursor="move")}if(C(a)){var s=prompt("What text do you want?");if(null===s)return;a.text=s,a.font="20px Virgil";var u=F.font;F.font=a.font;var d=F.measureText(a.text),h=d.actualBoundingBoxAscent,f=d.actualBoundingBoxDescent,p=d.width;a.actualBoundingBoxAscent=h,F.font=u;var v=h+f;a.x-=p/2,a.y-=h,a.width=p,a.height=v}M(a),g.push(a),"text"===e.state.elementType?(e.setState({draggingElement:null,elementType:"selection"}),a.isSelected=!0):e.setState({draggingElement:a});var y=n,x=r,k=function(t){var n=t.target;if(n instanceof HTMLElement){if(o){var r=g.filter((function(e){return e.isSelected}));if(r.length){var a=t.clientX-n.offsetLeft-e.state.scrollX,l=t.clientY-n.offsetTop-e.state.scrollY;return r.forEach((function(e){e.x+=a-y,e.y+=l-x})),y=a,x=l,void e.forceUpdate()}}var i=e.state.draggingElement;if(i){var c=t.clientX-n.offsetLeft-i.x-e.state.scrollX,s=t.clientY-n.offsetTop-i.y-e.state.scrollY;i.width=c,i.height=t.shiftKey?c:s,M(i),"selection"===e.state.elementType&&function(e){var t=B(e),n=D(e),r=O(e),a=X(e);g.forEach((function(e){var o=B(e),l=D(e),i=O(e),c=X(e);e.isSelected="selection"!==e.type&&t<=o&&r<=i&&n>=l&&a>=c}))}(i),e.forceUpdate()}}};window.addEventListener("mousemove",k),window.addEventListener("mouseup",(function t(n){var r=e.state,a=r.draggingElement,i=r.elementType;if(window.removeEventListener("mousemove",k),window.removeEventListener("mouseup",t),document.documentElement.style.cursor=l,null===a)return Y(),void e.forceUpdate();"selection"===i?(o&&(o=!1),g.pop()):a.isSelected=!0,e.setState({draggingElement:null,elementType:"selection"}),e.forceUpdate()})),e.forceUpdate()}}))}},{key:"componentDidUpdate",value:function(){var e;x(q,F,{scrollX:this.state.scrollX,scrollY:this.state.scrollY,viewBackgroundColor:this.state.viewBackgroundColor}),e=this.state,localStorage.setItem("excalidraw",JSON.stringify(g)),localStorage.setItem("excalidraw-state",JSON.stringify(e))}}]),t}(u.a.Component),W=document.getElementById("root");h.a.render(u.a.createElement(K,null),W);var H=document.getElementById("canvas"),q=f.a.canvas(H),F=H.getContext("2d");F.translate(.5,.5),h.a.render(u.a.createElement(K,null),W)},26:function(e,t,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.527805ec.chunk.js.map