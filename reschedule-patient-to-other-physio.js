(()=>{function e(e,t){return 1===e.length?"month"===t?`0${parseInt(e)+1}`:`0${e}`:"month"===t?parseInt(e)+1:e}function t(t){return`${e(t.getDate().toString(),"day")}/${e(t.getMonth().toString(),"month")}/${t.getFullYear()}`}async function n(e,n){let a=new Date;a.setDate(a.getDate()+e);let s,i=a.toJSON().slice(0,10).replace(/-/g,"-"),o={};return s="2"===n?await executeAction("tatomain-getallschedules",null,{endDate:i}):await executeAction("tatomain-getallschedules-new-fisio",null,{endDate:i,physioType:n}),s.forEach((e=>{let n={},a="",s=e.physiotherapist_id,i=e.duration,l=e.schedule.slice(0,-1).split("T"),u=new Date(l);u.setMinutes(u.getMinutes()+i);let r=1===u.getHours().toString().length?`0${u.getHours()}`:u.getHours(),c=1===u.getMinutes().toString().length?`0${u.getMinutes()}`:u.getMinutes();n={start:l[1].substring(0,5),end:`${r}:${c}`},a=t(u),Object.keys(o).includes(s.toString())?(Object.keys(o[s]).includes(a)||(o[s][a]=[]),o[s][a].push(n)):o[s]={[a]:[n]}})),o}function a(e,t){let n,a,s,i=[];return[e,t].forEach((e=>{if(void 0===e)return i;n=1===e.getHours().toString().length?`0${e.getHours()}`:e.getHours(),a=1===e.getMinutes().toString().length?`0${e.getMinutes()}`:e.getMinutes(),s=`${n}:${a}`,i.push(s)})),i}function s(){let e=components.schedule__organization_id.value;return"1"===e?"2":e}function i(e,t){let n=new Date(e);return n.setDate(e.getDate()+t),n}function o(e,t,n,s){let i=n.sort(((e,t)=>e.start>t.start?1:-1)),o=[[e,e]],l=[];return i.forEach((n=>{Date.parse(`01/01/2011 ${e}`)<=Date.parse(`01/01/2011 ${n.start}`)<Date.parse(`01/01/2011  ${t}`)&&o.push([n.start,n.end])})),o.push([t,t]),o.forEach(((e,t)=>{if(t>0&&new Date(`01/01/2011 ${o[t][0]}`)-new Date(`01/01/2011 ${o[t-1][1]}`)>0){let e=new Date(`01/01/2011 ${o[t-1][1]}`),n=structuredClone(e),i=Math.abs(new Date(`01/01/2011 ${o[t][0]}`)-new Date(`01/01/2011 ${o[t-1][1]}`))/36e5*60,u=new Date(n.setMinutes(n.getMinutes()+i));i>=s&&l.push(a(e,u))}})),l}async function l(e){let t;t="2"===e?await executeAction("tatomain-getsaasagenda",null):await executeAction("tatomain-getsaasagenda-new-fisio",null,{physioType:e});let n={domingo:0,"segunda-feira":1,"terça-feira":2,"quarta-feira":3,"quinta-feira":4,"sexta-feira":5,sábado:6};return t.forEach((e=>{e.weekday in n&&(e.weekday=n[e.weekday])})),t}!async function(){let e=await async function(){let e=parseInt(components.schedule__duration.value),u=s(),r=await l(u),c=await n(20,u),h=await function(e,n,a,s){let l=new Date,u=[],r=[];for(let e=0;e<20;e++)u.push(i(l,e));for(dateIndex in u){let e=u[dateIndex],i=e.getDay(),l=t(e),c=n.filter((e=>e.weekday==i));for(agendaIndex in c){let e=[];c[agendaIndex].physiotherapist_id in a&&l in a[c[agendaIndex].physiotherapist_id]&&(e=a[c[agendaIndex].physiotherapist_id][l]);let t=o(c[agendaIndex].start_hour,c[agendaIndex].end_hour,e,s);if(t){let e={date:l,free_slots:t};r.push(e)}}}return r}(0,r,c,e),d=await function(e,t){let n={};for(availableDateIndex in e){let s=[];for(freeSlotsIndex in e[availableDateIndex].free_slots){let i=new Date(`01/01/2011 ${e[availableDateIndex].free_slots[freeSlotsIndex][0]}`),o=new Date(`01/01/2011 ${e[availableDateIndex].free_slots[freeSlotsIndex][1]}`),l=i;for(;l<o;){let e,n=["00","15","30","45"],i=1===l.getMinutes().toString().length?`0${l.getMinutes()}`:`${l.getMinutes()}`;if(n.includes(i)){let e=structuredClone(l);if(e.setMinutes(e.getMinutes()+t),!(e<=o))break;s.includes(l)||(s=s.concat(a(l))),l=new Date(l.setMinutes(l.getMinutes()+15))}else{n.push(i),n.sort();let t=n.indexOf(i);e=i>"44"?60-parseInt(n[t]):parseInt(n[t+1])-parseInt(n[t]),l=new Date(l.setMinutes(l.getMinutes()+e))}}s.sort(),n[e[availableDateIndex].date]=s}}return n}(h,e),p=new Date;p.setMinutes(p.getMinutes()+120);let g=t(p),_=`${1===p.getHours().toString().length?`0${p.getHours()}`:p.getHours()}:${1===p.getMinutes().toString().length?`0${p.getMinutes()}`:p.getMinutes()}`,f=[];if(g in d){for(availableTimeIndex in d[g])d[g][availableTimeIndex]>_&&f.push(d[g][availableTimeIndex]);f.length>0?d[g]=f:d.pop(g)}return d}(),u=function(e){return Object.keys(e)}(e),r=[],c=components.schedule__schedule.value.slice(0,-1).split("T"),h=function(e){let t=e.split("/");return`${t[1]}/${t[0]}/${t[2]}`}(c[0]),d=c[1].substring(0,5);components.schedule__schedule_2.value=h+" "+d,u.forEach((e=>{r.push({label:e,value:e})})),components.schedule__schedule_date.options=r,components.schedule__schedule_date.onChange((()=>{let t=components.schedule__schedule_date.value;if(t){let n=function(e,t){return e[t]}(e,t),a=[];n.forEach((e=>{a=a.concat({label:e,value:e})})),components.schedule__schedule_hour.options=a,components.schedule__schedule_hour.value=""}else components.schedule__schedule_hour.value="",components.schedule__schedule_hour.options=[]})),components.schedule__schedule_hour.onChange((async()=>{let e=components.schedule__schedule_date.value,t=components.schedule__schedule_hour.value;components.schedule__schedule.value=e+" "+t;let a=await async function(e){let t=parseInt(components.schedule__duration.value),a=s(),i=`${e.split(" ")[0].split("/")[1]}/${e.split(" ")[0].split("/")[0]}/${e.split(" ")[0].split("/")[2]}`,u=new Date(`${i} ${e.split(" ")[1]}`),r=structuredClone(u),c=await n(20,a),h=u.getDay(),d=await l(a),p=[],g=e.split(" ")[0],_=u,f=new Date(r.setMinutes(r.getMinutes()+t));d.forEach((e=>{e.weekday===h&&p.push(e)}));let m=[];p.forEach((e=>{let n=[];e.physiotherapist_id in c&&g in c[e.physiotherapist_id]&&(n=c[e.physiotherapist_id][g]),o(e.start_hour,e.end_hour,n,t).forEach((t=>{let n=new Date(`${i} ${t[0]}`),a=new Date(`${i} ${t[1]}`);n<=_&&a>=f&&(m.includes(e.physiotherapist_id)||(m=m.concat(e.physiotherapist_id)))}))}));let $=m[Math.floor(Math.random()*m.length)],w=await executeAction("tatomain-getselectphysiosaasinfos",null,{selectRandomPhysio:$,physioType:a});return{chosenPhysioId:$.toString(),name:`${w[0].first_name} ${w[0].last_name}`,email:w[0].email}}(components.schedule__schedule.value);components.schedule__physiotherapist_id.value=a.chosenPhysioId,components.name__physiotherapist_first_name.value=a.name,components.name__physiotherapist_email.value=a.email}))}()})();/*! Tue Jul 19 2022 21:05:35 GMT+0000 (Coordinated Universal Time) !*/