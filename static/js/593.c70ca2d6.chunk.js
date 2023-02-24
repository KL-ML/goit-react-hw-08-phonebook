(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[593],{9926:function(t,n,e){"use strict";e.r(n),e.d(n,{ContactForm:function(){return s}});e(2791);var r=e(9434),o=e(5078),a=e(8670),i=e(184),s=function(t){var n=t.onSubmit,e=(0,r.I0)(),s=(0,r.v9)((function(t){return t.form.name})),c=(0,r.v9)((function(t){return t.form.number})),u=function(t){var n=t.target,r=n.name,a=n.value;switch(r){case"name":e((0,o.jL)(a));break;case"number":e((0,o.V)(a));break;default:return}},l=function(){e((0,o.dX)()),e((0,o.j$)())};return(0,i.jsxs)(a.x,{as:"form",bg:"background",boxShadow:"boxShadowSection",borderRadius:"normal",overflow:"hidden",p:4,display:"flex",flexDirection:"column",onSubmit:function(t){t.preventDefault(),n({name:s,number:c}),l()},children:[(0,i.jsxs)(a.x,{as:"label",display:"flex",flexDirection:"column",mb:3,children:["Name",(0,i.jsx)(a.x,{as:"input",mt:3,p:2,border:"none",boxShadow:"shadowStats",borderRadius:"normal",fontFamily:"body",color:"text",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:s,onChange:u})]}),(0,i.jsxs)(a.x,{as:"label",display:"flex",flexDirection:"column",mb:4,children:["Number",(0,i.jsx)(a.x,{as:"input",mt:3,p:2,border:"none",boxShadow:"shadowStats",borderRadius:"normal",fontFamily:"body",color:"text",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:c,onChange:u})]}),(0,i.jsx)(a.x,{as:"button",border:"none",boxShadow:"buttonShadow",borderRadius:"normal",bg:"secondary",color:"light",fontFamily:"body",p:2,type:"submit",children:"Add contact"})]})}},9346:function(t,n,e){"use strict";e.r(n),e.d(n,{ContactList:function(){return i}});var r=e(8670),o=(e(2791),e(184)),a=function(t){var n=t.contacts,e=t.onDeleteContact;return(0,o.jsx)(o.Fragment,{children:n.map((function(t){var n=t.name,a=t.id,i=t.number;return(0,o.jsxs)(r.x,{as:"li",display:"flex",justifyContent:"space-between",mb:2,children:[n,": ",i,(0,o.jsx)(r.x,{as:"button",border:"none",boxShadow:"buttonShadow",borderRadius:"normal",bg:"secondary",color:"light",fontFamily:"body",fontSize:0,py:2,px:3,type:"button",onClick:function(){return e(a)},children:"Delete"})]},a)}))})},i=function(t){var n=t.contacts,e=t.onDeleteContact,i=t.children;return(0,o.jsxs)(r.x,{as:"ul",p:4,minHeight:"contactListMinHeigth",children:[i,(0,o.jsx)(a,{contacts:n,onDeleteContact:e})]})}},8636:function(t,n,e){"use strict";e.r(n),e.d(n,{Filter:function(){return a}});e(2791);var r=e(8670),o=e(184),a=function(t){var n=t.onChange,e=t.value;return(0,o.jsxs)(r.x,{p:4,display:"flex",flexDirection:"column",children:["Find contacts by name",(0,o.jsx)(r.x,{as:"input",mt:3,p:2,border:"none",boxShadow:"shadowStats",borderRadius:"normal",fontFamily:"body",color:"text",type:"text",value:e,onChange:n})]})}},9593:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return v}});var r=e(2791),o=e(6429),a=e.n(o),i=e(5264),s=e(9434),c=e(7084),u=e(8192),l=function(t){return t.contacts.contacts.items},f=function(t){return t.contacts.contacts.isLoading},d=function(t){return t.contacts.contacts.error},h=function(t){return t.contacts.filter},x=e(8670),m=e(184),p=e(9926).ContactForm,b=e(9346).ContactList,g=e(8636).Filter,v=function(){var t=(0,s.I0)(),n=(0,s.v9)(f),e=(0,s.v9)(d),o=(0,s.v9)(h),v=(0,s.v9)(l);(0,r.useEffect)((function(){t((0,u.yF)())}),[t]);var w=(0,r.useMemo)((function(){return v.filter((function(t){return t.name.toLowerCase().includes(o.toLowerCase())}))}),[v,o]);return(0,m.jsxs)(x.x,{p:4,display:"flex",flexDirection:"column",width:"containerWidth",children:[(0,m.jsx)("h1",{children:"Phonebook"}),(0,m.jsx)(p,{onSubmit:function(n){var e=n.name,r=n.number,o={id:a().generate(),name:e,number:r};v.find((function(t){return t.name===o.name}))?i.Notify.failure("".concat(o.name," is allready in contacts.")):t((0,u.uK)(o))}}),(0,m.jsx)("h2",{children:"Contacts"}),(0,m.jsx)(g,{value:o,onChange:function(n){t((0,c.X)(n.target.value))}}),(0,m.jsxs)(b,{contacts:w,onDeleteContact:function(n){t((0,u.GK)(n))},children:[n&&!e&&(0,m.jsx)("p",{children:"Loading..."}),!n&&!e&&(0,m.jsx)("p",{children:"Contacts list:"}),!n&&e&&(0,m.jsx)("p",{children:"Sorry, something goe's wrong"})]})]})}},6429:function(t,n,e){"use strict";t.exports=e(5274)},8857:function(t,n,e){"use strict";var r,o,a,i=e(5408),s="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function c(){a=!1}function u(t){if(t){if(t!==r){if(t.length!==s.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. You submitted "+t.length+" characters: "+t);var n=t.split("").filter((function(t,n,e){return n!==e.lastIndexOf(t)}));if(n.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. These characters were not unique: "+n.join(", "));r=t,c()}}else r!==s&&(r=s,c())}function l(){return a||(a=function(){r||u(s);for(var t,n=r.split(""),e=[],o=i.nextValue();n.length>0;)o=i.nextValue(),t=Math.floor(o*n.length),e.push(n.splice(t,1)[0]);return e.join("")}())}t.exports={get:function(){return r||s},characters:function(t){return u(t),r},seed:function(t){i.seed(t),o!==t&&(c(),o=t)},lookup:function(t){return l()[t]},shuffled:l}},7098:function(t,n,e){"use strict";var r,o,a=e(2226);e(8857);t.exports=function(t){var n="",e=Math.floor(.001*(Date.now()-1567752802062));return e===o?r++:(r=0,o=e),n+=a(7),n+=a(t),r>0&&(n+=a(r)),n+=a(e)}},2226:function(t,n,e){"use strict";var r=e(8857),o=e(9139),a=e(2483);t.exports=function(t){for(var n,e=0,i="";!n;)i+=a(o,r.get(),1),n=t<Math.pow(16,e+1),e++;return i}},5274:function(t,n,e){"use strict";var r=e(8857),o=e(7098),a=e(6046),i=e(5347)||0;function s(){return o(i)}t.exports=s,t.exports.generate=s,t.exports.seed=function(n){return r.seed(n),t.exports},t.exports.worker=function(n){return i=n,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=a},6046:function(t,n,e){"use strict";var r=e(8857);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},9139:function(t){"use strict";var n,e="object"===typeof window&&(window.crypto||window.msCrypto);n=e&&e.getRandomValues?function(t){return e.getRandomValues(new Uint8Array(t))}:function(t){for(var n=[],e=0;e<t;e++)n.push(Math.floor(256*Math.random()));return n},t.exports=n},5408:function(t){"use strict";var n=1;t.exports={nextValue:function(){return(n=(9301*n+49297)%233280)/233280},seed:function(t){n=t}}},5347:function(t){"use strict";t.exports=0},2483:function(t){t.exports=function(t,n,e){for(var r=(2<<Math.log(n.length-1)/Math.LN2)-1,o=-~(1.6*r*e/n.length),a="";;)for(var i=t(o),s=o;s--;)if((a+=n[i[s]&r]||"").length===+e)return a}}}]);
//# sourceMappingURL=593.c70ca2d6.chunk.js.map