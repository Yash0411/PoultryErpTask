(this.webpackJsonppoultry=this.webpackJsonppoultry||[]).push([[0],{141:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(18),s=a.n(o),l=(a(94),a(10)),c=a(11),m=a(13),i=a(12),u=(a(26),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{paddingLeft:"40px",paddingRight:"40px",borderRadius:"12px",fontSize:"20px"}},"HOME",r.a.createElement("br",null),"This is a demo website Hosted for submission Task Porpose comprising the elements at front end.",r.a.createElement("br",null),"Modifications can be bade and the pages can be made more Dynamic as per we need.",r.a.createElement("br",null),"Frontend is not connected to a permanent database as the application is for trial purposes and hence prevent the database accumulation at this point but the code is ready and is in the commented format in the action creaters file.",r.a.createElement("br",null),"Alerts are defined at various places in order to verify the pushed data.")}}]),a}(n.Component)),d=a(23),p=a(16),h=a(3),f=[{id:"1",cat:"Vendor",name:"Costumer1",addr:"Address",phno:"PhNo",warehousesno:2,area:"234sft",warehouses:["Warehouse 1","Warehouse 1"],payments:[{tranxid:"t1"},{tranxid:"t2"},{tranxid:"t3"}]},{id:"2",cat:"Vendor",name:"Costumer2",addr:"Address",phno:"PhNo",warehousesno:2,area:"234sft",warehouses:["Warehouse 1","Warehouse 1"],payments:[{tranxid:"t1"},{tranxid:"t2"},{tranxid:"t3"}]},{id:"3",cat:"Vendor",name:"Costumer3",addr:"Address",phno:"PhNo",warehousesno:2,area:"234sft",warehouses:["Warehouse 1","Warehouse 1"],payments:[{tranxid:"t1"},{tranxid:"t2"},{tranxid:"t3"}]},{id:"4",cat:"Vendor",name:"Costumer4",addr:"Address",phno:"PhNo",warehousesno:2,area:"234sft",warehouses:["Warehouse 1","Warehouse 1"],payments:[{tranxid:"t1"},{tranxid:"t2"},{tranxid:"t3"}]},{id:"5",cat:"Vendor",name:"Costumer5",addr:"Address",phno:"PhNo",warehousesno:2,area:"234sft",warehouses:["Warehouse 1","Warehouse 1"],payments:[["t1,25"],["t2,25"]]},{id:"6",cat:"Vendor",name:"Costumer6",addr:"Address",phno:"PhNo",warehousesno:2,area:"234sft",warehouses:["Warehouse 1","Warehouse 1"],payments:[{tranxid:"t1"},{tranxid:"t2"},{tranxid:"t3"}]}],b="https://poultryerp.herokuapp.com/",E=function(){return function(e){return e({type:"COSTUMERS_LOADING"}),fetch(b+"costumers").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.errorMessage)})).then((function(e){return e.json()})).then((function(t){return e({type:"ADD_COSTUMERS",payload:t})})).catch((function(t){return e({type:"COSTUMERS_FAILED",payload:t.message})}))}},g=function(){return function(e){return e({type:"PAYMENTS_LOADING"}),fetch(b+"payments").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.errorMessage)})).then((function(e){return e.json()})).then((function(t){return e({type:"ADD_PAYMENTS",payload:t})})).catch((function(t){return e({type:"PAYMENTS_FAILED",payload:t.message})}))}},y=function(e){return function(t){var a={image:e};return fetch(b+"images",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return alert("Image Added!")})).catch((function(e){console.log("post Image",e.message),alert("Your Image could not be posted\nError: "+e.message)}))}},x=a(7),v=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={file:"",imagePreviewUrl:""},n._handleImageChange=n._handleImageChange.bind(Object(p.a)(n)),n._handleSubmit=n._handleSubmit.bind(Object(p.a)(n)),n.getimages=n.getimages.bind(Object(p.a)(n)),n}return Object(c.a)(a,[{key:"getimages",value:function(){this.props.fetchImages()}},{key:"_handleSubmit",value:function(e){this.props.postImages(this.state.imagePreviewUrl),document.getElementById("form-input").reset(),this.setState({file:"",imagePreviewUrl:""}),e.preventDefault()}},{key:"_handleImageChange",value:function(e){var t=this;e.preventDefault();var a=new FileReader,n=e.target.files[0];a.onloadend=function(){t.setState({file:n,imagePreviewUrl:a.result})},a.readAsDataURL(n)}},{key:"render",value:function(){var e=this.state.imagePreviewUrl;var t=this.props.images.images.map((function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:e.image,height:"100",width:"100",style:{paddingTop:"50px"},alt:"This is in .pdf format"}))}));return r.a.createElement("div",{style:{paddingLeft:"40px",paddingRight:"40px",paddingBottom:"50px",borderRadius:"12px"}},r.a.createElement("div",{className:"incanvas"},r.a.createElement("b",null,"Images Upload")),r.a.createElement("div",{className:"component",style:Object(d.a)({fontSize:"20px",borderRadius:"12px",paddingLeft:"40px",paddingRight:"40px",paddingTop:"40px"},"borderRadius","50px")},r.a.createElement("form",{onSubmit:this._handleSubmit,id:"form-input"},r.a.createElement("input",{className:"buttonimg",type:"file",onChange:this._handleImageChange,required:!0}),r.a.createElement("button",{className:"buttonimg",type:"submit",onClick:this._handleSubmit},"Upload File")),r.a.createElement("img",{src:this.state.imagePreviewUrl}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("button",{className:"buttonimg",onClick:this.getimages},"See Uploaded Files"),t)))}}]),a}(n.Component),O=Object(h.g)(Object(x.connect)((function(e){return{images:e.Images}}),(function(e){return{postImages:function(t){e(y(t))},fetchImages:function(){e((function(e){return e({type:"IMAGES_LOADING"}),fetch(b+"images").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.errorMessage)})).then((function(e){return e.json()})).then((function(t){return e({type:"ADD_IMAGES",payload:t})})).catch((function(t){return e({type:"IMAGES_FAILED",payload:t.message})}))}))}}}))(v)),C=a(8),N=a(5),j=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={arr:[0,1,2],number:3},n.handleInputChange=n.handleInputChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n.add=n.add.bind(Object(p.a)(n)),n}return Object(c.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(d.a)({},n,a))}},{key:"handleSubmit",value:function(e){alert(JSON.stringify(e)),this.props.postCostumer(e),this.props.resetFeedbackForm(),this.props.fetchCostumers(),this.setState({number:this.state.number+1})}},{key:"add",value:function(){this.state.arr.push(this.state.number),this.setState({number:this.state.number+1})}},{key:"render",value:function(){var e=this.state.arr.map((function(e){return r.a.createElement(C.g,{className:"form-group mb-2 formrow"},r.a.createElement("div",{class:"form-group mb-2 ",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:"warehouses"},"Warehouse Name"),r.a.createElement(N.Control.text,{model:".warehouses[".concat(e,"]"),class:"formbox form-control"})),r.a.createElement("div",{class:"form-group mb-2 mx-4 float-right",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:""},"Area"),r.a.createElement(N.Control.text,{model:".area[".concat(e,"]"),class:"formbox form-control"})))}));return r.a.createElement("div",{style:{paddingLeft:"40px",paddingRight:"40px",paddingBottom:"40px",borderRadius:"12px"}},r.a.createElement("div",{className:"incanvas",style:{}},r.a.createElement("b",null,"Add Costumer Details"),r.a.createElement(h.b,{type:"button",className:"topbutton float-right",to:"/costumerdetails"},"Save")),r.a.createElement("div",{style:{background:"white",borderRadius:"12px",paddingLeft:"40px",paddingRight:"40px",paddingTop:"40px"}},r.a.createElement(N.Form,{onSubmit:this.handleSubmit,model:"costumer"},r.a.createElement(C.g,{className:"form-group mb-2 formrow"},r.a.createElement("div",{class:"form-group mb-2",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:"sno"},"S.no"),r.a.createElement(N.Control.text,{model:".sno",class:"formbox form-control",placeholder:this.props.len+1,value:this.props.len+1})),r.a.createElement("div",{class:"form-group mb-2 mx-4",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:"name"},"Costumer Name"),r.a.createElement(N.Control.text,{onChange:this.handleInputChange,model:".name",class:"formbox form-control"})),r.a.createElement("div",{class:"form-group mb-2 mx-4",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:"cat"},"Category"),r.a.createElement(N.Control.text,{model:".cat",class:"formbox form-control"})),r.a.createElement("div",{class:"form-group mb-2 mx-4",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:"addr"},"Address"),r.a.createElement(N.Control.text,{model:".addr",class:"formbox form-control"}))),r.a.createElement(C.g,{className:"form-group mb-2 formrow"},r.a.createElement("div",{class:"form-group mb-2",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:"phno"},"Contact Number"),r.a.createElement(N.Control.text,{model:".phno",class:"formbox form-control"})),r.a.createElement("div",{class:"form-group mb-2 mx-4",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:"warehouseno"},"Number Of Warehouses"),r.a.createElement(N.Control.text,{model:".warehouseno",class:"formbox form-control"}))),r.a.createElement("hr",{style:{width:"100%"}}),r.a.createElement("div",{className:"form-group mb-2 formrow"},r.a.createElement("h3",{style:{textAlign:"center"}},"Add Warehouses"),e),r.a.createElement(C.g,{alignSelf:"center",style:{alignSelf:"center"}},r.a.createElement(C.b,{md:{size:10,offset:2}},r.a.createElement("button",{onMouseDown:this.add,className:"button2 form-group",style:{width:"20%",alignSelf:"center"}}," + Add Warehouse"))),r.a.createElement(C.g,{className:"form-group"},r.a.createElement(C.b,{md:{size:10,offset:2}},r.a.createElement(C.a,{type:"submit",color:"primary"},"Save"))))))}}]),a}(n.Component),S=Object(h.g)(Object(x.connect)((function(e){return{costumers:e.Costumers}}),(function(e){return{fetchCostumers:function(){e(E())}}}))(j)),w=a(88),A=function(e){var t=e.costumer1.warehouses.map((function(e){return r.a.createElement("div",null,r.a.createElement("strong",null,e))})),a=Object(n.useState)(!1),o=Object(w.a)(a,2),s=o[0],l=o[1],c=function(){return l(!s)};return r.a.createElement("div",null,r.a.createElement("div",{id:e.costumer1.name,type:"button",onClick:c},r.a.createElement("b",null,"View")),r.a.createElement(C.d,{placement:"bottom",isOpen:s,target:e.costumer1.name,toggle:c},r.a.createElement(C.f,null,"Warehouses"),r.a.createElement(C.e,null,t)))},I=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(c.a)(a,[{key:"handleChange",value:function(e){return r.a.createElement("div",null,r.a.createElement("td",null,e.cat),r.a.createElement("td",null,e.name))}},{key:"render",value:function(){var e=this,t=this.props.costumers.costumers.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("th",null,r.a.createElement("input",{type:"checkbox",className:"m-1",onChange:e.handleChange(t)}),t.id),r.a.createElement("td",null,t.cat),r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.addr),r.a.createElement("td",null,t.phno),r.a.createElement("td",null,t.warehouses.length),r.a.createElement("td",null,r.a.createElement(A,{costumer1:t,key:t.id})),r.a.createElement("td",null,t.area))}));return r.a.createElement("div",{style:{paddingLeft:"40px",paddingRight:"40px",borderRadius:"12px"}},r.a.createElement("div",{className:"incanvas"},r.a.createElement("strong",null,"Costumer Details"),r.a.createElement(h.b,{type:"button",className:"topbutton float-right",to:"/addcostumer"},"Add New")),r.a.createElement("div",{className:"component",style:{borderRadius:"12px",paddingLeft:"40px",paddingRight:"40px",paddingTop:"40px"}},r.a.createElement("div",null,r.a.createElement("input",{type:"text",className:" form-control-sm",placeholder:"Search"}),r.a.createElement("div",{className:"float-right"},r.a.createElement("button",{className:"button2 mx-sm-1"},"Save"),r.a.createElement("button",{className:"button1 mx-sm-1"},"Delete"),r.a.createElement("button",{className:"button1 mx-sm-1"},"Edit"),r.a.createElement("button",{className:"button1 mx-sm-1"},"Filter"),r.a.createElement("button",{className:"button1"},"Print")))),r.a.createElement("div",{className:"component",style:{textAlign:"center"}},r.a.createElement("table",{className:"table",style:{fontSize:"15px"}},r.a.createElement("thead",null,r.a.createElement("th",{scope:"col"},"Sr No"),r.a.createElement("th",{scope:"col"},"Cat"),r.a.createElement("th",{scope:"col"},"Costumer name"),r.a.createElement("th",{scope:"col"},"Address"),r.a.createElement("th",{scope:"col"},"Contant No"),r.a.createElement("th",{scope:"col"},"No Of Warehouses"),r.a.createElement("th",{scope:"col"},"Warehouse Name"),r.a.createElement("th",{scope:"col"},"Area")),r.a.createElement("tbody",null,t))))}}]),a}(n.Component),k=Object(h.g)(Object(x.connect)((function(e){return{zostumers:e.Costumers}}),(function(e){return{fetchCostumers:function(){e(E())}}}))(I)),P=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"handleChange",value:function(e){return r.a.createElement("div",null,r.a.createElement("td",null,e.cat),r.a.createElement("td",null,e.name))}},{key:"componentDidMount",value:function(){this.props.fetchPayments()}},{key:"render",value:function(){var e=this.props.payments.payments.map((function(e){return r.a.createElement("tr",null,r.a.createElement("th",null,e.id),r.a.createElement("td",null,e.cat),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.tranxid),r.a.createElement("td",null,e.phno),r.a.createElement("td",null,e.amtsent),r.a.createElement("td",null,e.type),r.a.createElement("td",null,e.otherinfo))}));return r.a.createElement("div",{style:{paddingLeft:"40px",paddingRight:"40px",borderRadius:"12px"}},r.a.createElement("div",{className:"incanvas"},r.a.createElement("b",null,"Payment Details"),r.a.createElement(h.b,{type:"button",className:"topbutton float-right",to:"/addpayment"},"Add New")),r.a.createElement("div",{className:"component",style:{background:"white",borderRadius:"12px",paddingLeft:"40px",paddingRight:"40px",paddingTop:"40px"}},r.a.createElement("div",null,r.a.createElement("input",{type:"text",className:" form-control-sm",placeholder:"Search"}),r.a.createElement("div",{className:"float-right"},r.a.createElement("button",{className:"button2 mx-sm-1"},"Save"),r.a.createElement("button",{className:"button1 mx-sm-1"},"Delete"),r.a.createElement("button",{className:"button1 mx-sm-1"},"Edit"),r.a.createElement("button",{className:"button1 mx-sm-1"},"Filter"),r.a.createElement("button",{className:"button1 mx-sm-1"},"Print")))),r.a.createElement("div",{className:"component",style:{textAlign:"center"}},r.a.createElement("table",{className:"table",style:{fontSize:"15px"}},r.a.createElement("thead",null,r.a.createElement("th",{scope:"col"},"Sr No"),r.a.createElement("th",{scope:"col"},"Cat"),r.a.createElement("th",{scope:"col"},"Costumer name"),r.a.createElement("th",{scope:"col"},"Tranx ID"),r.a.createElement("th",{scope:"col"},"Contant No"),r.a.createElement("th",{scope:"col"},"Amount sent"),r.a.createElement("th",{scope:"col"},"Transaction Type"),r.a.createElement("th",{scope:"col"},"Other Information")),r.a.createElement("tbody",null,e))))}}]),a}(n.Component),T=Object(h.g)(Object(x.connect)((function(e){return{payments:e.Payments}}),(function(e){return{fetchPayments:function(){e(g())}}}))(P)),F=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n.handleInputChange=n.handleInputChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(c.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(d.a)({},n,a))}},{key:"handleSubmit",value:function(e){alert(JSON.stringify(e)),this.props.postCostumer(e),this.props.fetchPayments(),this.props.resetPaymentForm()}},{key:"render",value:function(){return r.a.createElement("div",{style:{paddingLeft:"40px",paddingRight:"40px",borderRadius:"12px"}},r.a.createElement("div",{className:"incanvas",style:{}},r.a.createElement("b",null,"Add Payment Details"),r.a.createElement(h.b,{type:"button",className:"topbutton float-right",to:"/paymentdetails"},"Save")),r.a.createElement(N.Form,{onSubmit:this.handleSubmit,model:"payment",style:{background:"white",borderRadius:"12px",paddingLeft:"40px",paddingRight:"40px",paddingTop:"40px"}},r.a.createElement(C.g,null,r.a.createElement("div",{class:"form-group mb-2",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:".sno"},"S.no"),r.a.createElement(N.Control.text,{onChange:this.handleInputChange,model:".sno",class:"formbox form-control",placeholder:this.props.len+1,value:this.props.len+1})),r.a.createElement("div",{class:"form-group mb-2 mx-4",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:".name"},"Costumer Name"),r.a.createElement(N.Control.text,{onChange:this.handleInputChange,model:".name",class:"formbox form-control"})),r.a.createElement("div",{class:"form-group mb-2 mx-4",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:".cat"},"Category"),r.a.createElement(N.Control.text,{model:".cat",class:"formbox form-control"})),r.a.createElement("div",{class:"form-group mb-2 mx-4",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:".tranxid"},"Transaction ID"),r.a.createElement(N.Control.text,{onChange:this.handleInputChange,model:".tranxid",class:"formbox form-control"}))),r.a.createElement(C.g,null,r.a.createElement("div",{class:"form-group mb-2",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:".amt"},"Amount Sent"),r.a.createElement(N.Control.text,{onChange:this.handleInputChange,model:".amt",class:"formbox form-control",required:!0})),r.a.createElement("div",{class:"form-group mb-2 mx-4",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:"name"},"Transaction Type"),r.a.createElement(N.Control.text,{onChange:this.handleInputChange,model:".type",class:"formbox form-control"})),r.a.createElement("div",{class:"form-group mb-2 mx-4",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:"phno"},"Pnone Number"),r.a.createElement(N.Control.text,{onChange:this.handleInputChange,model:".phno",class:"formbox form-control"}))),r.a.createElement("div",{class:"form-group mb-2",style:{fontSize:"15px"}},r.a.createElement("label",{htmlFor:"other"},"Other Information"),r.a.createElement(N.Control.text,{onChange:this.handleInputChange,model:".other",class:"formbox form-control"})),r.a.createElement("hr",{style:{width:"100%"}}),r.a.createElement(C.g,{className:"form-group"},r.a.createElement(C.b,{md:{size:10,offset:2}},r.a.createElement(C.a,{type:"submit",color:"primary"},"Save Payment")))))}}]),a}(n.Component),D=Object(h.g)(Object(x.connect)((function(e){return{payments:e.Payments}}),(function(e){return{fetchPayments:function(){e(g())}}}))(F)),M=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n.refresh=n.refresh.bind(Object(p.a)(n)),n}return Object(c.a)(a,[{key:"refresh",value:function(){this.props.fetchCostumers()}},{key:"render",value:function(){var e=this.props.costumers.costumers.map((function(e){return r.a.createElement("tr",null,r.a.createElement("th",null,e.id),r.a.createElement("td",null,e.cat),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.totalamt),r.a.createElement("td",null,e.notranx))}));return r.a.createElement("div",{style:{paddingLeft:"40px",paddingRight:"40px",borderRadius:"12px"}},r.a.createElement("div",{className:"incanvas"},r.a.createElement("b",null,"All Payments Reports")),r.a.createElement("div",{className:"component",style:{background:"white",borderRadius:"12px",paddingLeft:"40px",paddingRight:"40px",paddingTop:"40px"}},r.a.createElement("div",null,r.a.createElement("input",{type:"text",className:" form-control-sm",placeholder:"Search"}),r.a.createElement("div",{className:"float-right"},r.a.createElement("button",{className:"button2 mx-sm-1",onClick:this.refresh},"Refresh"),r.a.createElement("button",{className:"button1 mx-sm-1"},"Filter"),r.a.createElement("button",{className:"button1"},"Print")))),r.a.createElement("div",{className:"component",style:{textAlign:"center"}},r.a.createElement("table",{className:"table",style:{fontSize:"15px"}},r.a.createElement("thead",null,r.a.createElement("th",{scope:"col"},"Sr No"),r.a.createElement("th",{scope:"col"},"Cat"),r.a.createElement("th",{scope:"col"},"Costumer name"),r.a.createElement("th",{scope:"col"},"Total Amount Sent"),r.a.createElement("th",{scope:"col"},"No. of Transactions")),r.a.createElement("tbody",null,e))))}}]),a}(n.Component),R=Object(h.g)(Object(x.connect)((function(e){return{costumers:e.Costumers}}),(function(e){return{fetchCostumers:function(){e(E())}}}))(M)),L=a(25),z=(a(140),function(){return r.a.createElement("p",{style:{padding:"18px"},className:"dummy"},">>\xa0\xa0Costumer Details")}),_=function(){return r.a.createElement("p",{style:{padding:"18px"},className:"dummy"},">>\xa0\xa0Payment Details")},W=function(){return r.a.createElement("div",null,r.a.createElement(L.Accordion,{atomic:!0},r.a.createElement(L.AccordionItem,{type:"button",title:r.a.createElement(h.c,{type:"button",className:"sidebaritem p-2 mb-3 fa fa-home ",to:"/costumerdetails",style:{paddingTop:"20px"}},"Add Profile information"),className:" p-2 mb-3 fa fa-home fa-lg  mx-sm-1",style:{paddingTop:"20px"}},r.a.createElement(z,null)),r.a.createElement(L.AccordionItem,{type:"button",title:r.a.createElement(h.c,{type:"button",className:"sidebaritem p-2 mb-3 fa fa-home ",to:"/paymentdetails",style:{paddingTop:"20px"}},"Payment Transactions"),className:"sidebaritem p-2 mb-3 fa fa-home fa-lg  mx-sm-1",style:{paddingTop:"20px"}},r.a.createElement(_,null))))},U=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchCostumers(),this.props.fetchPayments()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"all"},r.a.createElement("nav",{className:"navbar navbar-light bg-light sticky-top navclass",style:{}},r.a.createElement(C.c,null,r.a.createElement("b",null,"Poultry ERP Project")),r.a.createElement("div",{className:"float-right"},r.a.createElement(h.c,{type:"button",className:"btn btn-outline-success my-2 my-sm-0 btn1 mx-sm-1",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home"),r.a.createElement(h.c,{className:"btn btn-outline-success my-2 my-sm-0 btn1 mx-sm-1",to:"/upload",type:"button"},"My Documents"),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"button"},"Logout",r.a.createElement("span",{className:"fa fa-logout fa-lg"})," "))),r.a.createElement("div",{className:"cover"},r.a.createElement("div",{class:" text-dark sidenav",style:{height:"100%",position:"fixed",top:"0",left:"0",overflowx:"hidden",paddingTop:"7rem",background:"#FFFFFF 0% 0% no-repeat padding-box"}},r.a.createElement("div",{className:""},r.a.createElement("strong",{class:"p-3 mb-2 bn1"},"Data input"),r.a.createElement("hr",{width:"50%",align:"left",style:{paddingLeft:"20%",color:"#707070"}}),r.a.createElement(W,null)),r.a.createElement("br",null),r.a.createElement("div",{className:""},r.a.createElement("strong",{class:"p-3 mb-2 bn1 "},"Reports"),r.a.createElement("hr",{width:"50%",align:"left",style:{paddingLeft:"20%",color:"#707070"}}),r.a.createElement(L.Accordion,{atomic:!0},r.a.createElement(L.AccordionItem,{type:"button",title:r.a.createElement(h.c,{type:"button",className:"sidebaritem p-2 mb-3 fa fa-home ",to:"/allpayments",style:{paddingTop:"20px"}},"Add Profile information"),className:" p-2 mb-3 fa fa-home fa-lg  mx-sm-1",style:{paddingTop:"20px"}}," ")))),r.a.createElement("div",{className:"main"},r.a.createElement(h.f,null,r.a.createElement(h.e,{path:"/home",component:u}),r.a.createElement(h.e,{exact:!0,path:"/costumerdetails",component:function(){return r.a.createElement(k,{costumers:e.props.costumers})}}),r.a.createElement(h.e,{exact:!0,path:"/addcostumer",component:function(){return r.a.createElement(S,{len:e.props.costumers.costumers.length,resetFeedbackForm:e.props.resetFeedbackForm,postCostumer:e.props.postCostumer})}}),r.a.createElement(h.e,{exact:!0,path:"/paymentdetails",component:function(){return r.a.createElement(T,{payments:e.props.payments})}}),r.a.createElement(h.e,{exact:!0,path:"/addpayment",component:function(){return r.a.createElement(D,{len:e.props.payments.payments.length,resetPaymentForm:e.props.resetPaymentForm,postCostumer:e.props.postPayment})}}),r.a.createElement(h.e,{exact:!0,path:"/allpayments",component:R}),r.a.createElement(h.e,{path:"/upload",component:O}),r.a.createElement(h.d,{to:"/home"})))))}}]),a}(n.Component),J=Object(h.g)(Object(x.connect)((function(e){return{costumers:e.Costumers,payments:e.Payments,images:e.Images}}),(function(e){return{fetchCostumers:function(){e(E())},fetchPayments:function(){e(g())},resetFeedbackForm:function(){e(N.actions.reset("costumer"))},postCostumer:function(t){return e(function(e){return function(t){var a={id:e.sno,cat:e.cat,name:e.name,addr:e.addr,phno:e.phno,warehousesno:e.warehousesno,area:e.area,warehouses:e.warehouses,totalamt:0,notranx:0};return f.push(a),fetch(b+"costumers",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return alert("Costumer Added!"+JSON.stringify(e))})).catch((function(e){console.log("post Costumer",e.message),alert("Your Costumer could not be posted\nError: "+e.message)}))}}(t))},resetPaymentForm:function(){e(N.actions.reset("payment"))},postPayment:function(t){return e(function(e){return function(t){e.name;var a={id:e.sno,cat:e.cat,name:e.name,tranxid:e.tranxid,amtsent:e.amt,type:e.type,phno:e.phno,otherinfo:e.other};return fetch(b+"costumers/").then((function(e){return e.json()})).then((function(t){try{var n=t.filter((function(t){return t.name==e.name}))[0];if(!n)throw 1;fetch(b+"costumers/"+n.id,{method:"PATCH",body:JSON.stringify({notranx:n.notranx+1,totalamt:n.totalamt+parseInt(e.amt)}),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return alert("Costumer DaTa Updated!"+JSON.stringify(e))})).then((function(e){fetch(b+"payments",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return alert("Payment Added!"+JSON.stringify(e))})).catch((function(e){console.log("post Payment",e.message),alert("Your Payment could not be posted\nError: "+e.message)}))})).catch((function(e){console.log("Update Costumer",e.message),alert("Your Costumer Data could not be updated\nError: "+e.message)}))}catch(r){alert("No such Costumer exists in the database")}}))}}(t))},postImages:function(t){return e(y(t))}}}))(U)),V=a(6),G=a(20),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,costumers:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COSTUMERS":return Object(V.a)(Object(V.a)({},e),{},{isLoading:!1,errMess:null,costumers:t.payload});case"COSTUMERS_FAILED":return Object(V.a)(Object(V.a)({},e),{},{isLoading:!0,errMess:null,costumers:[]});case"UPDATE_COSTUMERS":return Object(V.a)(Object(V.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,payments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PAYMENTS":return Object(V.a)(Object(V.a)({},e),{},{errMess:null,payments:t.payload});case"PAYMENTS_FAILED":return Object(V.a)(Object(V.a)({},e),{},{errMess:t.payload});case"ADD_PAYMENTS":var a=t.payload;return a.id=e.payments.length,a.date=(new Date).toISOString(),Object(V.a)(Object(V.a)({},e),{},{payments:e.payments.concat(a)});default:return e}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,images:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_IMAGES":return Object(V.a)(Object(V.a)({},e),{},{isLoading:!1,errMess:null,images:t.payload});case"IMAGES_FAILED":return Object(V.a)(Object(V.a)({},e),{},{isLoading:!0,errMess:null,images:[]});case"IMAGES_LOADING":return Object(V.a)(Object(V.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},q=a(86),B=a.n(q),X=a(87),Z=a.n(X),K={sno:"",id:"",cat:"",name:"",addr:"",phno:"",warehousesno:0,area:[],warehouses:[]},$={sno:"",id:"",cat:"",name:"",tranxid:"",amt:"",type:"",phno:"",other:""},ee={img:""},te=Object(G.createStore)(Object(G.combineReducers)(Object(V.a)({Costumers:Y,Payments:H,Images:Q},Object(N.createForms)({costumer:K,payment:$,image:ee}))),Object(G.applyMiddleware)(B.a,Z.a)),ae=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(x.Provider,{store:te},r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossorigin:"anonymous"}),r.a.createElement("link",{href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet",integrity:"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",crossorigin:"anonymous"}),r.a.createElement(J,null),r.a.createElement("script",{src:"https://code.jquery.com/jquery-3.3.1.slim.min.js",integrity:"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",crossorigin:"anonymous"}),r.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",integrity:"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1",crossorigin:"anonymous"}),r.a.createElement("script",{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",integrity:"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM",crossorigin:"anonymous"}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},26:function(e,t,a){},89:function(e,t,a){e.exports=a(141)},94:function(e,t,a){}},[[89,1,2]]]);
//# sourceMappingURL=main.e7eb4e35.chunk.js.map