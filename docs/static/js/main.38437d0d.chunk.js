(this.webpackJsonpmycart=this.webpackJsonpmycart||[]).push([[0],[,,function(e,t,n){e.exports={mainbox:"Product_mainbox__3y1l1",discountbox:"Product_discountbox__pdOFm",contentbox:"Product_contentbox__2hOts",buttonsbox:"Product_buttonsbox__o41s-"}},,,,function(e,t,n){e.exports={table:"Checkout_table__3dU1C",maindiv:"Checkout_maindiv__2JQvH",buy:"Checkout_buy__3puN_"}},function(e,t,n){e.exports={popup:"Popup_popup__IVaHp",background:"Popup_background__3H1Te",closer:"Popup_closer__1BVgU"}},,,,function(e,t,n){e.exports={detailbox:"Details_detailbox__2VLc9"}},function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(10),l=n.n(c),r=(n(17),n(8)),i=n(4),u=n(1),s=(n(18),n(2)),m=n.n(s),d=function(e){var t=m.a.mainbox,n=m.a.imagebox,a=m.a.contentbox,c=m.a.buttonsbox,l=m.a.discountbox,r=e.itemdetails;return o.a.createElement("div",{className:t},o.a.createElement("div",{className:n},r.imagesrc?o.a.createElement("img",{src:"/MyCart/"+r.imagesrc}):o.a.createElement("div",null,"No Image!")),o.a.createElement("div",{className:a},o.a.createElement("h3",null,r.title||""),o.a.createElement("h5",null,r.name||""),o.a.createElement("span",null,r.quantity||""),o.a.createElement("span",null,r.mrp?"MRP "+r.mrp:null),o.a.createElement("span",null,r.price?"Rs "+r.price:null)),o.a.createElement("div",{className:l},r.discount?"".concat(r.discount,"% OFF"):null),o.a.createElement("div",{className:c},o.a.createElement("button",{onClick:e.updatemethod.bind(null,r.id,1)},"Add to Cart"),o.a.createElement("button",{onClick:e.updatemethod.bind(null,r.id,-1),disabled:r.count<1},"-"),o.a.createElement("span",null,r.count),o.a.createElement("button",{onClick:e.updatemethod.bind(null,r.id,1)},"+")))},b=n(11),p=n.n(b),f=function(e){return o.a.createElement("div",{className:p.a.detailbox},o.a.createElement("h5",null,"Total Amount: ",e.amount),o.a.createElement("button",{onClick:e.checkout.bind(null,"checkout")},"Checkout"),o.a.createElement("h5",null,"Quantity: ",e.quantity))},h=n(6),E=n.n(h),v=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),c=n[0],l=n[1];return o.a.createElement("div",{className:E.a.maindiv},e.total?o.a.createElement("table",{className:E.a.table},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Sr No."),o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Price"),o.a.createElement("th",null,"Quantity"),o.a.createElement("th",null,"Total"))),o.a.createElement("tbody",null,e.data.map((function(e,t){return o.a.createElement("tr",{key:e.id},o.a.createElement("td",null,t+1),o.a.createElement("td",null,e.name),o.a.createElement("td",null,e.price),o.a.createElement("td",null,e.count),o.a.createElement("td",null,Number(e.price)*e.count))})),o.a.createElement("tr",null,o.a.createElement("td",{colSpan:4},"Total Amount"),o.a.createElement("td",null,"Rs. ",e.total)))):o.a.createElement("div",null,"Nothing in Cart"),o.a.createElement("div",null,o.a.createElement("button",{className:E.a.buy,onClick:function(){l(!0)},disabled:0===e.total},"Buy"),o.a.createElement("button",{onClick:e.homeout.bind(null,"home")},"Back")),c?o.a.createElement(_,{total:e.total,cleardata:e.clearall,closepop:function(){l(!1)}}):null)},g=n(7),k=n.n(g),_=function(e){return o.a.createElement(a.Fragment,null,o.a.createElement("div",{className:k.a.popup},o.a.createElement("span",{className:k.a.closer,onClick:function(){e.cleardata(),e.closepop()}},"\u2718"),o.a.createElement("h3",{style:{color:"maroon"}},"Happy Shopping"),o.a.createElement("h5",{style:{color:"teal"}},"Rs ",e.total," Amount Paid in full!"),o.a.createElement("h5",null,"See you again soon!!!")),o.a.createElement("div",{className:k.a.background,onClick:function(){e.cleardata(),e.closepop()}}))};var y=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([]),s=Object(u.a)(l,2),m=s[0],b=s[1],p=Object(a.useState)(0),h=Object(u.a)(p,2),E=h[0],g=h[1],k=Object(a.useState)(0),_=Object(u.a)(k,2),y=_[0],N=_[1],O=Object(a.useState)("home"),w=Object(u.a)(O,2),j=w[0],x=w[1];Object(a.useEffect)((function(){fetch("/MyCart/data.json").then((function(e){return e.json()})).then((function(e){console.log(e),localStorage.setItem("fallbackdata",JSON.stringify(e)),c(e.items||[])})).catch((function(){if("fallbackdata"in localStorage){var e=JSON.parse(localStorage.getItem("fallbackdata"));c(e.items||[])}}))}),[]);var C=function(e,t){var a=Object(i.a)(n),o=Object(i.a)(m),l=o.find((function(t){return t.id===e})),u=a.find((function(t){return t.id===e}));if(0!==u.count||-1!==t){u.count=u.count+t,l?l.count=l.count+t:o.push(Object(r.a)({},u));var s=E,d=y;s=Number(s)+Number(u.price)*t,d+=t,o=o.filter((function(e){return e.count})),c(a),g(s),N(d),b(Object(i.a)(o))}},S=function(e){x(e)};return"home"===j?o.a.createElement("div",{className:"App"},n.map((function(e){return o.a.createElement(d,{key:e.name,updatemethod:C,itemdetails:Object(r.a)({},e)})})),o.a.createElement(f,{amount:E,quantity:y,checkout:S})):o.a.createElement("div",{className:"App"},o.a.createElement(v,{data:m,total:E,homeout:S,clearall:function(){var e=Object(i.a)(n);e.forEach((function(e){return e.count=0})),c(e),b([]),g(0),N(0)}}))},N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/MyCart",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/MyCart","/service-worker.js");N?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):O(t,e)}))}}()}],[[12,1,2]]]);
//# sourceMappingURL=main.38437d0d.chunk.js.map