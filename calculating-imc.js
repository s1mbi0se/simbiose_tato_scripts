components.appointment__appointment_type.onChange((function(){if("Avaliação simples"===components.appointment__appointment_type.value){let n,t,e;components.appointment__weight.onChange((()=>{components.appointment__height.onChange((()=>{n=parseFloat(components.appointment__weight.value),t=parseFloat(components.appointment__height.value),e=(n/(Math.pow(t,2)/1e4)).toFixed(2),components.appointment__body_mass_index.value=e.toString()}))})),components.appointment__height.onChange((()=>{components.appointment__weight.onChange((()=>{n=parseFloat(components.appointment__weight.value),t=parseFloat(components.appointment__height.value),e=(n/(Math.pow(t,2)/1e4)).toFixed(2),components.appointment__body_mass_index.value=e.toString()}))}))}})),components.appointment__appointment_type.onChange((function(){if("Avaliação guiada"===components.appointment__appointment_type.value){let n,t,e;components.appointment__weight_2.onChange((()=>{components.appointment__height_2.onChange((()=>{n=parseFloat(components.appointment__weight_2.value),t=parseFloat(components.appointment__height_2.value),e=(n/(Math.pow(t,2)/1e4)).toFixed(2),components.appointment__body_mass_index_2.value=e.toString()}))})),components.appointment__height_2.onChange((()=>{components.appointment__weight_2.onChange((()=>{n=parseFloat(components.appointment__weight_2.value),t=parseFloat(components.appointment__height_2.value),e=(n/(Math.pow(t,2)/1e4)).toFixed(2),components.appointment__body_mass_index_2.value=e.toString()}))}))}}));/*! Fri Jul 15 2022 21:27:06 GMT+0000 (Coordinated Universal Time) !*/