(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),s=n.n(a),o=(n(16),n(6)),l=n(11),i=n(2),d=n(0),u=function(e){var t=e.text;return Object(d.jsx)("p",{style:{color:"red",fontWeight:"lighter",fontSize:".9rem"},children:t})},j=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(""),l=Object(i.a)(o,2),j=l[0],m=l[1],b=Object(c.useState)(!1),O=Object(i.a)(b,2),f=O[0],h=O[1],k=Object(c.useState)(!1),x=Object(i.a)(k,2),g=x[0],v=x[1];return Object(d.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),[a,j].includes("")?v(!0):(v(!1),t({id:Math.floor(1e4*Math.random()+1),text:a,day:j,reminder:f}),s(""),m(""),h(!1))},children:[g&&Object(d.jsx)(u,{text:"Please Fill All Parameters"}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Task"}),Object(d.jsx)("input",{type:"text",placeholder:"Add task",onChange:function(e){s(e.target.value)},value:a})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Day"}),Object(d.jsx)("input",{type:"text",placeholder:"Add day and time",onChange:function(e){m(e.target.value)},value:j})]}),Object(d.jsxs)("div",{className:"form-control form-control-check",children:[Object(d.jsx)("label",{children:"Reminder"}),Object(d.jsx)("input",{type:"checkbox",onChange:function(e){h(e.currentTarget.checked)},checked:f})]}),Object(d.jsx)("input",{className:"btn  btn-block",type:"submit",value:"Add task"})]})},m=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(d.jsx)("button",{style:{backgroundColor:t},onClick:c,className:"btn",children:n})};m.defaultProps={color:"steelblue"};var b=m,O=function(e){var t=e.title,n=e.toggleTaskForm,c=e.showForm;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:t}),Object(d.jsx)(b,{color:c?"red":"green",text:c?"Close":"Add",onClick:n})]})};O.defaultProps={title:"Task Tracker"};var f=O,h=n(10),k=function(e){var t=e.task,n=e.toggleReminder,c=e.removeTask;return Object(d.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){n(t.id)},children:[Object(d.jsxs)("h3",{children:[t.text," ",Object(d.jsx)(h.a,{onClick:function(){c(t.id)},style:{color:"red"}})]}),Object(d.jsx)("p",{children:t.day})]})},x=function(e){var t=e.tasks,n=e.toggleReminder,c=e.removeTask;return Object(d.jsx)("div",{children:t.map((function(e){return Object(d.jsx)(k,{task:e,removeTask:c,toggleReminder:n},e.id)}))})},g=n(8),v=n(9),p=function(){function e(){Object(g.a)(this,e)}return Object(v.a)(e,null,[{key:"getItems",value:function(e){var t;return t=null===localStorage.getItem(e)?[]:JSON.parse(localStorage.getItem(e)),console.log(t),t}},{key:"storeItem",value:function(t,n){var c=e.getItems(t);c.push(n),e.setItem(t,c),console.log(c)}},{key:"deleteItem",value:function(t,n){var c=e.getItems(t).filter((function(e){return e.id!==n}));e.setItem(c)}},{key:"setItem",value:function(e,t){localStorage.setItem(e,JSON.stringify(t))}}]),e}(),y=function(){var e=Object(c.useState)(p.getItems("tasks")),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(i.a)(a,2),u=s[0],m=s[1];return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(f,{toggleTaskForm:function(){m(!u)},showForm:u}),u&&Object(d.jsx)(j,{onAdd:function(e){var t=e;p.storeItem("tasks",e),r([].concat(Object(l.a)(n),[t]))}}),0===n.length?"Add a task...":Object(d.jsx)(x,{tasks:n,removeTask:function(e){r(n.filter((function(t){return t.id!==e}))),p.deleteItem("tasks",e)},toggleReminder:function(e){r(n.map((function(t){return t.id===e?Object(o.a)(Object(o.a)({},t),{},{reminder:!t.reminder}):t})));var t=p.getItems("tasks");t.forEach((function(n){n.id===e&&(n.reminder=!n.reminder,p.setItem("tasks",t))}))}})]})};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.19bb1bc2.chunk.js.map