(()=>{function e(e,t){return 1===e.length?"month"===t?`0${parseInt(e)+1}`:`0${e}`:"month"===t?parseInt(e)+1:e}function t(t){return`${e(t.getDate().toString(),"day")}/${e(t.getMonth().toString(),"month")}/${t.getFullYear()}`}function n(e,t){let n,a,s,u=[];return[e,t].forEach((e=>{if(void 0===e)return u;n=1===e.getHours().toString().length?`0${e.getHours()}`:e.getHours(),a=1===e.getMinutes().toString().length?`0${e.getMinutes()}`:e.getMinutes(),s=`${n}:${a}`,u=u.concat(s)})),u}function a(e,t){let n=new Date(e);return n.setDate(e.getDate()+t),n}function s(e,t,a,s){let u=a.sort(((e,t)=>e.start>t.start?1:-1)),o=[[e,e]],i=[];return u.forEach((n=>{Date.parse(`01/01/2011 ${e}`)<=Date.parse(`01/01/2011 ${n.start}`)<Date.parse(`01/01/2011  ${t}`)&&o.push([n.start,n.end])})),o.push([t,t]),o.forEach(((e,t)=>{if(t>0&&new Date(`01/01/2011 ${o[t][0]}`)-new Date(`01/01/2011 ${o[t-1][1]}`)>0){let e=new Date(`01/01/2011 ${o[t-1][1]}`),a=structuredClone(e),u=Math.abs(new Date(`01/01/2011 ${o[t][0]}`)-new Date(`01/01/2011 ${o[t-1][1]}`))/36e5*60,l=new Date(a.setMinutes(a.getMinutes()+u));u>=s&&i.push(n(e,l))}})),i}function u(t,n){let a=e(t.getDate().toString(),"day"),s=e(t.getMonth().toString(),"month");return"br"===n?`${a}/${s}/${t.getFullYear()}`:`${s}/${a}/${t.getFullYear()}`}!function(){let e=components.schedule__schedule.value.slice(0,-1).split("T"),o=function(e){let t=e.split("/");return`${t[1]}/${t[0]}/${t[2]}`}(e[0]),i=e[1].substring(0,5);components.schedule__schedule_2.value=o+" "+i,async function(){let e=components.service__service_id.value,o=await async function(e){let o=components.schedule__physiotherapist_id.value,i=await async function(e){let t=await executeAction("tatomain-getphysiosaasagenda",null,{physiotherapistId:e}),n={domingo:0,"segunda-feira":1,"terça-feira":2,"quarta-feira":3,"quinta-feira":4,"sexta-feira":5,sábado:6};return t.forEach((e=>{e.weekday in n&&(e.weekday=n[e.weekday])})),t}(o),l=(await executeAction("tatomain-getserviceduration",null,{serviceId:e}))[0].service__duration,r=await async function(e,n){let a=new Date;a.setDate(a.getDate()+20);let s=a.toJSON().slice(0,10).replace(/-/g,"-"),u={};return(await executeAction("tatomain-getsaasphysioschedules",null,{physiotherapistId:n,endDate:s})).forEach((e=>{let a={},s="",o=e.duration,i=e.schedule.slice(0,-1).split("T"),l=new Date(i);l.setMinutes(l.getMinutes()+o);let r=1===l.getHours().toString().length?`0${l.getHours()}`:l.getHours(),c=1===l.getMinutes().toString().length?`0${l.getMinutes()}`:l.getMinutes();a={start:i[1].substring(0,5),end:`${r}:${c}`},s=t(l),Object.keys(u).includes(n)?(Object.keys(u[n]).includes(s)||(u[n][s]=[]),u[n][s].push(a)):u[n]={[s]:[a]}})),u}(0,o),c=await function(e,n,u,o){let i=new Date,l=[],r=[];for(let e=0;e<20;e++)l.push(a(i,e));for(dateIndex in l){let e=l[dateIndex],a=e.getDay(),i=t(e),c=n.filter((e=>e.weekday==a));for(agendaIndex in c){let e=[];c[agendaIndex].physiotherapist_id in u&&i in u[c[agendaIndex].physiotherapist_id]&&(e=u[c[agendaIndex].physiotherapist_id][i]);let t=s(c[agendaIndex].start_hour,c[agendaIndex].end_hour,e,o);if(t){let e={date:i,free_slots:t};r.push(e)}}}return r}(0,i,r,l);return function(e){let t=new Date;t.setMinutes(t.getMinutes()+120);let n=u(t,"br"),a=u(t,"es"),s=[];return Object.keys(e).includes(n)&&(e[n].forEach((e=>{new Date(`${a} ${e}`)>t&&s.push(e)})),s.length>0?e[n]=s:delete e[n]),e}(await function(e,t){let a={};for(availableDateIndex in e){let t=[];for(freeSlotsIndex in e[availableDateIndex].free_slots){let s=new Date(`01/01/2011 ${e[availableDateIndex].free_slots[freeSlotsIndex][0]}`),u=new Date(`01/01/2011 ${e[availableDateIndex].free_slots[freeSlotsIndex][1]}`),o=s;for(;o<u;){let e,a=["00","15","30","45"],s=1===o.getMinutes().toString().length?`0${o.getMinutes()}`:`${o.getMinutes()}`;if(a.includes(s)){let e=structuredClone(o);if(e.setMinutes(e.getMinutes()+30),!(e<=u))break;t.includes(o)||(t=t.concat(n(o))),o=new Date(o.setMinutes(o.getMinutes()+15))}else{a.push(s),a.sort();let t=a.indexOf(s);e=s>"44"?60-parseInt(a[t]):parseInt(a[t+1])-parseInt(a[t]),o=new Date(o.setMinutes(o.getMinutes()+e))}}t.sort(),a[e[availableDateIndex].date]=t}}return a}(c))}(e),i=(r=o,Object.keys(r)),l=[];var r;i.forEach((e=>{l.push({label:e,value:e})})),components.schedule__schedule_date.options=l,components.schedule__schedule_date.onChange((()=>{let e=components.schedule__schedule_date.value;if(e){let t=function(e,t){return e[t]}(o,e),n=[];t.forEach((e=>{n=n.concat({label:e,value:e})})),components.schedule__schedule_hour.options=n,components.schedule__schedule_hour.value=""}else components.schedule__schedule_hour.value="",components.schedule__schedule_hour.options=[]})),components.schedule__schedule_hour.onChange((()=>{let e=components.schedule__schedule_date.value,t=components.schedule__schedule_hour.value;t&&(components.schedule__schedule.value=e+" "+t)}))}()}()})();/*! Fri Jul 22 2022 17:08:10 GMT+0000 (Coordinated Universal Time) !*/