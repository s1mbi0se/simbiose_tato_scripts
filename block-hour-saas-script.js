(()=>{function e(){function e(){let e=parseInt(components.schedule__lock_start_hour.value.split(":")[0]),t=parseInt(components.schedule__lock_start_hour.value.split(":")[1]),o=parseInt(60*e),n=parseInt(o+t),s=parseInt(components.schedule__lock_end_hour.value.split(":")[0]),a=parseInt(components.schedule__lock_end_hour.value.split(":")[1]),i=parseInt(60*s);if(parseInt(i+a)<n){let e=Math.floor(n/60),t=n%60;components.schedule__lock_end_hour.value=`${e}:${t+30}`}}components.schedule__lock_start_hour.value="00:00",components.schedule__lock_end_hour.value="00:00",components.schedule__lock_start_hour.onChange((()=>{e()})),components.schedule__lock_end_hour.onChange((()=>{e()}))}function t(e){return`${e.split(" ")[0].split("/")[1]}/${e.split(" ")[0].split("/")[0]}/${e.split(" ")[0].split("/")[2]}`}function o(e,t){return 1===e.length?"month"===t?`0${parseInt(e)+1}`:`0${e}`:"month"===t?parseInt(e)+1:e}function n(e){let t=`${e.split(" ")[0].split("/")[2]}-${e.split(" ")[0].split("/")[1]}-${e.split(" ")[0].split("/")[0]}`;return e.includes(":")?`${t} ${e.split(" ")[1]}`:`${t}`}components.criaragendamento.visible=!1,components.criarbloqueio.visible=!1,components.schedule__type.onChange((()=>{"Bloqueio de Horário"===components.schedule__type.value?(components.criaragendamento.visible=!1,components.criarbloqueio.visible=!0,e()):(components.criarbloqueio.visible=!1,components.criaragendamento.visible=!0,e())})),components.criarbloqueio.onClick((async()=>{let e={lockDate:components.schedule__lock_date.value,lockStartHour:components.schedule__lock_start_hour.value,lockEndHour:components.schedule__lock_end_hour.value,scheduleDate:components.schedule__lock_date.value+" "+components.schedule__lock_start_hour.value,duration:components.schedule__duration.value,status:"Bloqueio",physiotherapistId:components.schedule__physiotherapist_id.value,type:components.schedule__type.value,patientName:"Bloqueio Bloqueio"};await async function(e){let n=e.physiotherapistId,s=e.lockStartHour,a=e.lockEndHour,i=e.lockDate,r=t(i),l=await async function(e){let t=await executeAction("getphysioagendas",null,{currentPhysiotherapist:e}),o={"segunda-feira":1,"terça-feira":2,"quarta-feira":3,"quinta-feira":4,"sexta-feira":5,sábado:6,domingo:0};return t.forEach((e=>{e.weekday in o&&(e.weekday=o[e.weekday])})),t}(n),c=await async function(e){let t=new Date;t.setDate(t.getDate()+20);let n=t.toJSON().slice(0,10).replace(/-/g,"-"),s={};return(await executeAction("getphysioschedulessaas",null,{currentPhysiotherapist:e,finalDate:n})).forEach((e=>{let t={},n="",a=e.physiotherapist_id,i=e.schedule.slice(0,-1).split("T"),r=new Date(i);n=`${o(r.getDate().toString(),"day")}/${o(r.getMonth().toString(),"month")}/${r.getFullYear()}`,r.setMinutes(r.getMinutes()+30),t={start:i[1].substring(0,5),end:r.getHours()+":"+r.getMinutes()},Object.keys(s).includes(a.toString())?(Object.keys(s[a]).includes(n)||(s[a][n]=[]),s[a][n].push(t)):s[a]={[n]:[t]}})),s}(n),u=new Date(`${r} ${s}`),p=new Date(`${r} ${a}`),h=u.getDay(),d=[],_=[];return l.forEach((e=>{e.weekday===h&&d.push(e)})),d.forEach((e=>{let t=[];e.physiotherapist_id in c&&i in c[e.physiotherapist_id]&&(t=c[e.physiotherapist_id][i]);let o=function(e,t,o,n){let s=o.sort(((e,t)=>e.start>t.start?1:-1)),a=[[e,e]],i=[];return s.forEach((o=>{Date.parse(`01/01/2011 ${e}`)<=Date.parse(`01/01/2011 ${o.start}`)<Date.parse(`01/01/2011 ${t}`)&&a.push([o.start,o.end])})),a.push([t,t]),a.forEach(((e,t)=>{if(t>0&&new Date(`01/01/2011 ${a[t][0]}`)-new Date(`01/01/2011 ${a[t-1][1]}`)>0){let e=new Date(`01/01/2011 ${a[t-1][1]}`),o=structuredClone(e),s=Math.abs(new Date(`01/01/2011 ${a[t][0]}`)-new Date(`01/01/2011 ${a[t-1][1]}`))/36e5*60,r=new Date(o.setMinutes(o.getMinutes()+s));s>=n&&i.push(function(e,t){let o,n,s,a=[];return[e,t].forEach((e=>{if(void 0===e)return a;o=1===e.getHours().toString().length?`0${e.getHours()}`:e.getHours(),n=1===e.getMinutes().toString().length?`0${e.getMinutes()}`:e.getMinutes(),s=`${o}:${n}`,a=a.concat(s)})),a}(e,r))}})),i}(e.start_hour,e.end_hour,t,Math.abs(p-u)/36e5*60);o.forEach((t=>{let o=new Date(`${r} ${t[0]}`),n=new Date(`${r} ${t[1]}`);o<=u&&n>=p&&(Object.values(_).includes(e.physiotherapist_id)||_.push(e.physiotherapist_id))}))})),Object.values(_).includes(parseInt(n))}(e)?async function(e){let{lockDate:o,lockStartHour:s,lockEndHour:a,status:i,physiotherapistId:r,type:l,scheduleDate:c,patientName:u}=e,p=n(c),h=n(o),d=function(e,o,n){let s=t(n),a=new Date(`${s} ${e}`),i=new Date(`${s} ${o}`);return Math.abs(i-a)/36e5*60}(s,a,o);try{await executeAction("insertblocksaas",null,{physiotherapistId:r,type:l,status:i,blockDuration:d,newScheduleDate:p,patientName:u,newLockDate:h,lockStartHour:s,lockEndHour:a}),showToast("success","Bloqueio marcado com sucesso!"),setTimeout((()=>{window.location.reload()}),1500)}catch(e){showToast("error","Tente novamente!")}}(e):showToast("error","Há conflitos na agenda do Fisioterapeuta!")})),components.voltar.onClick((()=>closeModal()))})();/*! Fri Jul 08 2022 20:17:15 GMT+0000 (Coordinated Universal Time) !*/