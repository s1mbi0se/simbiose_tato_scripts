(()=>{function e(){components.patient__street.value="",components.patient__city.value="",components.patient__state.value="",components.patient__number.value="",components.patient__complement.value=""}components.patient__zipcode.onChange((()=>{let t=components.patient__zipcode.value;t&&fetch(`https://viacep.com.br/ws/${t}/json/`).then((t=>{t.json().then((t=>{"true"!==t.erro?(components.patient__street.value=t.logradouro,components.patient__city.value=t.localidade,components.patient__state.value=t.uf,components.patient__number.value="",components.patient__complement.value=""):e()}))})).catch((e=>{showToast("error","Tente Novamente")})),e()}))})();/*! Fri Jul 22 2022 00:02:32 GMT+0000 (Coordinated Universal Time) !*/