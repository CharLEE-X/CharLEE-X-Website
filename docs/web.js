!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.web=t():e.web=t()}(this,(()=>(()=>{var e,t,n,r,o={71:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=71,e.exports=t},788:(e,t,n)=>{"use strict";n.a(e,(async(e,r)=>{try{n.r(t),n.d(t,{default:()=>e});var o=n(635);const e=(await(0,o._)()).exports;r()}catch(e){r(e)}}),1)},635:(e,t,n)=>{"use strict";async function r(e={},t=!0){const r=new WeakMap,o={"kotlin.captureStackTrace":()=>(new Error).stack,"kotlin.wasm.internal.throwJsError":(e,t,n)=>{const r=new Error;throw r.message=e,r.name=t,r.stack=n,r},"kotlin.wasm.internal.stringLength":e=>e.length,"kotlin.wasm.internal.jsExportStringToWasm":(e,t,n,r)=>{const o=new Uint16Array(s.memory.buffer,r,n);let a=0,i=t;for(;a<n;)o.set([e.charCodeAt(i)],a),i++,a++},"kotlin.wasm.internal.externrefToInt":e=>Number(e),"kotlin.wasm.internal.newJsArray":()=>[],"kotlin.wasm.internal.jsArrayPush":(e,t)=>{e.push(t)},"kotlin.wasm.internal.importStringFromWasm":(e,t,n)=>{const r=new Uint16Array(s.memory.buffer,e,t),o=String.fromCharCode.apply(null,r);return null==n?o:n+o},"kotlin.wasm.internal.getJsEmptyString":()=>"","kotlin.wasm.internal.externrefToString":e=>String(e),"kotlin.wasm.internal.externrefEquals":(e,t)=>e===t,"kotlin.wasm.internal.externrefHashCode":(()=>{const e=new DataView(new ArrayBuffer(8)),t=new WeakMap;return n=>{if(null==n)return 0;switch(typeof n){case"object":case"function":return function(e){const n=t.get(e);if(void 0===n){const n=4294967296,r=Math.random()*n|0;return t.set(e,r),r}return n}(n);case"number":return function(t){return(0|t)===t?0|t:(e.setFloat64(0,t,!0),(31*e.getInt32(0,!0)|0)+e.getInt32(4,!0)|0)}(n);case"boolean":return n;default:return function(e){for(var t=0,n=0;n<e.length;n++)t=31*t+e.charCodeAt(n)|0;return t}(String(n))}}})(),"kotlin.wasm.internal.isNullish":e=>null==e,"kotlin.wasm.internal.tryGetOrSetExternrefBox_$external_fun":(e,t)=>function(e,t){if("object"!=typeof e)return t;const n=r.get(e);return void 0!==n?n:(r.set(e,t),t)}(e,t),"kotlin.io.printError":e=>console.error(e),"kotlin.io.printlnImpl":e=>console.log(e),"kotlin.js.__convertKotlinClosureToJsClosure_(()->Unit)":e=>()=>s["__callFunction_(()->Unit)"](e),"kotlin.random.initialSeed":()=>Math.random()*Math.pow(2,32)|0,"kotlinx.browser.window_$external_prop_getter":()=>window,"kotlinx.browser.document_$external_prop_getter":()=>document,"org.w3c.dom.css.height_$external_prop_setter":(e,t)=>e.height=t,"org.w3c.dom.css.width_$external_prop_setter":(e,t)=>e.width=t,"org.w3c.dom.css.style_$external_prop_getter":e=>e.style,"org.w3c.dom.events.addEventListener_$external_fun":(e,t,n,r,o)=>e.addEventListener(t,n,o?void 0:r),"org.w3c.dom.events.__convertKotlinClosureToJsClosure_((Js)->Unit)":e=>t=>s["__callFunction_((Js)->Unit)"](e,t),"org.w3c.dom.events.timeStamp_$external_prop_getter":e=>e.timeStamp,"org.w3c.dom.events.preventDefault_$external_fun":e=>e.preventDefault(),"org.w3c.dom.events.Event_$external_class_instanceof":e=>e instanceof Event,"org.w3c.dom.events.ctrlKey_$external_prop_getter":e=>e.ctrlKey,"org.w3c.dom.events.shiftKey_$external_prop_getter":e=>e.shiftKey,"org.w3c.dom.events.altKey_$external_prop_getter":e=>e.altKey,"org.w3c.dom.events.metaKey_$external_prop_getter":e=>e.metaKey,"org.w3c.dom.events.button_$external_prop_getter":e=>e.button,"org.w3c.dom.events.offsetX_$external_prop_getter":e=>e.offsetX,"org.w3c.dom.events.offsetY_$external_prop_getter":e=>e.offsetY,"org.w3c.dom.events.MouseEvent_$external_class_instanceof":e=>e instanceof MouseEvent,"org.w3c.dom.events.key_$external_prop_getter":e=>e.key,"org.w3c.dom.events.location_$external_prop_getter":e=>e.location,"org.w3c.dom.events.ctrlKey_$external_prop_getter_1":e=>e.ctrlKey,"org.w3c.dom.events.shiftKey_$external_prop_getter_1":e=>e.shiftKey,"org.w3c.dom.events.altKey_$external_prop_getter_1":e=>e.altKey,"org.w3c.dom.events.metaKey_$external_prop_getter_1":e=>e.metaKey,"org.w3c.dom.events.keyCode_$external_prop_getter":e=>e.keyCode,"org.w3c.dom.events.DOM_KEY_LOCATION_RIGHT_$external_prop_getter":e=>e.DOM_KEY_LOCATION_RIGHT,"org.w3c.dom.events.Companion_$external_object_getInstance":()=>KeyboardEvent,"org.w3c.dom.events.KeyboardEvent_$external_class_instanceof":e=>e instanceof KeyboardEvent,"org.w3c.dom.events.deltaX_$external_prop_getter":e=>e.deltaX,"org.w3c.dom.events.deltaY_$external_prop_getter":e=>e.deltaY,"org.w3c.dom.events.WheelEvent_$external_class_instanceof":e=>e instanceof WheelEvent,"org.w3c.dom.navigator_$external_prop_getter":e=>e.navigator,"org.w3c.dom.devicePixelRatio_$external_prop_getter":e=>e.devicePixelRatio,"org.w3c.dom.requestAnimationFrame_$external_fun":(e,t)=>e.requestAnimationFrame(t),"org.w3c.dom.__convertKotlinClosureToJsClosure_((Double)->Unit)":e=>t=>s["__callFunction_((Double)->Unit)"](e,t),"org.w3c.dom.setTimeout_$external_fun":(e,t,n,r,o,a)=>e.setTimeout(t,o?void 0:n,...r),"org.w3c.dom.clearTimeout_$external_fun":(e,t,n)=>e.clearTimeout(n?void 0:t),"org.w3c.dom.documentElement_$external_prop_getter":e=>e.documentElement,"org.w3c.dom.getElementById_$external_fun":(e,t)=>e.getElementById(t),"org.w3c.dom.clientWidth_$external_prop_getter":e=>e.clientWidth,"org.w3c.dom.clientHeight_$external_prop_getter":e=>e.clientHeight,"org.w3c.dom.setAttribute_$external_fun":(e,t,n)=>e.setAttribute(t,n),"org.w3c.dom.language_$external_prop_getter":e=>e.language,"org.w3c.dom.width_$external_prop_getter":e=>e.width,"org.w3c.dom.width_$external_prop_setter":(e,t)=>e.width=t,"org.w3c.dom.height_$external_prop_getter":e=>e.height,"org.w3c.dom.height_$external_prop_setter":(e,t)=>e.height=t,"org.w3c.dom.HTMLCanvasElement_$external_class_instanceof":e=>e instanceof HTMLCanvasElement,"org.w3c.performance.performance_$external_prop_getter":e=>e.performance,"org.w3c.performance.now_$external_fun":e=>e.now(),"kotlinx.coroutines.tryGetProcess":()=>"undefined"!=typeof process&&"function"==typeof process.nextTick?process:null,"kotlinx.coroutines.tryGetWindow":()=>"undefined"!=typeof window&&null!=window&&"function"==typeof window.addEventListener?window:null,"kotlinx.coroutines.nextTick_$external_fun":(e,t)=>e.nextTick(t),"kotlinx.coroutines.toJsAnyCallback":e=>e,"kotlinx.coroutines.createScheduleMessagePoster":e=>()=>Promise.resolve(0).then(e),"kotlinx.coroutines.__callJsClosure_(()->Unit)":e=>e(),"kotlinx.coroutines.createRescheduleMessagePoster":e=>()=>e.postMessage("dispatchCoroutine","*"),"kotlinx.coroutines.subscribeToWindowMessages":(e,t)=>{e.addEventListener("message",(n=>{n.source==e&&"dispatchCoroutine"==n.data&&(n.stopPropagation(),t())}),!0)},"kotlinx.coroutines.clearTimeout":e=>{"undefined"!=typeof clearTimeout&&clearTimeout(e)},"kotlinx.coroutines.setTimeout_$external_fun":(e,t)=>setTimeout(e,t),"org.jetbrains.skiko.wasm.createContext_$external_fun":(e,t,n)=>e.createContext(t,n),"org.jetbrains.skiko.wasm.makeContextCurrent_$external_fun":(e,t)=>e.makeContextCurrent(t),"org.jetbrains.skiko.wasm.GL_$external_object_getInstance":()=>GL,"org.jetbrains.skia.impl.FinalizationRegistry_$external_fun":e=>new FinalizationRegistry(e),"org.jetbrains.skia.impl.register_$external_fun":(e,t,n)=>e.register(t,n),"org.jetbrains.skia.impl.unregister_$external_fun":(e,t)=>e.unregister(t),"org.jetbrains.skia.impl._releaseLocalCallbackScope_$external_fun":()=>_releaseLocalCallbackScope(),"org.jetbrains.skiko.wasm.createDefaultContextAttributes":()=>({alpha:1,depth:1,stencil:8,antialias:0,premultipliedAlpha:1,preserveDrawingBuffer:0,preferLowPowerToHighPerformance:0,failIfMajorPerformanceCaveat:0,enableExtensionsByDefault:1,explicitSwapControl:0,renderViaOffscreenBackBuffer:0,majorVersion:2})};let a,i,s;const l="undefined"!=typeof process&&"node"===process.release.name,c=!l&&("undefined"!=typeof d8||"undefined"!=typeof inIon||"undefined"!=typeof jscOptions),_=!l&&!c&&"undefined"!=typeof window;if(!l&&!c&&!_)throw"Supported JS engine not detected";const m="./wasmapp.wasm",p={js_code:o,skia:await async function(t){return e[t]??await n(71)(t)}("skia")};try{if(l){i=(await import("node:module")).default.createRequire("file:///Users/adrianwitaszak/CharLEEX/CharLEE-X-Website/build/js/packages/wasmapp/kotlin/wasmapp.uninstantiated.mjs");const e=i("fs"),t=i("path"),n=i("url").fileURLToPath("file:///Users/adrianwitaszak/CharLEEX/CharLEE-X-Website/build/js/packages/wasmapp/kotlin/wasmapp.uninstantiated.mjs"),r=t.dirname(n),o=e.readFileSync(t.resolve(r,m)),s=new WebAssembly.Module(o);a=new WebAssembly.Instance(s,p)}if(c){const e=read(m,"binary"),t=new WebAssembly.Module(e);a=new WebAssembly.Instance(t,p)}_&&(a=(await WebAssembly.instantiateStreaming(fetch(m),p)).instance)}catch(e){if(e instanceof WebAssembly.CompileError){const e=[],t=(t,n,r)=>_?(e.push(n,""),`%c${t}%c`):`[${r}m${t}[m`,n=e=>t(e,"font-weight:bold",1),r=e=>t(e,"text-decoration:underline",4),o=e=>t(e,"font-family:monospace",2);let a=`Using experimental Kotlin/Wasm may require enabling experimental features in the target environment.\n\n- ${n("Chrome")}: enable ${n("WebAssembly Garbage Collection")} at ${r("chrome://flags/#enable-webassembly-garbage-collection")} or run the program with the ${o("--js-flags=--experimental-wasm-gc")} command line argument.\n- ${n("Firefox")}: enable ${n("javascript.options.wasm_function_references")} and ${n("javascript.options.wasm_gc")} at ${r("about:config")}.\n- ${n("Edge")}: run the program with the ${o("--js-flags=--experimental-wasm-gc")} command line argument.\n- ${n("Node.js")}: run the program with the ${o("--experimental-wasm-gc")} command line argument.\n\nFor more information see ${r("https://kotl.in/wasm_help/")}.\n`;if(_)console.error(a,...e);else{const e="\n"+a;"undefined"!=typeof console&&void 0!==console.log?console.log(e):print(e)}}throw e}return s=a.exports,t&&s.__init(),{instance:a,exports:s}}n.d(t,{_:()=>r})}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return o[e](n,n.exports,i),n.exports}return e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},i.a=(o,a,i)=>{var s;i&&((s=[]).d=1);var l,c,_,m=new Set,p=o.exports,d=new Promise(((e,t)=>{_=t,c=e}));d[t]=p,d[e]=e=>(s&&e(s),m.forEach(e),d.catch((e=>{}))),o.exports=d,a((o=>{var a;l=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var a=[];a.d=0,o.then((e=>{i[t]=e,r(a)}),(e=>{i[n]=e,r(a)}));var i={};return i[e]=e=>e(a),i}}var s={};return s[e]=e=>{},s[t]=o,s})))(o);var i=()=>l.map((e=>{if(e[n])throw e[n];return e[t]})),c=new Promise((t=>{(a=()=>t(i)).r=0;var n=e=>e!==s&&!m.has(e)&&(m.add(e),e&&!e.d&&(a.r++,e.push(a)));l.map((t=>t[e](n)))}));return a.r?c:i()}),(e=>(e?_(d[n]=e):c(p),r(s)))),s&&(s.d=0)},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i(788)})()));
//# sourceMappingURL=web.js.map