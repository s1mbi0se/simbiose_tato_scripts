(()=>{function e(){let e=parseInt(components.agenda__start_hour.value.split(":")[0]),t=parseInt(components.agenda__start_hour.value.split(":")[1]),o=parseInt(60*e),n=parseInt(o+t),a=parseInt(components.agenda__end_hour.value.split(":")[0]),s=parseInt(components.agenda__end_hour.value.split(":")[1]),p=parseInt(60*a),_=parseInt(p+s);if(_<n||Number.isNaN(_)){let e=Math.floor(n/60),t=n%60;components.agenda__end_hour.value=`${e}:${t+30}`}}components.agenda__start_hour.value="00:00",components.agenda__end_hour.value="00:00",components.agenda__start_hour.onChange((()=>{e()})),components.agenda__end_hour.onChange((()=>{e()}));try{let e=components.physiotherapist__zipcode.value;fetch(`https://viacep.com.br/ws/${e}/json/`).then((e=>{e.json().then((e=>{components.physiotherapist__street.value=e.logradouro,components.physiotherapist__city.value=e.localidade,components.physiotherapist__state.value=e.uf}))}))}finally{components.physiotherapist__zipcode.onChange((()=>{let e=components.physiotherapist__zipcode.value;fetch(`https://viacep.com.br/ws/${e}/json/`).then((e=>{e.json().then((e=>{components.physiotherapist__street.value=e.logradouro,components.physiotherapist__city.value=e.localidade,components.physiotherapist__state.value=e.uf}))})).catch((e=>{}))}))}})();/*! Wed Jun 22 2022 22:34:43 GMT+0000 (Coordinated Universal Time) !*/