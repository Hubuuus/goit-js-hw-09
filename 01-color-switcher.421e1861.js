!function(){var t=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]"),e=null,n=document.querySelector("body");function c(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(){console.log("Interval with id ".concat(e," has started!")),e=setInterval((function(){t.disabled=!0,o.disabled=!1,console.log("Backgraound color is!  ".concat(c())),n.setAttribute("style","background-color: ".concat(c()))}),1e3)})),o.addEventListener("click",(function(){clearInterval(e),t.disabled=!1,o.disabled=!0,console.log("Interval with id ".concat(e," has stopped!"))}))}();
//# sourceMappingURL=01-color-switcher.421e1861.js.map