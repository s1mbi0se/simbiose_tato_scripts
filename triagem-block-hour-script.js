(()=>{function e(){let e=parseInt(components.screening__lock_start_hour.value.split(":")[0]),t=parseInt(components.screening__lock_start_hour.value.split(":")[1]),n=parseInt(60*e),s=parseInt(n+t),o=parseInt(components.screening__lock_end_hour.value.split(":")[0]),a=parseInt(components.screening__lock_end_hour.value.split(":")[1]),r=parseInt(60*o);if(parseInt(r+a)<s){let e=Math.floor(s/60),t=s%60;components.screening__lock_end_hour.value=`${e}:${t+30}`}}function t(e){return`${e.split(" ")[0].split("/")[1]}/${e.split(" ")[0].split("/")[0]}/${e.split(" ")[0].split("/")[2]}`}function n(e,t){return 1===e.length?"month"===t?`0${parseInt(e)+1}`:`0${e}`:"month"===t?parseInt(e)+1:e}function s(e,n,s){let o=t(s),a=new Date(`${o} ${e}`),r=new Date(`${o} ${n}`);return blockDuration=Math.abs(r-a)/36e5,blockDurationInMinutes=60*blockDuration}function o(e){let t=`${e.split(" ")[0].split("/")[2]}-${e.split(" ")[0].split("/")[1]}-${e.split(" ")[0].split("/")[0]}`;return e.includes(":")?`${t} ${e.split(" ")[1]}`:`${t}`}components.screening__lock_start_hour.value="00:00",components.screening__lock_end_hour.value="00:00",components.screening__lock_start_hour.onChange((()=>{e()})),components.screening__lock_end_hour.onChange((()=>{e()})),components.criarbloqueio.onClick((async()=>{let e={lockDate:components.screening__lock_date.value,lockStartHour:components.screening__lock_start_hour.value,lockEndHour:components.screening__lock_end_hour.value,scheduleDate:components.screening__lock_date.value+" "+components.screening__lock_start_hour.value,duration:components.screening__duration.value,status:"active",physiotherapistId:components.screening__physiotherapist_id.value,firstName:components.screening__first_name.value,lastName:components.screening__last_name.value,type:components.screening__type.value};await async function(e){let s=e.physiotherapistId,o=e.lockStartHour,a=e.lockEndHour,r=e.lockDate,i=t(r),c=await async function(e){let t=new Date;t.setDate(t.getDate()+20);let s=t.toJSON().slice(0,10).replace(/-/g,"-"),o={};return(await executeAction("getphysioscreeningstriagem",null,{currentPhysiotherapist:e,finalDate:s})).forEach((e=>{let t={},s="",a=e.physiotherapist_id,r=e.schedule_date.slice(0,-1).split("T"),i=new Date(r);s=`${n(i.getDate().toString(),"day")}/${n(i.getMonth().toString(),"month")}/${i.getFullYear()}`,i.setMinutes(i.getMinutes()+30),t={start:r[1].substring(0,5),end:i.getHours()+":"+i.getMinutes()},Object.keys(o).includes(a.toString())?(Object.keys(o[a]).includes(s)||(o[a][s]=[]),o[a][s].push(t)):o[a]={[s]:[t]}})),o}(s),l=new Date(`${i} ${o}`),u=new Date(`${i} ${a}`),p=l.getDay(),h=await async function(e){let t=await executeAction("getphysioagendas",null,{currentPhysiotherapist:e}),n={"segunda-feira":1,"terça-feira":2,"quarta-feira":3,"quinta-feira":4,"sexta-feira":5,sábado:6,domingo:0};return t.forEach((e=>{e.weekday in n&&(e.weekday=n[e.weekday])})),t}(s),_=[],d=[];return h.forEach((e=>{e.weekday===p&&_.push(e)})),_.forEach((e=>{let t=[];e.physiotherapist_id in c&&r in c[e.physiotherapist_id]&&(t=c[e.physiotherapist_id][r]);let n=function(e,t,n,s){let o=n.sort(((e,t)=>e.start>t.start?1:-1)),a=[[e,e]],r=[];return o.forEach((n=>{Date.parse(`01/01/2011 ${e}`)<=Date.parse(`01/01/2011 ${n.start}`)<Date.parse(`01/01/2011 ${t}`)&&a.push([n.start,n.end])})),a.push([t,t]),a.forEach(((e,t)=>{if(t>0&&new Date(`01/01/2011 ${a[t][0]}`)-new Date(`01/01/2011 ${a[t-1][1]}`)>0){let e=new Date(`01/01/2011 ${a[t-1][1]}`),n=structuredClone(e),o=Math.abs(new Date(`01/01/2011 ${a[t][0]}`)-new Date(`01/01/2011 ${a[t-1][1]}`))/36e5*60,i=new Date(n.setMinutes(n.getMinutes()+o));o>=s&&r.push(function(e,t){let n,s,o,a=[];return[e,t].forEach((e=>{if(void 0===e)return a;n=1===e.getHours().toString().length?`0${e.getHours()}`:e.getHours(),s=1===e.getMinutes().toString().length?`0${e.getMinutes()}`:e.getMinutes(),o=`${n}:${s}`,a=a.concat(o)})),a}(e,i))}})),r}(e.start_hour,e.end_hour,t,Math.abs(u-l)/36e5*60);n.forEach((t=>{let n=new Date(`${i} ${t[0]}`),s=new Date(`${i} ${t[1]}`);n<=l&&s>=u&&(Object.values(d).includes(e.physiotherapist_id)||d.push(e.physiotherapist_id))}))})),Object.values(d).includes(parseInt(s))}(e)?async function(e){let{lockDate:t,lockStartHour:n,lockEndHour:a,status:r,physiotherapistId:i,firstName:c,lastName:l,type:u,scheduleDate:p}=e,h=o(p),_=o(t),d=s(n,a,t);try{await executeAction("insertblock",null,{physiotherapistId:i,firstName:c,lastName:l,type:u,status:r,blockDuration:d,newScheduleDate:h,activeStatus:"Bloqueio",newLockDate:_,lockStartHour:n,lockEndHour:a}),showToast("success","Bloqueio marcado com sucesso!"),setTimeout((()=>{window.location.reload()}),1500)}catch(e){showToast("error","Tente novamente!")}}(e):showToast("error","Há conflitos na agenda do Fisioterapeuta!")})),components.voltar.onClick((()=>closeModal()))})();/*! Mon Jun 27 2022 19:17:12 GMT+0000 (Coordinated Universal Time) !*/