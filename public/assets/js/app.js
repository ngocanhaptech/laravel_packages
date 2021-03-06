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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

  var cloud_server_options = document.querySelector('.cloud_server_options');
  var event = new CustomEvent('change', {
    detail: optionConfig
  });
  event.initEvent('change', true, true, optionConfig);
  if (cloud_server_options) cloud_server_options.addEventListener('change', function (e) {
    showInfoData(optionConfig);
  }, false);
  /** Show data config */

  function showInfoData(config) {
    var showPanel = document.querySelectorAll('.option-config-data');

    var PrintData = function PrintData(showPanel, config) {
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
    };

    showPanel.forEach(function (element) {
      PrintData(element, config);
    });
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

      case 'DATA_DISK':
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
      if (key == 'DATA_DISK') optionConfig[key] = updateDataDiskValue({
        nextValue: nextValue,
        id: id
      }, optionConfig[key]);else optionConfig[key] = nextValue.value;
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
  if (rootDiskType) rootDiskType.addEventListener('change', onChangeRootDiskType);
  var frootdiskLabel = document.querySelector('.frootdisk_label');
  if (frootdiskLabel) frootdiskLabel.addEventListener('click', function () {
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
  if (dataDiskType) dataDiskType.addEventListener('click', function () {
    optionConfig.DATA_DISK_TYPE = optionConfig.DATA_DISK_TYPE && optionConfig.DATA_DISK_TYPE == 'HDD' ? 'SSD' : 'HDD';
    cloud_server_options.dispatchEvent(event);
    document.querySelector('#fdatadisktype').textContent = optionConfig.DATA_DISK_TYPE;
  });
  /** ADD DATA DISK */

  var addDisks = document.querySelectorAll('.addDataDisk');
  addDisks.forEach(function (element) {
    if (!element) return false;
    element.addEventListener('click', addDataDisk);
  });

  function addDataDisk(e) {
    var dataType = this.getAttribute('data-type');
    var type = dataType || 'HDD';
    optionConfig.DATA_DISK = toggleDataDisk(type);
    var panels = document.querySelectorAll('.data-disk-panel');
    panels.forEach(function (panel) {
      renderDataDisk(panel);
    });
  }

  function toggleDataDisk(type) {
    var prefix = 'data_disk_';
    var newDisk = {
      type: type,
      size: 60
    };

    if (optionConfig.DATA_DISK && optionConfig.DATA_DISK.length > 0) {
      newDisk.id = getNextId(optionConfig.DATA_DISK, prefix);
      optionConfig.DATA_DISK.push(newDisk);
      return optionConfig.DATA_DISK;
    } else {
      return optionConfig.DATA_DISK = [_objectSpread({}, newDisk, {
        id: prefix + '1'
      })];
    }
  }

  function getNextId(arrayItem, prefix) {
    var blackList = arrayItem.map(function (item) {
      return parseInt(item.id.replace(prefix, ''));
    });

    for (var i = 1; i <= arrayItem.length + 1 || 100; i++) {
      if (blackList.indexOf(i) === -1) return prefix + i;
    }

    return prefix + arrayItem.length;
  }

  function renderDataDisk(panel) {
    var diskArray = optionConfig.DATA_DISK;
    panel.innerHTML = '<center type="padding: 15px">Loadding disks</center>';
    var stringHTML = '';
    var diskIds = [];

    var addInput = function addInput(p, item) {
      var dom = '<div class="form-group"><div class="row"><div class="col-auto col-input"><div class="input-range">';
      dom += '<div class="slider-range-valude" id="' + item.id + '_value">' + item.size + '  GB</div>';
      dom += '<div class="slider-range"  id="' + item.id + '"></div>';
      dom += '<span class="label_disk_type" id="' + item.id + 'type">' + item.type + '</span>';
      dom += '<span class="label_disk_remove" id="' + item.id + 'remove">' + 'Xóa' + '</span>';
      dom += '</div></div></div></div><!-- end input-range -->';
      return dom;
    };

    if (diskArray && diskArray.length > 0) {
      diskArray.forEach(function (item) {
        diskIds.push(item);
        stringHTML += addInput(panel, item);
      });
    }

    panel.innerHTML = stringHTML;
    diskArray.forEach(function (disk) {
      createSlider(disk.id, 'DATA_DISK', {
        start: [DATA_DISK_SIZE_VALUE.indexOf(disk.size)],
        step: 1,
        connect: [true, false],
        range: {
          'min': 0,
          'max': DATA_DISK_SIZE_VALUE.length - 1
        }
      });
      var dataDiskType = document.getElementById(disk.id + 'type');
      if (dataDiskType) dataDiskType.addEventListener('click', function () {
        var element = document.getElementById(disk.id + 'type');
        var nextType = element.textContent === 'HDD' ? 'SSD' : 'HDD';
        optionConfig.DATA_DISK = optionConfig.DATA_DISK.map(function (item) {
          if (item.id === disk.id) item.type = nextType;
          return item;
        });
        cloud_server_options.dispatchEvent(event);
        element.innerHTML = nextType;
      });
      var dataDiskRemove = document.getElementById(disk.id + 'remove');
      if (dataDiskRemove) dataDiskRemove.addEventListener('click', function () {
        var element = document.getElementById(disk.id + 'remove');
        optionConfig.DATA_DISK = optionConfig.DATA_DISK.filter(function (item) {
          return item.id !== disk.id;
        });
        cloud_server_options.dispatchEvent(event);
        renderDataDisk(panel);
      });
    });
  }

  function updateDataDiskValue(payload, data) {
    if (!data) return;
    nextData = data.map(function (item) {
      if (item.id === payload.id) return item.size = payload.nextValue.value;
      return item;
    });
    return data;
  }
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
    var offsetTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var top;

    if (topfix === undefined) {
      top = $('.top');
    } else {
      top = topfix;
    }

    if (top.length === 0) return;
    var topPosition = top.offset().top + offsetTop;

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

/***/ "./packages/theme/src/resources/js/_scrollingHash.js":
/*!***********************************************************!*\
  !*** ./packages/theme/src/resources/js/_scrollingHash.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function getParentByNodeName(parentNodeName, child) {
  var node = child;

  while (node != null) {
    if (node && node.nodeName == parentNodeName) {
      return node;
    }

    node = node.parentNode;
  }

  return false;
}

function getChildren(n, skipMe) {
  var r = [];

  for (; n; n = n.nextSibling) {
    if (n.nodeType == 1 && n != skipMe) r.push(n);
  }

  return r;
}

;

function getSiblings(n) {
  return getChildren(n.parentNode.firstChild, n);
}

var clickEvent = function () {
  if ('ontouchstart' in document.documentElement === true) return 'touchstart';else return 'click';
}();

function scrollIt(destination) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';
  var callback = arguments[3];
  var easings = {
    linear: function linear(t) {
      return t;
    },
    easeInQuad: function easeInQuad(t) {
      return t * t;
    },
    easeOutQuad: function easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad: function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic: function easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic: function easeOutCubic(t) {
      return --t * t * t + 1;
    },
    easeInOutCubic: function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart: function easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart: function easeOutQuart(t) {
      return 1 - --t * t * t * t;
    },
    easeInOutQuart: function easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    },
    easeInQuint: function easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint: function easeOutQuint(t) {
      return 1 + --t * t * t * t * t;
    },
    easeInOutQuint: function easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    }
  };
  var start = window.pageYOffset;
  var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
  var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);

    if (callback) {
      callback();
    }

    return;
  }

  function scroll() {
    var now = 'now' in window.performance ? performance.now() : new Date().getTime();
    var time = Math.min(1, (now - startTime) / duration);
    var timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }

      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}

function addMultipleListeners(element, events, handler, useCapture, args) {
  if (!(events instanceof Array)) {
    console.log('addMultipleListeners: ' + 'please supply an array of eventstrings ' + '(like ["click","mouseover"])');
  }

  var handlerFn = function handlerFn(e) {
    e.preventDefault();
    handler.apply(this, args && args instanceof Array ? args : []);
  };

  for (var i = 0; i < events.length; i += 1) {
    element.addEventListener(events[i], handlerFn, useCapture);
  }
}

function handlerPageChange() {
  var self = this;
  var page = this.getAttribute('href');
  page = page.replace('#page-section_', '');
  var scrollToPosition = document.querySelector('[section_name="' + page + '"]').offsetTop + window.innerHeight / 6;
  scrollIt(scrollToPosition, 300, 'easeOutQuad', function () {
    activeByHash(page);
    return null;
  });
}

var pageA = document.querySelectorAll('a[href*="#page-"]');

for (var i = pageA.length - 1; i >= 0; i--) {
  pageA[i] && addMultipleListeners(pageA[i], ['touchstart', 'click'], handlerPageChange, false);
}

function activeByHash(hash) {
  var hash = hash || location.hash.substr(1);

  if (hash !== "") {
    var pageA = document.querySelectorAll('a[href*="#page-"]');

    for (var i = pageA.length - 1; i >= 0; i--) {
      var pageHash = pageA[i].getAttribute('href');
      var parentList = getParentByNodeName('LI', pageA[i]);

      if (parentList.classList && parentList.classList.contains('active')) {
        parentList.classList && parentList.classList.remove('active');
      }

      if (pageHash.replace("#", '') == hash.replace("#", '')) {
        parentList.classList && parentList.classList.add('active');
      }
    }
  }
}

function scrollListener() {
  if (document.querySelectorAll('a[href*="#page-"]').length > 0) {
    window.addEventListener('scroll', function () {
      var y = window.pageYOffset;
      var sec = document.querySelectorAll('[section_name]');

      for (var i = 0; i <= sec.length - 1; i++) {
        var ey = sec[i].offsetTop;

        if (y > ey) {
          var ehash = sec[i].getAttribute('section_name');
        }
      }

      if (ehash) {
        activeByHash('#page-section_' + ehash);
      }
    });
  }
}

scrollListener();

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

__webpack_require__(/*! ./_scrollingHash */ "./packages/theme/src/resources/js/_scrollingHash.js");

/***/ }),

/***/ "./packages/theme/src/resources/sass/app.scss":
/*!****************************************************!*\
  !*** ./packages/theme/src/resources/sass/app.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./packages/theme/src/resources/sass/pages/cdn_page.scss":
/*!***************************************************************!*\
  !*** ./packages/theme/src/resources/sass/pages/cdn_page.scss ***!
  \***************************************************************/
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
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./packages/theme/src/resources/js/app.js ./packages/theme/src/resources/sass/app.scss ./packages/theme/src/resources/sass/theme.scss ./packages/theme/src/resources/sass/pages/elements_layout.scss ./packages/theme/src/resources/sass/pages/home_page.scss ./packages/theme/src/resources/sass/pages/cloud-server_page.scss ./packages/theme/src/resources/sass/pages/cdn_page.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\VCCLOUD\HOMEBIZFLYCLOUD\Laravel\bizflycloud\packages\theme\src\resources\js\app.js */"./packages/theme/src/resources/js/app.js");
__webpack_require__(/*! D:\VCCLOUD\HOMEBIZFLYCLOUD\Laravel\bizflycloud\packages\theme\src\resources\sass\app.scss */"./packages/theme/src/resources/sass/app.scss");
__webpack_require__(/*! D:\VCCLOUD\HOMEBIZFLYCLOUD\Laravel\bizflycloud\packages\theme\src\resources\sass\theme.scss */"./packages/theme/src/resources/sass/theme.scss");
__webpack_require__(/*! D:\VCCLOUD\HOMEBIZFLYCLOUD\Laravel\bizflycloud\packages\theme\src\resources\sass\pages\elements_layout.scss */"./packages/theme/src/resources/sass/pages/elements_layout.scss");
__webpack_require__(/*! D:\VCCLOUD\HOMEBIZFLYCLOUD\Laravel\bizflycloud\packages\theme\src\resources\sass\pages\home_page.scss */"./packages/theme/src/resources/sass/pages/home_page.scss");
__webpack_require__(/*! D:\VCCLOUD\HOMEBIZFLYCLOUD\Laravel\bizflycloud\packages\theme\src\resources\sass\pages\cloud-server_page.scss */"./packages/theme/src/resources/sass/pages/cloud-server_page.scss");
module.exports = __webpack_require__(/*! D:\VCCLOUD\HOMEBIZFLYCLOUD\Laravel\bizflycloud\packages\theme\src\resources\sass\pages\cdn_page.scss */"./packages/theme/src/resources/sass/pages/cdn_page.scss");


/***/ })

/******/ });