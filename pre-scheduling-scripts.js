(()=>{function e(e,t){return 1===e.length?"month"===t?`0${parseInt(e)+1}`:`0${e}`:"month"===t?parseInt(e)+1:e}function t(e,t){let n,a,s,o=[];return[e,t].forEach((e=>{if(void 0===e)return o;n=1===e.getHours().toString().length?`0${e.getHours()}`:e.getHours(),a=1===e.getMinutes().toString().length?`0${e.getMinutes()}`:e.getMinutes(),s=`${n}:${a}`,o=o.concat(s)})),o}function n(t,n){let a=e(t.getDate().toString(),"day"),s=e(t.getMonth().toString(),"month");return"br"===n?`${a}/${s}/${t.getFullYear()}`:`${s}/${a}/${t.getFullYear()}`}async function a(){let e=await executeAction("getallagendas",null),t={"segunda-feira":1,"terça-feira":2,"quarta-feira":3,"quinta-feira":4,"sexta-feira":5,sábado:6,domingo:0};return e.forEach((e=>{e.weekday in t&&(e.weekday=t[e.weekday])})),e}async function s(){let t=new Date;t.setDate(t.getDate()+20);let n=t.toJSON().slice(0,10).replace(/-/g,"-"),a={};return(await executeAction("getallscreenings",null,{finalDate:n})).forEach((t=>{let n={},s="",o=t.physiotherapist_id,i=t.schedule_date.slice(0,-1).split("T"),r=new Date(i);s=`${e(r.getDate().toString(),"day")}/${e(r.getMonth().toString(),"month")}/${r.getFullYear()}`,r.setMinutes(r.getMinutes()+30),n={start:i[1].substring(0,5),end:r.getHours()+":"+r.getMinutes()},Object.keys(a).includes(o.toString())?(Object.keys(a[o]).includes(s)||(a[o][s]=[]),a[o][s].push(n)):a[o]={[s]:[n]}})),a}function o(e,n,a){let s=a.sort(((e,t)=>e.start>t.start?1:-1)),o=[[e,e]],i=[];return s.forEach((t=>{Date.parse(`01/01/2011 ${e}`)<=Date.parse(`01/01/2011 ${t.start}`)<Date.parse(`01/01/2011 ${n}`)&&o.push([t.start,t.end])})),o.push([n,n]),o.forEach(((e,n)=>{if(n>0&&new Date(`01/01/2011 ${o[n][0]}`)-new Date(`01/01/2011 ${o[n-1][1]}`)>0){let e=new Date(`01/01/2011 ${o[n-1][1]}`),a=structuredClone(e),s=Math.abs(new Date(`01/01/2011 ${o[n][0]}`)-new Date(`01/01/2011 ${o[n-1][1]}`))/36e5*60,r=new Date(a.setMinutes(a.getMinutes()+s));s>=30&&i.push(t(e,r))}})),i}onStepChanged("tatodois-pre-triagem",(i=>{2===i&&async function(){let i=await a(),r=await s(),l=await async function(t,n){let a,s=new Date,i=[],r=[];i.push(new Date(s));for(let e=0;e<20;e++)s.setDate(s.getDate()+1),a=new Date(s),i.push(a);for(date in i){let a=i[date].getDay(),s=`${e(i[date].getDate().toString(),"day")}/${e(i[date].getMonth().toString(),"month")}/${i[date].getFullYear()}`,l=[];t.forEach((e=>{e.weekday===a&&l.push(e)})),l.forEach((e=>{let t=[];e.physiotherapist_id in n&&s in n[e.physiotherapist_id]&&(t=n[e.physiotherapist_id][s]);let a=o(e.start_hour,e.end_hour,t);a.length>0&&r.push({date:[s],freeSlots:[a]})}))}return r}(i,r),u=function(e){let a={};return e.forEach((e=>{let n=[];e.freeSlots[0].forEach((e=>{let a=new Date(`01/01/2011 ${e[0]}`),s=new Date(`01/01/2011 ${e[1]}`),o=a;for(;o<s;){let e=["00","15","30","45"],a=1===o.getMinutes().toString().length?`0${o.getMinutes()}`:`${o.getMinutes()}`;if(e.includes(a)){let e=structuredClone(o);if(e.setMinutes(e.getMinutes()+30),!(e<=s))break;n.includes(o)||(n=n.concat(t(o))),o=new Date(o.setMinutes(o.getMinutes()+15))}else{e.push(a),e.sort();let t,n=e.indexOf(a);t=a>"44"?60-parseInt(e[n]):parseInt(e[n+1])-parseInt(e[n]),o=new Date(o.setMinutes(o.getMinutes()+t))}}})),n.sort(),a[e.date]=n})),function(e){let t=new Date;t.setMinutes(t.getMinutes()+120);let a=n(t,"br"),s=n(t,"es"),o=[];return Object.keys(e).includes(a)&&(e[a].forEach((e=>{new Date(`${s} ${e}`)>t&&o.push(e)})),o.length>0?e[a]=o:e.pop),e}(a)}(l),c=(h=u,Object.keys(h)),p=[];var h;c.forEach((e=>{p.push({label:e,value:e})})),components.screening__schedule_date2.options=p,components.confirmar.disabled=!0,components.screening__schedule_date2.onChange((()=>{let e=components.screening__schedule_date2.value;if(components.confirmar.disabled=!0,e){let t=function(e,t){return e[t]}(u,e),n=[];t.forEach((e=>{n=n.concat({label:e,value:e})})),components.screening__schedule_hour.options=n,components.screening__schedule_hour.value=""}else components.screening__schedule_hour.value=""})),components.screening__schedule_hour.onChange((()=>{components.confirmar.disabled=!0;let e=components.screening__schedule_date2.value,t=components.screening__schedule_hour.value;t&&(components.screening__schedule_date.value=e+" "+t,async function(e){let t=function(e){return`${e.split(" ")[0].split("/")[1]}/${e.split(" ")[0].split("/")[0]}/${e.split(" ")[0].split("/")[2]}`}(e),n=new Date(`${t} ${e.split(" ")[1]}`),i=structuredClone(n),r=await s(),l=n.getDay(),u=await a(),c=[],p=e.split(" ")[0],h=n,d=new Date(i.setMinutes(i.getMinutes()+30));u.forEach((e=>{e.weekday===l&&c.push(e)}));let _=[];c.forEach((e=>{let n=[];e.physiotherapist_id in r&&p in r[e.physiotherapist_id]&&(n=r[e.physiotherapist_id][p]),o(e.start_hour,e.end_hour,n).forEach((n=>{let a=new Date(`${t} ${n[0]}`),s=new Date(`${t} ${n[1]}`);a<=h&&s>=d&&(_.includes(e.physiotherapist_id)||(_=_.concat(e.physiotherapist_id)))}))}));let g=_[Math.floor(Math.random()*_.length)],m=await executeAction("getselectphysioinfos",null,{selectRandomPhysio:g});return{chosenPhysioId:g,name:`${m[0].first_name} ${m[0].last_name}`,email:m[0].email}}(components.screening__schedule_date.value).then((e=>{components.screening__physiotherapist_id.value=e.chosenPhysioId.toString(),components.physiotherapist__email.value=e.email,components.physiotherapist__first_name.value=e.name.split(" ")[0],components.physiotherapist__last_name.value=e.name.split(" ")[1],components.confirmar.disabled=!1})))}))}()})),onStepChanged("tatodois-pre-triagem",(e=>{1===e&&(""===components.partner_company__id.value?components.partner_company__id.value="1":components.partner_company__id.value,""===components.partner_company__name.value?components.partner_company__name.value="BetaTestEmpresa":components.partner_company__name.value)}))})();/*! Thu Jul 07 2022 01:53:36 GMT+0000 (Coordinated Universal Time) !*/