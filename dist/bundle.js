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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

$(document).ready(function() {
  $('.fluffy-tabs-link').on('click', function() {
    $('.fluffy-tabs-link.active').removeClass('active');
    $(this).addClass('active');

    var id = $(this).data('ftLink');
    showFluffyTab(id);
  });

  if ($('.fluffy-tabs-link.acitve')) {
    var id = $('.fluffy-tabs-link.active').data('ftLink');
    showFluffyTab(id);
  }

  function showFluffyTab(id) {
    $('.fluffy-tabs-content').removeClass('active');
    $('.fluffy-tabs-content[data-ft-name="' + id + '"]').addClass('active');
  }

  $('.list.has-child .list-parent').on('click', function() {
    $(this).parents('.list').find('.list-child').removeClass('child-open');

    if ($(this).parents('.list').find('.list-child').length) {
      $(this).parents('.list').toggleClass('child-open');
    }
  });

  $('.list').on('click', function() {
    hashContentChange();
  });

  $(document).on('scroll', function() {
    // console.log($('body').offset().top);
    // console.log($('.fixed-content').offset().top);
  });

  function hashContentChange() {
    if (location.hash) {
      setTimeout(function() {
        var hash = location.hash.substr(1);
        hashContentShow(hash);
      }, 50);
    }
  }

  function hashContentShow(hash) {
    $('[data-hash-content]').hide();
    $('[data-hash-content="' + hash + '"]').show();
    $('[data-hash-list]').removeClass('active');
    $('[data-hash-list="' + hash + '"]').addClass('active');
    $('.hash-name').text(hash);
  }

  hashContentChange();

  // Dialog

  $('.dialog-button').on('click', function() {
    var dialogId = $(this).data('dialogId');
    $('.dialog-wrapper').fadeIn();

    setTimeout(function() {
      $('.dialog[data-dialog-id="' + dialogId + '"]').addClass('appeared');
    }, 50);
  });

  $('.dialog-close-button').on('click', function() {
    var dialogId = $(this).parents('.dialog').data('dialogId');
    $('.dialog').removeClass('appeared');
    setTimeout(function() {
      $('.dialog-wrapper').fadeOut();
    }, 50);
  });

  $(document).on('click', '.dialog-close-button', function() {
    var dialogId = $(this).parents('.dialog').data('dialogId');
    $('.dialog').removeClass('appeared');
    setTimeout(function() {
      $('.dialog-wrapper').fadeOut();
    }, 50);
  });

  $(document).on('click', function(e) {
    if (!$(e.target).closest('.dialog').length) {
      if (!$(e.target).closest('.dialog-button').length) {
        $('.dialog').removeClass('appeared');
        setTimeout(function() {
          $('.dialog-wrapper').fadeOut();
        }, 50);
      }
    }
  });

  //Drawer
  window.mobilecheck = function() {
    var check = false;
    (function(a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
        check = true;
      }
    )(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };

  $('.drawer-open').on('click', function() {
    var drawerId = $(this).data('drawer-id');

    if ($('.drawer[data-drawer-id="' + drawerId + '"]').hasClass('open')) {
      closeDrawer();
    } else {
      openDrawer(drawerId);
    }
  });
  $('.drawer-close').on('click', function() {
    var drawerId = $(this).data('drawer-id');
    closeDrawer();
  });

  function openDrawer(id) {
    $('body').append('<div class="drawer-overlay"></div>');
    setTimeout(function() {
      $('.drawer-overlay').addClass('active');
    }, 50);
    $('.drawer[data-drawer-id="' + id + '"]').addClass('open');
    console.log(id + ' opend');
  }

  function closeDrawer() {
    $('.drawer-overlay').removeClass('active');
    setTimeout(function() {
      $('.drawer-overlay').remove();
      console.log('removed');
    }, 100);
    $('.drawer').removeClass('open');
  }

  $(document).on('click', '.drawer-overlay', function(e) {
    closeDrawer();
  });

  // fluffy Viewer

  if ($('.fluffy-viewer')) {

    if ($(window).width() > 800) {
      var imageWidth = 100 / $('.fluffy-viewer').data('fvCol');
      var imageGutter = $('.fluffy-viewer').data('fvGutter');
    } else {
      var imageWidth = 50;
      var imageGutter = $('.fluffy-viewer').data('fvGutter') / 2;
    }

    $('.fluffy-viewer').find('img').each(function(i) {
      $(this).wrap("<div class='fv-image' data-fv-image-index=" + i + " style='width: " + imageWidth + "%; padding: " + imageGutter + "px'></div>");
      $(this).before('<div class="fv-image-overlay" style="top: ' + imageGutter + 'px; left: ' + imageGutter + 'px; bottom: ' + imageGutter + 'px; right: ' + imageGutter + 'px"><i class="icon ion-ios-search-strong"></i></div>');
    });

    $('.fluffy-viewer').each(function(i) {
      var viewerId = Date.now();
      $(this).attr('data-fv-viewer-id', viewerId);
      createFvModal(viewerId);
    });

    $(document).on('click', '.fv-image', function() {
      var index = $(this).data('fvImageIndex');
      var viewerId = $(this).parents('.fluffy-viewer').data('fvViewerId');
      openFvModal(viewerId, index);
    });
  }

  function createFvModal(viewerId) {
    var viewer = $('[data-fv-viewer-id="' + viewerId + '"]');
    $('body').append('<div class="fv-modal" data-fv-modal-id="' + viewerId + '">' + viewer.html() + '<div class="fv-nav"><a class="fv-nav-close"><i class="icon ion-close"></i>CLOSE</a><p class="fv-nav-display"><span class="current-fv-index"></span> / <span class="current-fv-length"></span></p><a class="fv-nav-prev" data-fv-target-id="' + viewerId + '"><i class="icon ion-chevron-left"></i></a><a class="fv-nav-next" data-fv-target-id="' + viewerId + '"><i class="icon ion-chevron-right"></i></a></div></div>');

    var fvImage = viewer.find('.fv-image');
    var pos = '';

    $(document).bind("touchstart", TouchStart);
    $(document).bind("touchmove", TouchMove);
    $(document).bind("touchend", TouchLeave);

    function TouchStart(event) {
      var startX = event.originalEvent.touches[0].pageX;
      console.log(startX);
    }

    function TouchLeave(event) {
      var leaveX = event.originalEvent.touches[0].pageX;
      console.log(leaveX);
    }

    function TouchMove(event) {
      var moveX = event.originalEvent.touches[0].pageX;
      console.log();
    }
  }

  function openFvModal(viewerId, index) {
    if (!$('.fv-modal.visible')[0]) {
      var modal = $('[data-fv-modal-id="' + viewerId + '"]');
      var currentImage = $('[data-fv-image-index="' + index + '"]');
      var prevImage = $('[data-fv-image-index="' + (index - 1) + '"]');
      var nextImage = $('[data-fv-image-index="' + (index + 1) + '"]');
      var imageLength = modal.find('.fv-image').length;

      currentImage.addClass('current');
      prevImage.addClass('prev');
      nextImage.addClass('next');

      modal.addClass('visible');

      $('.current-fv-index').text(index + 1);
      $('.current-fv-length').text(imageLength);

      modal.find('.fv-nav-prev').removeClass('disable');
      modal.find('.fv-nav-next').removeClass('disable');

      if (imageLength == (index + 1)) {
        modal.find('.fv-nav-next').addClass('disable');
      } else if (index == 0) {
        modal.find('.fv-nav-prev').addClass('disable');
      }
    }
  }

  function closeFvModal() {
    $('.fv-modal').removeClass('visible');
    $('.fv-modal .current').removeClass('current');
    $('.fv-modal .prev').removeClass('prev');
    $('.fv-modal .next').removeClass('next');
  }

  function nextFvModal(viewerId) {
    var modal = $('[data-fv-modal-id="' + viewerId + '"]');
    var currentIndex = modal.find('.fv-image.current').data('fvImageIndex');
    var imageLength = modal.find('.fv-image').length;
    console.log(imageLength);
    modal.find('.fv-nav-prev').removeClass('disable');
    modal.find('.fv-nav-next').removeClass('disable');

    if (currentIndex == (imageLength - 1)) {
      console.log('this is last image');
      modal.find('.fv-nav-next').addClass('disable');
    } else {
      var currentImage = $('[data-fv-image-index="' + (currentIndex + 1) + '"]');
      var prevImage = $('[data-fv-image-index="' + currentIndex + '"]');
      var nextImage = $('[data-fv-image-index="' + (currentIndex + 2) + '"]');

      $('.current').removeClass('current');
      $('.prev').removeClass('prev');
      $('.next').removeClass('next');

      currentImage.addClass('current');
      prevImage.addClass('prev');
      nextImage.addClass('next');

      $('.current-fv-index').text(currentIndex + 2);
      $('.current-fv-length').text(imageLength);
    }
  }

  function prevFvModal(viewerId) {
    var modal = $('[data-fv-modal-id="' + viewerId + '"]');
    var currentIndex = modal.find('.fv-image.current').data('fvImageIndex');
    var imageLength = modal.find('.fv-image').length;
    modal.find('.fv-nav-prev').removeClass('disable');
    modal.find('.fv-nav-next').removeClass('disable');

    if (currentIndex == 0) {
      console.log('this is first image');
      modal.find('.fv-nav-prev').addClass('disable');
    } else {
      var currentImage = $('[data-fv-image-index="' + (currentIndex - 1) + '"]');
      var prevImage = $('[data-fv-image-index="' + (currentIndex - 2) + '"]');
      var nextImage = $('[data-fv-image-index="' + currentIndex + '"]');

      $('.current').removeClass('current');
      $('.prev').removeClass('prev');
      $('.next').removeClass('next');

      currentImage.addClass('current');
      prevImage.addClass('prev');
      nextImage.addClass('next');

      $('.current-fv-index').text(currentIndex);
      $('.current-fv-length').text(imageLength);
    }
  }

  fvAllowed = true;

  $(document).on('click', '.fv-nav-next', function() {
    console.log(fvAllowed);

    if (fvAllowed) {
      var viewerId = $(this).data('fvTargetId');
      nextFvModal(viewerId);
      fvAllowed = false;

      setTimeout(function() {
        fvAllowed = true;
      }, 100);
    }
  });

  $(document).on('click', '.fv-nav-prev', function() {
    console.log(fvAllowed);

    if (fvAllowed) {
      var viewerId = $(this).data('fvTargetId');
      prevFvModal(viewerId);
      fvAllowed = false;

      setTimeout(function() {
        fvAllowed = true;
      }, 100);
    }
  });

  $(document).on('click', function(e) {
    if (!$(e.target).closest('.fv-image').length) {
      if (!$(e.target).closest('.fv-nav-next').length) {
        if (!$(e.target).closest('.fv-nav-prev').length) {
          closeFvModal();
        }
      }
    }

    if (!$(e.target).closest('.dropdown-button').length) {
      if (!$(e.target).closest('.dropdown-child').length) {
        $('.dropdown').removeClass('active');
      }
    }
  });

  document.onkeydown = function(e) {
    if (!e)
      e = window.event; // レガシー
    var openingModalId = $('.fv-modal.visible').data('fvModalId');

    if (openingModalId != undefined) {
      if (e.keyCode == 37) {
        prevFvModal(openingModalId);
      }
      if (e.keyCode == 39) {
        nextFvModal(openingModalId);
      }
    }
  };

  $(document).on('click', '.dropdown-button', function() {
    $('.dropdown').removeClass('active');

    var leftOffset = $(this).offset().left;
    var bottomOffset = $(this).offset().bottom;
    var child = $(this).parents('.dropdown').find('.dropdown-child');
    var direction = $(this).parents('.dropdown').data('dropdownDirection');

    $(this).parents('.dropdown').toggleClass('active');

    if (direction) {
      switch (direction) {
        case 'right':
          child.css('left', leftOffset);
          break;
        case 'left':
          child.css('left', leftOffset - child.width() + $(this).width());
          break;
        default:
      }
    } else {
      if ((jQuery(window).width() - leftOffset) < 200) {
        child.css('right', jQuery(window).width() - leftOffset - $(this).parents('.dropdown').width());
      } else {
        child.css('left', leftOffset);
      }
    }

    child.css('top', bottomOffset);
    child.css('z-index', 10000);
  });

  // Fluffy toast
  $(document).on('click', '.fluffy-toast-add', function(e) {
    var toastText = $(this).data('ftsText');
    var toastId = $(this).data('ftsId');

    if ($('#' + toastId).length == 0) {
      $('html body').append('<span id="' + toastId + '" class="fluffy-toast">' + toastText + '<i class="ion-close"></i></span>')
    }

    setTimeout(function(){
      $('#' + toastId).addClass('appeared');
      if ($('#' + toastId).attr('data-appeared') > 0) {
        var appearedNum = Number($('#' + toastId).attr('data-appeared'));
        $('#' + toastId).attr('data-appeared', appearedNum + 1);
      } else {
        $('#' + toastId).attr('data-appeared', 1);
      }
    },100);

    setTimeout(function(){
      var appearedNum = Number($('#' + toastId).attr('data-appeared'));

      if (appearedNum == 1) {
        if ($('#' + toastId).hasClass('appeared')) {
          $('#' + toastId).removeClass('appeared');
          $('#' + toastId).attr('data-appeared', 0);
        }
      } else {
        if ($('#' + toastId).hasClass('appeared')) {
          $('#' + toastId).attr('data-appeared', appearedNum - 1);
        }
      }

    },5000);
  });

  $(document).on('click', '.fluffy-toast .ion-close', function(e) {
    var toast = $(this).parents('.fluffy-toast');

    if ($('#' + toastId).hasClass('appeared')) {
      $('#' + toastId).removeClass('appeared');
      $('#' + toastId).attr('data-appeared', 0);
    }
  });
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);