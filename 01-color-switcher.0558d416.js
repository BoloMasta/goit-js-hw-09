const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let a=null;t.addEventListener("click",(()=>{a=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.classList.add("disabled-btn"),e.classList.remove("disabled-btn")})),e.addEventListener("click",(()=>{clearInterval(a),e.classList.add("disabled-btn"),t.classList.remove("disabled-btn")}));
//# sourceMappingURL=01-color-switcher.0558d416.js.map