(()=>{if("Bloqueio de Horário"===components.screening__type.value)components.registrarfalta.visible=!1,components.iniciaratendimento.visible=!1,components.reagendar.visible=!1;else{function e(e){return`${t(e.getDate().toString(),"day")}/${t(e.getMonth().toString(),"month")}/${e.getFullYear()}`}function t(e,t){return 1===e.length?"month"===t?`0${parseInt(e)+1}`:`0${e}`:"month"===t?parseInt(e)+1:e}function n(e,t){let n,s,a,i=[];return[e,t].forEach((e=>{if(void 0===e)return i;n=1===e.getHours().toString().length?`0${e.getHours()}`:e.getHours(),s=1===e.getMinutes().toString().length?`0${e.getMinutes()}`:e.getMinutes(),a=`${n}:${s}`,i.push(a)})),i}function s(e,t){let n=new Date(e);return n.setDate(e.getDate()+t),n}function a(e,t,s){let a=s.sort(((e,t)=>e.start>t.start?1:-1)),i=[[e,e]],o=[];return a.forEach((n=>{Date.parse(`01/01/2011 ${e}`)<=Date.parse(`01/01/2011 ${n.start}`)<Date.parse(`01/01/2011  ${t}`)&&i.push([n.start,n.end])})),i.push([t,t]),i.forEach(((e,t)=>{if(t>0&&new Date(`01/01/2011 ${i[t][0]}`)-new Date(`01/01/2011 ${i[t-1][1]}`)>0){let e=new Date(`01/01/2011 ${i[t-1][1]}`),s=structuredClone(e),a=Math.abs(new Date(`01/01/2011 ${i[t][0]}`)-new Date(`01/01/2011 ${i[t-1][1]}`))/36e5*60,r=new Date(s.setMinutes(s.getMinutes()+a));a>=30&&o.push(n(e,r))}})),o}!async function(){let t=await async function(){let t=function(t,n,i){let o=new Date,r=[],l=[];for(let e=0;e<20;e++)r.push(s(o,e));for(dateIndex in r){let t=r[dateIndex],s=t.getDay(),o=e(t),c=n.filter((e=>e.weekday==s));for(agendaIndex in c){let e=[];c[agendaIndex].physiotherapist_id in i&&o in i[c[agendaIndex].physiotherapist_id]&&(e=i[c[agendaIndex].physiotherapist_id][o]);let t=a(c[agendaIndex].start_hour,c[agendaIndex].end_hour,e);if(t){let e={date:o,free_slots:t};l.push(e)}}}return l}(0,await async function(){let e=components.screening__physiotherapist_id.value,t=await executeAction("getphysioagenda",null,{physiotherapistId:e}),n={domingo:0,"segunda-feira":1,"terça-feira":2,"quarta-feira":3,"quinta-feira":4,"sexta-feira":5,sábado:6};return t.forEach((e=>{e.weekday in n&&(e.weekday=n[e.weekday])})),t}(),await async function(t){let n=new Date;n.setDate(n.getDate()+20);let s=n.toJSON().slice(0,10).replace(/-/g,"-"),a={};return(await executeAction("getphysioscreenings",null,{endDate:s})).forEach((t=>{let n={},s="",i=t.physiotherapist_id,o=t.schedule_date.slice(0,-1).split("T"),r=new Date(o);r.setMinutes(r.getMinutes()+30);let l=1===r.getHours().toString().length?`0${r.getHours()}`:r.getHours(),c=1===r.getMinutes().toString().length?`0${r.getMinutes()}`:r.getMinutes();n={start:o[1].substring(0,5),end:`${l}:${c}`},s=e(r),Object.keys(a).includes(i.toString())?(Object.keys(a[i]).includes(s)||(a[i][s]=[]),a[i][s].push(n)):a[i]={[s]:[n]}})),a}()),i=function(e){let t={};for(availableDateIndex in e){let s=[];for(freeSlotsIndex in e[availableDateIndex].free_slots){let a=new Date(`01/01/2011 ${e[availableDateIndex].free_slots[freeSlotsIndex][0]}`),i=new Date(`01/01/2011 ${e[availableDateIndex].free_slots[freeSlotsIndex][1]}`),o=a;for(;o<i;){let e,t=["00","15","30","45"],a=1===o.getMinutes().toString().length?`0${o.getMinutes()}`:`${o.getMinutes()}`;if(t.includes(a)){let e=structuredClone(o);if(e.setMinutes(e.getMinutes()+30),!(e<=i))break;s.includes(o)||(s=s.concat(n(o))),o=new Date(o.setMinutes(o.getMinutes()+15))}else{t.push(a),t.sort();let n=t.indexOf(a);e=a>"44"?60-parseInt(t[n]):parseInt(t[n+1])-parseInt(t[n]),o=new Date(o.setMinutes(o.getMinutes()+e))}}s.sort(),t[e[availableDateIndex].date]=s}}return t}(t),o=new Date;o.setMinutes(o.getMinutes()+120);let r=e(o),l=`${1===o.getHours().toString().length?`0${o.getHours()}`:o.getHours()}:${1===o.getMinutes().toString().length?`0${o.getMinutes()}`:o.getMinutes()}`,c=[];if(r in i){for(availableTimeIndex in i[r])i[r][availableTimeIndex]>l&&c.push(i[r][availableTimeIndex]);c.length>0?i[r]=c:i.pop(r)}return i}(),i=function(e){return Object.keys(e)}(t),o=[];i.forEach((e=>{o.push({label:e,value:e})}));let r=components.screening__schedule_date.value.slice(0,-1).split("T"),l=e(new Date(r));""!=components.screening__schedule_date.value&&(o.find((e=>e))||(o.push({label:l,value:l}),components.screening__schedule_date.value=l)),components.screening__schedule_date2.options=o,components.screening__schedule_date2.onChange((()=>{let e=components.screening__schedule_date2.value;if(e){let n=r[1].substring(0,5);t.hasOwnProperty(l)&&(t[l].includes(n)||t[l].push(n));let s=function(e,t){return e[t]}(t,e),a=[];s.forEach((e=>{a=a.concat({label:e,value:e})})),components.screening__schedule_hour.options=a,components.screening__schedule_hour.value=""}else components.screening__schedule_hour.value=""})),components.screening__schedule_hour.onChange((async()=>{let e=components.screening__schedule_date2.value,t=components.screening__schedule_hour.value;components.screening__schedule_date.value=e+" "+t}))}(),components.cancelarbloqueio.visible=!1}})(),components.cancelarbloqueio.onClick((async()=>{let e=components.screening__screening_id.value;try{await executeAction("cancelblocktriagem",null,{screeningId:e}),showToast("success","Bloqueio cancelado com sucesso!"),setTimeout((()=>{window.location.reload()}),1500)}catch(e){showToast("error","Tente novamente!")}})),components.iniciaratendimento.onClick((()=>{let e=window.location.origin.toString();e+=`/tatodois-triagem/${components.screening__screening_id.value}`,window.location.href=e})),components.registrarfalta.onClick((()=>{let e=window.location.origin.toString();e+=`/tatodois-triagem-falta/${components.screening__screening_id.value}`,window.location.href=e}));/*! Mon Jul 04 2022 19:14:47 GMT+0000 (Coordinated Universal Time) !*/