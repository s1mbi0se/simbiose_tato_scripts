(()=>{function e(){components.physiotherapist__street.value="",components.physiotherapist__city.value="",components.physiotherapist__state.value="",components.physiotherapist__number.value="",components.physiotherapist__complement.value=""}components.physiotherapist__zipcode.onChange((()=>{let t=components.physiotherapist__zipcode.value;t&&fetch(`https://viacep.com.br/ws/${t}/json/`).then((t=>{t.json().then((t=>{"true"!==t.erro?(components.physiotherapist__street.value=t.logradouro,components.physiotherapist__city.value=t.localidade,components.physiotherapist__state.value=t.uf,components.physiotherapist__number.value="",components.physiotherapist__complement.value=""):e()}))})).catch((e=>{showToast("error","Tente Novamente")})),e()}))})();/*! Tue Jul 12 2022 17:40:18 GMT+0000 (Coordinated Universal Time) !*/