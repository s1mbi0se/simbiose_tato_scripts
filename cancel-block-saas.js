"Bloqueio de Horário"===components.schedule__type.value&&(components.atualizaragendamento.visible=!1),components.cancelarbloqueio.onClick((async()=>{let e=components.schedule__schedule_id.value;try{await executeAction("cancelblocksaas",null,{scheduleId:e}),showToast("success","Bloqueio cancelado com sucesso!"),setTimeout((()=>{window.location.reload()}),1500)}catch(e){showToast("error","Tente novamente!")}})),components.voltar.onClick((()=>closeModal()));/*! Thu Jul 07 2022 16:01:29 GMT+0000 (Coordinated Universal Time) !*/