"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[775],{1775:function(e,n,t){t.r(n);var r,s=t(168),o=t(8789),a=t(184),l=t(9555).ContactsList,c=t(5650).FilterBar,i=t(3540).Form,u=o.ZP.main(r||(r=(0,s.Z)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\n\nposition: relative\n}"])));n.default=function(){return(0,a.jsxs)(u,{className:"contacts-hero",children:[(0,a.jsx)(i,{}),(0,a.jsx)(c,{}),(0,a.jsx)(l,{})]})}},9555:function(e,n,t){t.r(n),t.d(n,{ContactsList:function(){return c}});var r=t(9434),s=t(6351),o=t(2791),a=t(2170),l=t(184),c=function(){var e=(0,r.I0)(),n=(0,r.v9)(s.K2);(0,o.useEffect)((function(){e((0,a.au)())}),[e]);var t=(0,r.v9)(s.zK),c=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return(0,l.jsxs)("div",{className:"Contacts-list-container",children:[(0,l.jsx)("h1",{children:"Contacts"}),(0,l.jsx)("ul",{className:"Contacts-list",children:c.map((function(n){var t=n.name,r=n.id,s=n.phone;return(0,l.jsxs)("li",{children:[(0,l.jsx)("div",{className:"contacts__name",children:(0,l.jsx)("p",{children:t})}),(0,l.jsx)("div",{className:"contacts__number",children:(0,l.jsx)("p",{children:s})}),(0,l.jsx)("button",{type:"button",className:"Contacts__delete-button",onClick:function(){!function(n){e((0,a.Sx)(n))}(r)},children:"Delete contact"})]},r)}))})]})}},5650:function(e,n,t){t.r(n),t.d(n,{FilterBar:function(){return a}});var r=t(9434),s=t(6895),o=t(184),a=function(){var e=(0,r.I0)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{children:"Find your contacts by name"}),(0,o.jsx)("div",{className:"filter-container",children:(0,o.jsx)("input",{type:"text",name:"filter",className:"filter__input",onChange:function(n){e((0,s.T)(n.target.value))}})})]})}},3540:function(e,n,t){t.r(n),t.d(n,{Form:function(){return w}});var r,s=t(9439),o=t(168),a=t(2791),l=t(9434),c=t(2170),i=t(6351),u=t(8789),d=t(184),m=t(2144),h=m.Button,f=m.useDisclosure,x=m.Modal,j=m.ModalOverlay,p=m.ModalContent,v=m.ModalHeader,C=m.ModalCloseButton,b=m.ModalBody,F=m.FormControl,_=m.FormLabel,k=m.Input,y=m.ModalFooter,N=t(2791).useRef,S=u.ZP.div(r||(r=(0,o.Z)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  color: black;\n"]))),w=function(){var e=f(),n=e.isOpen,t=e.onOpen,r=e.onClose,o=N(null),u=N(null),m=((0,l.v9)(i.vc),(0,l.I0)()),w=(0,a.useState)(""),L=(0,s.Z)(w,2),M=(L[0],L[1]),g=(0,a.useState)(""),R=(0,s.Z)(g,2),Z=(R[0],R[1]),B=function(){M(""),Z("")};return(0,d.jsxs)(S,{children:[(0,d.jsx)(h,{onClick:t,fontSize:36,borderRadius:"45%",color:"black",children:"+"}),(0,d.jsxs)(x,{initialFocusRef:o,finalFocusRef:u,isOpen:n,onClose:r,children:[(0,d.jsx)(j,{}),(0,d.jsx)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault();var n=e.target,t={name:n.elements.name.value,phone:n.elements.phone.value};m((0,c.HL)(t)),B(),r()},children:(0,d.jsxs)(p,{children:[(0,d.jsx)(v,{children:"Add to contacts"}),(0,d.jsx)(C,{}),(0,d.jsxs)(b,{pb:6,children:[(0,d.jsxs)(F,{isRequired:!0,children:[(0,d.jsx)(_,{htmlFor:"name",children:"First name"}),(0,d.jsx)(k,{name:"name",ref:o,placeholder:"First name"})]}),(0,d.jsxs)(F,{mt:4,children:[(0,d.jsx)(_,{children:"Second name"}),(0,d.jsx)(k,{ref:o,placeholder:"Second name"})]}),(0,d.jsxs)(F,{mt:4,isRequired:!0,children:[(0,d.jsx)(_,{htmlFor:"phone",children:"Phone number"}),(0,d.jsx)(k,{name:"phone",placeholder:"Last name"})]})]}),(0,d.jsx)(y,{justifyContent:"center",children:(0,d.jsx)(h,{colorScheme:"blue",mr:3,w:150,type:"submit",children:"Add"})})]})})]})]})}}}]);
//# sourceMappingURL=775.5b72b262.chunk.js.map