!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},l={},o=t.parcelRequire7bc7;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in l){var t=l[e];delete l[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){l[e]=t},t.parcelRequire7bc7=o);var a=o("iU1Pc");const i=document.querySelector("form"),r=document.querySelector('[name="delay"]'),u=document.querySelector('[name="step"]'),s=document.querySelector('[name="amount"]'),d=document.querySelector('[type="submit"]');let c=null;i.addEventListener("submit",(t=>{var n,l;t.preventDefault(),d.classList.add("disabled-btn"),n=1,l=u.value,l=r.value,setTimeout((()=>{c=setInterval((()=>{const t=Math.random()>.3;n==s.value&&(clearInterval(c),d.classList.remove("disabled-btn")),new Promise(((e,o)=>{t?e({position:n,delay:l}):o({position:n,delay:l})})).then((({position:t,delay:n})=>{e(a).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(a).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})).finally((()=>{l=parseInt(l)+parseInt(u.value),n+=1}))}),u.value)}),r.value)})),i.addEventListener("input",(function(e){r.value>=0&&u.value>=0&&s.value>0&&d.classList.remove("disabled-btn")}))}();
//# sourceMappingURL=03-promises.6d52aa8b.js.map
