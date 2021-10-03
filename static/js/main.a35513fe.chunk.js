(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={filter:"Filter_filter__1bKCa",filterInput:"Filter_filterInput__13xys"}},12:function(t,e,n){t.exports={title:"App_title__3PaWn"}},2:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__1gVS0",contactFormName:"ContactForm_contactFormName__YAw4n",contactFormNameInput:"ContactForm_contactFormNameInput__1zW21",contactFormNumber:"ContactForm_contactFormNumber__y_vyI",contactFormNumInput:"ContactForm_contactFormNumInput__1ENiQ",contactFormBtn:"ContactForm_contactFormBtn__27QvV"}},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(13),o=n.n(c),r=n(3),s=n(10),i=n(14),m=n(5),l=n(6),u=n(8),b=n(7),h=n(23),d=n(4),f=n.n(d),j=n(0),p=function(t){var e=t.findContact,n=t.removeContact;return Object(j.jsx)("ul",{children:e.map((function(t){return Object(j.jsxs)("li",{className:f.a.contactListItem,children:[Object(j.jsxs)("span",{className:f.a.contactListName,children:[t.name,":"]}),"\xa0",Object(j.jsx)("span",{className:f.a.contactListNumber,children:t.number}),Object(j.jsx)("button",{className:f.a.contactListItemBtn,type:"button",id:t.id,onClick:n,children:"Delete"})]},t.id)}))})},C=n(2),N=n.n(C),_=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.reset=function(){t.setState({name:"",number:""})},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(r.a)({},a,c))},t.handleSubmit=function(e){if(e.preventDefault(),t.props.isThereContact(t.state.name))return alert("".concat(t.state.name," has been already in contact list"));t.props.addNewContact(t.state),t.reset()},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:N.a.contactForm,onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{className:N.a.contactFormName,children:["Name:",Object(j.jsx)("input",{className:N.a.contactFormNameInput,onChange:this.handleChange,type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{className:N.a.contactFormNumber,children:["Number:",Object(j.jsx)("input",{className:N.a.contactFormNumInput,onChange:this.handleChange,type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{className:N.a.contactFormBtn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),O=_,v=n(11),x=n.n(v),F=function(t){var e=t.onChange,n=t.filter;return Object(j.jsxs)("label",{className:x.a.filter,children:["Find contacts by name:",Object(j.jsx)("input",{className:x.a.filterInput,name:"filter",type:"text",value:n,onChange:e})]})},g=n(12),y=n.n(g),I=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addNewContact=function(e){t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[Object(s.a)(Object(s.a)({},e),{},{id:Object(h.a)()})])}}))},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(r.a)({},a,c))},t.removeContact=function(e){var n=e.target.id;t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==n})),filter:""}}))},t.findContact=function(e){return t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}))},t.isThereContact=function(e){return t.state.contacts.some((function(t){return t.name.toLowerCase()===e.toLowerCase()}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:y.a.title,children:"Phonebook"}),Object(j.jsx)(O,{addNewContact:this.addNewContact,isThereContact:this.isThereContact}),Object(j.jsx)("h2",{className:y.a.title,children:"Contacts"}),Object(j.jsx)(F,{filter:this.state.filter,onChange:this.handleChange}),Object(j.jsx)(p,{findContact:this.findContact(),removeContact:this.removeContact})]})}}]),n}(a.Component),L=I;n(20);o.a.render(Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(L,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={contactListItem:"ContactList_contactListItem__3lfIe",contactListName:"ContactList_contactListName__3EWcb",contactListNumber:"ContactList_contactListNumber__373Sy",contactListItemBtn:"ContactList_contactListItemBtn__1Jvxq"}}},[[21,1,2]]]);
//# sourceMappingURL=main.a35513fe.chunk.js.map