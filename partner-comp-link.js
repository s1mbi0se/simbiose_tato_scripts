components.GerarLink.onClick((function(){let e=window.location.origin.toString();e+=`/tatodois-pre-triagem?partner_company__name=${document.querySelector("input").value.replaceAll(" ","_")}&partner_company__id=${window.location.href.split("/").pop()}`,document.querySelector("textarea").value=e}));/*! Thu Jul 07 2022 12:04:16 GMT+0000 (Coordinated Universal Time) !*/