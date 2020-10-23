package com.intern.spring.dao;

import java.util.List;

import com.intern.spring.model.DialogFormDetail;

public interface DialogFormDetailDao {
	public List<DialogFormDetail> getDialogFormDetailListByDialogByTemplateId(int id);
        public DialogFormDetail insertDialogFormDetail(DialogFormDetail dialog);
        public DialogFormDetail updateDialogFormDetail(DialogFormDetail dialog);
        public int deleteDialogFormDetailByTemplateId(int TemplateId);
        public int deleteDialogFormDetailByDetailId(int DetailId);
}
