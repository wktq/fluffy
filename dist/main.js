/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/fluffy.scss":
/*!*************************!*\
  !*** ./src/fluffy.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/fluffy.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fluffy_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fluffy.scss */ \"./src/fluffy.scss\");\n/* harmony import */ var _fluffy_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fluffy_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n$(document).ready(function() {\n  $('.fluffy-tabs-link').on('click', function() {\n    $('.fluffy-tabs-link.active').removeClass('active');\n    $(this).addClass('active');\n\n    var id = $(this).data('ftLink');\n    showFluffyTab(id);\n  });\n\n  if ($('.fluffy-tabs-link.acitve')) {\n    var id = $('.fluffy-tabs-link.active').data('ftLink');\n    showFluffyTab(id);\n  }\n\n  function showFluffyTab(id) {\n    $('.fluffy-tabs-content').removeClass('active');\n    $('.fluffy-tabs-content[data-ft-name=\"' + id + '\"]').addClass('active');\n  }\n\n  $('.list.has-child .list-parent').on('click', function() {\n    $(this).parents('.list').find('.list-child').removeClass('child-open');\n\n    if ($(this).parents('.list').find('.list-child').length) {\n      $(this).parents('.list').toggleClass('child-open');\n    }\n  });\n\n  $('.list').on('click', function() {\n    hashContentChange();\n  });\n\n  $(document).on('scroll', function() {\n    // console.log($('body').offset().top);\n    // console.log($('.fixed-content').offset().top);\n  });\n\n  function hashContentChange() {\n    if (location.hash) {\n      setTimeout(function() {\n        var hash = location.hash.substr(1);\n        hashContentShow(hash);\n      }, 50);\n    }\n  }\n\n  function hashContentShow(hash) {\n    $('[data-hash-content]').hide();\n    $('[data-hash-content=\"' + hash + '\"]').show();\n    $('[data-hash-list]').removeClass('active');\n    $('[data-hash-list=\"' + hash + '\"]').addClass('active');\n    $('.hash-name').text(hash);\n  }\n\n  hashContentChange();\n\n  // Dialog\n\n  $('.dialog-button').on('click', function() {\n    var dialogId = $(this).data('dialogId');\n    $('.dialog-wrapper').fadeIn();\n\n    setTimeout(function() {\n      $('.dialog[data-dialog-id=\"' + dialogId + '\"]').addClass('appeared');\n    }, 50);\n  });\n\n  $('.dialog-close-button').on('click', function() {\n    var dialogId = $(this).parents('.dialog').data('dialogId');\n    $('.dialog').removeClass('appeared');\n    setTimeout(function() {\n      $('.dialog-wrapper').fadeOut();\n    }, 50);\n  });\n\n  $(document).on('click', '.dialog-close-button', function() {\n    var dialogId = $(this).parents('.dialog').data('dialogId');\n    $('.dialog').removeClass('appeared');\n    setTimeout(function() {\n      $('.dialog-wrapper').fadeOut();\n    }, 50);\n  });\n\n  $(document).on('click', function(e) {\n    if (!$(e.target).closest('.dialog').length) {\n      if (!$(e.target).closest('.dialog-button').length) {\n        $('.dialog').removeClass('appeared');\n        setTimeout(function() {\n          $('.dialog-wrapper').fadeOut();\n        }, 50);\n      }\n    }\n  });\n\n  //Drawer\n  window.mobilecheck = function() {\n    var check = false;\n    (function(a) {\n      if (/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0, 4)))\n        check = true;\n      }\n    )(navigator.userAgent || navigator.vendor || window.opera);\n    return check;\n  };\n\n  $('.drawer-open').on('click', function() {\n    var drawerId = $(this).data('drawer-id');\n\n    if ($('.drawer[data-drawer-id=\"' + drawerId + '\"]').hasClass('open')) {\n      closeDrawer();\n    } else {\n      openDrawer(drawerId);\n    }\n  });\n  $('.drawer-close').on('click', function() {\n    var drawerId = $(this).data('drawer-id');\n    closeDrawer();\n  });\n\n  function openDrawer(id) {\n    $('body').append('<div class=\"drawer-overlay\"></div>');\n    setTimeout(function() {\n      $('.drawer-overlay').addClass('active');\n    }, 50);\n    $('.drawer[data-drawer-id=\"' + id + '\"]').addClass('open');\n    console.log(id + ' opend');\n  }\n\n  function closeDrawer() {\n    $('.drawer-overlay').removeClass('active');\n    setTimeout(function() {\n      $('.drawer-overlay').remove();\n      console.log('removed');\n    }, 100);\n    $('.drawer').removeClass('open');\n  }\n\n  $(document).on('click', '.drawer-overlay', function(e) {\n    closeDrawer();\n  });\n\n  // fluffy Viewer\n\n  if ($('.fluffy-viewer')) {\n\n    if ($(window).width() > 800) {\n      var imageWidth = 100 / $('.fluffy-viewer').data('fvCol');\n      var imageGutter = $('.fluffy-viewer').data('fvGutter');\n    } else {\n      var imageWidth = 50;\n      var imageGutter = $('.fluffy-viewer').data('fvGutter') / 2;\n    }\n\n    $('.fluffy-viewer').find('img').each(function(i) {\n      $(this).wrap(\"<div class='fv-image' data-fv-image-index=\" + i + \" style='width: \" + imageWidth + \"%; padding: \" + imageGutter + \"px'></div>\");\n      $(this).before('<div class=\"fv-image-overlay\" style=\"top: ' + imageGutter + 'px; left: ' + imageGutter + 'px; bottom: ' + imageGutter + 'px; right: ' + imageGutter + 'px\"><i class=\"icon ion-ios-search-strong\"></i></div>');\n    });\n\n    $('.fluffy-viewer').each(function(i) {\n      var viewerId = Date.now();\n      $(this).attr('data-fv-viewer-id', viewerId);\n      createFvModal(viewerId);\n    });\n\n    $(document).on('click', '.fv-image', function() {\n      var index = $(this).data('fvImageIndex');\n      var viewerId = $(this).parents('.fluffy-viewer').data('fvViewerId');\n      openFvModal(viewerId, index);\n    });\n  }\n\n  function createFvModal(viewerId) {\n    var viewer = $('[data-fv-viewer-id=\"' + viewerId + '\"]');\n    $('body').append('<div class=\"fv-modal\" data-fv-modal-id=\"' + viewerId + '\">' + viewer.html() + '<div class=\"fv-nav\"><a class=\"fv-nav-close\"><i class=\"icon ion-close\"></i>CLOSE</a><p class=\"fv-nav-display\"><span class=\"current-fv-index\"></span> / <span class=\"current-fv-length\"></span></p><a class=\"fv-nav-prev\" data-fv-target-id=\"' + viewerId + '\"><i class=\"icon ion-chevron-left\"></i></a><a class=\"fv-nav-next\" data-fv-target-id=\"' + viewerId + '\"><i class=\"icon ion-chevron-right\"></i></a></div></div>');\n\n    var fvImage = viewer.find('.fv-image');\n    var pos = '';\n\n    $(document).bind(\"touchstart\", TouchStart);\n    $(document).bind(\"touchmove\", TouchMove);\n    $(document).bind(\"touchend\", TouchLeave);\n\n    function TouchStart(event) {\n      var startX = event.originalEvent.touches[0].pageX;\n      console.log(startX);\n    }\n\n    function TouchLeave(event) {\n      var leaveX = event.originalEvent.touches[0].pageX;\n      console.log(leaveX);\n    }\n\n    function TouchMove(event) {\n      var moveX = event.originalEvent.touches[0].pageX;\n      console.log();\n    }\n  }\n\n  function openFvModal(viewerId, index) {\n    if (!$('.fv-modal.visible')[0]) {\n      var modal = $('[data-fv-modal-id=\"' + viewerId + '\"]');\n      var currentImage = $('[data-fv-image-index=\"' + index + '\"]');\n      var prevImage = $('[data-fv-image-index=\"' + (index - 1) + '\"]');\n      var nextImage = $('[data-fv-image-index=\"' + (index + 1) + '\"]');\n      var imageLength = modal.find('.fv-image').length;\n\n      currentImage.addClass('current');\n      prevImage.addClass('prev');\n      nextImage.addClass('next');\n\n      modal.addClass('visible');\n\n      $('.current-fv-index').text(index + 1);\n      $('.current-fv-length').text(imageLength);\n\n      modal.find('.fv-nav-prev').removeClass('disable');\n      modal.find('.fv-nav-next').removeClass('disable');\n\n      if (imageLength == (index + 1)) {\n        modal.find('.fv-nav-next').addClass('disable');\n      } else if (index == 0) {\n        modal.find('.fv-nav-prev').addClass('disable');\n      }\n    }\n  }\n\n  function closeFvModal() {\n    $('.fv-modal').removeClass('visible');\n    $('.fv-modal .current').removeClass('current');\n    $('.fv-modal .prev').removeClass('prev');\n    $('.fv-modal .next').removeClass('next');\n  }\n\n  function nextFvModal(viewerId) {\n    var modal = $('[data-fv-modal-id=\"' + viewerId + '\"]');\n    var currentIndex = modal.find('.fv-image.current').data('fvImageIndex');\n    var imageLength = modal.find('.fv-image').length;\n    console.log(imageLength);\n    modal.find('.fv-nav-prev').removeClass('disable');\n    modal.find('.fv-nav-next').removeClass('disable');\n\n    if (currentIndex == (imageLength - 1)) {\n      console.log('this is last image');\n      modal.find('.fv-nav-next').addClass('disable');\n    } else {\n      var currentImage = $('[data-fv-image-index=\"' + (currentIndex + 1) + '\"]');\n      var prevImage = $('[data-fv-image-index=\"' + currentIndex + '\"]');\n      var nextImage = $('[data-fv-image-index=\"' + (currentIndex + 2) + '\"]');\n\n      $('.current').removeClass('current');\n      $('.prev').removeClass('prev');\n      $('.next').removeClass('next');\n\n      currentImage.addClass('current');\n      prevImage.addClass('prev');\n      nextImage.addClass('next');\n\n      $('.current-fv-index').text(currentIndex + 2);\n      $('.current-fv-length').text(imageLength);\n    }\n  }\n\n  function prevFvModal(viewerId) {\n    var modal = $('[data-fv-modal-id=\"' + viewerId + '\"]');\n    var currentIndex = modal.find('.fv-image.current').data('fvImageIndex');\n    var imageLength = modal.find('.fv-image').length;\n    modal.find('.fv-nav-prev').removeClass('disable');\n    modal.find('.fv-nav-next').removeClass('disable');\n\n    if (currentIndex == 0) {\n      console.log('this is first image');\n      modal.find('.fv-nav-prev').addClass('disable');\n    } else {\n      var currentImage = $('[data-fv-image-index=\"' + (currentIndex - 1) + '\"]');\n      var prevImage = $('[data-fv-image-index=\"' + (currentIndex - 2) + '\"]');\n      var nextImage = $('[data-fv-image-index=\"' + currentIndex + '\"]');\n\n      $('.current').removeClass('current');\n      $('.prev').removeClass('prev');\n      $('.next').removeClass('next');\n\n      currentImage.addClass('current');\n      prevImage.addClass('prev');\n      nextImage.addClass('next');\n\n      $('.current-fv-index').text(currentIndex);\n      $('.current-fv-length').text(imageLength);\n    }\n  }\n\n  var fvAllowed = true;\n\n  $(document).on('click', '.fv-nav-next', function() {\n    console.log(fvAllowed);\n\n    if (fvAllowed) {\n      var viewerId = $(this).data('fvTargetId');\n      nextFvModal(viewerId);\n      fvAllowed = false;\n\n      setTimeout(function() {\n        fvAllowed = true;\n      }, 100);\n    }\n  });\n\n  $(document).on('click', '.fv-nav-prev', function() {\n    console.log(fvAllowed);\n\n    if (fvAllowed) {\n      var viewerId = $(this).data('fvTargetId');\n      prevFvModal(viewerId);\n      fvAllowed = false;\n\n      setTimeout(function() {\n        fvAllowed = true;\n      }, 100);\n    }\n  });\n\n  $(document).on('click', function(e) {\n    if (!$(e.target).closest('.fv-image').length) {\n      if (!$(e.target).closest('.fv-nav-next').length) {\n        if (!$(e.target).closest('.fv-nav-prev').length) {\n          closeFvModal();\n        }\n      }\n    }\n\n    if (!$(e.target).closest('.dropdown-button').length) {\n      if (!$(e.target).closest('.dropdown-child').length) {\n        $('.dropdown').removeClass('active');\n      }\n    }\n  });\n\n  document.onkeydown = function(e) {\n    if (!e)\n      e = window.event; // レガシー\n    var openingModalId = $('.fv-modal.visible').data('fvModalId');\n\n    if (openingModalId != undefined) {\n      if (e.keyCode == 37) {\n        prevFvModal(openingModalId);\n      }\n      if (e.keyCode == 39) {\n        nextFvModal(openingModalId);\n      }\n    }\n  };\n\n  $(document).on('click', '.dropdown-button', function() {\n    $('.dropdown').removeClass('active');\n\n    var leftOffset = $(this).offset().left;\n    var bottomOffset = $(this).offset().bottom;\n    var child = $(this).parents('.dropdown').find('.dropdown-child');\n    var direction = $(this).parents('.dropdown').data('dropdownDirection');\n\n    $(this).parents('.dropdown').toggleClass('active');\n\n    if (direction) {\n      switch (direction) {\n        case 'right':\n          child.css('left', leftOffset);\n          break;\n        case 'left':\n          child.css('left', leftOffset - child.width() + $(this).width());\n          break;\n        default:\n      }\n    } else {\n      if ((jQuery(window).width() - leftOffset) < 200) {\n        child.css('right', jQuery(window).width() - leftOffset - $(this).parents('.dropdown').width());\n      } else {\n        child.css('left', leftOffset);\n      }\n    }\n\n    child.css('top', bottomOffset);\n    child.css('z-index', 10000);\n  });\n\n  // Fluffy toast\n  $(document).on('click', '.fluffy-toast-add', function(e) {\n    var toastText = $(this).data('ftsText');\n    var toastId = $(this).data('ftsId');\n\n    if ($('#' + toastId).length == 0) {\n      $('html body').append('<span id=\"' + toastId + '\" class=\"fluffy-toast\">' + toastText + '<i class=\"ion-close\"></i></span>')\n    }\n\n    setTimeout(function(){\n      $('#' + toastId).addClass('appeared');\n      if ($('#' + toastId).attr('data-appeared') > 0) {\n        var appearedNum = Number($('#' + toastId).attr('data-appeared'));\n        $('#' + toastId).attr('data-appeared', appearedNum + 1);\n      } else {\n        $('#' + toastId).attr('data-appeared', 1);\n      }\n    },100);\n\n    setTimeout(function(){\n      var appearedNum = Number($('#' + toastId).attr('data-appeared'));\n\n      if (appearedNum == 1) {\n        if ($('#' + toastId).hasClass('appeared')) {\n          $('#' + toastId).removeClass('appeared');\n          $('#' + toastId).attr('data-appeared', 0);\n        }\n      } else {\n        if ($('#' + toastId).hasClass('appeared')) {\n          $('#' + toastId).attr('data-appeared', appearedNum - 1);\n        }\n      }\n\n    },5000);\n  });\n\n  $(document).on('click', '.fluffy-toast .ion-close', function(e) {\n    var toast = $(this).parents('.fluffy-toast');\n\n    if ($('#' + toastId).hasClass('appeared')) {\n      $('#' + toastId).removeClass('appeared');\n      $('#' + toastId).attr('data-appeared', 0);\n    }\n  });\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });