components.GerarLink.onClick((function(){let e=window.location.origin.toString();e+=`/tatotriagem-pre-triagem?partner_company__name=${document.querySelector("input").value.replaceAll(" ","_")}&partner_company__id=${window.location.href.split("/").pop()}`,document.querySelector("textarea").value=e}));/*! Fri Jul 15 2022 21:43:09 GMT+0000 (Coordinated Universal Time) !*/