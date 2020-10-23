import './bootstrap-notify.min';
import { i18next,NamespacesConsumer  } from 'react-i18next';
import i18n from '../i18n'
import { ALERT } from './AlertEnum';
import $ from 'jquery';
class MyNotification {

    handleStyle = { 
        template : '<div data-notify="container"  class="col-11 col-sm-3 col-md-3 col-lg-3 col-xl-3 alert alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +            
            '<p data-notify="message">{2}</p>' +                         
            '</div>' , 
        animate  : {
                enter: 'animated zoomIn',
                exit: 'animated zoomOut'
        }
    }

    notifyI18nWithoutParam = (key) =>{
        return i18n.t(key);
    }
    notifyI18n = (key, params, alertEnum) => {
        let message = i18n.t(key,params)
        this.showNotify(message, alertEnum);  
    }
    getMessageContentI18n = (key, params) => {
        return i18n.t(key,params);
    }
    showNotify=(message,type)=>{
        $.notify({
                message
            }, 
            {
                type: type,
                allow_dismiss: true,
                placement:{from:'top', align:'right'},
                offset: 20,
                spacing: 10,
                z_index: 9999999,
                delay: 3000,
                timer:type== 'warning'?3000: 50,
                url_target: '_blank',
                mouse_over: 'pause',
                animate: this.handleStyle.animate,
                onShow: null,
                onShown: null,
                onClose: null,
                onClosed: null,
                icon_type: 'class',
                template: this.handleStyle.template
            }
        )
    }
    alertWarning = (message, type) => {
      
        this.showNotify(message,'warning')
    }
    alertSuccess = (message, action_name) => {
        this.showNotify(message,'success')  
    }
    alertError = (message, action_name) => {
        this.showNotify(message,'danger')                            
    }
    alertSendMail = (message, url) => {
      $.notify({
            message,
            url
        },{
            url_target: '_self',
        }
    );
    }
    
}
export default new MyNotification
