(()=>{if("Bloqueio de Horário"===components.schedule__type.value)components.atualizaragendamento.visible=!1,components.cancelarbloqueio.visible=!0;else{function e(e,t){return 1===e.length?"month"===t?`0${parseInt(e)+1}`:`0${e}`:"month"===t?parseInt(e)+1:e}function t(t){return`${e(t.getDate().toString(),"day")}/${e(t.getMonth().toString(),"month")}/${t.getFullYear()}`}function n(e,t){let n,a,s,o=[];return[e,t].forEach((e=>{if(void 0===e)return o;n=1===e.getHours().toString().length?`0${e.getHours()}`:e.getHours(),a=1===e.getMinutes().toString().length?`0${e.getMinutes()}`:e.getMinutes(),s=`${n}:${a}`,o.push(s)})),o}function a(e,t,a,s){let o=a.sort(((e,t)=>e.start>t.start?1:-1)),l=[[e,e]],u=[];return o.forEach((n=>{Date.parse(`01/01/2011 ${e}`)<=Date.parse(`01/01/2011 ${n.start}`)<Date.parse(`01/01/2011  ${t}`)&&l.push([n.start,n.end])})),l.push([t,t]),l.forEach(((e,t)=>{if(t>0&&new Date(`01/01/2011 ${l[t][0]}`)-new Date(`01/01/2011 ${l[t-1][1]}`)>0){let e=new Date(`01/01/2011 ${l[t-1][1]}`),a=structuredClone(e),o=Math.abs(new Date(`01/01/2011 ${l[t][0]}`)-new Date(`01/01/2011 ${l[t-1][1]}`))/36e5*60,i=new Date(a.setMinutes(a.getMinutes()+o));o>=s&&u.push(n(e,i))}})),u}function s(e,t){let n=new Date(e);return n.setDate(e.getDate()+t),n}components.cancelarbloqueio.visible=!1,components.atualizaragendamento.visible=!0,function(){let e=components.schedule__schedule1.value.slice(0,-1).split("T"),n=t(new Date(e));components.schedule__schedule1.value=n+" "+e[1].slice(0,-3)}(),async function(){let e=await async function(){let e=parseInt(components.schedule__duration.value),o=await async function(){let e=components.schedule__physiotherapist_id.value,t=await executeAction("tatotriagem-getphysioagendas",null,{currentPhysiotherapist:e}),n={domingo:0,"segunda-feira":1,"terça-feira":2,"quarta-feira":3,"quinta-feira":4,"sexta-feira":5,sábado:6};return t.forEach((e=>{e.weekday in n&&(e.weekday=n[e.weekday])})),t}(),l=await async function(e){let n=new Date;n.setDate(n.getDate()+20);let a=n.toJSON().slice(0,10).replace(/-/g,"-"),s=components.schedule__physiotherapist_id.value,o={};return(await executeAction("tatomain-getphysioschedulessaas",null,{currentPhysiotherapist:s,finalDate:a})).forEach((e=>{let n={},a="",l=e.duration,u=e.schedule.slice(0,-1).split("T"),i=new Date(u);i.setMinutes(i.getMinutes()+l);let r=1===i.getHours().toString().length?`0${i.getHours()}`:i.getHours(),c=1===i.getMinutes().toString().length?`0${i.getMinutes()}`:i.getMinutes();n={start:u[1].substring(0,5),end:`${r}:${c}`},a=t(i),Object.keys(o).includes(s.toString())?(Object.keys(o[s]).includes(a)||(o[s][a]=[]),o[s][a].push(n)):o[s]={[a]:[n]}})),o}(),u=await function(e,n,o,l){let u=new Date,i=[],r=[];for(let e=0;e<20;e++)i.push(s(u,e));for(dateIndex in i){let e=i[dateIndex],s=e.getDay(),u=t(e),c=n.filter((e=>e.weekday==s));for(agendaIndex in c){let e=[];c[agendaIndex].physiotherapist_id in o&&u in o[c[agendaIndex].physiotherapist_id]&&(e=o[c[agendaIndex].physiotherapist_id][u]);let t=a(c[agendaIndex].start_hour,c[agendaIndex].end_hour,e,l);if(t){let e={date:u,free_slots:t};r.push(e)}}}return r}(0,o,l,e),i=await function(e,t){let a={};for(availableDateIndex in e){let t=[];for(freeSlotsIndex in e[availableDateIndex].free_slots){let s=new Date(`01/01/2011 ${e[availableDateIndex].free_slots[freeSlotsIndex][0]}`),o=new Date(`01/01/2011 ${e[availableDateIndex].free_slots[freeSlotsIndex][1]}`),l=s;for(;l<o;){let e,a=["00","15","30","45"],s=1===l.getMinutes().toString().length?`0${l.getMinutes()}`:`${l.getMinutes()}`;if(a.includes(s)){let e=structuredClone(l);if(e.setMinutes(e.getMinutes()+30),!(e<=o))break;t.includes(l)||(t=t.concat(n(l))),l=new Date(l.setMinutes(l.getMinutes()+15))}else{a.push(s),a.sort();let t=a.indexOf(s);e=s>"44"?60-parseInt(a[t]):parseInt(a[t+1])-parseInt(a[t]),l=new Date(l.setMinutes(l.getMinutes()+e))}}t.sort(),a[e[availableDateIndex].date]=t}}return a}(u),r=new Date;r.setMinutes(r.getMinutes()+120);let c=t(r),d=`${1===r.getHours().toString().length?`0${r.getHours()}`:r.getHours()}:${1===r.getMinutes().toString().length?`0${r.getMinutes()}`:r.getMinutes()}`,h=[];if(c in i){for(availableTimeIndex in i[c])i[c][availableTimeIndex]>d&&h.push(i[c][availableTimeIndex]);h.length>0?i[c]=h:i.pop(c)}return i}(),o=function(e){return Object.keys(e)}(e),l=[];o.forEach((e=>{l.push({label:e,value:e})})),components.schedule__reschedule_date.options=l,components.schedule__reschedule_date.onChange((()=>{components.schedule__reschedule.value="";let t=components.schedule__reschedule_date.value;if(t){let n=function(e,t){return e[t]}(e,t),a=[];n.forEach((e=>{a=a.concat({label:e,value:e})})),components.schedule__reschedule_hour.options=a,components.schedule__reschedule_hour.value=""}else components.schedule__reschedule_hour.value=""})),components.schedule__reschedule_hour.onChange((async()=>{components.schedule__reschedule.value="";let e=components.schedule__reschedule_date.value,t=components.schedule__reschedule_hour.value;components.schedule__schedule.value=e+" "+t}))}()}components.cancelarbloqueio.onClick((async()=>{let e=components.schedule__schedule_id.value;try{await executeAction("tatomain-cancelblocksaas",null,{scheduleId:e}),showToast("success","Bloqueio cancelado com sucesso!"),setTimeout((()=>{window.location.reload()}),1500)}catch(e){showToast("error","Tente novamente!")}})),components.voltar.onClick((()=>closeModal()))})();/*! Sat Jul 23 2022 03:40:03 GMT+0000 (Coordinated Universal Time) !*/