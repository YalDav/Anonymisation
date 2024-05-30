["contacts", "loyalties", "selligent_flags", "selligent_actionqueue", "selligent_campaigns", "selligent_mail_probes"]
.forEach(source => declare({
    database: `${dataform.projectConfig.vars.v_project_idl_source}`,
    schema: `${constants.lastVersion}`,
    name: source
}));

["sales"]
.forEach(source => declare({
    database: `${dataform.projectConfig.vars.v_project_idl_source}`,
    schema: `${constants.lastVersion}`,
    name: source
}));

["weborders"]
.forEach(source => declare({
    database: `${dataform.projectConfig.vars.v_project_idl_source}`,
    schema: `${constants.rawData_bq}`,
    name: source
}));

["r_bow_global_order_histo", "r_bow_global_order"]
.forEach(source => declare({
    database: `${dataform.projectConfig.vars.v_project_marketplace_source}`,
    schema: `${constants.rawData_marketplace}`,
    name: source
}));

["cleanse_data"]
.forEach(source => declare({
    database: `${dataform.projectConfig.vars.v_project_idl_source}`,
    schema: `${constants.monitoring}`,
    name: source
}));



// description:"La table selligent_actionqueue correspond aux mails envoyés par selligent dans le cadre d’une campagne (hors trigger), peut importe l’action.",
// description:"La table selligent_campaigns correspond aux camapgnes créés. Dans notre cas d’usager permet d’exclure les campagnes ayant désabo dans le nom (même si normalement on ne devrait pas les retrouver dans action queue car trigger)",
// description:"La table selligent_mail_probes permet d’avoir la catégory du probeid (clic) en fonction du mail envoyé (identifier dans actionqueue) . Permet d’exclure les catégories Optout qui correspondent aux clics sur un lien de désabo",
   