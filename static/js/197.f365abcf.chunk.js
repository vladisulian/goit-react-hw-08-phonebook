"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[197],{8197:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var a,r,s=t(168),o=t(8789),l=t(184),i=t(2144),c=i.Button,d=i.useDisclosure,u=i.Modal,m=i.ModalOverlay,h=i.ModalContent,x=i.ModalHeader,p=i.ModalCloseButton,f=i.ModalBody,j=i.FormControl,b=i.FormLabel,v=i.Input,C=i.ModalFooter,_=t(2791).useRef,g=o.ZP.div(a||(a=(0,s.Z)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  color: black;\n"]))),F=function(){var e=d(),n=e.isOpen,t=e.onOpen,a=e.onClose,r=_(null),s=_(null);return(0,l.jsxs)(g,{children:[(0,l.jsx)(c,{onClick:t,children:"Open Modal"}),(0,l.jsxs)(u,{initialFocusRef:r,finalFocusRef:s,isOpen:n,onClose:a,style:{background:"black !important",borderRadius:"20px"},children:[(0,l.jsx)(m,{}),(0,l.jsxs)(h,{children:[(0,l.jsx)(x,{children:"Add to contacts"}),(0,l.jsx)(p,{}),(0,l.jsxs)(f,{pb:6,children:[(0,l.jsxs)(j,{children:[(0,l.jsx)(b,{children:"First name"}),(0,l.jsx)(v,{ref:r,placeholder:"First name"})]}),(0,l.jsxs)(j,{mt:4,children:[(0,l.jsx)(b,{children:"Second name"}),(0,l.jsx)(v,{ref:r,placeholder:"Second name"})]}),(0,l.jsxs)(j,{mt:4,children:[(0,l.jsx)(b,{children:"Last name"}),(0,l.jsx)(v,{placeholder:"Last name"})]})]}),(0,l.jsx)(C,{justifyContent:"center",children:(0,l.jsx)(c,{colorScheme:"blue",mr:3,w:150,children:"Save"})})]})]})]})},k=t(9555).ContactsList,y=t(5650).FilterBar,N=t(8047).Form,S=o.ZP.main(r||(r=(0,s.Z)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\n\nposition: relative\n}"]))),w=function(){return(0,l.jsxs)(S,{className:"contacts-hero",children:[(0,l.jsx)(N,{}),(0,l.jsx)(F,{}),(0,l.jsx)(y,{}),(0,l.jsx)(k,{})]})}},9555:function(e,n,t){t.r(n),t.d(n,{ContactsList:function(){return i}});var a=t(9434),r=t(6351),s=t(2791),o=t(2170),l=t(184),i=function(){var e=(0,a.I0)(),n=(0,a.v9)(r.K2);(0,s.useEffect)((function(){e((0,o.au)())}),[e]);var t=(0,a.v9)(r.zK),i=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return(0,l.jsxs)("div",{className:"Contacts-list-container",children:[(0,l.jsx)("h1",{children:"Contacts"}),(0,l.jsx)("ul",{className:"Contacts-list",children:i.map((function(n){var t=n.name,a=n.id,r=n.phone;return(0,l.jsxs)("li",{children:[(0,l.jsx)("div",{className:"contacts__name",children:(0,l.jsx)("p",{children:t})}),(0,l.jsx)("div",{className:"contacts__number",children:(0,l.jsx)("p",{children:r})}),(0,l.jsx)("button",{type:"button",className:"Contacts__delete-button",onClick:function(){!function(n){e((0,o.Sx)(n))}(a)},children:"Delete contact"})]},a)}))})]})}},5650:function(e,n,t){t.r(n),t.d(n,{FilterBar:function(){return o}});var a=t(9434),r=t(6895),s=t(184),o=function(){var e=(0,a.I0)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Find your contacts by name"}),(0,s.jsx)("div",{className:"filter-container",children:(0,s.jsx)("input",{type:"text",name:"filter",className:"filter__input",onChange:function(n){e((0,r.T)(n.target.value))}})})]})}},8047:function(e,n,t){t.r(n),t.d(n,{Form:function(){return d}});var a=t(9439),r=t(2844),s=t(2791),o=t(9434),l=t(2170),i=t(6351),c=t(184),d=function(){var e=(0,o.v9)(i.vc),n=(0,o.I0)(),t=(0,s.useState)(""),d=(0,a.Z)(t,2),u=d[0],m=d[1],h=(0,s.useState)(""),x=(0,a.Z)(h,2),p=x[0],f=x[1],j=function(e){var n=e.currentTarget.name,t=e.currentTarget.value;switch(n){case"name":m(t);break;case"phone":f(t);break;default:return}},b=function(){m(""),f("")};return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("form",{autoComplete:"off",className:"Phonebook__form",onSubmit:function(e){e.preventDefault();var t=e.target,a={name:t.elements.name.value,phone:t.elements.phone.value};n((0,l.HL)(a)),b()},children:[(0,c.jsxs)("label",{htmlFor:"name",children:["Name ",(0,c.jsx)("br",{}),(0,c.jsx)("input",{type:"text",name:"name",className:"Phonebook__form-input",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:u,onChange:j})]}),(0,c.jsxs)("label",{htmlFor:"phone",children:["Number ",(0,c.jsx)("br",{}),(0,c.jsx)("input",{type:"tel",name:"phone",className:"Phonebook__form-input",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:p,onChange:j})]}),e?(0,c.jsx)(r.z,{width:250,borderRadius:20,isLoading:!0,loadingText:"Sending",colorScheme:"teal",variant:"outline",spinnerPlacement:"start"}):(0,c.jsx)(r.z,{width:250,borderRadius:20,colorScheme:"teal",variant:"outline",type:"submit",children:"Submit"})]})})}}}]);
//# sourceMappingURL=197.f365abcf.chunk.js.map