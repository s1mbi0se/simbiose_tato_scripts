(()=>{function e(){function e(){let e=parseInt(components.schedule__lock_start_hour.value.split(":")[0]),t=parseInt(components.schedule__lock_start_hour.value.split(":")[1]),n=parseInt(60*e),s=parseInt(n+t),o=parseInt(components.schedule__lock_end_hour.value.split(":")[0]),a=parseInt(components.schedule__lock_end_hour.value.split(":")[1]),i=parseInt(60*o);if(parseInt(i+a)<s){let e=Math.floor(s/60),t=s%60;components.schedule__lock_end_hour.value=`${e}:${t+30}`}}components.schedule__lock_start_hour.value="00:00",components.schedule__lock_end_hour.value="00:00",components.schedule__lock_start_hour.onChange((()=>{e()})),components.schedule__lock_end_hour.onChange((()=>{e()}))}function t(e,t){return 1===e.length?"month"===t?`0${parseInt(e)+1}`:`0${e}`:"month"===t?parseInt(e)+1:e}function n(e){return`${t(e.getDate().toString(),"day")}/${t(e.getMonth().toString(),"month")}/${e.getFullYear()}`}function s(e,t){let n=new Date(e);return n.setDate(e.getDate()+t),n}function o(e,t){let n,s,o,a=[];return[e,t].forEach((e=>{if(void 0===e)return a;n=1===e.getHours().toString().length?`0${e.getHours()}`:e.getHours(),s=1===e.getMinutes().toString().length?`0${e.getMinutes()}`:e.getMinutes(),o=`${n}:${s}`,a=a.concat(o)})),a}function a(e){return`${e.split(" ")[0].split("/")[1]}/${e.split(" ")[0].split("/")[0]}/${e.split(" ")[0].split("/")[2]}`}async function i(e){let t=await executeAction("getphysiosaasagenda",null,{physiotherapistId:e}),n={domingo:0,"segunda-feira":1,"terça-feira":2,"quarta-feira":3,"quinta-feira":4,"sexta-feira":5,sábado:6};return t.forEach((e=>{e.weekday in n&&(e.weekday=n[e.weekday])})),t}async function l(e,t){let s=new Date;s.setDate(s.getDate()+e);let o=s.toJSON().slice(0,10).replace(/-/g,"-"),a={};return(await executeAction("getsaasphysioschedules",null,{physiotherapistId:t,endDate:o})).forEach((e=>{let s={},o="",i=e.duration,l=e.schedule.slice(0,-1).split("T"),u=new Date(l);u.setMinutes(u.getMinutes()+i);let c=1===u.getHours().toString().length?`0${u.getHours()}`:u.getHours(),r=1===u.getMinutes().toString().length?`0${u.getMinutes()}`:u.getMinutes();s={start:l[1].substring(0,5),end:`${c}:${r}`},o=n(u),Object.keys(a).includes(t)?(Object.keys(a[t]).includes(o)||(a[t][o]=[]),a[t][o].push(s)):a[t]={[o]:[s]}})),a}function u(e,t,n,s){let a=n.sort(((e,t)=>e.start>t.start?1:-1)),i=[[e,e]],l=[];return a.forEach((n=>{Date.parse(`01/01/2011 ${e}`)<=Date.parse(`01/01/2011 ${n.start}`)<Date.parse(`01/01/2011  ${t}`)&&i.push([n.start,n.end])})),i.push([t,t]),i.forEach(((e,t)=>{if(t>0&&new Date(`01/01/2011 ${i[t][0]}`)-new Date(`01/01/2011 ${i[t-1][1]}`)>0){let e=new Date(`01/01/2011 ${i[t-1][1]}`),n=structuredClone(e),a=Math.abs(new Date(`01/01/2011 ${i[t][0]}`)-new Date(`01/01/2011 ${i[t-1][1]}`))/36e5*60,u=new Date(n.setMinutes(n.getMinutes()+a));a>=s&&l.push(o(e,u))}})),l}async function c(e){let t=components.schedule__physiotherapist_id.value,a=await i(t),c=(await executeAction("getserviceduration",null,{serviceId:e}))[0].service__duration,r=await l(20,t),d=await function(e,t,o,a){let i=new Date,l=[],c=[];for(let e=0;e<20;e++)l.push(s(i,e));for(dateIndex in l){let e=l[dateIndex],s=e.getDay(),i=n(e),r=t.filter((e=>e.weekday==s));for(agendaIndex in r){let e=[];r[agendaIndex].physiotherapist_id in o&&i in o[r[agendaIndex].physiotherapist_id]&&(e=o[r[agendaIndex].physiotherapist_id][i]);let t=u(r[agendaIndex].start_hour,r[agendaIndex].end_hour,e,a);if(t){let e={date:i,free_slots:t};c.push(e)}}}return c}(0,a,r,c),h=await function(e,t){let n={};for(availableDateIndex in e){let t=[];for(freeSlotsIndex in e[availableDateIndex].free_slots){let s=new Date(`01/01/2011 ${e[availableDateIndex].free_slots[freeSlotsIndex][0]}`),a=new Date(`01/01/2011 ${e[availableDateIndex].free_slots[freeSlotsIndex][1]}`),i=s;for(;i<a;){let e,n=["00","15","30","45"],s=1===i.getMinutes().toString().length?`0${i.getMinutes()}`:`${i.getMinutes()}`;if(n.includes(s)){let e=structuredClone(i);if(e.setMinutes(e.getMinutes()+30),!(e<=a))break;t.includes(i)||(t=t.concat(o(i))),i=new Date(i.setMinutes(i.getMinutes()+15))}else{n.push(s),n.sort();let t=n.indexOf(s);e=s>"44"?60-parseInt(n[t]):parseInt(n[t+1])-parseInt(n[t]),i=new Date(i.setMinutes(i.getMinutes()+e))}}t.sort(),n[e[availableDateIndex].date]=t}}return n}(d),p=new Date;components.schedule__duration.value=c.toString(),p.setMinutes(p.getMinutes()+120);let _=n(p),g=`${1===p.getHours().toString().length?`0${p.getHours()}`:p.getHours()}:${1===p.getMinutes().toString().length?`0${p.getMinutes()}`:p.getMinutes()}`,m=[];if(_ in h){for(availableTimeIndex in h[_])h[_][availableTimeIndex]>g&&m.push(h[_][availableTimeIndex]);m.length>0?h[_]=m:h.pop(_)}return h}async function r(e){let t=e,n=function(e){return Object.keys(e)}(t),s=[];n.forEach((e=>{s.push({label:e,value:e})})),components.schedule__schedule_date.options=s,components.schedule__schedule_date.onChange((()=>{let e=components.schedule__schedule_date.value;if(e){let n=function(e,t){return e[t]}(t,e),s=[];n.forEach((e=>{s=s.concat({label:e,value:e})})),components.schedule__schedule_hour.options=s,components.schedule__schedule_hour.value=""}else components.schedule__schedule_hour.value=""})),components.schedule__schedule_hour.onChange((async()=>{let e=components.schedule__schedule_date.value,t=components.schedule__schedule_hour.value;components.schedule__schedule.value=e+" "+t}))}function d(e){let t=`${e.split(" ")[0].split("/")[2]}-${e.split(" ")[0].split("/")[1]}-${e.split(" ")[0].split("/")[0]}`;return e.includes(":")?`${t} ${e.split(" ")[1]}`:`${t}`}components.criaragendamento.visible=!1,components.criarbloqueio.visible=!1,components.schedule__type.onChange((()=>{"Bloqueio de Horário"===components.schedule__type.value?(components.criaragendamento.visible=!1,components.criarbloqueio.visible=!0,e()):(components.criarbloqueio.visible=!1,components.criaragendamento.visible=!0,e())})),components.schedule__patient_id.onChange((async()=>{let e,t,n=components.schedule__patient_id.value,s=await executeAction("getserviceid",null,{patientId:n});s.length>0?(e=s[0].partner_company__service_id,components.schedule__service_id.value=e,components.schedule__service_id.disabled=!0,t=await c(e),r(t)):(components.schedule__service_id.disabled=!1,components.schedule__service_id.onChange((async()=>{e=components.schedule__service_id.value,t=await c(e),r(t)})))})),components.criarbloqueio.onClick((async()=>{let e={lockDate:components.schedule__lock_date.value,lockStartHour:components.schedule__lock_start_hour.value,lockEndHour:components.schedule__lock_end_hour.value,scheduleDate:components.schedule__lock_date.value+" "+components.schedule__lock_start_hour.value,duration:components.schedule__duration.value,status:"Bloqueio",physiotherapistId:components.schedule__physiotherapist_id.value,type:components.schedule__type.value,patientName:"Bloqueio"},t=await async function(e){let t=e.physiotherapistId,n=e.lockStartHour,s=e.lockEndHour,o=e.lockDate,c=a(o),r=await i(t),d=await l(20,t),h=new Date(`${c} ${n}`),p=new Date(`${c} ${s}`),_=h.getDay(),g=[],m=[];return r.forEach((e=>{e.weekday===_&&g.push(e)})),g.forEach((e=>{let t=[];e.physiotherapist_id in d&&o in d[e.physiotherapist_id]&&(t=d[e.physiotherapist_id][o]),u(e.start_hour,e.end_hour,t,Math.abs(p-h)/36e5*60).forEach((t=>{let n=new Date(`${c} ${t[0]}`),s=new Date(`${c} ${t[1]}`);n<=h&&s>=p&&(Object.values(m).includes(e.physiotherapist_id)||m.push(e.physiotherapist_id))}))})),Object.values(m).includes(parseInt(t))}(e);t?async function(e){let{lockDate:t,lockStartHour:n,lockEndHour:s,status:o,physiotherapistId:i,type:l,scheduleDate:u,patientName:c}=e,r=d(u),h=d(t),p=function(e,t,n){let s=a(n),o=new Date(`${s} ${e}`),i=new Date(`${s} ${t}`);return Math.abs(i-o)/36e5*60}(n,s,t);try{await executeAction("insertblocksaas",null,{physiotherapistId:i,type:l,status:o,blockDuration:p,newScheduleDate:r,patientName:c,newLockDate:h,lockStartHour:n,lockEndHour:s}),showToast("success","Bloqueio marcado com sucesso!"),setTimeout((()=>{window.location.replace(window.location.origin+"/tato-calendario-todos-fisioterapeutas")}),1500)}catch(e){showToast("error","Tente novamente!")}}(e):showToast("error","Há conflitos na agenda do Fisioterapeuta!")})),components.voltar.onClick((()=>closeModal()))})();/*! Thu Jul 07 2022 17:01:33 GMT+0000 (Coordinated Universal Time) !*/