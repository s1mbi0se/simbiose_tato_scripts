components.current_date.value=function(){let e=new Date,t=e.getDate().toString().padStart(2,"0"),n=(e.getMonth()+1).toString().padStart(2,"0");return`${e.getFullYear()}-${n}-${t}`}(),components.billing__discount_percentage.onChange((()=>{let e=components.billing__service_price.value,t=components.billing__discount_percentage.value/100*e;components.billing__final_value.value=(e-t).toString()}));/*! Tue Jul 19 2022 17:33:34 GMT+0000 (Coordinated Universal Time) !*/