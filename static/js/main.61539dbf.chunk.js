(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(t,e,a){t.exports={balance:"Balance_balance__1Cpse"}},18:function(t,e,a){t.exports=a(34)},2:function(t,e,a){t.exports={history:"TransactionHistory_history__GkB-f",th:"TransactionHistory_th__1eeEH",td:"TransactionHistory_td__vslbM"}},34:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),o=a(3),c=a.n(o),l=a(10),s=a(12),u=a(13),i=a(16),m=a(14),d=a(17),h=a(9),p=a.n(h),b=a(8),f=(a(31),a(5)),E=a.n(f),y=function(t){var e=t.handleWithdraw,a=t.handleDeposit,n=t.amount,o=t.handleTakeValue;return r.a.createElement("section",{className:E.a.controls},r.a.createElement("input",{className:E.a.input,type:"number",name:"amount",value:n,onChange:o}),r.a.createElement("button",{className:E.a.button,type:"button",name:"Deposit",onClick:a},"Deposit"),r.a.createElement("button",{className:E.a.button,type:"button",name:"Withdrow",onClick:e},"Withdraw"))},w=a(15),_=a.n(w),v=function(t){var e=t.balance,a=t.amountDeposit,n=t.amoutntWithdraw;return r.a.createElement("section",{className:_.a.balance},r.a.createElement("span",null,r.a.createElement("span",{role:"img","aria-label":"money bag"},"\ud83d\udcb0"),a,"$"),r.a.createElement("span",null,r.a.createElement("span",{role:"img","aria-label":"loudly crying face"},"\ud83d\ude2d"),n,"$"),r.a.createElement("span",null,"Balance: ",e,"$"))},N=a(2),g=a.n(N),S=function(t){var e=t.transactions;return r.a.createElement("table",{className:g.a.history},r.a.createElement("thead",{className:g.a.thead},r.a.createElement("tr",null,r.a.createElement("th",{className:g.a.th},"Transaction"),r.a.createElement("th",{className:g.a.th},"Amount"),r.a.createElement("th",{className:g.a.th},"Date"))),r.a.createElement("tbody",null,e.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",{className:g.a.td},t.type),r.a.createElement("td",{className:g.a.td},t.amount,"$"),r.a.createElement("td",{className:g.a.td},t.date))}))))},k=function(){return b.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!",{containerId:"A"})},A=function(){return b.b.error("\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!",{containerId:"B"})},D=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).state={transactions:[],balance:0,amount:"",deposit:0,withdraw:0},a.handleTakeAmount=function(t){a.setState({amount:t.target.value})},a.handleDeposit=function(t){var e=a.state,n=e.balance,r=e.amount,o=e.deposit,c=t.target.name;if("0"===r||""===r)k(),a.cleanInputAmount();else{var s=n+Number(r);a.setState((function(t){return{balance:s}}));var u={type:c,id:p.a.generate(),amount:r,date:(new Date).toLocaleString("en-US",{hour12:!1})};a.setState((function(t){return{transactions:[].concat(Object(l.a)(t.transactions),[u])}})),a.setState((function(t){return{deposit:o+Number(u.amount)}})),a.cleanInputAmount()}},a.handleWithdraw=function(t){var e=a.state,n=e.balance,r=e.amount,o=e.withdraw,c=t.target.name;if(r>n)A(),a.cleanInputAmount();else if("0"===r||""===r)k(),a.cleanInputAmount();else{var s=n-Number(r);a.setState((function(t){return{balance:s}}));var u={type:c,id:p.a.generate(),amount:r,date:(new Date).toLocaleString("en-US",{hour12:!1})};a.setState((function(t){return{transactions:[].concat(Object(l.a)(t.transactions),[u])}})),a.setState((function(t){return{withdraw:o+Number(u.amount)}})),a.cleanInputAmount()}},a.cleanInputAmount=function(){a.setState((function(t){return{amount:""}}))},a}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.state,e=t.amount,a=t.transactions,n=t.balance,o=t.deposit,c=t.withdraw;return r.a.createElement("div",{className:"dashboard"},r.a.createElement(b.a,null),r.a.createElement(y,{handleDeposit:this.handleDeposit,handleWithdraw:this.handleWithdraw,amount:e,handleTakeValue:this.handleTakeAmount}),r.a.createElement(v,{balance:n,amountDeposit:o,amoutntWithdraw:c}),r.a.createElement(S,{transactions:a}))}}]),e}(n.Component);c.a.render(r.a.createElement(D,null),document.getElementById("root"))},5:function(t,e,a){t.exports={controls:"Controls_controls__2CI7n",input:"Controls_input__2fOiz",button:"Controls_button__1uXrj"}}},[[18,1,2]]]);
//# sourceMappingURL=main.61539dbf.chunk.js.map