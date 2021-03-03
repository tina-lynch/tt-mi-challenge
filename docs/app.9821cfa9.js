parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"K0yk":[function(require,module,exports) {
const e=()=>{let e=new Date,t=(e.getDate()<10?"0":"")+e.getDate(),a=(e.getMonth()+1<10?"0":"")+(e.getMonth()+1);return e=a+"/"+t+"/"+e.getFullYear()},t=e=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e]||"";exports.dateToday=e,exports.dayString=t;
},{}],"dQXu":[function(require,module,exports) {
module.exports="cloudy.62055ef3.png";
},{}],"xL0H":[function(require,module,exports) {
module.exports="rain.67a04d83.png";
},{}],"MFIk":[function(require,module,exports) {
module.exports="snow.e63a6b44.png";
},{}],"GZ3Y":[function(require,module,exports) {
module.exports="sunny.9743c061.png";
},{}],"rzf8":[function(require,module,exports) {
module.exports={cloudy:require("./cloudy.png"),rain:require("./rain.png"),snow:require("./snow.png"),sunny:require("./sunny.png")};
},{"./cloudy.png":"dQXu","./rain.png":"xL0H","./snow.png":"MFIk","./sunny.png":"GZ3Y"}],"hVsF":[function(require,module,exports) {
"use strict";var e=t(require("../img/*.png"));function t(e){return e&&e.__esModule?e:{default:e}}const r=e=>{const{city:t,region:r}=e,n=document.createElement("h2"),a=document.querySelector("#app .container");n.innerHTML=`<h2>WEATHER FORECAST FOR ${t.toUpperCase()||""}, ${r.toUpperCase()||""}</h2>`,a.insertBefore(n,a.childNodes[0]),document.querySelector(".loader").classList.add("hide")},n=t=>{const{time:r,icon:n,summary:a,temperatureHigh:s,temperatureLow:c}=t,o=document.querySelector("#app ul"),i=document.createElement("li");i.innerHTML=`<h4 class="date">${r||""}: </h4>\n        <div class="container">\n        <img src="${e.default[n]||""}" alt="${n}"> \n        <div class="forecast">\n            <p>${a||"Please try again later"}</p>\n            <p><span>${s||""}*</span> / ${c||""}* F</p>\n        </div>\n        </div>\n        `,o.appendChild(i)};exports.renderForecast=n,exports.renderCity=r;
},{"../img/*.png":"rzf8"}],"nzL8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.forecastCall=void 0;var e=require("./render.js"),t=require("./utils.js");const a=(a,r)=>{let{latitude:o,longitude:s}=a;fetch(`https://se-weather-api.herokuapp.com/api/v1/forecast?latitude=${o}&longitude=${s}&date=${r}`).then(e=>e.json()).then(a=>{a.daily.data.slice(0,3).map(a=>{let{icon:r,summary:o,temperatureHigh:s,temperatureLow:i,time:l}=a;o=o.substr(0,o.length-20);const n=new Date(1e3*l).getDay();let u={icon:r,summary:o,temperatureHigh:s,temperatureLow:i,time:l=new Date(new Date).getDay()===n?"Today":(0,t.dayString)(n)};(0,e.renderForecast)(u)})}).catch(e=>console.log(e))};exports.forecastCall=a;
},{"./render.js":"hVsF","./utils.js":"K0yk"}],"O93v":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getRegion=void 0;var e=require("./forecastCall.js"),t=require("./render.js");const o=(o,r)=>{fetch("https://se-weather-api.herokuapp.com/api/v1/geo?zip_code="+o).then(e=>e.json()).then(o=>{let{city:i,region:n,latitude:a,longitude:s}=o,c={city:i,region:n,latitude:a=String(Math.round(100*a)/100),longitude:s=String(Math.round(100*s)/100)};(0,t.renderCity)(c),(0,e.forecastCall)(c,r)}).catch(e=>console.log(e))};exports.getRegion=o;
},{"./forecastCall.js":"nzL8","./render.js":"hVsF"}],"vZyd":[function(require,module,exports) {
"use strict";var e=require("./utils.js"),t=require("./regionCall.js");const r=document.querySelector(".zip-container input#zip"),i=document.querySelector(".zip-container input#submit");let u=(0,e.dateToday)();(0,t.getRegion)(r.value.slice(0,5),u),i.addEventListener("click",e=>{e.preventDefault(),r.value.length>=5&&(document.querySelector(".loader").classList.remove("hide"),document.querySelector("h2").remove(),document.querySelector("#app ul").innerHTML="",(0,t.getRegion)(r.value.slice(0,5),u))});
},{"./utils.js":"K0yk","./regionCall.js":"O93v"}]},{},["vZyd"], null)
//# sourceMappingURL=app.9821cfa9.js.map