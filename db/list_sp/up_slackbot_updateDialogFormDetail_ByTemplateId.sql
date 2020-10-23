
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_updateDialogFormDetail_ByTemplateId//
CREATE PROCEDURE `up_slackbot_updateDialogFormDetail_ByTemplateId`(pDetailId int, pTemplateId int,pName varchar(20),pLabel varchar(50),
																			pType varchar(50),pSubtype varchar(50),pPlaceholder varchar(50),
                                                                            pOptional int,pMax_length int,pMin_length int,pHint varchar(50),pValue varchar(50))
BEGIN
	update slackbot_dailyreport_dialog_form_details as `t`
    set `t`.name=pName, `t`.label=pLabel, `t`.type=pType, `t`.subtype=pSubtype, `t`.min_length=pMin_length,
		`t`.placeholder=pPlaceholder, `t`.optional=pOptional, `t`.max_length=pMax_length, 
        `t`.hint=pHint, `t`.value=pValue
	where `t`.template_id=pTemplateId and `t`.detail_id=pDetailId;
END//
