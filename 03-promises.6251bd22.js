function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},l={},o=t.parcelRequire7bc7;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in l){var t=l[e];delete l[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){l[e]=t},t.parcelRequire7bc7=o);var a=o("eWCmQ");const r=document.querySelector("form"),i=document.querySelector('[name="delay"]'),s=document.querySelector('[name="step"]'),u=document.querySelector('[name="amount"]'),d=document.querySelector('[type="submit"]');let c=null;r.addEventListener("submit",(t=>{var n,l;t.preventDefault(),d.classList.add("disabled-btn"),n=1,l=s.value,l=i.value,setTimeout((()=>{c=setInterval((()=>{const t=Math.random()>.3;n==u.value&&(clearInterval(c),d.classList.remove("disabled-btn")),new Promise(((e,o)=>{t?e({position:n,delay:l}):o({position:n,delay:l})})).then((({position:t,delay:n})=>{e(a).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(a).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})).finally((()=>{l=parseInt(l)+parseInt(s.value),n+=1}))}),s.value)}),i.value)})),r.addEventListener("input",(function(e){i.value>=0&&s.value>=0&&u.value>0&&d.classList.remove("disabled-btn")}));
//# sourceMappingURL=03-promises.6251bd22.js.map