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

/***/ "./packages/theme/src/resources/js/_cloud_server_options.js":
/*!******************************************************************!*\
  !*** ./packages/theme/src/resources/js/_cloud_server_options.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function (ev) {
  /** cloud_server_options */
  var CPU_VALUE = [1, 2, 3, 4, 6, 8, 12, 16, 24];
  var RAM_VALUE = [1, 2, 3, 4, 6, 8, 10, 12, 16, 24, 32, 48, 64];
  var ROOT_DISK_SIZE_VALUE = [0, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500, 510, 520, 530, 540, 550, 560, 570, 580, 590, 600, 610, 620, 630, 640, 650, 660, 670, 680, 690, 700, 710, 720, 730, 740, 750, 760, 770, 780, 790, 800, 810, 820, 830, 840, 850, 860, 870, 880, 890, 900, 910, 920, 930, 940, 950, 960, 970, 980, 990, 1000, 1010, 1020, 1030, 1040, 1050, 1060, 1070, 1080, 1090, 1100, 1110, 1120, 1130, 1140, 1150, 1160, 1170, 1180, 1190, 1200, 1210, 1220, 1230, 1240, 1250, 1260, 1270, 1280, 1290, 1300, 1310, 1320, 1330, 1340, 1350, 1360, 1370, 1380, 1390, 1400, 1410, 1420, 1430, 1440, 1450, 1460, 1470, 1480, 1490, 1500, 1510, 1520, 1530, 1540, 1550, 1560, 1570, 1580, 1590, 1600, 1610, 1620, 1630, 1640, 1650, 1660, 1670, 1680, 1690, 1700, 1710, 1720, 1730, 1740, 1750, 1760, 1770, 1780, 1790, 1800, 1810, 1820, 1830, 1840, 1850, 1860, 1870, 1880, 1890, 1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000];
  var DATA_DISK_SIZE_VALUE = [0].concat(ROOT_DISK_SIZE_VALUE);
  var OPTIONS_CONFIG_RAM_CPU = {
    1: [1, 2],
    2: [1, 2, 3, 4],
    3: [1, 2, 3, 4, 6, 8],
    4: [1, 2, 3, 4, 6, 8],
    6: [2, 3, 4, 6, 8, 12],
    8: [2, 3, 4, 6, 8, 12, 16],
    10: [4],
    12: [3, 4, 6, 8, 12, 16, 24],
    16: [4, 6, 8, 12, 16, 24],
    24: [6, 8, 12, 16, 24],
    32: [8, 12, 16, 24],
    48: [12, 16, 24],
    64: [16, 24]
  };
  var OPTIONS_CONFIG_CPU_RAM = {
    1: [1, 2, 3, 4],
    2: [1, 2, 3, 4, 6, 8],
    3: [2, 3, 4, 6, 8, 12],
    4: [10],
    // 4: [2, 3, 4, 6, 8, 10, 12, 16],
    6: [3, 4, 6, 8, 12, 16, 24],
    8: [3, 4, 6, 8, 12, 16, 24, 32],
    12: [6, 8, 12, 16, 24, 32, 48],
    16: [8, 12, 16, 24, 32, 48, 64],
    24: [12, 16, 24, 32, 48, 64],
    32: [64]
  };
  var slider = {
    updatedBy: 'CPU'
  };
  var optionConfig = {
    RAM: 1,
    CPU: 1,
    ROOT_DISK_TYPE: 'HDD',
    ROOT_DISK_SIZE: 100,
    DATA_DISK_TYPE: 'SSD',
    DATA_DISK_SIZE: 60
  };
  /** Custom Event */

  var cloud_server_options = document.querySelector('.cloud_server_options'); // const event = document.createEvent('Event')

  var event = new CustomEvent('change', {
    detail: optionConfig
  });
  event.initEvent('change', true, true, optionConfig);
  cloud_server_options.addEventListener('change', function (e) {
    showInfoData(optionConfig);
  }, false);
  /** Show data config */

  function showInfoData(config) {
    var showPanel = document.querySelector('.option-config-data');
    var cpu = showPanel.querySelector('.cpu-value');
    var ram = showPanel.querySelector('.ram-value');
    var rootDisk = showPanel.querySelector('.root-disk-value');
    var rootType = showPanel.querySelector('.root-disk-type');
    var dataDisk = showPanel.querySelector('.data-disk-value');
    var dataType = showPanel.querySelector('.data-disk-type');
    if (cpu) cpu.textContent = config.CPU;
    if (ram) ram.textContent = config.RAM;
    if (rootDisk) rootDisk.textContent = config.ROOT_DISK_SIZE;
    if (rootType) rootType.textContent = config.ROOT_DISK_TYPE;
    if (dataDisk) dataDisk.textContent = config.DATA_DISK_SIZE;
    if (dataType) dataType.textContent = config.DATA_DISK_TYPE;
  }

  function updateCPU(key, value) {
    var currentRAMValue = RAM_VALUE[parseInt(value)];
    var rangCPUValue = OPTIONS_CONFIG_RAM_CPU[currentRAMValue];

    if (currentRAMValue && rangCPUValue) {
      optionConfig.CPU = rangCPUValue.indexOf(optionConfig.CPU) !== -1 ? optionConfig.CPU : rangCPUValue[0];
      if (rangCPUValue.indexOf(optionConfig.CPU) !== -1) slider.CPU.set(CPU_VALUE.indexOf(optionConfig.CPU));
    }
  }

  function updateRAM(key, value) {
    var currentCPUValue = CPU_VALUE[parseInt(value)];
    var rangRAMValue = OPTIONS_CONFIG_CPU_RAM[currentCPUValue];

    if (currentCPUValue && rangRAMValue) {
      optionConfig.RAM = rangRAMValue.indexOf(optionConfig.RAM) !== -1 ? optionConfig.RAM : rangRAMValue[0];
      if (slider && slider.RAM && rangRAMValue.indexOf(optionConfig.RAM) !== -1) slider.RAM.set(RAM_VALUE.indexOf(optionConfig.RAM));
    }
  }

  function updateData(key, value) {
    switch (key) {
      case 'RAM':
        if (slider.updatedBy && slider.updatedBy == 'RAM') updateCPU(key, value);
        break;

      case 'CPU':
        if (slider.updatedBy && slider.updatedBy == 'CPU') updateRAM(key, value);
        break;

      default:
        break;
    }
  }

  function setValue(key, value) {
    if (!key) return null;

    try {
      updateData(key, value);
    } catch (error) {
      console.warn(error);
    }

    switch (key) {
      case 'CPU':
        var unit = CPU_VALUE[parseInt(value)] > 1 ? 'CORES' : ' CORE';
        return {
          value: CPU_VALUE[parseInt(value)],
          unit: unit
        };
        break;

      case 'RAM':
        return {
          value: RAM_VALUE[parseInt(value)],
          unit: ' GB'
        };
        break;

      case 'ROOT_DISK_SIZE':
        return {
          value: ROOT_DISK_SIZE_VALUE[parseInt(value)],
          unit: ' GB'
        };
        break;

      case 'DATA_DISK_SIZE':
        return {
          value: DATA_DISK_SIZE_VALUE[parseInt(value)],
          unit: ' GB'
        };
        break;

      default:
        break;
    }
  }

  function createSlider() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'slider';
    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ROOT';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      start: [1],
      step: 1,
      connect: [true, false],
      range: {
        'min': 0,
        'max': 10
      }
    };
    var sliderElement = document.getElementById(id);
    var field = document.getElementById(id + '_value');
    if (!sliderElement) return false;
    slider[key] = noUiSlider.create(sliderElement, options);
    sliderElement.noUiSlider.on('update', function (value) {
      var nextValue = setValue(key, value);
      field.innerHTML = nextValue ? nextValue.value + ' ' + nextValue.unit : '-';
      optionConfig[key] = nextValue.value;
      cloud_server_options.dispatchEvent(event);
    });

    if (['RAM', 'CPU'].indexOf(key) !== -1) {
      var changeUpdateBy = function changeUpdateBy(e) {
        slider.updatedBy = key;
      };

      sliderElement.addEventListener('mouseenter', changeUpdateBy);
      sliderElement.addEventListener('touchmove', changeUpdateBy);
    }
  }

  createSlider('fcpu', 'CPU', {
    start: [1],
    step: 1,
    connect: [true, false],
    range: {
      'min': 0,
      'max': CPU_VALUE.length - 1
    }
  });
  createSlider('fram', 'RAM', {
    start: [1],
    step: 1,
    connect: [true, false],
    range: {
      'min': 0,
      'max': RAM_VALUE.length - 1
    }
  });
  createSlider('frootdisksize', 'ROOT_DISK_SIZE', {
    start: [8],
    step: 1,
    connect: [true, false],
    range: {
      'min': 0,
      'max': ROOT_DISK_SIZE_VALUE.length - 1
    }
  });
  createSlider('fdatadisk', 'DATA_DISK_SIZE', {
    start: [5],
    step: 1,
    connect: [true, false],
    range: {
      'min': 0,
      'max': DATA_DISK_SIZE_VALUE.length - 1
    }
  });
  /** ROOT DISK TYPE */

  var rootDiskType = document.getElementById('frootdisktype');
  rootDiskType.addEventListener('change', onChangeRootDiskType);
  var frootdiskLabel = document.querySelector('.frootdisk_label');
  frootdiskLabel.addEventListener('click', function () {
    rootDiskType.checked = !rootDiskType.checked;
    onChangeRootDiskType();
  });

  function onChangeRootDiskType() {
    optionConfig.ROOT_DISK_TYPE = rootDiskType.checked ? 'SSD' : 'HDD';
    cloud_server_options.dispatchEvent(event);
    document.querySelector('.frootdisk_label').textContent = optionConfig.ROOT_DISK_TYPE;
  }
  /** DATA DISK TYPE */


  var dataDiskType = document.getElementById('fdatadisktype');
  dataDiskType.addEventListener('click', function () {
    optionConfig.DATA_DISK_TYPE = optionConfig.DATA_DISK_TYPE && optionConfig.DATA_DISK_TYPE == 'HDD' ? 'SSD' : 'HDD';
    cloud_server_options.dispatchEvent(event);
    document.querySelector('#fdatadisktype').textContent = optionConfig.DATA_DISK_TYPE;
  });
});
/** end DOMContentLoaded */

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

/***/ "./packages/theme/src/resources/js/_slide_pricing.js":
/*!***********************************************************!*\
  !*** ./packages/theme/src/resources/js/_slide_pricing.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  $('.slide_pricing').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    items: 1,
    responsive: {
      0: {
        items: 1,
        margin: 0
      },
      600: {
        items: 2
      },
      1000: {
        items: 3,
        center: true
      }
    }
  });
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
        items: 5
      },
      1000: {
        items: 7
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

__webpack_require__(/*! ./_cloud_server_options */ "./packages/theme/src/resources/js/_cloud_server_options.js");

__webpack_require__(/*! ./_slide_pricing */ "./packages/theme/src/resources/js/_slide_pricing.js");

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