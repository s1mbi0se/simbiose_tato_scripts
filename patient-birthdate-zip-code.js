(()=>{function t(){10==components.patient__birthdate.value.length&&(components.patient__age.value=function(t){if(!t)return;let e=new Date,n=t.split("/"),a=`${n[2]}-${n[1]}-${n[0]}`,o=new Date(a),i=e.getFullYear()-o.getFullYear(),p=e.getMonth()-o.getMonth();return(p<0||0===p&&e.getDate()<o.getDate())&&i--,i.toString()}(components.patient__birthdate.value))}components.patient__zipcode.onChange((()=>{let t=components.patient__zipcode.value;fetch(`https://viacep.com.br/ws/${t}/json/`).then((t=>{t.json().then((t=>{components.patient__street.value=t.logradouro,components.patient__city.value=t.localidade,components.patient__district.value=t.bairro,components.patient__state.value=t.uf}))})).catch((t=>{}))})),t(),components.patient__birthdate.onChange((()=>{t()}))})();/*! Fri Jul 01 2022 18:07:11 GMT+0000 (Coordinated Universal Time) !*/