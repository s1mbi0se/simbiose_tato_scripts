(()=>{let e=components.alert__appointment__comorbidities.label;components.appointment__has_comorbidities.onChange((()=>{let e=components.alert__appointment__comorbidities.label;components.alert__appointment__comorbidities.label=e.replace("{appointment__comorbidities}","")})),components.appointment__comorbidities.onChange((function(){let t=components.appointment__comorbidities.value.join(", ");components.alert__appointment__comorbidities.label=e;let n=`(${t})`;components.alert__appointment__comorbidities.label=e.replace("{appointment__comorbidities}",n)}));try{onStepChanged("tatodois-triagem",(e=>{1===e&&components.patient__zipcode.onChange((()=>{let e=components.patient__zipcode.value;fetch(`https://viacep.com.br/ws/${e}/json/`).then((e=>{e.json().then((e=>{components.patient__street.value=e.logradouro,components.patient__city.value=e.localidade,components.patient__state.value=e.uf,components.patient__district.value=e.bairro}))})).catch((e=>{}))}))}))}catch(e){}if(onStepChanged("tatodois-triagem",(e=>{1===e&&(components.patient__first_name.onChange((()=>{components.screening__first_name.value=components.patient__first_name.value})),components.patient__last_name.onChange((()=>{components.screening__last_name.value=components.patient__last_name.value})))})),window.location.href.includes("/tatodois-visualizar-triagem/")){let t="{appointment__comorbidities}",n=e,o=`(${components.appointment__comorbidities.value.join(", ")})`;components.alert__appointment__comorbidities.label=n.replace(t,o)}if(window.location.href.includes("/tatodois-edicao-triagem/")){let t="{appointment__comorbidities}",n=e,o=`(${components.appointment__comorbidities.value.join(", ")})`;components.alert__appointment__comorbidities.label=n.replace(t,o),components.appointment__comorbidities.onChange((function(){let t=e,n=`(${components.appointment__comorbidities.value.join(", ")})`;components.alert__appointment__comorbidities.label=t.replace("{appointment__comorbidities}",n)}))}onStepChanged("tatodois-edicao-triagem",(e=>{1===e&&(components.patient__first_name.onChange((()=>{components.screening__first_name.value=components.patient__first_name.value})),components.patient__last_name.onChange((()=>{components.screening__last_name.value=components.patient__last_name.value})))})),onAction("","",(()=>{}))})();/*! Fri Jul 22 2022 00:03:52 GMT+0000 (Coordinated Universal Time) !*/