!function(){var t=document.querySelector(".data-start"),e=document.querySelector(".data-stop"),o=null,n=document.querySelector("body");function c(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(){console.log("Interval with id ".concat(o," has started!")),o=setInterval((function(){t.disabled=!0,e.disabled=!1,console.log("Backgraound color is!  ".concat(c())),n.setAttribute("style","background-color: ".concat(c()))}),1e3)})),e.addEventListener("click",(function(){clearInterval(o),t.disabled=!1,e.disabled=!0,console.log("Interval with id ".concat(o," has stopped!"))}))}();
//# sourceMappingURL=01-color-switcher.648aefcb.js.map