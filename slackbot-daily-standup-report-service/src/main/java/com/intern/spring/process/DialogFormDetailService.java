package com.intern.spring.process;

import java.util.List;

import com.intern.spring.model.DialogFormDetail;

public interface DialogFormDetailService {
	public List<DialogFormDetail> getDialogFormDetailListByTemplateId(int id);
        public DialogFormDetail insertDialogFormDetail(DialogFormDetail dialog);
        public int deleteDialogFormDetalByTemplateId(int templateId);
}
