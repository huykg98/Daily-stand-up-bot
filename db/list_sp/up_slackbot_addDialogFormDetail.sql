
DELIMITER //
DROP PROCEDURE IF EXISTS up_slackbot_addDialogFormDetail//
CREATE PROCEDURE `up_slackbot_addDialogFormDetail`(pTemplateId int,pName varchar(50),pLabel varchar(200),pType varchar(20),
																		pSubtype varchar(20),pPlaceholder varchar(20),pOptional int,pMaxLength int,pMinlength int,
																		pHint varchar(20),pValue varchar(20))
BEGIN
	insert into slackbot_dailyreport_dialog_form_details(template_id,name,label,type,subtype,placeholder,optional,max_length,
														min_length,hint,value)
    value (pTemplateId,pName,pLabel,pType,
			pSubtype,pPlaceholder,pOptional,pMaxLength,pMinlength,
			pHint,pValue);
END//
