/*
 * # Fomantic UI - 2.8.8
 * https://github.com/fomantic/Fomantic-UI
 * http://fomantic-ui.com/
 *
 * Copyright 2022 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(T,w,B,F){"use strict";T.isFunction=T.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},w=void 0!==w&&w.Math==Math?w:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),T.fn.sticky=function(b){var v,e=T(this),x=e.selector||"",C=(new Date).getTime(),S=[],y=b,k="string"==typeof y,z=[].slice.call(arguments,1);return e.each(function(){var t,n,e,o,l=T.isPlainObject(b)?T.extend(!0,{},T.fn.sticky.settings,b):T.extend({},T.fn.sticky.settings),i=l.className,s=l.namespace,r=l.error,c="."+s,a="module-"+s,f=T(this),m=T(w),u=T(l.scrollContext),d=f.data(a),h=w.requestAnimationFrame||w.mozRequestAnimationFrame||w.webkitRequestAnimationFrame||w.msRequestAnimationFrame||function(e){setTimeout(e,0)},g=this,p={initialize:function(){p.determineContainer(),p.determineContext(),p.verbose("Initializing sticky",l,t),p.save.positions(),p.checkErrors(),p.bind.events(),l.observeChanges&&p.observeChanges(),p.instantiate()},instantiate:function(){p.verbose("Storing instance of module",p),d=p,f.data(a,p)},destroy:function(){p.verbose("Destroying previous instance"),p.reset(),e&&e.disconnect(),o&&o.disconnect(),m.off("load"+c,p.event.load).off("resize"+c,p.event.resize),u.off("scrollchange"+c,p.event.scrollchange),f.removeData(a)},observeChanges:function(){"MutationObserver"in w&&(e=new MutationObserver(p.event.documentChanged),o=new MutationObserver(p.event.changed),e.observe(B,{childList:!0,subtree:!0}),o.observe(g,{childList:!0,subtree:!0}),o.observe(n[0],{childList:!0,subtree:!0}),p.debug("Setting up mutation observer",o))},determineContainer:function(){t=l.container?T(l.container):f.offsetParent()},determineContext:function(){0===(n=l.context?T(l.context):t).length&&p.error(r.invalidContext,l.context,f)},checkErrors:function(){p.is.hidden()&&p.error(r.visible,f),p.cache.element.height>p.cache.context.height&&(p.reset(),p.error(r.elementSize,f))},bind:{events:function(){m.on("load"+c,p.event.load).on("resize"+c,p.event.resize),u.off("scroll"+c).on("scroll"+c,p.event.scroll).on("scrollchange"+c,p.event.scrollchange)}},event:{changed:function(e){clearTimeout(p.timer),p.timer=setTimeout(function(){p.verbose("DOM tree modified, updating sticky menu",e),p.refresh()},100)},documentChanged:function(e){[].forEach.call(e,function(e){e.removedNodes&&[].forEach.call(e.removedNodes,function(e){(e==g||0<T(e).find(g).length)&&(p.debug("Element removed from DOM, tearing down events"),p.destroy())})})},load:function(){p.verbose("Page contents finished loading"),h(p.refresh)},resize:function(){p.verbose("Window resized"),h(p.refresh)},scroll:function(){h(function(){u.triggerHandler("scrollchange"+c,u.scrollTop())})},scrollchange:function(e,t){p.stick(t),l.onScroll.call(g)}},refresh:function(e){p.reset(),l.context||p.determineContext(),e&&p.determineContainer(),p.save.positions(),p.stick(),l.onReposition.call(g)},supports:{sticky:function(){var e=T("<div/>");return e.addClass(i.supported),e.css("position").match("sticky")}},save:{lastScroll:function(e){p.lastScroll=e},elementScroll:function(e){p.elementScroll=e},positions:function(){var e={height:u.height()},t={margin:{top:parseInt(f.css("margin-top"),10),bottom:parseInt(f.css("margin-bottom"),10)},offset:f.offset(),width:f.outerWidth(),height:f.outerHeight()},o={offset:n.offset(),height:n.outerHeight()};p.is.standardScroll()||(p.debug("Non-standard scroll. Removing scroll offset from element offset"),e.top=u.scrollTop(),e.left=u.scrollLeft(),t.offset.top+=e.top,o.offset.top+=e.top,t.offset.left+=e.left,o.offset.left+=e.left),p.cache={fits:t.height+l.offset<=e.height,sameHeight:t.height==o.height,scrollContext:{height:e.height},element:{margin:t.margin,top:t.offset.top-t.margin.top,left:t.offset.left,width:t.width,height:t.height,bottom:t.offset.top+t.height},context:{top:o.offset.top,height:o.height,bottom:o.offset.top+o.height}},p.set.containerSize(),p.stick(),p.debug("Caching element positions",p.cache)}},get:{direction:function(e){var t="down";return e=e||u.scrollTop(),p.lastScroll!==F&&(p.lastScroll<e?t="down":p.lastScroll>e&&(t="up")),t},scrollChange:function(e){return e=e||u.scrollTop(),p.lastScroll?e-p.lastScroll:0},currentElementScroll:function(){return p.elementScroll||(p.is.top()?Math.abs(parseInt(f.css("top"),10))||0:Math.abs(parseInt(f.css("bottom"),10))||0)},elementScroll:function(e){e=e||u.scrollTop();var t=p.cache.element,o=p.cache.scrollContext,e=p.get.scrollChange(e),t=t.height-o.height+l.offset,o=p.get.currentElementScroll(),e=o+e;return o=p.cache.fits||e<0?0:t<e?t:e}},remove:{lastScroll:function(){delete p.lastScroll},elementScroll:function(e){delete p.elementScroll},minimumSize:function(){t.css("min-height","")},offset:function(){f.css("margin-top","")}},set:{offset:function(){p.verbose("Setting offset on element",l.offset),f.css("margin-top",l.offset)},containerSize:function(){var e=t.get(0).tagName;"HTML"===e||"body"==e?p.determineContainer():Math.abs(t.outerHeight()-p.cache.context.height)>l.jitter&&(p.debug("Context has padding, specifying exact height for container",p.cache.context.height),t.css({height:p.cache.context.height}))},minimumSize:function(){var e=p.cache.element;t.css("min-height",e.height)},scroll:function(e){p.debug("Setting scroll on element",e),p.elementScroll!=e&&(p.is.top()&&f.css("bottom","").css("top",-e),p.is.bottom()&&f.css("top","").css("bottom",e))},size:function(){0!==p.cache.element.height&&0!==p.cache.element.width&&(g.style.setProperty("width",p.cache.element.width+"px","important"),g.style.setProperty("height",p.cache.element.height+"px","important"))}},is:{standardScroll:function(){return u[0]==w},top:function(){return f.hasClass(i.top)},bottom:function(){return f.hasClass(i.bottom)},initialPosition:function(){return!p.is.fixed()&&!p.is.bound()},hidden:function(){return!f.is(":visible")},bound:function(){return f.hasClass(i.bound)},fixed:function(){return f.hasClass(i.fixed)}},stick:function(e){var t=e||u.scrollTop(),o=p.cache,n=o.fits,i=o.sameHeight,s=o.element,r=o.scrollContext,o=o.context,c=p.is.bottom()&&l.pushing?l.bottomOffset:l.offset,e={top:t+c,bottom:t+c+r.height},t=n?0:p.get.elementScroll(e.top),c=!n;0===s.height||i||(p.is.initialPosition()?e.top>=o.bottom?(p.debug("Initial element position is bottom of container"),p.bindBottom()):e.top>s.top&&(s.height+e.top-t>=o.bottom?(p.debug("Initial element position is bottom of container"),p.bindBottom()):(p.debug("Initial element position is fixed"),p.fixTop())):p.is.fixed()?p.is.top()?e.top<=s.top?(p.debug("Fixed element reached top of container"),p.setInitialPosition()):s.height+e.top-t>=o.bottom?(p.debug("Fixed element reached bottom of container"),p.bindBottom()):c&&(p.set.scroll(t),p.save.lastScroll(e.top),p.save.elementScroll(t)):p.is.bottom()&&(e.bottom-s.height<=s.top?(p.debug("Bottom fixed rail has reached top of container"),p.setInitialPosition()):e.bottom>=o.bottom?(p.debug("Bottom fixed rail has reached bottom of container"),p.bindBottom()):c&&(p.set.scroll(t),p.save.lastScroll(e.top),p.save.elementScroll(t))):p.is.bottom()&&(e.top<=s.top?(p.debug("Jumped from bottom fixed to top fixed, most likely used home/end button"),p.setInitialPosition()):l.pushing?p.is.bound()&&e.bottom<=o.bottom&&(p.debug("Fixing bottom attached element to bottom of browser."),p.fixBottom()):p.is.bound()&&e.top<=o.bottom-s.height&&(p.debug("Fixing bottom attached element to top of browser."),p.fixTop())))},bindTop:function(){p.debug("Binding element to top of parent container"),p.remove.offset(),f.css({left:"",top:"",marginBottom:""}).removeClass(i.fixed).removeClass(i.bottom).addClass(i.bound).addClass(i.top),l.onTop.call(g),l.onUnstick.call(g)},bindBottom:function(){p.debug("Binding element to bottom of parent container"),p.remove.offset(),f.css({left:"",top:""}).removeClass(i.fixed).removeClass(i.top).addClass(i.bound).addClass(i.bottom),l.onBottom.call(g),l.onUnstick.call(g)},setInitialPosition:function(){p.debug("Returning to initial position"),p.unfix(),p.unbind()},fixTop:function(){p.debug("Fixing element to top of page"),l.setSize&&p.set.size(),p.set.minimumSize(),p.set.offset(),f.css({left:p.cache.element.left,bottom:"",marginBottom:""}).removeClass(i.bound).removeClass(i.bottom).addClass(i.fixed).addClass(i.top),l.onStick.call(g)},fixBottom:function(){p.debug("Sticking element to bottom of page"),l.setSize&&p.set.size(),p.set.minimumSize(),p.set.offset(),f.css({left:p.cache.element.left,bottom:"",marginBottom:""}).removeClass(i.bound).removeClass(i.top).addClass(i.fixed).addClass(i.bottom),l.onStick.call(g)},unbind:function(){p.is.bound()&&(p.debug("Removing container bound position on element"),p.remove.offset(),f.removeClass(i.bound).removeClass(i.top).removeClass(i.bottom))},unfix:function(){p.is.fixed()&&(p.debug("Removing fixed position on element"),p.remove.minimumSize(),p.remove.offset(),f.removeClass(i.fixed).removeClass(i.top).removeClass(i.bottom),l.onUnstick.call(g))},reset:function(){p.debug("Resetting elements position"),p.unbind(),p.unfix(),p.resetCSS(),p.remove.offset(),p.remove.lastScroll()},resetCSS:function(){f.css({width:"",height:""}),t.css({height:""})},setting:function(e,t){if(T.isPlainObject(e))T.extend(!0,l,e);else{if(t===F)return l[e];l[e]=t}},internal:function(e,t){if(T.isPlainObject(e))T.extend(!0,p,e);else{if(t===F)return p[e];p[e]=t}},debug:function(){!l.silent&&l.debug&&(l.performance?p.performance.log(arguments):(p.debug=Function.prototype.bind.call(console.info,console,l.name+":"),p.debug.apply(console,arguments)))},verbose:function(){!l.silent&&l.verbose&&l.debug&&(l.performance?p.performance.log(arguments):(p.verbose=Function.prototype.bind.call(console.info,console,l.name+":"),p.verbose.apply(console,arguments)))},error:function(){l.silent||(p.error=Function.prototype.bind.call(console.error,console,l.name+":"),p.error.apply(console,arguments))},performance:{log:function(e){var t,o;l.performance&&(o=(t=(new Date).getTime())-(C||t),C=t,S.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:g,"Execution Time":o})),clearTimeout(p.performance.timer),p.performance.timer=setTimeout(p.performance.display,0)},display:function(){var e=l.name+":",o=0;C=!1,clearTimeout(p.performance.timer),T.each(S,function(e,t){o+=t["Execution Time"]}),e+=" "+o+"ms",x&&(e+=" '"+x+"'"),(console.group!==F||console.table!==F)&&0<S.length&&(console.groupCollapsed(e),console.table?console.table(S):T.each(S,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),S=[]}},invoke:function(n,e,t){var i,s,o,r=d;return e=e||z,t=g||t,"string"==typeof n&&r!==F&&(n=n.split(/[\. ]/),i=n.length-1,T.each(n,function(e,t){var o=e!=i?t+n[e+1].charAt(0).toUpperCase()+n[e+1].slice(1):n;if(T.isPlainObject(r[o])&&e!=i)r=r[o];else{if(r[o]!==F)return s=r[o],!1;{if(!T.isPlainObject(r[t])||e==i)return r[t]!==F&&(s=r[t]),!1;r=r[t]}}})),T.isFunction(s)?o=s.apply(t,e):s!==F&&(o=s),Array.isArray(v)?v.push(o):v!==F?v=[v,o]:o!==F&&(v=o),s}};k?(d===F&&p.initialize(),p.invoke(y)):(d!==F&&d.invoke("destroy"),p.initialize())}),v!==F?v:this},T.fn.sticky.settings={name:"Sticky",namespace:"sticky",silent:!1,debug:!1,verbose:!0,performance:!0,pushing:!1,context:!1,container:!1,scrollContext:w,offset:0,bottomOffset:0,jitter:5,setSize:!0,observeChanges:!1,onReposition:function(){},onScroll:function(){},onStick:function(){},onUnstick:function(){},onTop:function(){},onBottom:function(){},error:{container:"Sticky element must be inside a relative container",visible:"Element is hidden, you must call refresh after element becomes visible. Use silent setting to surpress this warning in production.",method:"The method you called is not defined.",invalidContext:"Context specified does not exist",elementSize:"Sticky element is larger than its container, cannot create sticky."},className:{bound:"bound",fixed:"fixed",supported:"native",top:"top",bottom:"bottom"}}}(jQuery,window,document);