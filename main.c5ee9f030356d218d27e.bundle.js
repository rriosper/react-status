(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("ERkP")},function(module,exports){module.exports=storybook_docs_dll},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("IAdD")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("1t7P")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("ho0z")},,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("+KXO")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("jQ/y")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("7x/C")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("M+/F")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("plBw")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("vrRf")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("87if")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("DZ+c")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("lTEL")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("kYxP")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("z84I")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("aLgo")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("cARO")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("2G9S")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("KqXw")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("hCOa")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("NyMY")},,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("UvmB")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("jwue")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("EgRP")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("+oxZ")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("yH/f")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("LW0h")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("aokA")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("lN5B")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("A3UQ")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("MvUL")},,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("7xRU")},,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("jQ3i")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("KOtZ")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("Ysgh")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("x4t0")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("1Iuc")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("P2aG")},,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("ZVkB")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("y2Ah")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("WNMA")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("Yct5")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("1IsZ")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("hBpG")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("vbDw")},,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_createStore__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(84),context=Object(react__WEBPACK_IMPORTED_MODULE_0__.createContext)(Object(_createStore__WEBPACK_IMPORTED_MODULE_1__.a)());__webpack_exports__.a=context},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("JtPf")},,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("tVqn")},,,,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("aYSr")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("5o43")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("DfhM")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("LJOr")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("pu3o")},,,,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(29),__webpack_require__(25),__webpack_require__(2),__webpack_require__(27);var _utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(85);__webpack_exports__.a=function createStore(){var observers={},data={};return{addObserver:function addObserver(key,set){observers[key]||(observers[key]=[],data[key]=Object(_utils__WEBPACK_IMPORTED_MODULE_4__.a)(key)),observers[key].push(set)},removeObserver:function removeObserver(key,set){observers[key]=observers[key].filter((function(observer){return observer!==set}))},updateData:function updateData(key,status){data[key]=Object.assign({},data[key],status),function updateObservers(key){var status=data[key];observers[key].forEach((function(set){set(status)}))}(key)},getData:function getData(key){return data[key]}}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return getInitialStatus}));__webpack_require__(37),__webpack_require__(38),__webpack_require__(6),__webpack_require__(40);var getInitialStatus=function getInitialStatus(key,initialData){return{key:key,loading:!0,error:null,success:!1,data:initialData}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(60);var _Provider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(179);__webpack_require__.d(__webpack_exports__,"Provider",(function(){return _Provider__WEBPACK_IMPORTED_MODULE_1__.a}));__webpack_require__(180);var _useStatus__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(181);__webpack_require__.d(__webpack_exports__,"useStatus",(function(){return _useStatus__WEBPACK_IMPORTED_MODULE_3__.a}))},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("3yYM")},,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("LqLs")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("3voH")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("6U7i")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("ax0f")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("Cm4o")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("j4Sf")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("LUwd")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("OZaJ")},,,,,,,,,,,,,,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("fRV1")},,,,,,,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("+kY7")},,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("5878")},,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("Kkar")},,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("m9LP")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("7nmT")},,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("l1C2")},,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("sVFb")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("iKE+")},,,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("CUMQ")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("mlET")},,,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("f9bD")},,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("b2e3")},,,,,,,,,,,,,,,,,,,,,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("N4z3")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("GFpt")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("1Mu/")},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_createStore__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(84),_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(60),Provider=function Provider(_ref){var children=_ref.children,store=Object(_createStore__WEBPACK_IMPORTED_MODULE_1__.a)();return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_2__.a.Provider,{value:store},children)};Provider.displayName="Provider",__webpack_exports__.a=Provider;try{Provider.displayName="Provider",Provider.__docgenInfo={description:"",displayName:"Provider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Provider.tsx#Provider"]={docgenInfo:Provider.__docgenInfo,name:"Provider",path:"src/Provider.tsx#Provider"})}catch(__react_docgen_typescript_loader_error){}},function(module,exports){},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(3),__webpack_require__(7),__webpack_require__(17),__webpack_require__(21),__webpack_require__(10),__webpack_require__(14),__webpack_require__(9),__webpack_require__(18),__webpack_require__(4),__webpack_require__(2),__webpack_require__(8),__webpack_require__(13),__webpack_require__(12),__webpack_require__(15);var react__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(0),_context__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(60),_utils__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(85);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_exports__.a=function useStatus(key,initialData){var store=Object(react__WEBPACK_IMPORTED_MODULE_14__.useContext)(_context__WEBPACK_IMPORTED_MODULE_15__.a),_useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_14__.useState)(store.getData(key)||Object(_utils__WEBPACK_IMPORTED_MODULE_16__.a)(key,initialData)),2),status=_useState2[0],setStatus=_useState2[1];function set(updateFn){setStatus(updateFn)}Object(react__WEBPACK_IMPORTED_MODULE_14__.useEffect)((function(){return store.addObserver(key,set),function(){store.removeObserver(key,set)}}));var actions={success:function success(data){status.success||store.updateData(key,{success:!0,loading:!1,error:null,data:data})},error:function error(){var err=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Error("Generic status error");status.error||store.updateData(key,Object.assign({},status,{success:!1,loading:!1,error:err}))},loading:function loading(){status.loading||store.updateData(key,Object.assign({},status,{success:!1,loading:!0,error:null}))}};return{status:{data:status.data,loading:status.loading,error:status.error,success:status.success},actions:actions}}},function(module,exports,__webpack_require__){__webpack_require__(183),__webpack_require__(208),__webpack_require__(209),__webpack_require__(254),__webpack_require__(380),__webpack_require__(415),__webpack_require__(420),__webpack_require__(432),__webpack_require__(434),__webpack_require__(436),module.exports=__webpack_require__(443)},,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("ARua")},,,,,,,,,,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("gqY9")},,,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("9JhN")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("PjZX")},,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(123)},,,,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("/Qos")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("JY+C")},,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("ZUdG")},,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("tQbP")},,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("//nZ")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("wFLD")},,,,,,,,,,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("dSaG")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("hQin")},,,,,,,,,,,,,,,,,,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("LJ7e")},,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("I2fK")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("DY47")},,,,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("3kp9")},,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("/bc2")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("/JuR")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("+Bxv")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("muFx")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("Wci6")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("WoRU")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("o3fS")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("JmTi")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("xaiR")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("SlD/")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("Monn")},,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("fmNP")},,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("uFXj")},,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("V0IW")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("OCSl")},,,,,,,,,,,,,,,,,,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("jLkM")},,,,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("kA4r")},,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("Blm6")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("ssvU")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("lZm3")},,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("Ee2X")},,,,,,,,,,,,,,,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("5BYb")},,,,,,,,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("maj8")},,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("F63i")},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("aWzz")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("kvVz")},,,,,,,,,,,,,,,,,,,,,,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("2q8g")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("nDih")},,,,,,,,,,,,,,,,,,,,,,,,,,function(module,exports,__webpack_require__){"use strict";__webpack_require__(3),__webpack_require__(29),__webpack_require__(25),__webpack_require__(26),__webpack_require__(24),__webpack_require__(437),__webpack_require__(439),__webpack_require__(6),__webpack_require__(27);var _clientApi=__webpack_require__(34),_clientLogger=__webpack_require__(23),_configFilename=__webpack_require__(442);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("ct80")},,function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("oD4t")},function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)("2sZ7")},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(123).configure)([__webpack_require__(444),__webpack_require__(445)],module,!1)}).call(this,__webpack_require__(69)(module))},function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=444},function(module,exports,__webpack_require__){var map={"./stories/Test.stories.tsx":446};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=445},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Main",(function(){return Main}));__webpack_require__(2);var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(86);__webpack_exports__.default={title:"Component"};var ChildComponent=function ChildComponent(_ref){var id=_ref.id,_useStatus=Object(_src__WEBPACK_IMPORTED_MODULE_2__.useStatus)(id,[]),_useStatus$status=_useStatus.status,loading=_useStatus$status.loading,error=_useStatus$status.error,success=_useStatus$status.success,data=_useStatus$status.data,actions=_useStatus.actions;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1",null,"I am listen ".concat(id," node")),loading?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,"Loading\n                DATA:\n                 ".concat(JSON.stringify(data))):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,error&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,error instanceof Error?error.message:error),success&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,"Success\n                DATA:\n                 ".concat(JSON.stringify(data)))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{type:"button",onClick:function onClick(){return actions.success([{value:!0}])}},"Success"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{type:"button",onClick:function onClick(){return actions.error("Esto es un error")}},"Error"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{type:"button",onClick:function onClick(){return actions.loading()}},"Loading"))};ChildComponent.displayName="ChildComponent";var ParentComponent=function ParentComponent(_ref2){var id=_ref2.id,_useStatus2=Object(_src__WEBPACK_IMPORTED_MODULE_2__.useStatus)(id),_useStatus2$status=_useStatus2.status,loading=_useStatus2$status.loading,error=_useStatus2$status.error,success=_useStatus2$status.success,actions=_useStatus2.actions;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1",null,"I am listen ".concat(id," node")),loading?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,"Loading..."):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,error&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,error instanceof Error?error.message:error),success&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ChildComponent,{id:"test"})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{type:"button",onClick:function onClick(){return actions.success()}},"Success"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{type:"button",onClick:function onClick(){return actions.error("Esto es un error")}},"Error"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{type:"button",onClick:function onClick(){return actions.loading()}},"Loading"))};ParentComponent.displayName="ParentComponent";var Main=function Main(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Provider,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ChildComponent,{id:"test"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ChildComponent,{id:"test"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ChildComponent,{id:"other.node"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ParentComponent,{id:"other.node"}))};Main.displayName="Main",Main.parameters=Object.assign({storySource:{source:'() => {\n  return (\n    <Provider>\n      <ChildComponent id="test" />\n      <br />\n      <ChildComponent id="test" />\n      <br />\n      <ChildComponent id="other.node" />\n\n      <ParentComponent id="other.node" />\n    </Provider>\n  );\n}'}},Main.parameters);try{Main.displayName="Main",Main.__docgenInfo={description:"",displayName:"Main",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Test.stories.tsx#Main"]={docgenInfo:Main.__docgenInfo,name:"Main",path:"stories/Test.stories.tsx#Main"})}catch(__react_docgen_typescript_loader_error){}}],[[182,1,2]]]);
//# sourceMappingURL=main.c5ee9f030356d218d27e.bundle.js.map