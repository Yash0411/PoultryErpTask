(this.webpackJsonppoultry=this.webpackJsonppoultry||[]).push([[0],{140:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(19),l=a.n(o),m=(a(93),a(10)),s=a(11),c=a(13),i=a(12),d=(a(35),function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{paddingLeft:"40px",paddingRight:"40px",borderRadius:"12px",fontSize:"20px"}},"HOME",r.a.createElement("br",null),"This is a demo website Hosted for submission Task Porpose comprising the elements at front end.",r.a.createElement("br",null),"Modifications can be bade and the pages can be made more Dynamic as per we need.",r.a.createElement("br",null),"Frontend is not connected to a permanent database as the application is for trial purposes and hence prevent the database accumulation at this point but the code is ready and is in the commented format in the action creaters file.",r.a.createElement("br",null),"Alerts are defined at various places in order to verify the pushed data.")}}]),a}(n.Component)),u=a(28),p=a(22),h=[{id:"1",cat:"Vendor",name:"Costumer1",addr:"Address",phno:"PhNo",warehousesno:2,area:"234sft",warehouses:["Warehouse 1","Warehouse 1"],payments:[{tranxid:"t1"},{tranxid:"t2"},{tranxid:"t3"}]},{id:"2",cat:"Vendor",name:"Costumer2",addr:"Address",phno:"PhNo",warehousesno:2,area:"234sft",warehouses:["Warehouse 1","Warehouse 1"],payments:[{tranxid:"t1"},{tranxid:"t2"},{tranxid:"t3"}]},{id:"3",cat:"Vendor",name:"Costumer3",addr:"Address",phno:"PhNo",warehousesno:2,area:"234sft",warehouses:["Warehouse 1","Warehouse 1"],payments:[{tranxid:"t1"},{tranxid:"t2"},{tranxid:"t3"}]},{id:"4",cat:"Vendor",name:"Costumer4",addr:"Address",phno:"PhNo",warehousesno:2,area:"234sft",warehouses:["Warehouse 1","Warehouse 1"],payments:[{tranxid:"t1"},{tranxid:"t2"},{tranxid:"t3"}]},{id:"5",cat:"Vendor",name:"Costumer5",addr:"Address",phno:"PhNo",warehousesno:2,area:"234sft",warehouses:["Warehouse 1","Warehouse 1"],payments:[["t1,25"],["t2,25"]]},{id:"6",cat:"Vendor",name:"Costumer6",addr:"Address",phno:"PhNo",warehousesno:2,area:"234sft",warehouses:["Warehouse 1","Warehouse 1"],payments:[{tranxid:"t1"},{tranxid:"t2"},{tranxid:"t3"}]}],b=a(6),E=a(3),f=a(5),x=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={sno:"",id:"",cat:"",name:"",addr:"",phno:"",warehousesno:0,area:[],warehouses:[]},n.handleInputChange=n.handleInputChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(s.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(u.a)({},n,a))}},{key:"handleSubmit",value:function(e){alert(JSON.stringify(e)),this.props.postCostumer(e),this.props.resetFeedbackForm()}},{key:"render",value:function(){return r.a.createElement("div",{style:{paddingLeft:"40px",paddingRight:"40px",borderRadius:"12px"}},r.a.createElement("div",{className:"incanvas",style:{}},r.a.createElement("b",null,"Add Costumer Details"),r.a.createElement(f.b,{type:"button",className:"topbutton float-right",to:"/costumerdetails"},"Save")),r.a.createElement(E.Form,{onSubmit:this.handleSubmit,model:"costumer",style:{background:"white",borderRadius:"12px",paddingLeft:"40px",paddingRight:"40px",paddingTop:"40px"}},r.a.createElement(b.g,{className:"form-group mb-2 formrow"},r.a.createElement("div",{class:"form-group mb-2",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:"sno"},"S.no"),r.a.createElement(E.Control.text,{model:".sno",class:"formbox form-control",placeholder:h.length+1,value:this.state.value})),r.a.createElement("div",{class:"form-group mb-2 mx-4",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:"name"},"Costumer Name"),r.a.createElement(E.Control.text,{onChange:this.handleInputChange,model:".name",class:"formbox form-control"})),r.a.createElement("div",{class:"form-group mb-2 mx-4",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:"cat"},"Category"),r.a.createElement(E.Control.text,{model:".cat",class:"formbox form-control"})),r.a.createElement("div",{class:"form-group mb-2 mx-4",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:"addr"},"Address"),r.a.createElement(E.Control.text,{model:".addr",class:"formbox form-control"}))),r.a.createElement(b.g,{className:"form-group mb-2 formrow"},r.a.createElement("div",{class:"form-group mb-2",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:"phno"},"Contact Number"),r.a.createElement(E.Control.text,{model:".phno",class:"formbox form-control"})),r.a.createElement("div",{class:"form-group mb-2 mx-4",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:"warehouseno"},"Number Of Warehouses"),r.a.createElement(E.Control.text,{model:".warehouseno",class:"formbox form-control"}))),r.a.createElement("hr",{style:{width:"100%"}}),r.a.createElement("div",{className:"form-group mb-2 formrow"},r.a.createElement("h3",{style:{textAlign:"center"}},"Add Warehouses"),r.a.createElement(b.g,{className:"form-group mb-2 formrow"},r.a.createElement("div",{class:"form-group mb-2 ",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:"warehouses"},"Warehouse Name"),r.a.createElement(E.Control.text,{model:".warehouses[0]",class:"formbox form-control"})),r.a.createElement("div",{class:"form-group mb-2 mx-4 float-right",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:"area[0]"},"Area"),r.a.createElement(E.Control.text,{model:".area[0]",class:"formbox form-control"}))),r.a.createElement(b.g,{className:"form-group mb-2 formrow"},r.a.createElement("div",{class:"form-group mb-2 ",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:"warehouses[1]"},"Warehouse Name"),r.a.createElement(E.Control.text,{model:".warehouses[1]",class:"formbox form-control"})),r.a.createElement("div",{class:"form-group mb-2 mx-4 float-right",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:"area[1]"},"Area"),r.a.createElement(E.Control.text,{model:".area[1]",class:"formbox form-control"}))),r.a.createElement(b.g,{className:"form-group mb-2 formrow"},r.a.createElement("div",{class:"form-group mb-2 ",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:"warehouses[2]"},"Warehouse Name"),r.a.createElement(E.Control.text,{model:".warehouses[2]",class:"formbox form-control"})),r.a.createElement("div",{class:"form-group mb-2 mx-4 float-right",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:"area[2]"},"Area"),r.a.createElement(E.Control.text,{model:".area[2]",class:"formbox form-control"})))),r.a.createElement(b.g,{className:"form-group"},r.a.createElement(b.b,{md:{size:10,offset:2}},r.a.createElement(b.a,{type:"submit",color:"primary"},"Save")))))}}]),a}(n.Component),g=a(87),y=function(e){var t=e.costumer1.warehouses.map((function(e){return r.a.createElement("div",null,r.a.createElement("strong",null,e))})),a=Object(n.useState)(!1),o=Object(g.a)(a,2),l=o[0],m=o[1],s=function(){return m(!l)};return r.a.createElement("div",null,r.a.createElement("div",{id:e.costumer1.name,type:"button",onClick:s},r.a.createElement("b",null,"View")),r.a.createElement(b.d,{placement:"bottom",isOpen:l,target:e.costumer1.name,toggle:s},r.a.createElement(b.f,null,"Warehouses"),r.a.createElement(b.e,null,t)))},v=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"handleChange",value:function(e){return r.a.createElement("div",null,r.a.createElement("td",null,e.cat),r.a.createElement("td",null,e.name))}},{key:"render",value:function(){var e=this,t=h.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("th",null,r.a.createElement("input",{type:"checkbox",className:"m-1",onChange:e.handleChange(t)}),t.id),r.a.createElement("td",null,t.cat),r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.addr),r.a.createElement("td",null,t.phno),r.a.createElement("td",null,t.warehouses.length),r.a.createElement("td",null,r.a.createElement(y,{costumer1:t,key:t.id})),r.a.createElement("td",null,t.area))}));return r.a.createElement("div",{style:{paddingLeft:"40px",paddingRight:"40px",borderRadius:"12px"}},r.a.createElement("div",{className:"incanvas"},r.a.createElement("strong",null,"Costumer Details"),r.a.createElement(f.b,{type:"button",className:"topbutton float-right",to:"/addcostumer"},"Add New")),r.a.createElement("div",{className:"component",style:{background:"white",borderRadius:"12px",paddingLeft:"40px",paddingRight:"40px",paddingTop:"40px"}},r.a.createElement("div",null,r.a.createElement("input",{type:"text",className:" form-control-sm",placeholder:"Search"}),r.a.createElement("div",{className:"float-right"},r.a.createElement("button",{className:"button2 mx-sm-1"},"Save"),r.a.createElement("button",{className:"button1 mx-sm-1"},"Delete"),r.a.createElement("button",{className:"button1 mx-sm-1"},"Edit"),r.a.createElement("button",{className:"button1 mx-sm-1"},"Filter"),r.a.createElement("button",{className:"button1"},"Print")))),r.a.createElement("div",{className:"component",style:{textAlign:"center"}},r.a.createElement("table",{className:"table",style:{fontSize:"15px"}},r.a.createElement("thead",null,r.a.createElement("th",{scope:"col"},"Sr No"),r.a.createElement("th",{scope:"col"},"Cat"),r.a.createElement("th",{scope:"col"},"Costumer name"),r.a.createElement("th",{scope:"col"},"Address"),r.a.createElement("th",{scope:"col"},"Contant No"),r.a.createElement("th",{scope:"col"},"No Of Warehouses"),r.a.createElement("th",{scope:"col"},"Warehouse Name"),r.a.createElement("th",{scope:"col"},"Area")),r.a.createElement("tbody",null,t))))}}]),a}(n.Component),N=[{id:"1",cat:"Vendor",name:"Costumer",phno:"PhNo",tranxid:1,otherinfo:"234sft",amtsent:25,type:1},{id:"2",cat:"Vendor",name:"Costumer",phno:"PhNo",tranxid:1,otherinfo:"234sft",amtsent:25,type:1},{id:"3",cat:"Vendor",name:"Costumer",phno:"PhNo",tranxid:1,otherinfo:"234sft",amtsent:27,type:1},{id:"4",cat:"Vendor",name:"Costumer",phno:"PhNo",tranxid:1,otherinfo:"234sft",amtsent:25,type:1}],C=[{id:"1",cat:"Vendor",name:"Costumer1",totalamt:25,notranx:1},{id:"2",cat:"Vendor",name:"Costumer2",totalamt:25,notranx:1},{id:"3",cat:"Vendor",name:"Costumer3",totalamt:27,notranx:1},{id:"4",cat:"Vendor",name:"Costumer4",totalamt:25,notranx:1}],w=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"handleChange",value:function(e){return r.a.createElement("div",null,r.a.createElement("td",null,e.cat),r.a.createElement("td",null,e.name))}},{key:"render",value:function(){var e=N.map((function(e){return r.a.createElement("tr",null,r.a.createElement("th",null,e.id),r.a.createElement("td",null,e.cat),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.tranxid),r.a.createElement("td",null,e.phno),r.a.createElement("td",null,e.amtsent),r.a.createElement("td",null,e.type),r.a.createElement("td",null,e.otherinfo))}));return r.a.createElement("div",{style:{paddingLeft:"40px",paddingRight:"40px",borderRadius:"12px"}},r.a.createElement("div",{className:"incanvas"},r.a.createElement("b",null,"Payment Details"),r.a.createElement(f.b,{type:"button",className:"topbutton float-right",to:"/addpayment"},"Add New")),r.a.createElement("div",{className:"component",style:{background:"white",borderRadius:"12px",paddingLeft:"40px",paddingRight:"40px",paddingTop:"40px"}},r.a.createElement("div",null,r.a.createElement("input",{type:"text",className:" form-control-sm",placeholder:"Search"}),r.a.createElement("div",{className:"float-right"},r.a.createElement("button",{className:"button2 mx-sm-1"},"Save"),r.a.createElement("button",{className:"button1 mx-sm-1"},"Delete"),r.a.createElement("button",{className:"button1 mx-sm-1"},"Edit"),r.a.createElement("button",{className:"button1 mx-sm-1"},"Filter"),r.a.createElement("button",{className:"button1 mx-sm-1"},"Print")))),r.a.createElement("div",{className:"component",style:{textAlign:"center"}},r.a.createElement("table",{className:"table",style:{fontSize:"15px"}},r.a.createElement("thead",null,r.a.createElement("th",{scope:"col"},"Sr No"),r.a.createElement("th",{scope:"col"},"Cat"),r.a.createElement("th",{scope:"col"},"Costumer name"),r.a.createElement("th",{scope:"col"},"Tranx ID"),r.a.createElement("th",{scope:"col"},"Contant No"),r.a.createElement("th",{scope:"col"},"Amount sent"),r.a.createElement("th",{scope:"col"},"Transaction Type"),r.a.createElement("th",{scope:"col"},"Other Information")),r.a.createElement("tbody",null,e))))}}]),a}(n.Component),j=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={},n.handleInputChange=n.handleInputChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(s.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(u.a)({},n,a))}},{key:"handleSubmit",value:function(e){alert(JSON.stringify(e)),this.props.postCostumer(e),this.props.resetPaymentForm()}},{key:"render",value:function(){return r.a.createElement("div",{style:{paddingLeft:"40px",paddingRight:"40px",borderRadius:"12px"}},r.a.createElement("div",{className:"incanvas",style:{}},r.a.createElement("b",null,"Add Payment Details"),r.a.createElement(f.b,{type:"button",className:"topbutton float-right",to:"/paymentdetails"},"Save")),r.a.createElement(E.Form,{onSubmit:this.handleSubmit,model:"payment",style:{background:"white",borderRadius:"12px",paddingLeft:"40px",paddingRight:"40px",paddingTop:"40px"}},r.a.createElement(b.g,null,r.a.createElement("div",{class:"form-group mb-2",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:".sno"},"S.no"),r.a.createElement(E.Control.text,{onChange:this.handleInputChange,model:".sno",class:"formbox form-control",placeholder:N.length+1,value:N.length+1})),r.a.createElement("div",{class:"form-group mb-2 mx-4",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:".name"},"Costumer Name"),r.a.createElement(E.Control.text,{onChange:this.handleInputChange,model:".name",class:"formbox form-control"})),r.a.createElement("div",{class:"form-group mb-2 mx-4",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:".cat"},"Category"),r.a.createElement(E.Control.text,{model:".cat",class:"formbox form-control"})),r.a.createElement("div",{class:"form-group mb-2 mx-4",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:".tranxid"},"Transaction ID"),r.a.createElement(E.Control.text,{onChange:this.handleInputChange,model:".tranxid",class:"formbox form-control"}))),r.a.createElement(b.g,null,r.a.createElement("div",{class:"form-group mb-2",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:".amt"},"Amount Sent"),r.a.createElement(E.Control.text,{onChange:this.handleInputChange,model:".amt",class:"formbox form-control",required:!0})),r.a.createElement("div",{class:"form-group mb-2 mx-4",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:"name"},"Transaction Type"),r.a.createElement(E.Control.text,{onChange:this.handleInputChange,model:".type",class:"formbox form-control"})),r.a.createElement("div",{class:"form-group mb-2 mx-4",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:"phno"},"Pnone Number"),r.a.createElement(E.Control.text,{onChange:this.handleInputChange,model:".phno",class:"formbox form-control"}))),r.a.createElement("div",{class:"form-group mb-2",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:"other"},"Other Information"),r.a.createElement(E.Control.text,{onChange:this.handleInputChange,model:".other",class:"formbox form-control"})),r.a.createElement("hr",{style:{width:"100%"}}),r.a.createElement(b.g,{className:"form-group"},r.a.createElement(b.b,{md:{size:10,offset:2}},r.a.createElement(b.a,{type:"submit",color:"primary"},"Save Payment")))))}}]),a}(n.Component),O=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"handleChange",value:function(e){return r.a.createElement("div",null,r.a.createElement("td",null,e.cat),r.a.createElement("td",null,e.name))}},{key:"render",value:function(){var e=C.map((function(e){return r.a.createElement("tr",null,r.a.createElement("th",null,e.id),r.a.createElement("td",null,e.cat),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.totalamt),r.a.createElement("td",null,e.notranx))}));return r.a.createElement("div",{style:{paddingLeft:"40px",paddingRight:"40px",borderRadius:"12px"}},r.a.createElement("div",{className:"incanvas"},r.a.createElement("b",null,"All Payments Reports")),r.a.createElement("div",{className:"component",style:{background:"white",borderRadius:"12px",paddingLeft:"40px",paddingRight:"40px",paddingTop:"40px"}},r.a.createElement("div",null,r.a.createElement("input",{type:"text",className:" form-control-sm",placeholder:"Search"}),r.a.createElement("div",{className:"float-right"},r.a.createElement("button",{className:"button1 mx-sm-1"},"Filter"),r.a.createElement("button",{className:"button1"},"Print")))),r.a.createElement("div",{className:"component",style:{textAlign:"center"}},r.a.createElement("table",{className:"table",style:{fontSize:"15px"}},r.a.createElement("thead",null,r.a.createElement("th",{scope:"col"},"Sr No"),r.a.createElement("th",{scope:"col"},"Cat"),r.a.createElement("th",{scope:"col"},"Costumer name"),r.a.createElement("th",{scope:"col"},"Total Amount Sent"),r.a.createElement("th",{scope:"col"},"No. of Transactions")),r.a.createElement("tbody",null,e))))}}]),a}(n.Component),S=(a(139),a(17)),F=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"all"},r.a.createElement("nav",{className:"navbar navbar-light bg-light sticky-top navclass",style:{}},r.a.createElement(b.c,null,r.a.createElement("b",null,"Poultry ERP Project")),r.a.createElement("div",{className:"float-right"},r.a.createElement(f.c,{type:"button",className:"btn btn-outline-success my-2 my-sm-0 btn1 mx-sm-1",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home"),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0 btn1 mx-sm-1",type:"button"},"My Documents"),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"button"},"Logout",r.a.createElement("span",{className:"fa fa-logout fa-lg"})," "))),r.a.createElement("div",{className:"cover"},r.a.createElement("div",{class:" text-dark sidenav",style:{height:"100%",position:"fixed",top:"0",left:"0",overflowx:"hidden",paddingTop:"7rem",background:"#FFFFFF 0% 0% no-repeat padding-box"}},r.a.createElement("div",{className:""},r.a.createElement("strong",{class:"p-3 mb-2 bn1"},"Data input"),r.a.createElement("hr",{width:"50%",align:"left",style:{paddingLeft:"20%",color:"#707070"}}),r.a.createElement(f.c,{className:"sidebaritem p-2 mb-3 fa fa-home fa-lg  mx-sm-1",to:"/costumerdetails",style:{paddingTop:"20px"}},"Add Profile information"),r.a.createElement(f.c,{className:"sidebaritem p-2 mb-3 fa fa-home fa-lg  mx-sm-1",to:"/paymentdetails",style:{paddingTop:"20px"}},"Payment Transactions")),r.a.createElement("br",null),r.a.createElement("div",{className:""},r.a.createElement("strong",{class:"p-3 mb-2 bn1 "},"Reports"),r.a.createElement("hr",{width:"50%",align:"left",style:{paddingLeft:"20%",color:"#707070"}}),r.a.createElement(f.c,{className:"sidebaritem p-2 mb-3 fa fa-home fa-lg mx-sm-1",to:"/allpayments",style:{paddingTop:"20px"}},"Payment Report"))),r.a.createElement("div",{className:"main"},r.a.createElement(f.f,null,r.a.createElement(f.e,{path:"/home",component:d}),r.a.createElement(f.e,{exact:!0,path:"/costumerdetails",component:v}),r.a.createElement(f.e,{exact:!0,path:"/addcostumer",component:function(){return r.a.createElement(x,{resetFeedbackForm:e.props.resetFeedbackForm,postCostumer:e.props.postCostumer})}}),r.a.createElement(f.e,{exact:!0,path:"/paymentdetails",component:w}),r.a.createElement(f.e,{exact:!0,path:"/addpayment",component:function(){return r.a.createElement(j,{resetPaymentForm:e.props.resetPaymentForm,postCostumer:e.props.postPayment})}}),r.a.createElement(f.e,{exact:!0,path:"/allpayments",component:O}),r.a.createElement(f.d,{to:"/home"})))))}}]),a}(n.Component),k=Object(f.g)(Object(S.connect)((function(e){return{costumers:e.costumers,payments:e.payments}}),(function(e){return{resetFeedbackForm:function(){e(E.actions.reset("costumer"))},postCostumer:function(t){return e(function(e){return function(t){var a={id:h.length+1,cat:e.cat,name:e.name,addr:e.addr,phno:e.phno,warehousesno:e.warehousesno,area:e.area,warehouses:e.warehouses},n={id:h.length+1,cat:e.cat,name:e.name,totalamt:0,notranx:0};h.push(a),C.push(n)}}(t))},resetPaymentForm:function(){e(E.actions.reset("payment"))},postPayment:function(t){return e(function(e){return function(t){e.name;var a={id:N.length+1,cat:e.cat,name:e.name,tranxid:e.tranxid,amtsent:e.amt,type:e.type,phno:e.phno,otherinfo:e.other},n=C.filter((function(t){return t.name===e.name}));0==n.length?alert("No such costumer exist in your Data"):(N.push(a),C.filter((function(t){return t.name===e.name}))[0].notranx=n[0].notranx+1,C.filter((function(t){return t.name===e.name}))[0].totalamt=n[0].totalamt+parseInt(e.amt))}}(t))}}}))(F)),P=a(14),z=a(18),R=a(85),A=a.n(R),T=a(86),I=a.n(T),W={sno:"",id:"",cat:"",name:"",addr:"",phno:"",warehousesno:0,area:[],warehouses:[]},V={sno:"",id:"",cat:"",name:"",tranxid:"",amt:"",type:"",phno:"",other:""},D=Object(z.createStore)(Object(z.combineReducers)(Object(P.a)({Costumers:h,Payments:N},Object(E.createForms)({costumer:W,payment:V}))),Object(z.applyMiddleware)(A.a,I.a)),L=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(S.Provider,{store:D},r.a.createElement(f.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossorigin:"anonymous"}),r.a.createElement("link",{href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet",integrity:"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",crossorigin:"anonymous"}),r.a.createElement(k,null),r.a.createElement("script",{src:"https://code.jquery.com/jquery-3.3.1.slim.min.js",integrity:"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",crossorigin:"anonymous"}),r.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",integrity:"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1",crossorigin:"anonymous"}),r.a.createElement("script",{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",integrity:"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM",crossorigin:"anonymous"}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,a){},88:function(e,t,a){e.exports=a(140)},93:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.037193b8.chunk.js.map