(()=>{function e(e){return`${t(e.getDate().toString(),"day")}/${t(e.getMonth().toString(),"month")}/${e.getFullYear()}`}function t(e,t){return 1===e.length?"month"===t?`0${parseInt(e)+1}`:`0${e}`:"month"===t?parseInt(e)+1:e}function n(e,t){let n,a,s,i=[];return[e,t].forEach((e=>{if(void 0===e)return i;n=1===e.getHours().toString().length?`0${e.getHours()}`:e.getHours(),a=1===e.getMinutes().toString().length?`0${e.getMinutes()}`:e.getMinutes(),s=`${n}:${a}`,i.push(s)})),i}function a(e,t){let n=new Date(e);return n.setDate(e.getDate()+t),n}function s(e,t,a){let s=a.sort(((e,t)=>e.start>t.start?1:-1)),i=[[e,e]],r=[];return s.forEach((n=>{Date.parse(`01/01/2011 ${e}`)<=Date.parse(`01/01/2011 ${n.start}`)<Date.parse(`01/01/2011  ${t}`)&&i.push([n.start,n.end])})),i.push([t,t]),i.forEach(((e,t)=>{if(t>0&&new Date(`01/01/2011 ${i[t][0]}`)-new Date(`01/01/2011 ${i[t-1][1]}`)>0){let e=new Date(`01/01/2011 ${i[t-1][1]}`),a=structuredClone(e),s=Math.abs(new Date(`01/01/2011 ${i[t][0]}`)-new Date(`01/01/2011 ${i[t-1][1]}`))/36e5*60,o=new Date(a.setMinutes(a.getMinutes()+s));s>=30&&r.push(n(e,o))}})),r}!async function(){let t=await async function(){let t=function(e){let t={};for(availableDateIndex in e){let a=[];for(freeSlotsIndex in e[availableDateIndex].free_slots){let s=new Date(`01/01/2011 ${e[availableDateIndex].free_slots[freeSlotsIndex][0]}`),i=new Date(`01/01/2011 ${e[availableDateIndex].free_slots[freeSlotsIndex][1]}`),r=s;for(;r<i;){let e,t=["00","15","30","45"],s=1===r.getMinutes().toString().length?`0${r.getMinutes()}`:`${r.getMinutes()}`;if(t.includes(s)){let e=structuredClone(r);if(e.setMinutes(e.getMinutes()+30),!(e<=i))break;a.includes(r)||(a=a.concat(n(r))),r=new Date(r.setMinutes(r.getMinutes()+15))}else{t.push(s),t.sort();let n=t.indexOf(s);e=s>"44"?60-parseInt(t[n]):parseInt(t[n+1])-parseInt(t[n]),r=new Date(r.setMinutes(r.getMinutes()+e))}}a.sort(),t[e[availableDateIndex].date]=a}}return t}(function(t,n,i){let r=new Date,o=[],u=[];for(let e=0;e<20;e++)o.push(a(r,e));for(dateIndex in o){let t=o[dateIndex],a=t.getDay(),r=e(t),l=n.filter((e=>e.weekday==a));for(agendaIndex in l){let e=[];l[agendaIndex].physiotherapist_id in i&&r in i[l[agendaIndex].physiotherapist_id]&&(e=i[l[agendaIndex].physiotherapist_id][r]);let t=s(l[agendaIndex].start_hour,l[agendaIndex].end_hour,e);if(t){let e={date:r,free_slots:t};u.push(e)}}}return u}(0,await async function(){let e=components.screening__physiotherapist_id.value,t=await executeAction("getphysioagenda",null,{physiotherapistId:e}),n={domingo:0,"segunda-feira":1,"terça-feira":2,"quarta-feira":3,"quinta-feira":4,"sexta-feira":5,sábado:6};return t.forEach((e=>{e.weekday in n&&(e.weekday=n[e.weekday])})),t}(),await async function(t){let n=new Date;n.setDate(n.getDate()+20);let a=n.toJSON().slice(0,10).replace(/-/g,"-"),s={};return(await executeAction("getphysioscreenings",null,{endDate:a})).forEach((t=>{let n={},a="",i=t.physiotherapist_id,r=t.schedule_date.slice(0,-1).split("T"),o=new Date(r);o.setMinutes(o.getMinutes()+30);let u=1===o.getHours().toString().length?`0${o.getHours()}`:o.getHours(),l=1===o.getMinutes().toString().length?`0${o.getMinutes()}`:o.getMinutes();n={start:r[1].substring(0,5),end:`${u}:${l}`},a=e(o),Object.keys(s).includes(i.toString())?(Object.keys(s[i]).includes(a)||(s[i][a]=[]),s[i][a].push(n)):s[i]={[a]:[n]}})),s}())),i=new Date;i.setMinutes(i.getMinutes()+120);let r=e(i),o=`${1===i.getHours().toString().length?`0${i.getHours()}`:i.getHours()}:${1===i.getMinutes().toString().length?`0${i.getMinutes()}`:i.getMinutes()}`,u=[];if(r in t){for(availableTimeIndex in t[r])t[r][availableTimeIndex]>o&&u.push(t[r][availableTimeIndex]);u.length>0?t[r]=u:t.pop(r)}return t}(),i=function(e){return Object.keys(e)}(t),r=[];i.forEach((e=>{r.push({label:e,value:e})})),components.screening__schedule_date2.options=r,components.screening__schedule_date2.onChange((()=>{let e=components.screening__schedule_date2.value;if(e){let n=function(e,t){return e[t]}(t,e),a=[];n.forEach((e=>{a=a.concat({label:e,value:e})})),components.screening__schedule_hour.options=a,components.screening__schedule_hour.value=""}else components.screening__schedule_hour.value=""})),components.screening__schedule_hour.onChange((async()=>{let e=components.screening__schedule_date2.value,t=components.screening__schedule_hour.value;components.screening__schedule_date.value=e+" "+t}))}()})();/*! Fri Jul 08 2022 20:19:26 GMT+0000 (Coordinated Universal Time) !*/