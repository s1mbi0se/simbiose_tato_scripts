"Bloqueio de Horário"===components.schedule__type.value&&(components.atualizaragendamento.visible=!1),components.cancelarbloqueio.onClick((async()=>{let e=components.schedule__schedule_id.value;try{await executeAction("cancelblocksaas",null,{scheduleId:e}),showToast("success","Bloqueio cancelado com sucesso!"),setTimeout((()=>{window.location.reload()}),1500)}catch(e){showToast("error","Tente novamente!")}})),components.voltar.onClick((()=>closeModal()));/*! Fri Jul 08 2022 20:19:26 GMT+0000 (Coordinated Universal Time) !*/