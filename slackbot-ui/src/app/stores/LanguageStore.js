
import CommonUtil from "../common/CommonUtil"
import { observable } from "mobx";

class LanguageStore{

    @observable locale =  CommonUtil.getCurrentLang();
    @observable isLogin = false;
}

export default  LanguageStore