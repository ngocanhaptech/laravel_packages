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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/theme/src/resources/js/_backtotop.js":
/*!*******************************************************!*\
  !*** ./packages/theme/src/resources/js/_backtotop.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  $('body').append('<a class="backtotop btn btn-solid btn-primary" href="#0"><span>Top</span></a>'); // browser window scroll (in pixels) after which the "back to top" link is shown

  var offset = 300,
      //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  offset_opacity = 1200,
      //duration of the top scrolling animation (in ms)
  scroll_top_duration = 700,
      //grab the "back to top" link
  $back_to_top = $('.backtotop');
  $(window).scroll(function () {
    $(this).scrollTop() > offset ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible fade-out');

    if ($(this).scrollTop() > offset_opacity) {
      $back_to_top.addClass('fade-out');
    }
  });
  $back_to_top.on('click', function (event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    }, scroll_top_duration);
  });
})(jQuery);

/***/ }),

/***/ "./packages/theme/src/resources/js/_navigation.js":
/*!********************************************************!*\
  !*** ./packages/theme/src/resources/js/_navigation.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  'use strict';
  /* Navigation */

  var navigation = function navigation() {
    var navi_icon = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.navigation_icon';
    var nav_menu = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.navigation';
    var backdrop_nav = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'backdrop_nav';
    var addIcon = false;

    if ($(navi_icon).length < 1) {
      // console.log('add new icon menu');
      var addIcon = true;
    }

    if ($(nav_menu).length < 1) {
      // console.log("nav_menu not found");
      return;
    } else if ($(nav_menu).length > 1) {
      console.warn('There are duplicated navigations.');
    } else {
      nav_menu = nav_menu;
    }

    var navigation_element = $(nav_menu).first(); // check has child submenu

    function check_sub(navi_class) {
      var submenu = $(navi_class + ' ul li').has('ul');
      var icon = 'sub-icon';
      submenu.addClass('hasSub');
      submenu.append('<span class="' + icon + '">+</span>'); // $('.hasSub > ul').addClass('animated slideInDown');

      var sub_icon = $(nav_menu + ' .' + icon);

      if ($('.megachild').length) {
        var submenu = $('.' + navi_class + ' ul>li').has('ul.megachild');

        if (!submenu.hasClass('hasmegachild')) {
          submenu.addClass('hasmegachild');
        }
      } else if ($('.hasmegachild').length) {
        var submenu = $('.' + navi_class + ' ul>li.hasmegachild');
        $('.' + navi_class + ' ul>li.hasmegachild > ul').addClass('megachild');
      }

      sub_icon.click(function clickSubIcon(e) {
        var listSub = $(this).closest('.hasSub').siblings();
        listSub.removeClass('hasSub_on');
        listSub.find('.sub-icon').text('+');

        if ($(this).hasClass('on')) {
          $(this).removeClass('on');
          $(this).text('+');
          $(this).parent().removeClass('hasSub_on');
        } else {
          $(this).addClass('on');
          $(this).text('-');
          $(this).parent().addClass('hasSub_on');
        }
      });
    }

    check_sub(nav_menu);
    /* add backdrop_nav */

    var backdrop_class = backdrop_nav.replace(/\.|\#/g, ' ');
    navigation_element.prepend('<div class="' + backdrop_class + '"></div>');
    var backdrop = $(backdrop_class.split(' ').join('.'));

    if (!navigation_element.hasClass('nav-open')) {
      backdrop.hide();
    } else {
      backdrop.show();
    }

    var nav_toggle = function nav_toggle(nav_menu) {
      if (!navigation_element.hasClass('nav-open')) {
        navigation_element.addClass('nav-open');
        $('body').addClass('page-nav-open');
        backdrop.show();
      } else {
        navigation_element.removeClass('nav-open');
        $('body').removeClass('page-nav-open');
        backdrop.hide();
      }
    };

    if (addIcon) {
      var nav_icon_text = '<span class="' + navi_icon.replace(/\.|\#/g, ' ') + '"><span></span></span>';
      navigation_element.prepend(nav_icon_text);
      navi_icon = $(navi_icon);
    }

    navi_icon.click(function () {
      nav_toggle(navigation_element);
    });
    backdrop.click(function () {
      nav_toggle(navigation_element);
    });
  };

  navigation('.navigation_icon.nav-left', '.navigation.nav-left', '.backdrop_nav.nav-left');
  navigation('.fa.fa-user.nav-right', '.navigation.nav-right', '.backdrop_nav.nav-right');
  /* FIX TOP */

  var fixtop = function fixtop(topfix) {
    var top;

    if (topfix === undefined) {
      top = $('.top');
    } else {
      top = topfix;
    }

    if (top.length === 0) return;
    var topPosition = top.offset().top;

    var fixed = function fixed() {
      if (!top.hasClass('isfixed')) {
        top.addClass('isfixed');
        $('body').addClass('topfixed');
      }
    };

    var removefixed = function removefixed() {
      if (top.hasClass('isfixed')) {
        top.removeClass('isfixed');
        $('body').removeClass('topfixed');
      }
    };

    $(window).on('scroll', function () {
      if ($(window).width() > 768) {
        if ($(window).scrollTop() > topPosition) {
          fixed();
        } else {
          removefixed();
        }
      } else {
        removefixed();
      }
    });
  };

  fixtop($('.fix-top'));
});

/***/ }),

/***/ "./packages/theme/src/resources/js/_slider_partners.js":
/*!*************************************************************!*\
  !*** ./packages/theme/src/resources/js/_slider_partners.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  $('.slider_partners').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    items: 1,
    responsive: {
      0: {
        items: 3
      },
      600: {
        items: 6
      },
      1000: {
        items: 8
      }
    }
  });
});

/***/ }),

/***/ "./packages/theme/src/resources/js/_slider_single.js":
/*!***********************************************************!*\
  !*** ./packages/theme/src/resources/js/_slider_single.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  $('.slider_single').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
});

/***/ }),

/***/ "./packages/theme/src/resources/js/app.js":
/*!************************************************!*\
  !*** ./packages/theme/src/resources/js/app.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_backtotop */ "./packages/theme/src/resources/js/_backtotop.js");

__webpack_require__(/*! ./_navigation */ "./packages/theme/src/resources/js/_navigation.js");

__webpack_require__(/*! ./_slider_single */ "./packages/theme/src/resources/js/_slider_single.js");

__webpack_require__(/*! ./_slider_partners */ "./packages/theme/src/resources/js/_slider_partners.js");

/***/ }),

/***/ "./packages/theme/src/resources/sass/app.scss":
/*!****************************************************!*\
  !*** ./packages/theme/src/resources/sass/app.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./packages/theme/src/resources/sass/pages/cloud-server_page.scss":
/*!************************************************************************!*\
  !*** ./packages/theme/src/resources/sass/pages/cloud-server_page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./packages/theme/src/resources/sass/pages/elements_layout.scss":
/*!**********************************************************************!*\
  !*** ./packages/theme/src/resources/sass/pages/elements_layout.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./packages/theme/src/resources/sass/pages/home_page.scss":
/*!****************************************************************!*\
  !*** ./packages/theme/src/resources/sass/pages/home_page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./packages/theme/src/resources/sass/theme.scss":
/*!******************************************************!*\
  !*** ./packages/theme/src/resources/sass/theme.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./packages/theme/src/resources/js/app.js ./packages/theme/src/resources/sass/app.scss ./packages/theme/src/resources/sass/theme.scss ./packages/theme/src/resources/sass/pages/elements_layout.scss ./packages/theme/src/resources/sass/pages/home_page.scss ./packages/theme/src/resources/sass/pages/cloud-server_page.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\VCCLOUD\HOMEBIZFLYCLOUD\Laravel\bizflycloud\packages\theme\src\resources\js\app.js */"./packages/theme/src/resources/js/app.js");
__webpack_require__(/*! D:\VCCLOUD\HOMEBIZFLYCLOUD\Laravel\bizflycloud\packages\theme\src\resources\sass\app.scss */"./packages/theme/src/resources/sass/app.scss");
__webpack_require__(/*! D:\VCCLOUD\HOMEBIZFLYCLOUD\Laravel\bizflycloud\packages\theme\src\resources\sass\theme.scss */"./packages/theme/src/resources/sass/theme.scss");
__webpack_require__(/*! D:\VCCLOUD\HOMEBIZFLYCLOUD\Laravel\bizflycloud\packages\theme\src\resources\sass\pages\elements_layout.scss */"./packages/theme/src/resources/sass/pages/elements_layout.scss");
__webpack_require__(/*! D:\VCCLOUD\HOMEBIZFLYCLOUD\Laravel\bizflycloud\packages\theme\src\resources\sass\pages\home_page.scss */"./packages/theme/src/resources/sass/pages/home_page.scss");
module.exports = __webpack_require__(/*! D:\VCCLOUD\HOMEBIZFLYCLOUD\Laravel\bizflycloud\packages\theme\src\resources\sass\pages\cloud-server_page.scss */"./packages/theme/src/resources/sass/pages/cloud-server_page.scss");


/***/ })

/******/ });