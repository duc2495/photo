!function(){var a={},b=function(b){for(var c=a[b],e=c.deps,f=c.defn,g=e.length,h=new Array(g),i=0;i<g;++i)h[i]=d(e[i]);var j=f.apply(null,h);if(void 0===j)throw"module ["+b+"] returned undefined";c.instance=j},c=function(b,c,d){if("string"!=typeof b)throw"module id must be a string";if(void 0===c)throw"no dependencies for "+b;if(void 0===d)throw"no definition function for "+b;a[b]={deps:c,defn:d,instance:void 0}},d=function(c){var d=a[c];if(void 0===d)throw"module ["+c+"] was undefined";return void 0===d.instance&&b(c),d.instance},e=function(a,b){for(var c=a.length,e=new Array(c),f=0;f<c;++f)e.push(d(a[f]));b.apply(null,b)},f={};f.bolt={module:{api:{define:c,require:e,demand:d}}};var g=c,h=function(a,b){g(a,[],function(){return b})};h("6",tinymce.util.Tools.resolve),g("1",["6"],function(a){return a("tinymce.dom.DOMUtils")}),g("2",["6"],function(a){return a("tinymce.Env")}),g("3",["6"],function(a){return a("tinymce.PluginManager")}),g("4",["6"],function(a){return a("tinymce.ui.Menu")}),g("5",["6"],function(a){return a("tinymce.util.Tools")}),g("0",["1","2","3","4","5"],function(a,b,c,d,e){var f=a.DOM;return c.add("contextmenu",function(a){var c,g,h=a.settings.contextmenu_never_use_native,i=function(a){return a.ctrlKey&&!h},j=function(){return b.mac&&b.webkit},k=function(){return g===!0};return a.on("mousedown",function(b){j()&&2===b.button&&!i(b)&&a.selection.isCollapsed()&&a.once("contextmenu",function(b){a.selection.placeCaretAt(b.clientX,b.clientY)})}),a.on("contextmenu",function(b){var h;if(!i(b)){if(b.preventDefault(),h=a.settings.contextmenu||"link openlink image inserttable | cell row column deletetable",c)c.show();else{var j=[];e.each(h.split(/[ ,]/),function(b){var c=a.menuItems[b];"|"==b&&(c={text:b}),c&&(c.shortcut="",j.push(c))});for(var k=0;k<j.length;k++)"|"==j[k].text&&(0!==k&&k!=j.length-1||j.splice(k,1));c=new d({items:j,context:"contextmenu",classes:"contextmenu"}).renderTo(),c.on("hide",function(a){a.control===this&&(g=!1)}),a.on("remove",function(){c.remove(),c=null})}var l={x:b.pageX,y:b.pageY};a.inline||(l=f.getPos(a.getContentAreaContainer()),l.x+=b.clientX,l.y+=b.clientY),c.moveTo(l.x,l.y),g=!0}}),{isContextMenuVisible:k}}),function(){}}),d("0")()}();