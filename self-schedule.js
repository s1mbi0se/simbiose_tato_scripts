(()=>{function e(e,t){return 1===e.length?"month"===t?`0${parseInt(e)+1}`:`0${e}`:"month"===t?parseInt(e)+1:e}function t(t){return`${e(t.getDate().toString(),"day")}/${e(t.getMonth().toString(),"month")}/${t.getFullYear()}`}function n(e,t){let n=new Date(e);return n.setDate(e.getDate()+t),n}function a(e,t){let n,a,s,i=[];return[e,t].forEach((e=>{if(void 0===e)return i;n=1===e.getHours().toString().length?`0${e.getHours()}`:e.getHours(),a=1===e.getMinutes().toString().length?`0${e.getMinutes()}`:e.getMinutes(),s=`${n}:${a}`,i.push(s)})),i}async function s(){let e=await executeAction("tatomain-getsaasagenda"),t={domingo:0,"segunda-feira":1,"terça-feira":2,"quarta-feira":3,"quinta-feira":4,"sexta-feira":5,sábado:6};return e.forEach((e=>{e.weekday in t&&(e.weekday=t[e.weekday])})),e}async function i(e){let n=new Date;n.setDate(n.getDate()+e);let a=n.toJSON().slice(0,10).replace(/-/g,"-"),s={};return(await executeAction("tatomain-getallschedules",null,{endDate:a})).forEach((e=>{let n={},a="",i=e.physiotherapist_id,o=e.duration,l=e.schedule.slice(0,-1).split("T"),u=new Date(l);u.setMinutes(u.getMinutes()+o);let r=1===u.getHours().toString().length?`0${u.getHours()}`:u.getHours(),c=1===u.getMinutes().toString().length?`0${u.getMinutes()}`:u.getMinutes();n={start:l[1].substring(0,5),end:`${r}:${c}`},a=t(u),Object.keys(s).includes(i.toString())?(Object.keys(s[i]).includes(a)||(s[i][a]=[]),s[i][a].push(n)):s[i]={[a]:[n]}})),s}function o(e,t,n,s){let i=n.sort(((e,t)=>e.start>t.start?1:-1)),o=[[e,e]],l=[];return i.forEach((n=>{Date.parse(`01/01/2011 ${e}`)<=Date.parse(`01/01/2011 ${n.start}`)<Date.parse(`01/01/2011  ${t}`)&&o.push([n.start,n.end])})),o.push([t,t]),o.forEach(((e,t)=>{if(t>0&&new Date(`01/01/2011 ${o[t][0]}`)-new Date(`01/01/2011 ${o[t-1][1]}`)>0){let e=new Date(`01/01/2011 ${o[t-1][1]}`),n=structuredClone(e),i=Math.abs(new Date(`01/01/2011 ${o[t][0]}`)-new Date(`01/01/2011 ${o[t-1][1]}`))/36e5*60,u=new Date(n.setMinutes(n.getMinutes()+i));i>=s&&l.push(a(e,u))}})),l}!function(){let e=new Date;components.current_date.value=e.toJSON().slice(0,10)}(),async function(){let e=await async function(){let e=parseInt(components.schedule__duration.value),l=await s(),u=await i(20),r=await function(e,a,s,i){let l=new Date,u=[],r=[];for(let e=0;e<20;e++)u.push(n(l,e));for(dateIndex in u){let e=u[dateIndex],n=e.getDay(),l=t(e),c=a.filter((e=>e.weekday==n));for(agendaIndex in c){let e=[];c[agendaIndex].physiotherapist_id in s&&l in s[c[agendaIndex].physiotherapist_id]&&(e=s[c[agendaIndex].physiotherapist_id][l]);let t=o(c[agendaIndex].start_hour,c[agendaIndex].end_hour,e,i);if(t){let e={date:l,free_slots:t};r.push(e)}}}return r}(0,l,u,e),c=await function(e,t){let n={};for(availableDateIndex in e){let s=[];for(freeSlotsIndex in e[availableDateIndex].free_slots){let i=new Date(`01/01/2011 ${e[availableDateIndex].free_slots[freeSlotsIndex][0]}`),o=new Date(`01/01/2011 ${e[availableDateIndex].free_slots[freeSlotsIndex][1]}`),l=i;for(;l<o;){let e,n=["00","15","30","45"],i=1===l.getMinutes().toString().length?`0${l.getMinutes()}`:`${l.getMinutes()}`;if(n.includes(i)){let e=structuredClone(l);if(e.setMinutes(e.getMinutes()+t),!(e<=o))break;s.includes(l)||(s=s.concat(a(l))),l=new Date(l.setMinutes(l.getMinutes()+15))}else{n.push(i),n.sort();let t=n.indexOf(i);e=i>"44"?60-parseInt(n[t]):parseInt(n[t+1])-parseInt(n[t]),l=new Date(l.setMinutes(l.getMinutes()+e))}}s.sort(),n[e[availableDateIndex].date]=s}}return n}(r,e),h=new Date;h.setMinutes(h.getMinutes()+120);let d=t(h),p=`${1===h.getHours().toString().length?`0${h.getHours()}`:h.getHours()}:${1===h.getMinutes().toString().length?`0${h.getMinutes()}`:h.getMinutes()}`,_=[];if(d in c){for(availableTimeIndex in c[d])c[d][availableTimeIndex]>p&&_.push(c[d][availableTimeIndex]);_.length>0?c[d]=_:c.pop(d)}return c}(),l=function(e){return Object.keys(e)}(e),u=[];l.forEach((e=>{u.push({label:e,value:e})})),components.schedule__patient_name.value=components.patient__first_name.value+" "+components.patient__last_name.value,components.schedule__schedule_date2.options=u,components.schedule__schedule_date2.onChange((()=>{let t=components.schedule__schedule_date2.value;if(t){let n=function(e,t){return e[t]}(e,t),a=[];n.forEach((e=>{a=a.concat({label:e,value:e})})),components.schedule__schedule_hour.options=a,components.schedule__schedule_hour.value=""}else components.schedule__schedule_hour.value="",components.schedule__schedule_hour.options=[]})),components.schedule__schedule_hour.onChange((async()=>{let e=components.schedule__schedule_date2.value,t=components.schedule__schedule_hour.value;components.schedule__schedule.value=e+" "+t;let n=await async function(e){let t=parseInt(components.schedule__duration.value),n=`${e.split(" ")[0].split("/")[1]}/${e.split(" ")[0].split("/")[0]}/${e.split(" ")[0].split("/")[2]}`,a=new Date(`${n} ${e.split(" ")[1]}`),l=structuredClone(a),u=await i(20),r=a.getDay(),c=await s(),h=[],d=e.split(" ")[0],p=a,_=new Date(l.setMinutes(l.getMinutes()+t));c.forEach((e=>{e.weekday===r&&h.push(e)}));let g=[];h.forEach((e=>{let a=[];e.physiotherapist_id in u&&d in u[e.physiotherapist_id]&&(a=u[e.physiotherapist_id][d]),o(e.start_hour,e.end_hour,a,t).forEach((t=>{let a=new Date(`${n} ${t[0]}`),s=new Date(`${n} ${t[1]}`);a<=p&&s>=_&&(g.includes(e.physiotherapist_id)||(g=g.concat(e.physiotherapist_id)))}))}));let f=g[Math.floor(Math.random()*g.length)],m=await executeAction("tatomain-getselectphysiosaasinfos",null,{selectRandomPhysio:f});return{chosenPhysioId:f.toString(),name:`${m[0].first_name} ${m[0].last_name}`,email:m[0].email}}(components.schedule__schedule.value);components.schedule__physiotherapist_id.value=n.chosenPhysioId,components.name__physiotherapist_name.value=n.name,components.name__physiotherapist_email.value=n.email}))}()})();/*! Fri Jul 22 2022 00:03:52 GMT+0000 (Coordinated Universal Time) !*/