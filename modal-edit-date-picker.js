(()=>{function n(){let n=parseInt(components.agenda__start_hour.value.split(":")[0]),e=parseInt(components.agenda__start_hour.value.split(":")[1]),a=parseInt(60*n),o=parseInt(a+e),t=parseInt(components.agenda__end_hour.value.split(":")[0]),_=parseInt(components.agenda__end_hour.value.split(":")[1]),s=parseInt(60*t);if(parseInt(s+_)<o){let n=Math.floor(o/60),e=o%60;components.agenda__end_hour.value=`${n}:${e+30}`}}try{components.agenda__start_hour.onChange((()=>{n()})),components.agenda__end_hour.onChange((()=>{n()}))}finally{components.agenda__start_hour.onChange((()=>{n()})),components.agenda__end_hour.onChange((()=>{n()}))}})();/*! Fri Jul 01 2022 18:07:11 GMT+0000 (Coordinated Universal Time) !*/