(()=>{components.appointment__has_comorbidities.onChange((()=>{let e=components.alert__appointment__comorbidities.label;components.alert__appointment__comorbidities.value=e.replace("{appointment__comorbidities}","")})),components.appointment__comorbidities.onChange((function(){let e=components.alert__appointment__comorbidities.label,t=components.appointment__comorbidities.value.join(", ");components.alert__appointment__comorbidities.value=e;let n=`(${t})`;components.alert__appointment__comorbidities.value=e.replace("{appointment__comorbidities}",n)}));try{onStepChanged("tatodois-triagem",(e=>{1===e&&components.patient__zipcode.onChange((()=>{let e=components.patient__zipcode.value;fetch(`https://viacep.com.br/ws/${e}/json/`).then((e=>{e.json().then((e=>{components.patient__street.value=e.logradouro,components.patient__city.value=e.localidade,components.patient__state.value=e.uf,components.patient__district.value=e.bairro}))})).catch((e=>{}))}))}))}catch(e){}if(onStepChanged("tatodois-triagem",(e=>{1===e&&(components.patient__first_name.onChange((()=>{components.screening__first_name.value=components.patient__first_name.value})),components.patient__last_name.onChange((()=>{components.screening__last_name.value=components.patient__last_name.value})))})),window.location.href.includes("/tatodois-visualizar-triagem/")){let e=components.alert__appointment__comorbidities.label,t="{appointment__comorbidities}",n=components.appointment__comorbidities.value;components.alert__appointment__comorbidities.label=e;let o=`(${n})`;components.alert__appointment__comorbidities.value=e.replace(t,o)}if(window.location.href.includes("/tatodois-edicao-triagem/")){let e="{appointment__comorbidities}",t=components.alert__appointment__comorbidities.label,n=`(${components.appointment__comorbidities.value.join(", ")})`;components.alert__appointment__comorbidities.value=t.replace(e,n),components.appointment__comorbidities.onChange((function(){let e=components.alert__appointment__comorbidities.label,t=components.appointment__comorbidities.value.join(", ");components.alert__appointment__comorbidities.value=e;let n=`(${t})`;components.alert__appointment__comorbidities.value=e.replace("{appointment__comorbidities}",n)}))}onStepChanged("tatodois-edicao-triagem",(e=>{1===e&&(components.patient__first_name.onChange((()=>{components.screening__first_name.value=components.patient__first_name.value})),components.patient__last_name.onChange((()=>{components.screening__last_name.value=components.patient__last_name.value})))})),onAction("","",(()=>{}))})();/*! Fri Jul 22 2022 00:00:41 GMT+0000 (Coordinated Universal Time) !*/