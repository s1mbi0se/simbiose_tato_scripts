components.patient__zipcode.onChange((()=>{let t=components.patient__zipcode.value;fetch(`https://viacep.com.br/ws/${t}/json/`).then((t=>{t.json().then((t=>{components.patient__street.value=t.logradouro,components.patient__city.value=t.localidade,components.patient__district.value=t.bairro,components.patient__state.value=t.uf}))})).catch((t=>{}))}));/*! Fri Jul 08 2022 12:29:58 GMT+0000 (Coordinated Universal Time) !*/