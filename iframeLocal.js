const timezone = geoplugin_timezone();
const userInUS = () => geoplugin_countryCode() == 'US' ? true : false;
console.log(timezone);
console.log(userInUS());

var clientConfig = {
  iframeSrc: 'https://mvw.dev.amelia.com/Amelia/ui/hrsChatOverlay/?embed=iframe&domainCode=hrs&bpn_brand='+'mvw'+'&bpn_userTimezone='+timezone+'&bpn_userInUS='+userInUS,
  openOnLoad: false,
  header: {
    backgroundColor: 'green',
    backgroundImage: 'data:image/png;base64,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'
  },
  openCloseContainer: {
    openIconSrc: 'open.png',
    closeIconSrc: 'close.png',
    //backgroundColor: 'blue'
  },
  banner: {
    title: 'Dash',
    helper: 'Virtual Assistant',
    description: 'Hello, I am Dash, your virtual recruiting assistant. How can I help you today?'
  },
  dragAndDropChatOverlay: true
};

var isInit = false;
    var chatOverlayDefaultStateOpen = false;
 
    function Config (config) {
      this.header = config.header || {};
      this.openCloseContainer = config.openCloseContainer || {};
      this.openOnLoad = config.openOnLoad || false;
      this.iframeSrc = config.iframeSrc || '';
      this.banner = {
        title: config.banner && config.banner.title || '',
        helper: config.banner && config.banner.helper || '',
        description: config.banner && config.banner.description || ''
      };
      this.dragAndDropChatOverlay = config.dragAndDropChatOverlay;
    }
 
    Config.prototype = {
      setConfig: function () {
        var styles = [];
        if (this.header.backgroundImage) {
          var headerLogo = document.querySelector('.header-logo img.logo');
          headerLogo.src = this.header.backgroundImage;
          var chatOverlayHeaderMobile = document.querySelector('.chat-overlay-wrapper .chat-overlay-header-mobile img.logo');
          chatOverlayHeaderMobile.src = this.header.backgroundImage;
        }
 
        if (this.header.backgroundColor) {
          styles.push('.header-logo { display: flex; background-color: ' + this.header.backgroundColor + '}');
          styles.push('.chat-overlay-wrapper .chat-overlay-header-mobile { background-color: ' + this.header.backgroundColor + '}');
        }
 
        if (this.openCloseContainer.backgroundColor) {
          styles.push('.chat-overlay-header { background-color: ' + this.openCloseContainer.backgroundColor + '}');
        }
 
        if (this.openCloseContainer.openIconSrc) {
          var openIconSrc = document.querySelector('.chat-overlay-header .chat-overlay-open');
          openIconSrc.src = this.openCloseContainer.openIconSrc;
        }
 
        if (this.openCloseContainer.closeIconSrc) {
          var closeIconSrc = document.querySelector('.chat-overlay-header .chat-overlay-close');
          closeIconSrc.src = this.openCloseContainer.closeIconSrc;
        }
 
        if (this.openOnLoad) {
          chatOverlayDefaultStateOpen = true;
        }
 
        if (this.banner.title && this.banner.helper && this.banner.description) {
          styles.push('.chat-overlay-banner { display: block; }');
          styles.push('.chat-overlay-closed { height: 210px; }');
          var chatOverlayBanner = document.querySelector('.chat-overlay-banner');
          chatOverlayBanner.children[0].innerHTML = this.banner.title;
          chatOverlayBanner.children[1].innerHTML = this.banner.helper;
          chatOverlayBanner.children[2].innerHTML = this.banner.description;
        }
 
        if (styles.length) {
          var stylesElem = document.createElement('style');
          stylesElem.innerHTML = styles.join(' ');
          document.body.appendChild(stylesElem);
        }
 
        if (this.dragAndDropChatOverlay) {
          var container = document.querySelector("body");
          container.addEventListener("touchstart", dragStart, false);
          container.addEventListener("touchend", dragEnd, false);
          container.addEventListener("touchmove", drag, false);
 
          container.addEventListener("mousedown", dragStart, false);
          container.addEventListener("mouseup", dragEnd, false);
          container.addEventListener("mousemove", drag, false);
        }
      }
    }
 
    var config = new Config(clientConfig);
    config.setConfig();
 
    function init () {
      document.getElementById('receiver').src = config.iframeSrc;
      isInit = true;
    }
      
    function openChatOverlay (receiverElem, imgElemOpen, imgElemClose) {
      if (!isInit) {
        init();
      }
      document.getElementById('receiver').classList.add("chat-overlay-open");
      document.getElementById('receiver').classList.remove("chat-overlay-close");
      document.getElementsByClassName('chat-overlay')[0].classList.add("chat-overlay-open");
      document.getElementsByClassName('chat-overlay')[0].classList.remove("chat-overlay-closed");
      document.getElementsByClassName('chat-overlay-header-mobile')[0].classList.remove('chat-overlay-close');
      document.getElementsByClassName('chat-overlay-banner')[0].classList.add('chat-overlay-close');
      if (imgElemClose) imgElemClose.style.opacity = 1;
      if (imgElemOpen) imgElemOpen.style.opacity = 0;
      localStorage.setItem('chatOverlayOpen', true);
    }
    
    function closeChatOverlay (receiverElem, imgElemOpen, imgElemClose) {
      document.getElementById('receiver').classList.add("chat-overlay-close");
      document.getElementById('receiver').classList.remove("chat-overlay-open");
      document.getElementsByClassName('chat-overlay')[0].classList.add("chat-overlay-closed");
      document.getElementsByClassName('chat-overlay')[0].classList.remove("chat-overlay-open");
      document.getElementsByClassName('chat-overlay-header-mobile')[0].classList.add('chat-overlay-close');
      document.getElementsByClassName('chat-overlay-banner')[0].classList.remove('chat-overlay-close');
      if (imgElemOpen) imgElemOpen.style.opacity = 1;
      if (imgElemClose) imgElemClose.style.opacity = 0;
      localStorage.setItem('chatOverlayOpen', false);
    }
    
    function toggleChatOverlay () {
      /**
       * Toggles opening and closing of the chatOverlay
       * @returns - no return
       */
      var chatOverlayHeaderImgElemOpen = document.getElementsByClassName('chat-overlay-header-img chat-overlay-open')[0];
      var chatOverlayHeaderImgElemClose = document.getElementsByClassName('chat-overlay-header-img chat-overlay-close')[0];
      var receiverElem = document.getElementById('receiver');
      if (receiverElem.classList.contains('chat-overlay-close')) {
        openChatOverlay(receiverElem, chatOverlayHeaderImgElemOpen, chatOverlayHeaderImgElemClose);
      } else {
        closeChatOverlay(receiverElem, chatOverlayHeaderImgElemOpen, chatOverlayHeaderImgElemClose);
      }
    }
    
    var chatOverlayHeaderElem = document.getElementsByClassName('chat-overlay-header')[0];
    chatOverlayHeaderElem.addEventListener('click', toggleChatOverlay);
    var chatOverlayHeaderElemMobile = document.getElementsByClassName('chat-overlay-header-mobile')[0];
    chatOverlayHeaderElemMobile.addEventListener('click', toggleChatOverlay);
    var chatOverlayHeaderLogoClose = document.querySelector('.header-logo img.chat-overlay-close');
    if (chatOverlayHeaderLogoClose) chatOverlayHeaderLogoClose.addEventListener('click', closeChatOverlay);
    if (chatOverlayHeaderLogoClose) chatOverlayHeaderLogoClose.addEventListener('click', toggleChatOverlay);
    var chatOverlayHeaderLogoSvgClose = document.querySelector('.header-logo svg.chat-overlay-close');
    if (chatOverlayHeaderLogoSvgClose) chatOverlayHeaderLogoSvgClose.addEventListener('click', toggleChatOverlay);
    
    
    if (typeof(Storage) !== "undefined") {
      var chatOverlayOpen = localStorage.getItem('chatOverlayOpen');
      var chatOverlayHeaderImgElemOpen = document.getElementsByClassName('chat-overlay-header-img chat-overlay-open')[0];
      var chatOverlayHeaderImgElemClose = document.getElementsByClassName('chat-overlay-header-img chat-overlay-close')[0];
      var receiverElem = document.getElementById('receiver');
      if (chatOverlayOpen && localStorage.getItem('chatOverlayOpen') === "false")  {
        closeChatOverlay(receiverElem, chatOverlayHeaderImgElemOpen, chatOverlayHeaderImgElemClose);
      } else if (chatOverlayOpen && localStorage.getItem('chatOverlayOpen') === "true" || chatOverlayDefaultStateOpen) {
        openChatOverlay(receiverElem, chatOverlayHeaderImgElemOpen, chatOverlayHeaderImgElemClose);
      }
    } else {
        // Sorry! No Web Storage support..
      console.log('No localStorage support')
    }
 
    //START of Chat Overlay drag and drop
    var dragItem = document.querySelector(".chat-overlay");
    var touchItem = document.querySelector(".chat-overlay-header-img.chat-overlay-open");
    var chatOverlayWrapper = document.querySelector('.chat-overlay-wrapper');
 
    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;
 
    function dragStart(e) {
      dragged = false;
      if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
      } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
      }
 
      if (e.target === touchItem) {
        active = true;
      }
    }
 
    function dragEnd(e) {
      initialX = currentX;
      initialY = currentY;
 
      active = false;
      const bodyBound = document.body.getBoundingClientRect();
      const chatOverlayHeaderBound = document.getElementsByClassName('chat-overlay-header')[0].getBoundingClientRect();
      const center = {
        x: chatOverlayHeaderBound.x + chatOverlayHeaderBound.width/2,
        y: chatOverlayHeaderBound.y + chatOverlayHeaderBound.height/2
      };
    }
 
    function drag(e) {
      if (active) {
        e.preventDefault();
 
        dragged = true;
        if (e.type === "touchmove") {
          currentX = e.touches[0].clientX - initialX;
          currentY = e.touches[0].clientY - initialY;
        } else {
          currentX = e.clientX - initialX;
          currentY = e.clientY - initialY;
        }
 
        xOffset = currentX;
        yOffset = currentY;
        setTranslate(currentX, currentY, dragItem);
      }
    }
 
    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }
    /// END of Chat Overlay drag and drop     
