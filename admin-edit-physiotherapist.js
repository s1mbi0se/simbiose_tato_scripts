(()=>{function e(){components.physiotherapist__street.value="",components.physiotherapist__city.value="",components.physiotherapist__state.value="",components.physiotherapist__number.value="",components.physiotherapist__complement.value=""}components.physiotherapist__zipcode.onChange((()=>{let t=components.physiotherapist__zipcode.value;t&&fetch(`https://viacep.com.br/ws/${t}/json/`).then((t=>{t.json().then((t=>{"true"!==t.erro?(components.physiotherapist__street.value=t.logradouro,components.physiotherapist__city.value=t.localidade,components.physiotherapist__state.value=t.uf,components.physiotherapist__number.value="",components.physiotherapist__complement.value=""):e()}))})).catch((e=>{showToast("error","Tente Novamente")})),e()})),components.physiotherapist__user_type.onChange((()=>{let e=components.physiotherapist__user_type.value,t=components.physiotherapist__physiotherapist_id.value;"2"==e?executeAction("insertorganizationandservices",null,{organizationId:1,currentIdentifier1:t,ownerOrInvited:"invited",createdByUserId:800,currentIdentifier2:t,serviceId1:1,currentIdentifier3:t,serviceId30:30,currentIdentifier4:t,serviceId45:45}):"3"==e&&executeAction("deleterganizationandservices",null,{currentIdentifier1:t,currentIdentifier2:t})}))})();/*! Fri Jul 22 2022 10:26:06 GMT+0000 (Coordinated Universal Time) !*/