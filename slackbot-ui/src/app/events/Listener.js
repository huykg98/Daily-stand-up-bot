import EVENT from "./EventList"

(function () {

  var isEmptyObject = function(obj) {
      for(var prop in obj) {
          if(obj.hasOwnProperty(prop))
              return false;
      }
      return true;
  }

  var checkEvent = function () {
      if (typeof EVENT === 'undefined' || EVENT == null || isEmptyObject(EVENT)) {
          return false
      }
      return true
  }

  var browser = function () {
      // Return cached result if avalible, else get result then cache it.
      if (browser.prototype._cachedResult)
          return browser.prototype._cachedResult

      // Opera 8.0+
      var isOpera = (!!window.opr && !!window.opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0

      // Firefox 1.0+
      var isFirefox = typeof InstallTrigger !== 'undefined'

      // Safari 3.0+ "[object HTMLElementConstructor]"
      var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]" })(!window['safari'] || window.safari.pushNotification)

      // Internet Explorer 6-11
      var isIE = /*@cc_on!@*/false || !!document.documentMode

      // Edge 20+
      var isEdge = !isIE && !!window.StyleMedia

      // Chrome 1+
      var isChrome = !!window.chrome && !!window.chrome.webstore

      // Blink engine detection
      var isBlink = (isChrome || isOpera) && !!window.CSS

      return browser.prototype._cachedResult =
          isOpera ? 'Opera' :
              isFirefox ? 'Firefox' :
                  isSafari ? 'Safari' :
                      isChrome ? 'Chrome' :
                          isIE ? 'IE' :
                              isEdge ? 'Edge' :
                                  isBlink ? 'Blink' :
                                      "Don't know"
  }

  var IEBrowser = function () {
      let br = browser()
      let isEvent = typeof (Event) === 'function'
      return (br === 'IE' || br === 'Edge' || !isEvent) ? true : false
  }

  if (checkEvent()) {
      for (let key in EVENT) {
          let eventName = EVENT[key]
          if (IEBrowser()) {
              window[eventName] = document.createEvent('Event')
              window[eventName].initEvent(eventName, true, true)
          } else {
              window[eventName] = new Event(eventName, {"bubbles":true, "cancelable": true})
          }
      }
  }

  window.listenEvent = function (eventName, handle) {
      if ('addEventListener' in window) {
          window.addEventListener(eventName, handle)
      }
      if ('attachEvent' in window) {
          window.attachEvent('on' + eventName, handle)
      }
      return handle
  }

  window.fireEvent = function (eventName, trackerName) {
      if(trackerName != null){
           //console.log(eventName + '-' + trackerName);
      }
      
      window.dispatchEvent(window[eventName])

  }

  window.stopListenEvent = function (eventName, handle) {
      if (typeof Event !== 'function' || window.removeEventListener) {
          window.removeEventListener(eventName, handle)
      } else {
          window.detachEvent('on' + eventName, handle)
      }
  }

  window.browser = function() {
      return browser()
  }

})()