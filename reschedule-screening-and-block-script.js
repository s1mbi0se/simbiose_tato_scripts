(()=>{function e(e){let t=window.location.origin.toString(),n=components.screening__screening_id.value;t+=`/${window.location.hostname.includes("tato")?"tatodois":"tatotriagem"}-${e}/${n}`,window.location.href=t}(()=>{if("Bloqueio de Horário"===components.screening__type.value)components.registrarfalta.visible=!1,components.iniciaratendimento.visible=!1,components.reagendar.visible=!1;else{function e(e){return`${t(e.getDate().toString(),"day")}/${t(e.getMonth().toString(),"month")}/${e.getFullYear()}`}function t(e,t){return 1===e.length?"month"===t?`0${parseInt(e)+1}`:`0${e}`:"month"===t?parseInt(e)+1:e}function n(e,t){let n,s,a,o=[];return[e,t].forEach((e=>{if(void 0===e)return o;n=1===e.getHours().toString().length?`0${e.getHours()}`:e.getHours(),s=1===e.getMinutes().toString().length?`0${e.getMinutes()}`:e.getMinutes(),a=`${n}:${s}`,o.push(a)})),o}function s(e,t){let n=new Date(e);return n.setDate(e.getDate()+t),n}function a(e,t,s){let a=s.sort(((e,t)=>e.start>t.start?1:-1)),o=[[e,e]],i=[];return a.forEach((n=>{Date.parse(`01/01/2011 ${e}`)<=Date.parse(`01/01/2011 ${n.start}`)<Date.parse(`01/01/2011  ${t}`)&&o.push([n.start,n.end])})),o.push([t,t]),o.forEach(((e,t)=>{if(t>0&&new Date(`01/01/2011 ${o[t][0]}`)-new Date(`01/01/2011 ${o[t-1][1]}`)>0){let e=new Date(`01/01/2011 ${o[t-1][1]}`),s=structuredClone(e),a=Math.abs(new Date(`01/01/2011 ${o[t][0]}`)-new Date(`01/01/2011 ${o[t-1][1]}`))/36e5*60,r=new Date(s.setMinutes(s.getMinutes()+a));a>=30&&i.push(n(e,r))}})),i}!async function(){let t=await async function(){let t=function(t,n,o){let i=new Date,r=[],l=[];for(let e=0;e<20;e++)r.push(s(i,e));for(dateIndex in r){let t=r[dateIndex],s=t.getDay(),i=e(t),c=n.filter((e=>e.weekday==s));for(agendaIndex in c){let e=[];c[agendaIndex].physiotherapist_id in o&&i in o[c[agendaIndex].physiotherapist_id]&&(e=o[c[agendaIndex].physiotherapist_id][i]);let t=a(c[agendaIndex].start_hour,c[agendaIndex].end_hour,e);if(t){let e={date:i,free_slots:t};l.push(e)}}}return l}(0,await async function(){let e=components.screening__physiotherapist_id.value,t=await executeAction("getphysioagenda",null,{physiotherapistId:e}),n={domingo:0,"segunda-feira":1,"terça-feira":2,"quarta-feira":3,"quinta-feira":4,"sexta-feira":5,sábado:6};return t.forEach((e=>{e.weekday in n&&(e.weekday=n[e.weekday])})),t}(),await async function(t){let n=new Date;n.setDate(n.getDate()+20);let s=n.toJSON().slice(0,10).replace(/-/g,"-"),a={};return(await executeAction("getphysioscreenings",null,{endDate:s})).forEach((t=>{let n={},s="",o=t.physiotherapist_id,i=t.schedule_date.slice(0,-1).split("T"),r=new Date(i);r.setMinutes(r.getMinutes()+30);let l=1===r.getHours().toString().length?`0${r.getHours()}`:r.getHours(),c=1===r.getMinutes().toString().length?`0${r.getMinutes()}`:r.getMinutes();n={start:i[1].substring(0,5),end:`${l}:${c}`},s=e(r),Object.keys(a).includes(o.toString())?(Object.keys(a[o]).includes(s)||(a[o][s]=[]),a[o][s].push(n)):a[o]={[s]:[n]}})),a}()),o=function(e){let t={};for(availableDateIndex in e){let s=[];for(freeSlotsIndex in e[availableDateIndex].free_slots){let a=new Date(`01/01/2011 ${e[availableDateIndex].free_slots[freeSlotsIndex][0]}`),o=new Date(`01/01/2011 ${e[availableDateIndex].free_slots[freeSlotsIndex][1]}`),i=a;for(;i<o;){let e,t=["00","15","30","45"],a=1===i.getMinutes().toString().length?`0${i.getMinutes()}`:`${i.getMinutes()}`;if(t.includes(a)){let e=structuredClone(i);if(e.setMinutes(e.getMinutes()+30),!(e<=o))break;s.includes(i)||(s=s.concat(n(i))),i=new Date(i.setMinutes(i.getMinutes()+15))}else{t.push(a),t.sort();let n=t.indexOf(a);e=a>"44"?60-parseInt(t[n]):parseInt(t[n+1])-parseInt(t[n]),i=new Date(i.setMinutes(i.getMinutes()+e))}}s.sort(),t[e[availableDateIndex].date]=s}}return t}(t),i=new Date;i.setMinutes(i.getMinutes()+120);let r=e(i),l=`${1===i.getHours().toString().length?`0${i.getHours()}`:i.getHours()}:${1===i.getMinutes().toString().length?`0${i.getMinutes()}`:i.getMinutes()}`,c=[];if(r in o){for(availableTimeIndex in o[r])o[r][availableTimeIndex]>l&&c.push(o[r][availableTimeIndex]);c.length>0?o[r]=c:delete o[r]}return o}(),o=components.screening__schedule_date.value.slice(0,-1).split("T"),i=e(new Date(o));""!=components.screening__schedule_date.value&&(t.hasOwnProperty(i)||(t[i]=[]));let r=function(e){return Object.keys(e)}(t),l=[];function c(){let e=components.screening__schedule_date2.value;if(e){let n=o[1].substring(0,5);t.hasOwnProperty(i)&&(t[i].includes(n)||t[i].unshift(n));let s=function(e,t){return e[t]}(t,e),a=[];s.forEach((e=>{a=a.concat(e)})),components.screening__schedule_hour.options=a,components.screening__schedule_date2.value==i?components.screening__schedule_hour.value=a[a.indexOf(n)]:components.screening__schedule_hour.value=""}else components.screening__schedule_hour.value="",components.screening__schedule_hour.options=[]}r.forEach((e=>{l.push(e)})),components.screening__schedule_date2.options=l,components.screening__schedule_date2.value=l[l.indexOf(i)],c(),components.screening__schedule_date2.onChange((()=>{c()})),components.screening__schedule_hour.onChange((async()=>{let e=components.screening__schedule_date2.value,t=components.screening__schedule_hour.value;components.screening__schedule_date.value=e+" "+t}))}(),components.cancelarbloqueio.visible=!1}})(),components.cancelarbloqueio.onClick((async()=>{let e=components.screening__screening_id.value;try{await executeAction("cancelblocktriagem",null,{screeningId:e}),showToast("success","Bloqueio cancelado com sucesso!"),setTimeout((()=>{window.location.reload()}),1500)}catch(e){showToast("error","Tente novamente!")}})),components.iniciaratendimento.onClick((()=>{e("triagem")})),components.registrarfalta.onClick((()=>{e("triagem-falta")})),components.voltar.onClick((()=>closeModal()))})();/*! Fri Jul 08 2022 16:44:28 GMT+0000 (Coordinated Universal Time) !*/