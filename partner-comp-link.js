components.GerarLink.onClick((function(){let e=window.location.origin.toString();e+=`/tatodois-pre-triagem?partner_company__name=${document.querySelector("input").value.replaceAll(" ","_")}&partner_company__id=${window.location.href.split("/").pop()}`,document.querySelector("textarea").value=e}));/*! Wed Jul 06 2022 17:48:38 GMT+0000 (Coordinated Universal Time) !*/