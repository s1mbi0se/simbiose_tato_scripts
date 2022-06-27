(()=>{function e(e,t){return 1===e.length?"month"===t?`0${parseInt(e)+1}`:`0${e}`:"month"===t?parseInt(e)+1:e}function t(t){return`${e(t.getDate().toString(),"day")}/${e(t.getMonth().toString(),"month")}/${t.getFullYear()}`}function n(e,t){let n=new Date(e);return n.setDate(e.getDate()+t),n}function s(e,t){let n,s,a,i=[];return[e,t].forEach((e=>{if(void 0===e)return i;n=1===e.getHours().toString().length?`0${e.getHours()}`:e.getHours(),s=1===e.getMinutes().toString().length?`0${e.getMinutes()}`:e.getMinutes(),a=`${n}:${s}`,i.push(a)})),i}function a(e,t,n,a){let i=n.sort(((e,t)=>e.start>t.start?1:-1)),u=[[e,e]],o=[];return i.forEach((n=>{Date.parse(`01/01/2011 ${e}`)<=Date.parse(`01/01/2011 ${n.start}`)<Date.parse(`01/01/2011  ${t}`)&&u.push([n.start,n.end])})),u.push([t,t]),u.forEach(((e,t)=>{if(t>0&&new Date(`01/01/2011 ${u[t][0]}`)-new Date(`01/01/2011 ${u[t-1][1]}`)>0){let e=new Date(`01/01/2011 ${u[t-1][1]}`),n=structuredClone(e),i=Math.abs(new Date(`01/01/2011 ${u[t][0]}`)-new Date(`01/01/2011 ${u[t-1][1]}`))/36e5*60,l=new Date(n.setMinutes(n.getMinutes()+i));i>=a&&o.push(s(e,l))}})),o}async function i(e){let i=components.schedule__physiotherapist_id.value,u=await async function(e){let t=await executeAction("getphysiosaasagenda",null,{physiotherapistId:e}),n={domingo:0,"segunda-feira":1,"terça-feira":2,"quarta-feira":3,"quinta-feira":4,"sexta-feira":5,sábado:6};return t.forEach((e=>{e.weekday in n&&(e.weekday=n[e.weekday])})),t}(i),o=(await executeAction("getserviceduration",null,{serviceId:e}))[0].service__duration,l=await async function(e,n){let s=new Date;s.setDate(s.getDate()+20);let a=s.toJSON().slice(0,10).replace(/-/g,"-"),i={};return(await executeAction("getsaasphysioschedules",null,{physiotherapistId:n,endDate:a})).forEach((e=>{let s={},a="",u=e.duration,o=e.schedule.slice(0,-1).split("T"),l=new Date(o);l.setMinutes(l.getMinutes()+u);let r=1===l.getHours().toString().length?`0${l.getHours()}`:l.getHours(),c=1===l.getMinutes().toString().length?`0${l.getMinutes()}`:l.getMinutes();s={start:o[1].substring(0,5),end:`${r}:${c}`},a=t(l),Object.keys(i).includes(n)?(Object.keys(i[n]).includes(a)||(i[n][a]=[]),i[n][a].push(s)):i[n]={[a]:[s]}})),i}(0,i),r=await function(e,s,i,u){let o=new Date,l=[],r=[];for(let e=0;e<20;e++)l.push(n(o,e));for(dateIndex in l){let e=l[dateIndex],n=e.getDay(),o=t(e),c=s.filter((e=>e.weekday==n));for(agendaIndex in c){let e=[];c[agendaIndex].physiotherapist_id in i&&o in i[c[agendaIndex].physiotherapist_id]&&(e=i[c[agendaIndex].physiotherapist_id][o]);let t=a(c[agendaIndex].start_hour,c[agendaIndex].end_hour,e,u);if(t){let e={date:o,free_slots:t};r.push(e)}}}return r}(0,u,l,o),c=await function(e,t){let n={};for(availableDateIndex in e){let t=[];for(freeSlotsIndex in e[availableDateIndex].free_slots){let a=new Date(`01/01/2011 ${e[availableDateIndex].free_slots[freeSlotsIndex][0]}`),i=new Date(`01/01/2011 ${e[availableDateIndex].free_slots[freeSlotsIndex][1]}`),u=a;for(;u<i;){let e,n=["00","15","30","45"],a=1===u.getMinutes().toString().length?`0${u.getMinutes()}`:`${u.getMinutes()}`;if(n.includes(a)){let e=structuredClone(u);if(e.setMinutes(e.getMinutes()+30),!(e<=i))break;t.includes(u)||(t=t.concat(s(u))),u=new Date(u.setMinutes(u.getMinutes()+15))}else{n.push(a),n.sort();let t=n.indexOf(a);e=a>"44"?60-parseInt(n[t]):parseInt(n[t+1])-parseInt(n[t]),u=new Date(u.setMinutes(u.getMinutes()+e))}}t.sort(),n[e[availableDateIndex].date]=t}}return n}(r),d=new Date;components.schedule__duration.value=o.toString(),d.setMinutes(d.getMinutes()+120);let h=t(d),g=`${1===d.getHours().toString().length?`0${d.getHours()}`:d.getHours()}:${1===d.getMinutes().toString().length?`0${d.getMinutes()}`:d.getMinutes()}`,_=[];if(h in c){for(availableTimeIndex in c[h])c[h][availableTimeIndex]>g&&_.push(c[h][availableTimeIndex]);_.length>0?c[h]=_:c.pop(h)}return c}async function u(e){let t=e,n=function(e){return Object.keys(e)}(t),s=[];n.forEach((e=>{s.push({label:e,value:e})})),components.schedule__schedule_date.options=s,components.schedule__schedule_date.onChange((()=>{let e=components.schedule__schedule_date.value;if(e){let n=function(e,t){return e[t]}(t,e),s=[];n.forEach((e=>{s=s.concat({label:e,value:e})})),components.schedule__schedule_hour.options=s,components.schedule__schedule_hour.value=""}else components.schedule__schedule_hour.value=""})),components.schedule__schedule_hour.onChange((async()=>{let e=components.schedule__schedule_date.value,t=components.schedule__schedule_hour.value;components.schedule__schedule.value=e+" "+t}))}components.schedule__patient_id.onChange((async()=>{let e,t,n=components.schedule__patient_id.value,s=await executeAction("getserviceid",null,{patientId:n});s.length>0?(e=s[0].partner_company__service_id,components.schedule__service_id.value=e,components.schedule__service_id.disabled=!0,t=await i(e),u(t)):(components.schedule__service_id.disabled=!1,components.schedule__service_id.onChange((async()=>{e=components.schedule__service_id.value,t=await i(e),u(t)})))}))})();/*! Mon Jun 27 2022 20:55:34 GMT+0000 (Coordinated Universal Time) !*/