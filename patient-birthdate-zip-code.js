(()=>{function t(){components.patient__street.value="",components.patient__city.value="",components.patient__district.value="",components.patient__state.value="",components.patient__number.value="",components.patient__complement.value=""}function e(){10==components.patient__birthdate.value.length&&(components.patient__age.value=function(t){if(!t)return;let e=new Date,n=t.split("/"),o=`${n[2]}-${n[1]}-${n[0]}`,a=new Date(o),p=e.getFullYear()-a.getFullYear(),i=e.getMonth()-a.getMonth();return(i<0||0===i&&e.getDate()<a.getDate())&&p--,p.toString()}(components.patient__birthdate.value))}components.patient__zipcode.onChange((()=>{let e=components.patient__zipcode.value;e&&fetch(`https://viacep.com.br/ws/${e}/json/`).then((e=>{e.json().then((e=>{"true"!==e.erro?(components.patient__street.value=e.logradouro,components.patient__city.value=e.localidade,components.patient__district.value=e.bairro,components.patient__state.value=e.uf,components.patient__number.value="",components.patient__complement.value=""):t()}))})).catch((t=>{showToast("error","Tente Novamente")})),t()})),e(),components.patient__birthdate.onChange((()=>{e()}))})();/*! Tue Jul 12 2022 16:13:23 GMT+0000 (Coordinated Universal Time) !*/