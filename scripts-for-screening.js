(()=>{components.appointment__has_comorbidities.onChange((()=>{let e=components.alert__appointment__comorbidities.label;components.alert__appointment__comorbidities.value=e.replace("{appointment__comorbidities}","")})),components.appointment__comorbidities.onChange((function(){let e=components.alert__appointment__comorbidities.label,t=components.appointment__comorbidities.value.join(", ");components.alert__appointment__comorbidities.value=e;let o=`(${t})`;components.alert__appointment__comorbidities.value=e.replace("{appointment__comorbidities}",o)}));try{onStepChanged("tatodois-triagem",(e=>{1===e&&components.patient__zipcode.onChange((()=>{let e=components.patient__zipcode.value;fetch(`https://viacep.com.br/ws/${e}/json/`).then((e=>{e.json().then((e=>{components.patient__street.value=e.logradouro,components.patient__city.value=e.localidade,components.patient__state.value=e.uf,components.patient__district.value=e.bairro}))})).catch((e=>{}))}))}))}catch(e){}if(onStepChanged("tatodois-triagem",(e=>{1===e&&(components.patient__first_name.onChange((()=>{components.screening__first_name.value=components.patient__first_name.value})),components.patient__last_name.onChange((()=>{components.screening__last_name.value=components.patient__last_name.value})))})),window.location.href.includes("/tatodois-visualizar-triagem/")){let e=components.alert__appointment__comorbidities.label,t="{appointment__comorbidities}",o=components.appointment__comorbidities.value;components.alert__appointment__comorbidities.label=e;let n=`(${o})`;components.alert__appointment__comorbidities.value=e.replace(t,n)}if(window.location.href.includes("/tatodois-edicao-triagem/")){let e="{appointment__comorbidities}",t=components.alert__appointment__comorbidities.label,o=`(${components.appointment__comorbidities.value.join(", ")})`;components.alert__appointment__comorbidities.value=t.replace(e,o),components.appointment__comorbidities.onChange((function(){let e=components.alert__appointment__comorbidities.label,t=components.appointment__comorbidities.value.join(", ");components.alert__appointment__comorbidities.value=e;let o=`(${t})`;components.alert__appointment__comorbidities.value=e.replace("{appointment__comorbidities}",o)}))}onAction("","",(()=>{}))})();/*! Mon Jun 27 2022 20:55:34 GMT+0000 (Coordinated Universal Time) !*/