!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e){!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";n.r(e),n(2),n(3),$.ajax({url:"http://localhost:8080/blog-posts",method:"GET",dataType:"JSON",success:function(t){t.posts.forEach(function(t){console.log(t.title),$("#post_list").append(`\n              <div class="mdc-layout-grid__cell">\n                  <div class="mdc-card demo-card demo-basic-with-header">\n                        <div class="demo-card__primary">\n                          <h2 class="demo-card__title mdc-typography mdc-typography--headline6 text-spacing">${t.title}</h2>\n                          \x3c!-- element.publishDate} --\x3e\n                          <h3 class="demo-card__subtitle mdc-typography mdc-typography--subtitle2 text-spacing">By ${t.author}</h3>\n                        </div>\n                        <div class="mdc-card__primary-action demo-card__primary-action" tabindex="0">\n                          <div class="mdc-card__media mdc-card__media--16-9 demo-card__media" style="background-image: url(&quot;https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg&quot;);"></div>\n                          <div class="demo-card__secondary mdc-typography mdc-typography--body2 text-round-spacing">${t.content}</div>\n                        </div>\n                        <div class="mdc-card__actions">\n                          <div class="mdc-card__action-buttons">\n                            <button class="mdc-button mdc-card__action mdc-card__action--button">Click</button>\n                          </div>\n                          <div class="mdc-card__action-icons">\n                            <button class="mdc-icon-button mdc-card__action mdc-card__action--icon--unbounded" aria-pressed="false" aria-label="Add to favorites" title="Add to favorites">\n                              <i class="material-icons mdc-icon-button__icon">edit</i>\n                            </button>\n                            <button class="mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded" title="Share" data-mdc-ripple-is-unbounded="true">delete</button>\n                          </div>\n                        </div>\n                   </div>\n               </div>\n          `)})},error:function(t){}}),$("#dialogButton").on("click",function(t){t.preventDefault(),new MDCDialog(document.querySelector(".mdc-dialog")).open()})},function(t,e,n){t.exports=n.p+"index.html"},function(t,e,n){}])}]);