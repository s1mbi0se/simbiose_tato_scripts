(()=>{function e(){function e(){let e=parseInt(components.schedule__lock_start_hour.value.split(":")[0]),t=parseInt(components.schedule__lock_start_hour.value.split(":")[1]),o=parseInt(60*e),s=parseInt(o+t),n=parseInt(components.schedule__lock_end_hour.value.split(":")[0]),a=parseInt(components.schedule__lock_end_hour.value.split(":")[1]),r=parseInt(60*n);if(parseInt(r+a)<s){let e=Math.floor(s/60),t=s%60;components.schedule__lock_end_hour.value=`${e}:${t+30}`}}components.schedule__lock_start_hour.value="00:00",components.schedule__lock_end_hour.value="00:00",components.schedule__lock_start_hour.onChange((()=>{e()})),components.schedule__lock_end_hour.onChange((()=>{e()}))}function t(e){return`${e.split(" ")[0].split("/")[1]}/${e.split(" ")[0].split("/")[0]}/${e.split(" ")[0].split("/")[2]}`}function o(e,t){return 1===e.length?"month"===t?`0${parseInt(e)+1}`:`0${e}`:"month"===t?parseInt(e)+1:e}components.criaragendamento.visible=!1,components.criarbloqueio.visible=!1,components.schedule__type.onChange((()=>{"Bloqueio de Horário"===components.schedule__type.value?(components.criaragendamento.visible=!1,components.criarbloqueio.visible=!0,e()):(components.criarbloqueio.visible=!1,components.criaragendamento.visible=!0,e())})),components.criarbloqueio.onClick((async()=>{let e={lockDate:components.schedule__lock_date.value,lockStartHour:components.schedule__lock_start_hour.value,lockEndHour:components.schedule__lock_end_hour.value,scheduleDate:components.schedule__lock_date.value+" "+components.schedule__lock_start_hour.value,duration:components.schedule__duration.value,status:"active",physiotherapistId:components.schedule__physiotherapist_id.value,type:components.schedule__type.value};await async function(e){let s=e.physiotherapistId,n=e.lockStartHour,a=e.lockEndHour,r=e.lockDate,i=t(r),c=await async function(e){let t=(await executeAction("getphysioagendas",null,{currentPhysiotherapist:e}))[0],o={"segunda-feira":1,"terça-feira":2,"quarta-feira":3,"quinta-feira":4,"sexta-feira":5,sábado:6,domingo:0};return t.forEach((e=>{e.weekday in o&&(e.weekday=o[e.weekday])})),t}(s),l=await async function(e){let t=new Date;t.setDate(t.getDate()+20);let s=t.toJSON().slice(0,10).replace(/-/g,"-"),n={};return(await executeAction("getphysioschedulessaas",null,{currentPhysiotherapist:e,finalDate:s}))[0].forEach((e=>{let t={},s="",a=e.physiotherapist_id,r=e.schedule.slice(0,-1).split("T"),i=new Date(r);s=`${o(i.getDate().toString(),"day")}/${o(i.getMonth().toString(),"month")}/${i.getFullYear()}`,i.setMinutes(i.getMinutes()+30),t={start:r[1].substring(0,5),end:i.getHours()+":"+i.getMinutes()},Object.keys(n).includes(a.toString())?(Object.keys(n[a]).includes(s)||(n[a][s]=[]),n[a][s].push(t)):n[a]={[s]:[t]}})),n}(s),u=new Date(`${i} ${n}`),p=new Date(`${i} ${a}`),h=u.getDay(),d=[],_=[];return c.forEach((e=>{e.weekday===h&&d.push(e)})),d.forEach((e=>{let t=[];e.physiotherapist_id in l&&r in l[e.physiotherapist_id]&&(t=l[e.physiotherapist_id][r]);let o=function(e,t,o,s){let n=o.sort(((e,t)=>e.start>t.start?1:-1)),a=[[e,e]],r=[];return n.forEach((o=>{Date.parse(`01/01/2011 ${e}`)<=Date.parse(`01/01/2011 ${o.start}`)<Date.parse(`01/01/2011 ${t}`)&&a.push([o.start,o.end])})),a.push([t,t]),a.forEach(((e,t)=>{if(t>0&&new Date(`01/01/2011 ${a[t][0]}`)-new Date(`01/01/2011 ${a[t-1][1]}`)>0){let e=new Date(`01/01/2011 ${a[t-1][1]}`),o=structuredClone(e),n=Math.abs(new Date(`01/01/2011 ${a[t][0]}`)-new Date(`01/01/2011 ${a[t-1][1]}`))/36e5*60,i=new Date(o.setMinutes(o.getMinutes()+n));n>=s&&r.push(function(e,t){let o,s,n,a=[];return[e,t].forEach((e=>{if(void 0===e)return a;o=1===e.getHours().toString().length?`0${e.getHours()}`:e.getHours(),s=1===e.getMinutes().toString().length?`0${e.getMinutes()}`:e.getMinutes(),n=`${o}:${s}`,a=a.concat(n)})),a}(e,i))}})),r}(e.start_hour,e.end_hour,t,Math.abs(p-u)/36e5*60);o.forEach((t=>{let o=new Date(`${i} ${t[0]}`),s=new Date(`${i} ${t[1]}`);o<=u&&s>=p&&(Object.values(_).includes(e.physiotherapist_id)||_.push(e.physiotherapist_id))}))})),Object.values(_).includes(parseInt(s))}(e)?async function(e){let{lockDate:o,lockStartHour:s,lockEndHour:n,status:a,physiotherapistId:r,type:i,scheduleDate:c}=e,l=function(e){let t=`${e.split(" ")[0].split("/")[2]}-${e.split(" ")[0].split("/")[1]}-${e.split(" ")[0].split("/")[0]}`;return e.includes(":")?`${t} ${e.split(" ")[1]}`:`${t}`}(c),u=function(e,o,s){let n=t(s),a=new Date(`${n} ${e}`),r=new Date(`${n} ${o}`);return Math.abs(r-a)/36e5*60}(s,n,o);try{await executeAction("insertblocksaas",null,{physiotherapistId:r,type:i,status:a,blockDuration:u,newScheduleDate:l}),showToast("success","Bloqueio marcado com sucesso!")}catch(e){showToast("error","Tente novamente!")}}(e):showToast("error","Há conflitos na agenda do Fisioterapeuta!")})),components.voltar.onClick((()=>closeModal()))})();/*! Tue Jun 28 2022 12:01:57 GMT+0000 (Coordinated Universal Time) !*/