

function renderArrayDate(v_date, v_interval_begin, v_interval_end) {

  var result = ` select GENERATE_DATE_ARRAY(
                                 DATE_SUB( PARSE_DATE('%Y-%m-%d',(${v_date})), INTERVAL ${v_interval_begin} DAY),
                                 DATE_SUB(PARSE_DATE('%Y-%m-%d',(${v_date})), INTERVAL ${v_interval_end} DAY),
                                 INTERVAL 1 DAY) AS DATE_ARRAY`;
  return result  ;

}

function getRunDate() {

  var result = ` (select case when '${dataform.projectConfig.vars.overrideRundate}'= "" then cast(current_date() as string)
         else '${dataform.projectConfig.vars.overrideRundate}'
         end  as curr_date)`;
  return result  ;

}


module.exports = { 
                    renderArrayDate,
                    getRunDate
}