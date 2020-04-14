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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/theme/src/resources/js/bang-gia-cloud-server.js":
/*!******************************************************************!*\
  !*** ./packages/theme/src/resources/js/bang-gia-cloud-server.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "wanip": {
    "default": "true",
    "hourly": 500,
    "monthly": 90
  },
  "ram": {
    "base": 120,
    "rate": {
      "1": 1.5,
      "2": 2.5,
      "3": 3.5,
      "4": 4.5,
      "6": 6.5,
      "8": 8.5,
      "10": 10.5,
      "12": 12.5,
      "16": 16.5,
      "24": 24.5,
      "32": 32.5,
      "48": 48.5,
      "64": 64.5
    }
  },
  "cpu": {
    "base": 357,
    "rate": {
      "1": 0.3,
      "2": 1,
      "3": 1.6,
      "4": 2.4,
      "6": 3.6,
      "8": 5.2,
      "12": 9.6,
      "16": 12.8,
      "24": 19.2
    }
  },
  "disk": {
    "hdd": 30.555555,
    "ssd": 106.94444
  }
};
var price = new cloudServerPrice(JSON.stringify(data));
var performance = new cloudServerPerformance();
var rate_ram_cpu = new Array(2, 4);
var arr_ram = new Array(1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64);
var arr_cpu = new Array(1, 2, 3, 4, 6, 8, 12, 24);
var max_disk = parseInt("5");
var rate_disk_cpu = 1;
var plan = "hourly";
var hash_slider_disk = {};
var basicPrice = new basicCloudServerPrice(vat = false);
var cloud_server_options = document.querySelector('.cloud_server_options');
if (cloud_server_options) cloud_server_options.addEventListener('change', function (e) {
  console.log(e.detail);
  showPrice(e.detail);
}, false);

function showPrice(config) {
  if (!config) return;
  var totalPrice = {
    basic: '-',
    premium: '-',
    enterprise: '-'
  };
  var totalDataDiskPrice = {
    basic: 0,
    premium: 0
  };

  var toNumber = function toNumber(e) {
    return parseInt(e.replace(/,/g, ''));
  };

  if (config.DATA_DISK) (function (diskArray) {
    var panel = document.querySelector('.price-data-disks');
    if (!panel) return;
    console.log('diskArray', diskArray);

    if (!diskArray || diskArray.length === 0) {
      panel.innerHTML = '';
      totalDataDiskPrice.basic = 0;
      totalDataDiskPrice.premium = 0;
    } else {
      var listItem = '<ul id="show-price-disk" class="list-unstyled"><li class="show-price-data-disk-label">DATA DISK <small>(GB)</small></li>';
      diskArray.forEach(function (item) {
        var basic_disk_price = number_format(basicPrice.getDiskPrice(item.size, item.type));
        var premium_disk_price = item.type === 'HDD' ? number_format(price.getDiskSasPriceMonthly(10, item.size)) : number_format(price.getDiskSsdPriceMonthly(10, item.size));
        listItem += '<li id="show-price-' + item.id + '"><div class="row">';
        listItem += '<div class="col-3 stt"><div class="span rootdisk-type">' + item.type + '</div></div>';
        listItem += '<div class="col-3 basic"><span class="basic-rootdisk">' + basic_disk_price + '</span></div>';
        listItem += '<div class="col-3 premium"><span class="premium-rootdisk">' + premium_disk_price + '</span></div>';
        listItem += '<div class="col-3 enterprise"><span class="enterprise-rootdisk">' + premium_disk_price + '</span></div>';
        listItem += '</div></li>';
        totalDataDiskPrice.basic += toNumber(basic_disk_price);
        totalDataDiskPrice.premium += toNumber(premium_disk_price);
        console.log('totalDataDiskPrice.basic', totalDataDiskPrice.basic);
        console.log('totalDataDiskPrice.premium', totalDataDiskPrice.premium);
      });
      listItem += '</li></ul>';
      if (panel) panel.innerHTML = listItem;
    }
  })(config.DATA_DISK);
  var plan_text = "monthly";
  var cpu_value = config.CPU;
  var ram_value = config.RAM;
  var bcpu = number_format(basicPrice.getCpuPrice(cpu_value));
  var bram = number_format(basicPrice.getRamPrice(ram_value));
  var cpu_price = number_format(price.getCpuPrice(plan_text, cpu_value));
  var ram_price = number_format(price.getRamPrice(plan_text, ram_value));
  var ecpu_price = number_format(price.getCpuPrice(plan_text, cpu_value) * 1.6);
  var eram_price = number_format(price.getRamPrice(plan_text, ram_value) * 1.6);
  var broot_disk_price = number_format(basicPrice.getDiskPrice(config.ROOT_DISK_SIZE, config.ROOT_DISK_TYPE));
  var premium_root_disk_price = config.ROOT_DISK_TYPE === 'HDD' ? number_format(price.getDiskSasPriceMonthly(10, config.ROOT_DISK_SIZE)) : number_format(price.getDiskSsdPriceMonthly(10, config.ROOT_DISK_SIZE));
  totalPrice.basic = toNumber(bcpu) + toNumber(bram) + toNumber(broot_disk_price) + totalDataDiskPrice.basic;
  totalPrice.premium = toNumber(cpu_price) + toNumber(ram_price) + toNumber(premium_root_disk_price) + totalDataDiskPrice.premium;
  totalPrice.enterprise = toNumber(ecpu_price) + toNumber(eram_price) + toNumber(premium_root_disk_price) + totalDataDiskPrice.premium;
  console.log('totalPrice.basic = bcpu + bram + broot_disk_price', toNumber(bcpu), toNumber(bram), toNumber(broot_disk_price));
  console.log('totalPrice.premium = bcpu + bram + broot_disk_price', cpu_price, toNumber(cpu_price), toNumber(ram_price), toNumber(premium_root_disk_price), totalDataDiskPrice.premium);
  var mapValues = [{
    el: '.rootdisk-type',
    value: config.ROOT_DISK_TYPE
  }, {
    el: '.basic-cpu',
    value: bcpu === '0' ? '- ' : bcpu
  }, {
    el: '.basic-ram',
    value: bram === '0' ? '- ' : bram
  }, {
    el: '.premium-cpu',
    value: cpu_price === '0' ? '- ' : cpu_price
  }, {
    el: '.premium-ram',
    value: ram_price === '0' ? '- ' : ram_price
  }, {
    el: '.enterprise-cpu',
    value: ecpu_price === '0' ? '- ' : ecpu_price
  }, {
    el: '.enterprise-ram',
    value: eram_price === '0' ? '- ' : eram_price
  }, {
    el: '.basic-rootdisk',
    value: broot_disk_price === '0' ? '- ' : broot_disk_price
  }, {
    el: '.premium-rootdisk',
    value: premium_root_disk_price === '0' ? '- ' : premium_root_disk_price
  }, {
    el: '.enterprise-rootdisk',
    value: premium_root_disk_price === '0' ? '- ' : premium_root_disk_price
  }, {
    el: '.basic-total',
    value: number_format(totalPrice.basic)
  }, {
    el: '.premium-total',
    value: number_format(totalPrice.premium)
  }, {
    el: '.enterprise-total',
    value: number_format(totalPrice.enterprise)
  }];
  mapValues.forEach(function (item) {
    var ele = document.querySelector(item.el);
    if (ele) ele.innerHTML = item.value;
    console.log(item.el, item.value);
  });
}

function number_format(number, decimals, dec_point, thousands_sep) {
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '');

  var n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep,
      dec = typeof dec_point === 'undefined' ? '.' : dec_point,
      s = '',
      toFixedFix = function toFixedFix(n, prec) {
    var k = Math.pow(10, prec);
    return '' + (Math.round(n * k) / k).toFixed(prec);
  };

  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');

  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }

  return s.join(dec);
}

/***/ }),

/***/ 2:
/*!************************************************************************!*\
  !*** multi ./packages/theme/src/resources/js/bang-gia-cloud-server.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\VCCLOUD\HOMEBIZFLYCLOUD\Laravel\bizflycloud\packages\theme\src\resources\js\bang-gia-cloud-server.js */"./packages/theme/src/resources/js/bang-gia-cloud-server.js");


/***/ })

/******/ });