(()=>{function e(){let e=parseInt(components.screening__lock_start_hour.value.split(":")[0]),t=parseInt(components.screening__lock_start_hour.value.split(":")[1]),n=parseInt(60*e),o=parseInt(n+t),a=parseInt(components.screening__lock_end_hour.value.split(":")[0]),s=parseInt(components.screening__lock_end_hour.value.split(":")[1]),r=parseInt(60*a);if(parseInt(r+s)<o){let e=Math.floor(o/60),t=o%60;components.screening__lock_end_hour.value=`${e}:${t+30}`}}function t(e){return`${e.split(" ")[0].split("/")[1]}/${e.split(" ")[0].split("/")[0]}/${e.split(" ")[0].split("/")[2]}`}function n(e,t){return 1===e.length?"month"===t?`0${parseInt(e)+1}`:`0${e}`:"month"===t?parseInt(e)+1:e}function o(e,n,o){let a=t(o),s=new Date(`${a} ${e}`),r=new Date(`${a} ${n}`);return blockDuration=Math.abs(r-s)/36e5,blockDurationInMinutes=60*blockDuration}function a(e){let t=`${e.split(" ")[0].split("/")[2]}-${e.split(" ")[0].split("/")[1]}-${e.split(" ")[0].split("/")[0]}`;return e.includes(":")?`${t} ${e.split(" ")[1]}`:`${t}`}components.screening__lock_start_hour.value="00:00",components.screening__lock_end_hour.value="00:00",components.screening__lock_start_hour.onChange((()=>{e()})),components.screening__lock_end_hour.onChange((()=>{e()})),components.criarbloqueio.onClick((async()=>{components.criarbloqueio.disabled=!0;let e={lockDate:components.screening__lock_date.value,lockStartHour:components.screening__lock_start_hour.value,lockEndHour:components.screening__lock_end_hour.value,scheduleDate:components.screening__lock_date.value+" "+components.screening__lock_start_hour.value,duration:components.screening__duration.value,status:"active",physiotherapistId:components.screening__physiotherapist_id.value,firstName:components.screening__first_name.value,lastName:components.screening__last_name.value,type:components.screening__type.value};await async function(e){let o=e.physiotherapistId,a=e.lockStartHour,s=e.lockEndHour,r=e.lockDate,i=t(r),c=await async function(e){let t=new Date;t.setDate(t.getDate()+20);let o=t.toJSON().slice(0,10).replace(/-/g,"-"),a={};return(await executeAction("tatotriagem-getphysioscreeningstriagem",null,{currentPhysiotherapist:e,finalDate:o})).forEach((e=>{let t={},o="",s=e.physiotherapist_id,r=e.schedule_date.slice(0,-1).split("T"),i=new Date(r);o=`${n(i.getDate().toString(),"day")}/${n(i.getMonth().toString(),"month")}/${i.getFullYear()}`,i.setMinutes(i.getMinutes()+30),t={start:r[1].substring(0,5),end:i.getHours()+":"+i.getMinutes()},Object.keys(a).includes(s.toString())?(Object.keys(a[s]).includes(o)||(a[s][o]=[]),a[s][o].push(t)):a[s]={[o]:[t]}})),a}(o),l=new Date(`${i} ${a}`),u=new Date(`${i} ${s}`),p=l.getDay(),h=await async function(e){let t=await executeAction("tatotriagem-getphysioagendas",null,{currentPhysiotherapist:e}),n={"segunda-feira":1,"terça-feira":2,"quarta-feira":3,"quinta-feira":4,"sexta-feira":5,sábado:6,domingo:0};return t.forEach((e=>{e.weekday in n&&(e.weekday=n[e.weekday])})),t}(o),_=[],d=[];return h.forEach((e=>{e.weekday===p&&_.push(e)})),_.forEach((e=>{let t=[];e.physiotherapist_id in c&&r in c[e.physiotherapist_id]&&(t=c[e.physiotherapist_id][r]);let n=function(e,t,n,o){let a=n.sort(((e,t)=>e.start>t.start?1:-1)),s=[[e,e]],r=[];return a.forEach((n=>{Date.parse(`01/01/2011 ${e}`)<=Date.parse(`01/01/2011 ${n.start}`)<Date.parse(`01/01/2011 ${t}`)&&s.push([n.start,n.end])})),s.push([t,t]),s.forEach(((e,t)=>{if(t>0&&new Date(`01/01/2011 ${s[t][0]}`)-new Date(`01/01/2011 ${s[t-1][1]}`)>0){let e=new Date(`01/01/2011 ${s[t-1][1]}`),n=structuredClone(e),a=Math.abs(new Date(`01/01/2011 ${s[t][0]}`)-new Date(`01/01/2011 ${s[t-1][1]}`))/36e5*60,i=new Date(n.setMinutes(n.getMinutes()+a));a>=o&&r.push(function(e,t){let n,o,a,s=[];return[e,t].forEach((e=>{if(void 0===e)return s;n=1===e.getHours().toString().length?`0${e.getHours()}`:e.getHours(),o=1===e.getMinutes().toString().length?`0${e.getMinutes()}`:e.getMinutes(),a=`${n}:${o}`,s=s.concat(a)})),s}(e,i))}})),r}(e.start_hour,e.end_hour,t,Math.abs(u-l)/36e5*60);n.forEach((t=>{let n=new Date(`${i} ${t[0]}`),o=new Date(`${i} ${t[1]}`);n<=l&&o>=u&&(Object.values(d).includes(e.physiotherapist_id)||d.push(e.physiotherapist_id))}))})),Object.values(d).includes(parseInt(o))}(e)?async function(e){let{lockDate:t,lockStartHour:n,lockEndHour:s,status:r,physiotherapistId:i,firstName:c,lastName:l,type:u,scheduleDate:p}=e,h=a(p),_=a(t),d=o(n,s,t);try{await executeAction("tatotriagem-insertblock",null,{physiotherapistId:i,firstName:c,lastName:l,type:u,status:r,blockDuration:d,newScheduleDate:h,activeStatus:"Bloqueio",newLockDate:_,lockStartHour:n,lockEndHour:s}),showToast("success","Bloqueio marcado com sucesso!"),setTimeout((()=>{window.location.reload()}),1500)}catch(e){showToast("error","Tente novamente!")}components.criarbloqueio.disabled=!1}(e):showToast("error","Há conflitos na agenda do Fisioterapeuta!")})),components.voltar.onClick((()=>closeModal()))})();/*! Mon Jul 18 2022 20:39:36 GMT+0000 (Coordinated Universal Time) !*/