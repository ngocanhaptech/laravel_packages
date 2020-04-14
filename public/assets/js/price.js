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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/theme/src/resources/js/price.js":
/*!**************************************************!*\
  !*** ./packages/theme/src/resources/js/price.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
* VCCloud Cloud-Server Pricing Calculator
* 2014 - Dang Tung Lam (lamdt@vccloud.vn|lamdt@familug.org)
* v1.0 - 07082014

* SAMPLE INPUT:
  {
    "wanip":{
      "hourly":500,
      "monthly":90
    },
    "ram":{
      "base":100,
      "rate":{
        "512":0.4,
        "1":0.8,
        "2":1.7,
        "3":2.5,
        "4":3.5,
        "6":5.4,
        "8":7.2,
        "12":10.8,
        "16":14.4,
        "24":21.6
      }
    },
    "cpu":{
      "base":320,
      "rate":{
        "1":0.3,
        "2":1.1,
        "3":2.2,
        "4":3.3,
        "6":5.1,
        "8":6.5
      }
    },
    "disk":{
      "sas":70,
      "truessd":250
    }
  }

* USAGE:

Intialize new instance:
  var price = new cloudServerPrice(data);

Method:

  price.getWanipPriceHourly();
  price.getWanipPriceMonthly();
  price.getCpuPriceMonthly(core);
  price.getCpuPriceHourly(core);
  price.getRamPriceMonthly(size);
  price.getRamPriceHourly(size);
  price.getDiskSasPriceMonthly( block, size);
  price.getDiskSasPriceHourly( block, size);
  price.getDiskSsdPriceMonthly( block, size);
  price.getDiskSsdPriceHourly( block, size);
*/
window.cloudServerPrice = function cloudServerPrice(priceData) {
  priceData = priceData || "";
  monthToDay = 30, hourlyRateByMonthly = 1.3, dayInMonth = 24 * 30;
  fixValue = 0; // priceData: Json string
  // Parse pricing data string
  // Return: JSON Object

  parsePriceData = function parsePriceData() {
    obj = JSON.parse(priceData);
    return obj;
  }, getWanipPrice = function getWanipPrice() {
    var wanip_data = parsePriceData();
    return wanip_data.wanip;
  }, wanipPrice = getWanipPrice(), this.getWanipPriceHourly = function () {
    return wanipPrice.hourly / 1.1;
  }, this.getWanipPriceMonthly = function () {
    return wanipPrice.monthly * dayInMonth / 1.1;
  }, getBackupPrice = function getBackupPrice() {
    var backup_data = parsePriceData();
    return backup_data.backup;
  }, backupPrice = getBackupPrice(), this.getBackupPriceHourly = function () {
    return backupPrice.hourly / 1.1;
  }, this.getBackupPriceMonthly = function () {
    return backupPrice.monthly * dayInMonth / 1.1;
  }, this.getSettingsPrice = function (plan, setting) {
    if (plan == "hourly") {
      if (setting == "wanip") {
        return this.getWanipPriceHourly();
      } else {
        return this.getBackupPriceHourly();
      }
    } else {
      if (setting == "wanip") {
        return this.getWanipPriceMonthly();
      } else {
        return this.getBackupPriceMonthly();
      }
    }
  };
  getRamPriceData = function getRamPriceData() {
    var ram_data = parsePriceData();
    return ram_data.ram;
  }, getRamPriceBase = getRamPriceData().base, getRamPriceRate = getRamPriceData().rate, this.getRamPriceHourly = function (quantity) {
    quantity = quantity || 512;
    if (typeof getRamPriceRate[quantity] == 'undefined') throw "[Error] RAM quantity is invalid";
    ram_hourly_without_round = getRamPriceRate[quantity] * hourlyRateByMonthly * getRamPriceBase;
    return Math.round(ram_hourly_without_round / 1.1);
  }, this.getRamPriceMonthly = function (quantity) {
    quantity = quantity || 512;
    if (typeof getRamPriceRate[quantity] == 'undefined') throw "[Error] RAM quantity is invalid";
    var ram_hourly = getRamPriceRate[quantity] * getRamPriceBase;
    var ram_monthly = ram_hourly * dayInMonth;
    return Math.round(ram_monthly / 1.1);
  }, this.getRamPrice = function (plan, quantity) {
    if (plan == "hourly") return this.getRamPriceHourly(quantity);else return this.getRamPriceMonthly(quantity);
  };
  getCpuPriceData = function getCpuPriceData() {
    var cpu_data = parsePriceData();
    return cpu_data.cpu;
  }, getCpuPriceBase = getCpuPriceData().base, getCpuPriceRate = getCpuPriceData().rate, this.getCpuPriceHourly = function (quantity) {
    quantity = quantity || 1;
    if (typeof getCpuPriceRate[quantity] == 'undefined') throw "[Error] CPU quantity is invalid";
    var cpu_hourly_without_round = getCpuPriceRate[quantity] * hourlyRateByMonthly * getCpuPriceBase;
    return Math.round(cpu_hourly_without_round / 1.1);
  }, this.getCpuPriceMonthly = function (quantity) {
    quantity = quantity || 1;
    if (typeof getCpuPriceRate[quantity] == 'undefined') throw "[Error] CPU quantity is invalid";
    var cpu_hourly = getCpuPriceRate[quantity] * getCpuPriceBase;
    var cpu_monthly = cpu_hourly * dayInMonth;
    return Math.round(cpu_monthly / 1.1);
  }, this.getCpuPrice = function (plan, quantity) {
    if (plan == "hourly") return this.getCpuPriceHourly(quantity);else return this.getCpuPriceMonthly(quantity);
  };
  getDiskPriceData = function getDiskPriceData() {
    var disk_data = parsePriceData();
    return disk_data.disk;
  }, getDiskSsdBase = getDiskPriceData().ssd;
  getDiskSasBase = getDiskPriceData().hdd;
  this.getDiskSasPriceHourly = function (block, size) {
    block = block || 10;
    size = size || 10;
    if (size % block != 0) throw "[Error] Disk Block must be divisible by Size";
    var over_100_gb = 2;
    if (size <= 100) var disk_sas_hourly_without_round = getDiskSasBase * size / block;else {
      var disk_sas_hourly_without_round = getDiskSasBase * 100 / block + getDiskSasBase / over_100_gb * (size - 100) / block;
    }
    return Math.round(disk_sas_hourly_without_round / 1.1);
  }, this.getDiskSasPriceMonthly = function (block, size) {
    block = block || 10;
    size = size || 10;
    if (size % block != 0) throw "[Error] Disk Block must be divisible by Size";
    /*
    @01/10/2015
    minhcd [16:55]
    à quên mất, cần tính giá lại cho ổ SAS
      minhcd [16:55]
    100GB đầu tính giá như trên website bgio
      minhcd [16:56]
    từ GB thứ 101 tính giá khác
    */

    var over_100_gb_hdd = 2;
    if (size <= 100) var disk_hourly = getDiskSasBase * size / block;else {
      var disk_hourly = getDiskSasBase * 100 / block + getDiskSasBase / over_100_gb_hdd * (size - 100) / block;
    }
    var disk_monthly = disk_hourly * dayInMonth;
    return Math.round(disk_monthly / 1.1);
  };
  this.getDiskSsdPriceHourly = function (block, size) {
    block = block || 10;
    size = size || 10;
    if (size % block != 0) throw "[Error] Disk Block must be divisible by Size";
    var disk_ssd_hourly_without_round = getDiskSsdBase * size / block;
    return Math.round(disk_ssd_hourly_without_round / 1.1);
  }, this.getDiskSsdPriceMonthly = function (block, size) {
    block = block || 10;
    size = size || 10;
    if (size % block != 0) throw "[Error] Disk Block must be divisible by Size";
    var over_100_gb_ssd = 770 / 506;
    if (size <= 100) var disk_hourly = getDiskSsdBase * size / block;else {
      var disk_hourly = getDiskSsdBase * 100 / block + getDiskSsdBase / over_100_gb_ssd * (size - 100) / block;
    }
    var disk_monthly = disk_hourly * dayInMonth;
    return Math.round(disk_monthly / 1.1);
  };

  this.getDiskPrice = function (plan, type, block, size) {
    if (plan == "hourly") {
      if (type == "ssd") return this.getDiskSsdPriceHourly(block, size);else return this.getDiskSasPriceHourly(block, size);
    } else {
      if (type == "ssd") return this.getDiskSsdPriceMonthly(block, size);else return this.getDiskSasPriceMonthly(block, size);
    }
  };
};

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

window.basicCloudServerPrice = function basicCloudServerPrice() {
  var vat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  // Gia da gom VAT
  cpu_price = {
    "1": "23134",
    "2": "77112",
    "3": "123379",
    "4": "246758",
    "6": "647741",
    "8": "935626",
    "12": "1727309"
  };
  ram_price = {
    "1": "51840",
    "2": "64800",
    "3": "120960",
    "4": "272160",
    "6": "393120",
    "8": "514080",
    "12": "756000",
    "16": "1069200",
    "24": "1587600",
    "32": "2106000",
    "48": "3142800"
  };
  ssd_price = 38304 / 10;
  hdd_price_less100 = 11520 / 10;
  hdd_price_greater100 = 9360 / 10;
  vat = vat;
  priceWithTax = function priceWithTax(result) {
    if (!parseInt(result)) {
      return result;
    }

    if (vat) {
      return Math.round(result);
    } else {
      return Math.round(result / 1.1);
    }
  }, this.getCpuPrice = function (cpu) {
    cpu = parseInt(cpu);

    if (typeof cpu_price[cpu] === "undefined") {
      return "-";
    }

    return priceWithTax(cpu_price[cpu]);
  };

  this.getRamPrice = function (ram) {
    if (typeof ram_price[ram] === "undefined") {
      return "-";
    }

    return priceWithTax(ram_price[ram]);
  };

  getDiskHddPrice = function getDiskHddPrice(size) {
    if (size <= 100) {
      return priceWithTax(size * hdd_price_less100);
    } else {
      return priceWithTax(100 * hdd_price_less100 + (size - 100) * hdd_price_greater100);
    }
  };

  getDiskSsdPrice = function getDiskSsdPrice(size) {
    return priceWithTax(size * ssd_price);
  };

  this.getDiskPrice = function (size) {
    var disk_type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "HDD";
    size = parseInt(size);
    if (size % 10 != 0) throw "[Error] Disk Size must be divisible by 10";

    if (disk_type.toUpperCase() == "HDD") {
      return getDiskHddPrice(size);
    } else {
      return getDiskSsdPrice(size);
    }
  };
};

window.cloudServerPerformance = function cloudServerPerformance() {
  this.getIOPS = function (cons_1, cons_2, cons_3, capacity) {
    return cons_1 + parseInt(capacity / cons_3) * cons_2;
  }, this.getThroughput = function (cons_1, cons_2, cons_3, capacity) {
    return cons_1 + parseInt(capacity / cons_3) * cons_2;
  };
};

/***/ }),

/***/ 1:
/*!********************************************************!*\
  !*** multi ./packages/theme/src/resources/js/price.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\VCCLOUD\HOMEBIZFLYCLOUD\Laravel\bizflycloud\packages\theme\src\resources\js\price.js */"./packages/theme/src/resources/js/price.js");


/***/ })

/******/ });