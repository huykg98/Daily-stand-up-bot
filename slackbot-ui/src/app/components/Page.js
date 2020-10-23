import CommonUtil from "../common/CommonUtil"

export const Page = {
    getLang: function () {
        return CommonUtil.getCurrentLang()
    },
    open: function (link, title, infoResize) {
        if(typeof infoResize === 'undefined' || infoResize === null || infoResize.trim() === '') {
            infoResize = 'width=945,height=915,resizable=yes'
        }
        window.open(link, title, infoResize).focus()
        return false
    },
}