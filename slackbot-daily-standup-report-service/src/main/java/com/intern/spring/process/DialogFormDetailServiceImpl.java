package com.intern.spring.process;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intern.spring.dao.DialogFormDetailDao;
import com.intern.spring.model.DialogFormDetail;

@Service
public class DialogFormDetailServiceImpl implements DialogFormDetailService{

    @Autowired
    DialogFormDetailDao dialogService;
    @Override
    public List<DialogFormDetail> getDialogFormDetailListByTemplateId(int id) {
    	return dialogService.getDialogFormDetailListByDialogByTemplateId(id);
    }

    @Override
    public DialogFormDetail insertDialogFormDetail(DialogFormDetail dialog) {
        return dialogService.insertDialogFormDetail(dialog);
    }

    @Override
    public int deleteDialogFormDetalByTemplateId(int templateId) {
        return dialogService.deleteDialogFormDetailByTemplateId(templateId);
    }

}
