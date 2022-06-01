components.GerarLink.onClick(function(){
    let url = window.location.origin.toString();
    let company_name = document.querySelector('input').value.replaceAll(" ", "_");
    let company_id = window.location.href.split('/').pop();
    let queryParam = `partner_company__name=${company_name}&partner_company__id=${company_id}`;
    url += `/tatodois-pre-triagem?${queryParam}`;
    document.querySelector("textarea").value = url

})

