/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"&&typeof exports.nodeName!=="string"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(t){"use strict";var r=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};t.fn.once=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)!==true}).data(n,true)};t.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+r(e))};t.fn.findOnce=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)===true})}});

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}((function(e){"use strict";return e.ui=e.ui||{},e.ui.version="1.13.1"}));

/*!
 * jQuery UI :data 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.extend(e.expr.pseudos,{data:e.expr.createPseudo?e.expr.createPseudo((function(n){return function(t){return!!e.data(t,n)}})):function(n,t,r){return!!e.data(n,r[3])}})}));

/*!
 * jQuery UI Disable Selection 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.fn.extend({disableSelection:(n="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(n+".ui-disableSelection",(function(e){e.preventDefault()}))}),enableSelection:function(){return this.off(".ui-disableSelection")}});var n}));

/*!
 * jQuery UI Focusable 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.focusable=function(i,t){var n,s,r,u,a,o=i.nodeName.toLowerCase();return"area"===o?(s=(n=i.parentNode).name,!(!i.href||!s||"map"!==n.nodeName.toLowerCase())&&((r=e("img[usemap='#"+s+"']")).length>0&&r.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(o)?(u=!i.disabled)&&(a=e(i).closest("fieldset")[0])&&(u=!a.disabled):u="a"===o&&i.href||t,u&&e(i).is(":visible")&&function(e){var i=e.css("visibility");for(;"inherit"===i;)i=(e=e.parent()).css("visibility");return"visible"===i}(e(i)))},e.extend(e.expr.pseudos,{focusable:function(i){return e.ui.focusable(i,null!=e.attr(i,"tabindex"))}}),e.ui.focusable}));

!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"use strict";return t.fn._form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)}}));

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())}));

/*!
 * jQuery UI Support for jQuery core 1.8.x and newer 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";if(e.expr.pseudos||(e.expr.pseudos=e.expr[":"]),e.uniqueSort||(e.uniqueSort=e.unique),!e.escapeSelector){var n=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,t=function(e,n){return n?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e};e.escapeSelector=function(e){return(e+"").replace(n,t)}}e.fn.even&&e.fn.odd||e.fn.extend({even:function(){return this.filter((function(e){return e%2==0}))},odd:function(){return this.filter((function(e){return e%2==1}))}})}));

/*!
 * jQuery UI Keycode 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}));

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.plugin={add:function(n,i,t){var u,o=e.ui[n].prototype;for(u in t)o.plugins[u]=o.plugins[u]||[],o.plugins[u].push([i,t[u]])},call:function(e,n,i,t){var u,o=e.plugins[n];if(o&&(t||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(u=0;u<o.length;u++)e.options[o[u][0]]&&o[u][1].apply(e.element,i)}}}));

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.safeActiveElement=function(e){var n;try{n=e.activeElement}catch(t){n=e.body}return n||(n=e.body),n.nodeName||(n=e.body),n}}));

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.safeBlur=function(n){n&&"body"!==n.nodeName.toLowerCase()&&e(n).trigger("blur")}}));

/*!
 * jQuery UI Scroll Parent 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"use strict";return t.fn.scrollParent=function(e){var s=this.css("position"),n="absolute"===s,o=e?/(auto|scroll|hidden)/:/(auto|scroll)/,i=this.parents().filter((function(){var e=t(this);return(!n||"static"!==e.css("position"))&&o.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))})).eq(0);return"fixed"!==s&&i.length?i:t(this[0].ownerDocument||document)}}));

/*!
 * jQuery UI Unique ID 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],i):i(jQuery)}((function(i){"use strict";return i.fn.extend({uniqueId:(e=0,function(){return this.each((function(){this.id||(this.id="ui-id-"+ ++e)}))}),removeUniqueId:function(){return this.each((function(){/^ui-id-\d+$/.test(this.id)&&i(this).removeAttr("id")}))}});var e}));

/*!
 * jQuery UI Widget 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"use strict";var e,i=0,s=Array.prototype.hasOwnProperty,n=Array.prototype.slice;return t.cleanData=(e=t.cleanData,function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)(s=t._data(n,"events"))&&s.remove&&t(n).triggerHandler("remove");e(i)}),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0],u=l+"-"+(e=e.split(".")[1]);return s||(s=i,i=t.Widget),Array.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr.pseudos[u.toLowerCase()]=function(e){return!!t.data(e,u)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){if(!this||!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),(a=new i).options=t.widget.extend({},a.options),t.each(s,(function(t,e){r[t]="function"==typeof e?function(){function s(){return i.prototype[t].apply(this,arguments)}function n(e){return i.prototype[t].apply(this,e)}return function(){var t,i=this._super,o=this._superApply;return this._super=s,this._superApply=n,t=e.apply(this,arguments),this._super=i,this._superApply=o,t}}():e})),o.prototype=t.widget.extend(a,{widgetEventPrefix:n&&a.widgetEventPrefix||e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:u}),n?(t.each(n._childConstructors,(function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)})),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,o,a=n.call(arguments,1),r=0,l=a.length;r<l;r++)for(i in a[r])o=a[r][i],s.call(a[r],i)&&void 0!==o&&(t.isPlainObject(o)?e[i]=t.isPlainObject(e[i])?t.widget.extend({},e[i],o):t.widget.extend({},o):e[i]=o);return e},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=n.call(arguments,1),l=this;return a?this.length||"instance"!==o?this.each((function(){var i,n=t.data(this,s);return"instance"===o?(l=n,!1):n?"function"!=typeof n[o]||"_"===o.charAt(0)?t.error("no such method '"+o+"' for "+e+" widget instance"):(i=n[o].apply(n,r))!==n&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0:t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+o+"'")})):l=void 0:(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each((function(){var e=t.data(this,s);e?(e.option(o||{}),e._init&&e._init()):t.data(this,s,new i(o,this))}))),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,(function(t,i){e._removeClass(i,t)})),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;o<s.length-1;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){var i=[],s=this;function n(){var i=[];e.element.each((function(e,n){t.map(s.classesElementLookup,(function(t){return t})).some((function(t){return t.is(n)}))||i.push(n)})),s._on(t(i),{remove:"_untrackClassesElement"})}function o(o,a){var r,l;for(l=0;l<o.length;l++)r=s.classesElementLookup[o[l]]||t(),e.add?(n(),r=t(t.uniqueSort(r.get().concat(e.element.get())))):r=t(r.not(e.element).get()),s.classesElementLookup[o[l]]=r,i.push(o[l]),a&&e.classes[o[l]]&&i.push(e.classes[o[l]])}return(e=t.extend({element:this.element,classes:this.options.classes||{}},e)).keys&&o(e.keys.match(/\S+/g)||[],!0),e.extra&&o(e.extra.match(/\S+/g)||[]),i.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,(function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})),this._off(t(e.target))},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,(function(s,a){function r(){if(e||!0!==o.options.disabled&&!t(this).hasClass("ui-state-disabled"))return("string"==typeof a?o[a]:a).apply(o,arguments)}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),u=l[1]+o.eventNamespace,h=l[2];h?n.on(u,h,r):i.on(u,r)}))},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){var i=this;return setTimeout((function(){return("string"==typeof t?i[t]:t).apply(i,arguments)}),e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},(i=t.Event(i)).type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!("function"==typeof a&&!1===a.apply(this.element[0],[i].concat(s))||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},(function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){var a;"string"==typeof n&&(n={effect:n});var r=n?!0===n||"number"==typeof n?i:n.effect||i:e;"number"==typeof(n=n||{})?n={duration:n}:!0===n&&(n={}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue((function(i){t(this)[e](),o&&o.call(s[0]),i()}))}})),t.widget}));

/*!
 * jQuery UI Labels 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"use strict";return t.fn.labels=function(){var e,s,i,n,a;return this.length?this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),(i=this.attr("id"))&&(a=(e=this.eq(0).parents().last()).add(e.length?e.siblings():this.siblings()),s="label[for='"+t.escapeSelector(i)+"']",n=n.add(a.find(s).addBack(s))),this.pushStack(n)):this.pushStack([])}}));

/**
 * @file
 * Pagerer jquery scripts.
 *
 * All jQuery navigation widgets implemented by pagerer are configured at
 * runtime by a JSON object prepared by the PHP part of the module, and
 * stored in a 'pagererState' object attached to each widget.
 *
 * pagererState properties:
 * - url: the URL of the target page for navigation
 * - queryString: the query string fragment of the request
 * - element: integer to distinguish between multiple pagers on one page
 * - quantity: number of page elements in the pager list
 * - total: total number of pages in the query
 * - totalItems: total number of items in the query
 * - current: 0-base index of current page
 * - interval: number of elements per page (1 if display = pages, items per
 *   page if display = items/item_ranges)
 * - display: pages|items|item_ranges indicates what is displayed in the page
 *   element
 * - pageSeparator: Text to fill between contiguous pages.
 * - pageTag: Array of text elements to use to render page/item/item range.
 * - widgetResize: (widget) determines if the widget width should be calculated
 *   dynamically based on the width of the string of the last page/item number.
 * - sliderWidth: (slider) determines the width of the slider bar in 'em's.
 *   If not set, CSS styling will prevail.
 * - action: (slider) determines how the page relocation should be triggered
 *   after it has been selected through the jQuery slider.
 * - timeout: (slider) the grace time (in milliseconds) to wait before the
 *   page is relocated, in case "timeout" action method is selected for
 *   the jQuery slider.
 * - icons: (slider) determines whether to display +/- navigation icons
 *   on the sides of the jQuery slider.
 * - tickmarkTitle: (slider) help text appended to the slider help when user is
 *   expected to click on the tickmark to start page relocation.
 */

(function ($) {

  'use strict';

  /**
   * Pagerer base utility functions.
   */
  Drupal.pagerer = Drupal.pagerer || {

    /**
     * State variables.
     *
     * These variables are reset at every page load, either normal or AJAX.
     */
    state: {
      timeoutAction: 0,
      intervalAction: 0,
      intervalCount: 0,
      isRelocating: false
    },

    /**
     * Return page text from zero-based page index number.
     *
     * @param {number} index
     *   The page number (0-indexed) to navigate to.
     * @param {object} pState
     *   A Pagerer state object.
     * @param {string} tagType
     *   The text to be formatted, page or title.
     *
     * @return {number}
     *   A formatted and translated text string to be used for rendering a
     *   pager element.
     */
    indexToTag: function (index, pState, tagType) {

      index = parseInt(index);
      var offset = index - pState.current;

      // Get required tag.
      var tag;
      if (tagType === 'page') {
        if (offset === 0) {
          tag = pState.pageTag.page_current;
        }
        else {
          if (offset < 0) {
            tag = pState.pageTag.page_previous;
          }
          else {
            tag = pState.pageTag.page_next;
          }
        }
      }
      else {
        if (index === 0) {
          tag = pState.pageTag.first_title;
        }
        else if (index === (pState.total - 1)) {
          tag = pState.pageTag.last_title;
        }
        else {
          tag = pState.pageTag.page_title;
        }
      }

      // Items.
      var l_item = (index * pState.interval) + 1;
      var h_item = Math.min(((index + 1) * pState.interval), pState.totalItems);
      var item_offset = offset * pState.interval;

      // Pages.
      var num = index + 1;
      var t_offset = offset;

      // Format text string.
      return Drupal.formatString(tag, {
        '@number': num,
        '@offset': t_offset,
        '@item_offset': item_offset,
        '@item_low': l_item,
        '@item_high': h_item,
        '@item': l_item,
        '@total_items': pState.totalItems,
        '@total': pState.total
      });
    },

    /**
     * Return zero-based page index number from textual value.
     *
     * @param {number} value
     *   A number, either a page or an item (1-indexed).
     * @param {HTMLElement} element
     *   An HTML element.
     *
     * @return {number}
     *   The page number (0-indexed) the link will navigate to.
     */
    valueToIndex: function (value, element) {
      var elementState = element.pagererState;
      switch (elementState.display) {
        case 'pages':
          if (isNaN(value)) {
            return 0;
          }
          value = parseInt(value);
          if (value < 1) {
            return 0;
          }
          if (value > elementState.total) {
            value = elementState.total;
          }
          return value - 1;

        case 'items':
          if (isNaN(value)) {
            return 0;
          }
          value = parseInt(value);
          if (value < 1) {
            return 0;
          }
          if (value > elementState.totalItems) {
            value = elementState.totalItems;
          }
          return parseInt((value - 1) / elementState.interval);

      }
    },

    /**
     * Return an element's pagererState from the HTML attribute.
     *
     * @param {HTMLElement} element
     *   An HTML element.
     *
     * @return {object}
     *   A Pagerer state object.
     */
    evalState: function (element) {
      var pagererStateId = $(element).attr('id');
      var pagererState = drupalSettings.pagerer.state[pagererStateId];
      var ajaxViewId = this.getAjaxViewId(element);

      if (ajaxViewId) {
        // Element is in Views AJAX context.
        pagererState.context = 'viewsAjax';
        pagererState.ajaxViewId = ajaxViewId;

      }
      else if (this.getViewsPreviewContext(element)) {
        // Element is in Views preview context.
        pagererState.context = 'viewsPreview';

      }
      else {
        // Normal page.
        pagererState.context = 'document';

      }

      return pagererState;
    },

    /**
     * Clears an element's pagererState from drupalSettings.
     *
     * @param {HTMLElement} element
     *   An HTML element.
     */
    detachState: function (element) {
      var pagererStateId = $(element).attr('id');
      delete drupalSettings.pagerer.state[pagererStateId];
      return;
    },

    /**
     * Return zero-based page index number from element href.
     *
     * @param {HTMLElement} element
     *   An HTML anchor element.
     * @param {object} pState
     *   A Pagerer state object.
     *
     * @return {number}
     *   The page number (0-indexed) the link will navigate to.
     */
    elementToIndex: function (element, pState) {
      var url = $(element).find('a').attr('href');
      if (typeof url == 'undefined') {
        if ($(element).hasClass('pager-current')) {
          return pState.current;
        }
        return 0;
      }
      var queryParameters = this.parseQueryString(url);
      if (typeof queryParameters[pState.qsKey] == 'undefined') {
        return 0;
      }
      var elementPages = queryParameters[pState.qsKey].split(pState.qsValueSep);
      if (typeof elementPages[pState.element] == 'undefined') {
        return 0;
      }
      return parseInt(elementPages[pState.element]) - pState.qsIndexBase;
    },

    /**
     * Helper function to parse a querystring.
     *
     * Copy of Drupal.Views.parseQueryString since the Views module may not be
     * enabled.
     *
     * @param {string} query
     *   The querystring to parse.
     *
     * @return {object}
     *   A map of query parameters.
     */
    parseQueryString: function (query) {
      var args = {};
      var pos = query.indexOf('?');
      if (pos !== -1) {
        query = query.substring(pos + 1);
      }
      var pair;
      var pairs = query.split('&');
      for (var i = 0; i < pairs.length; i++) {
        pair = pairs[i].split('=');
        // Ignore the 'q' path argument, if present.
        if (pair[0] !== 'q' && pair[1]) {
          args[decodeURIComponent(pair[0].replace(/\+/g, ' '))] = decodeURIComponent(pair[1].replace(/\+/g, ' '));
        }
      }
      return args;
    },

    /**
     * Reset pending transitions.
     *
     * Cancel timeout-bound page relocation and any unprocessed scrollpane
     * transition.
     */
    reset: function () {
      if (this.state.timeoutAction) {
        clearTimeout(this.state.timeoutAction);
      }
    },

    /**
     * Gets the URL to be used for links/AJAX relocation.
     *
     * @param {object} pState
     *   The Pagerer state associated with an element.
     * @param {number} targetPage
     *   The page to relocate to.
     * @param {boolean} queryOnNullUrl
     *   If TRUE, indicates to return the Pagerer state URL also if it is NULL.
     *
     * @return {string}
     *   The URL to be used for relocation.
     */
    getTargetUrl: function (pState, targetPage, queryOnNullUrl) {
      var targetUrl;
      if (pState.url || (!pState.url && queryOnNullUrl)) {
        targetUrl = pState.url;
      }
      else {
        targetUrl = Drupal.url(location.pathname.slice(drupalSettings.path.baseUrl.length + drupalSettings.path.pathPrefix.length));
      }
      if (pState.queryString) {
        targetUrl = targetUrl + '?' + pState.queryString.replace(/pagererpage/, targetPage + pState.qsIndexBase);
      }
      return targetUrl;
    },

    /**
     * Relocate client browser to target page.
     *
     * Relocation method is decided based on the context of the pager element:
     *  - a normal page - document.location is used.
     *  - a Views preview area in a Views settings form - AJAX is used.
     *  - a AJAX enabled Views context - AJAX is used.
     *
     * @param {HTMLElement} element
     *   The element triggering the relocation.
     * @param {number} targetPage
     *   The page to relocate to.
     *
     * @return {boolean}
     *   FALSE if already relocating.
     */
    relocate: function (element, targetPage) {
      // Check we are not relocating already.
      if (this.state.isRelocating) {
        return false;
      }
      this.state.isRelocating = true;

      var targetUrl = this.getTargetUrl(element.pagererState, targetPage, false);

      if (element.pagererState.context === 'document') {
        // Normal page.
        document.location = targetUrl;

      }
      else if (element.pagererState.context === 'viewsPreview') {
        // Element is in Views preview context.
        var previewRelocate = this.setAjaxViewPreviewPaging(null, null, targetUrl);
        previewRelocate.execute();

      }
      else if (element.pagererState.context === 'viewsAjax') {
        // Element is in Views AJAX context.
        var ajaxViewRelocate = this.setAjaxViewPaging(null, null, element.pagererState.ajaxViewId, targetUrl);
        ajaxViewRelocate.execute();

      }
    },

    /**
     * Views - Return parent Ajax view ID.
     *
     * @param {HTMLElement} element
     *   The element for which to find the Ajax view ID.
     *
     * @return {string|boolean}
     *   The Ajax view ID if found, FALSE otherwise.
     */
    getAjaxViewId: function (element) {
      if (drupalSettings && drupalSettings.views && drupalSettings.views.ajaxViews) {
        // Loop through active Views Ajax elements.
        var ajaxViews = drupalSettings.views.ajaxViews;
        for (var i in ajaxViews) {
          if (ajaxViews.hasOwnProperty(i)) {
            var view = '.js-view-dom-id-' + drupalSettings.views.ajaxViews[i].view_dom_id;
            var viewDiv = $(element).parents(view);
            if (viewDiv.length) {
              return i;
            }
          }
        }
      }
      return false;
    },

    /**
     * Views - Set Views AJAX paging.
     *
     * @param {HTMLElement} element
     *   The element to associate the AJAX behaviour with.
     * @param {event} event
     *   The event that will trigger the AJAX behaviour.
     * @param {string} ajaxViewId
     *   The AJAX id of the view.
     * @param {string} href
     *   The URL to invoke.
     *
     * @return {Drupal.Ajax}
     *   A Drupal.Ajax object.
     */
    setAjaxViewPaging: function (element, event, ajaxViewId, href) {
      var ajaxView = Drupal.views.instances[ajaxViewId];
      var viewData = {};
      $.extend(
        viewData,
        ajaxView.settings,
        Drupal.Views.parseQueryString(href),
        // Extract argument data from the URL.
        Drupal.Views.parseViewArgs(href, ajaxView.settings.view_base_path)
      );

      var settings = $.extend({}, ajaxView.element_settings, {
        submit: viewData,
        base: false,
      });
      // Load AJAX element_settings object and attach AJAX behaviour.
      if (element) {
        settings.element = element;
      }
      if (event) {
        settings.event = event;
      }
      ajaxView.pagerAjax = Drupal.ajax(settings);
      return ajaxView.pagerAjax;
    },

    /**
     * Views - Check if element is part of a view preview form.
     *
     * @param {HTMLElement} element
     *   The element to associate the AJAX behaviour with.
     *
     * @return {number}
     *   The number of '#views-live-preview' elements found. If above 0, then
     *   we are in a view preview form context.
     */
    getViewsPreviewContext: function (element) {
      return $(element).parents('#views-live-preview').length;
    },

    /**
     * Views - Set Views preview AJAX.
     *
     * @param {HTMLElement} element
     *   The element to associate the AJAX behaviour with.
     * @param {event} event
     *   The event that will trigger the AJAX behaviour.
     * @param {string} path
     *   The URL to invoke.
     *
     * @return {Drupal.Ajax}
     *   A Drupal.Ajax object.
     */
    setAjaxViewPreviewPaging: function (element, event, path) {
      var element_settings = {
        url: path,
        event: event,
        progress: {type: 'fullscreen'},
        method: 'replaceWith',
        wrapper: 'views-preview-wrapper'
      };
      if (element) {
        element_settings.base = $(element).attr('id');
        element_settings.element = element;
      }
      if (event) {
        element_settings.event = event;
      }
      return Drupal.ajax(element_settings);
    }
  };

})(jQuery);
;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../widget"],a):a(jQuery)}(function(a){var b=/ui-corner-([a-z]){2,6}/g;return a.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var b=this,c=[];a.each(this.options.items,function(d,e){var f,g={};if(e)return"controlgroupLabel"===d?(f=b.element.find(e),f.each(function(){var b=a(this);b.children(".ui-controlgroup-label-contents").length||b.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),b._addClass(f,null,"ui-widget ui-widget-content ui-state-default"),void(c=c.concat(f.get()))):void(a.fn[d]&&(g=b["_"+d+"Options"]?b["_"+d+"Options"]("middle"):{classes:{}},b.element.find(e).each(function(){var e=a(this),f=e[d]("instance"),h=a.widget.extend({},g);if("button"!==d||!e.parent(".ui-spinner").length){f||(f=e[d]()[d]("instance")),f&&(h.classes=b._resolveClassesValues(h.classes,f)),e[d](h);var i=e[d]("widget");a.data(i[0],"ui-controlgroup-data",f?f:e[d]("instance")),c.push(i[0])}})))}),this.childWidgets=a(a.unique(c)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(b){this.childWidgets.each(function(){var c=a(this),d=c.data("ui-controlgroup-data");d&&d[b]&&d[b]()})},_updateCornerClass:function(a,b){var c="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",d=this._buildSimpleOptions(b,"label").classes.label;this._removeClass(a,null,c),this._addClass(a,null,d)},_buildSimpleOptions:function(a,b){var c="vertical"===this.options.direction,d={classes:{}};return d.classes[b]={middle:"",first:"ui-corner-"+(c?"top":"left"),last:"ui-corner-"+(c?"bottom":"right"),only:"ui-corner-all"}[a],d},_spinnerOptions:function(a){var b=this._buildSimpleOptions(a,"ui-spinner");return b.classes["ui-spinner-up"]="",b.classes["ui-spinner-down"]="",b},_buttonOptions:function(a){return this._buildSimpleOptions(a,"ui-button")},_checkboxradioOptions:function(a){return this._buildSimpleOptions(a,"ui-checkboxradio-label")},_selectmenuOptions:function(a){var b="vertical"===this.options.direction;return{width:!!b&&"auto",classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(b?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(b?"top":"left")},last:{"ui-selectmenu-button-open":b?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(b?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[a]}},_resolveClassesValues:function(c,d){var e={};return a.each(c,function(f){var g=d.options.classes[f]||"";g=a.trim(g.replace(b,"")),e[f]=(g+" "+c[f]).replace(/\s+/g," ")}),e},_setOption:function(a,b){return"direction"===a&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(a,b),"disabled"===a?void this._callChildMethod(b?"disable":"enable"):void this.refresh()},refresh:function(){var b,c=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),b=this.childWidgets,this.options.onlyVisible&&(b=b.filter(":visible")),b.length&&(a.each(["first","last"],function(a,d){var e=b[d]().data("ui-controlgroup-data");if(e&&c["_"+e.widgetName+"Options"]){var f=c["_"+e.widgetName+"Options"](1===b.length?"only":d);f.classes=c._resolveClassesValues(f.classes,e),e.element[e.widgetName](f)}else c._updateCornerClass(b[d](),d)}),this._callChildMethod("refresh"))}})});;
/*!
 * jQuery UI Form Reset Mixin 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./form","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.formResetMixin={_formResetHandler:function(){var t=e(this);setTimeout((function(){var r=t.data("ui-form-reset-instances");e.each(r,(function(){this.refresh()}))}))},_bindFormResetHandler:function(){if(this.form=this.element._form(),this.form.length){var e=this.form.data("ui-form-reset-instances")||[];e.length||this.form.on("reset.ui-form-reset",this._formResetHandler),e.push(this),this.form.data("ui-form-reset-instances",e)}},_unbindFormResetHandler:function(){if(this.form.length){var t=this.form.data("ui-form-reset-instances");t.splice(e.inArray(this,t),1),t.length?this.form.data("ui-form-reset-instances",t):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}}}));
;
/*!
 * jQuery UI Checkboxradio 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","../form-reset-mixin","../labels","../widget"],e):e(jQuery)}((function(e){"use strict";return e.widget("ui.checkboxradio",[e.ui.formResetMixin,{version:"1.13.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var i,t,s=this,o=this._super()||{};return this._readType(),t=this.element.labels(),this.label=e(t[t.length-1]),this.label.length||e.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each((function(){s.originalLabel+=3===this.nodeType?e(this).text():this.outerHTML})),this.originalLabel&&(o.label=this.originalLabel),null!=(i=this.element[0].disabled)&&(o.disabled=i),o},_create:function(){var e=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),e&&this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var i=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===i&&/radio|checkbox/.test(this.type)||e.error("Can't create checkboxradio on element.nodeName="+i+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var i=this.element[0].name,t="input[name='"+e.escapeSelector(i)+"']";return i?(this.form.length?e(this.form[0].elements).filter(t):e(t).filter((function(){return 0===e(this)._form().length}))).not(this.element):e([])},_toggleClasses:function(){var i=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",i),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",i)._toggleClass(this.icon,null,"ui-icon-blank",!i),"radio"===this.type&&this._getRadioGroup().each((function(){var i=e(this).checkboxradio("instance");i&&i._removeClass(i.label,"ui-checkboxradio-checked","ui-state-active")}))},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(e,i){if("label"!==e||i){if(this._super(e,i),"disabled"===e)return this._toggleClass(this.label,null,"ui-state-disabled",i),void(this.element[0].disabled=i);this.refresh()}},_updateIcon:function(i){var t="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=e("<span>"),this.iconSpace=e("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(t+=i?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,i?"ui-icon-blank":"ui-icon-check")):t+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",t),i||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){var e=this.label.contents().not(this.element[0]);this.icon&&(e=e.not(this.icon[0])),this.iconSpace&&(e=e.not(this.iconSpace[0])),e.remove(),this.label.append(this.options.label)},refresh:function(){var e=this.element[0].checked,i=this.element[0].disabled;this._updateIcon(e),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",e),null!==this.options.label&&this._updateLabel(),i!==this.options.disabled&&this._setOptions({disabled:i})}}]),e.ui.checkboxradio}));
;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./controlgroup","./checkboxradio","../keycode","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var a,b=this._super()||{};return this.isInput=this.element.is("input"),a=this.element[0].disabled,null!=a&&(b.disabled=a),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(b.label=this.originalLabel),b},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(b){b.keyCode===a.ui.keyCode.SPACE&&(b.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(b,c){var d="iconPosition"!==b,e=d?this.options.iconPosition:c,f="top"===e||"bottom"===e;this.icon?d&&this._removeClass(this.icon,null,this.options.icon):(this.icon=a("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),d&&this._addClass(this.icon,null,c),this._attachIcon(e),f?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=a("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(e))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(a){this.icon[/^(?:end|bottom)/.test(a)?"before":"after"](this.iconSpace)},_attachIcon:function(a){this.element[/^(?:end|bottom)/.test(a)?"append":"prepend"](this.icon)},_setOptions:function(a){var b=void 0===a.showLabel?this.options.showLabel:a.showLabel,c=void 0===a.icon?this.options.icon:a.icon;b||c||(a.showLabel=!0),this._super(a)},_setOption:function(a,b){"icon"===a&&(b?this._updateIcon(a,b):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===a&&this._updateIcon(a,b),"showLabel"===a&&(this._toggleClass("ui-button-icon-only",null,!b),this._updateTooltip()),"label"===a&&(this.isInput?this.element.val(b):(this.element.html(b),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(a,b),"disabled"===a&&(this._toggleClass(null,"ui-state-disabled",b),this.element[0].disabled=b,b&&this.element.blur())},refresh:function(){var a=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");a!==this.options.disabled&&this._setOptions({disabled:a}),this._updateTooltip()}}),a.uiBackCompat!==!1&&(a.widget("ui.button",a.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(a,b){return"text"===a?void this._super("showLabel",b):("showLabel"===a&&(this.options.text=b),"icon"===a&&(this.options.icons.primary=b),"icons"===a&&(b.primary?(this._super("icon",b.primary),this._super("iconPosition","beginning")):b.secondary&&(this._super("icon",b.secondary),this._super("iconPosition","end"))),void this._superApply(arguments))}}),a.fn.button=function(b){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?b.apply(this,arguments):(a.ui.checkboxradio||a.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}}(a.fn.button),a.fn.buttonset=function(){return a.ui.controlgroup||a.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),a.ui.button});;
/**
 * @file
 * Pagerer scrollpane pager scripts.
 */

(function ($) {

  'use strict';

  Drupal.behaviors.pagererScrollpane = {

    attach: function (context, settings) {

      /**
       * Constants.
       */
      var PAGERER_LEFT = -1;
      var PAGERER_RIGHT = 1;

      /**
       * Pagerer embedded scrollpane event binding.
       */
      $('.pagerer-scrollpane-embedded', context).once('pagerer').each(function (index) {
        Drupal.pagerer.state.isRelocating = false;

        // Get the scrollpane components, i.e. the embedded pager, the
        // pager wrapped within it, and the wrapped pager elements.
        var innerPager = $(this).get(0);
        var pagerList = $(this).find('.pager__items').get(0);
        var viewport = $(this).find('.pagerer-viewport');
        var pagerElements = $(pagerList).find('li');
        var pagerPages = $(pagerList).find('li:not(.pagerer-separator)');
        var pagerSeparators = $(pagerList).find('li.pagerer-separator');
        var cellHeight;
        var innerPagerWidth;
        var pagerWidth;

        // Attach state variables to the wrapped pager.
        innerPager.pagererState = Drupal.pagerer.evalState(this);
        $.extend(innerPager.pagererState, {
          outerPager: $(innerPager).parents('.pagerer-pager-scrollpane').get(0),
          innerPager: innerPager,
          pagerList: pagerList,
          pageWidth: 0,
          separatorWidth: 0,
          leftOverflow: 0,
          rightOverflow: 0,
          scrolling: false,
          scrollingDuration: 0,
          fastScrolling: 0
        });

        // Determine pager separator width, if existing.
        if (pagerSeparators.length > 0) {
          innerPager.pagererState.separatorWidth = Math.ceil($(pagerSeparators[0]).outerWidth(true));
        }

        // Determine pager element width from maximum width possible.
        if (innerPager.pagererState.total > 1) {
          var pageDupe = $(pagerPages[0]).clone();
          pageDupe.removeClass('is-active');
          pageDupe.addClass('pagerer-dupe');
          $(pageDupe).find('a').text(Drupal.pagerer.indexToTag(innerPager.pagererState.total - 1, innerPager.pagererState, 'page'));
          $(pagerList).append(pageDupe);
          innerPager.pagererState.pageWidth = Math.ceil($(pageDupe).outerWidth(true));
          cellHeight = Math.ceil($(pageDupe).outerHeight(true));
          pagerWidth = getPagerWidth(innerPager.pagererState, pagerPages.length, pagerSeparators.length);
          innerPagerWidth = Math.min((innerPager.pagererState.quantity * innerPager.pagererState.pageWidth) + ((innerPager.pagererState.quantity - 1) * innerPager.pagererState.separatorWidth), pagerWidth);
          $(pagerList).find('.pagerer-dupe').remove();
          $(pagerList).css({
            width: pagerWidth + 'px',
            height: cellHeight + 'px',
            left: '0px'
          });
        }
        else {
          // If no pages, then only 'No pages' message is in the pager.
          innerPager.pagererState.pageWidth = $(pagerPages[0]).outerWidth(true);
          cellHeight = $(pagerPages[0]).outerHeight(true);
          pagerWidth = innerPager.pagererState.pageWidth;
          innerPagerWidth = innerPager.pagererState.pageWidth;
          $(pagerPages[0]).css('left', '0px');
          $(pagerList).css({
            width: pagerWidth + 'px',
            height: cellHeight + 'px'
          });
        }

        // Set dimensions.
        $(innerPager).css({
          'padding-left': Math.ceil(innerPager.pagererState.pageWidth / 4) + 'px',
          'padding-right': Math.ceil(innerPager.pagererState.pageWidth / 4) + 'px',
          'width': innerPagerWidth + 'px',
          'height': cellHeight + 'px'
        });
        $(viewport).css({
          width: innerPagerWidth + 'px',
          height: (cellHeight * 2) + 'px'
        });
        // If no pages, return.
        if (innerPager.pagererState.total <= 1) {
          return;
        }

        // Scan pager elements to allocate 'left' property.
        var elementLeft = 0;
        var pagerCurrentPage = 0;
        pagerElements.each(function (index) {
          if (!$(this).hasClass('pagerer-separator')) {
            var pageWidth = $(this).outerWidth(true);
            var margin = (innerPager.pagererState.pageWidth - pageWidth) / 2;
            $(this).css({
              'left': elementLeft + 'px',
              'margin-left': (parseInt($(this).css('margin-left')) + margin) + 'px',
              'margin-right': (parseInt($(this).css('margin-right')) + margin) + 'px'
            });
            if ($(this).hasClass('is-active')) {
              pagerCurrentPage = index;
            }
            elementLeft += innerPager.pagererState.pageWidth;
          }
          else {
            $(this).css('left', elementLeft + 'px');
            elementLeft += innerPager.pagererState.separatorWidth;
          }
        });

        // Set current item to the middle of the innerPager.
        var pagerLeftPage = pagerCurrentPage - Math.floor(innerPager.pagererState.quantity / 2);
        if (pagerLeftPage < 0) {
          pagerLeftPage = 0;
        }
        else if (pagerLeftPage > pagerPages.length - innerPager.pagererState.quantity) {
          pagerLeftPage = pagerPages.length - innerPager.pagererState.quantity;
        }

        // Left- and right-most pages.
        var pagerLeftPageIndex = Drupal.pagerer.elementToIndex(pagerPages[0], innerPager.pagererState);
        var pagerRightPageIndex = Drupal.pagerer.elementToIndex(pagerPages[pagerPages.length - 1], innerPager.pagererState);

        // Add elements to the left.
        innerPager.pagererState.leftOverflow = addPagerElements(
          innerPager.pagererState,
          PAGERER_LEFT,
          pagerLeftPageIndex - 1,
          innerPager.pagererState.quantity,
          false
        );

        // Add elements to the right.
        innerPager.pagererState.rightOverflow = addPagerElements(
          innerPager.pagererState,
          PAGERER_RIGHT,
          pagerRightPageIndex + 1,
          innerPager.pagererState.quantity,
          false
        );

      });

      /**
        * Pagerer scrollpane buttons event binding.
        *
        * The navigation buttons shift the entire pager embedded in the
        * scrollpane inner pager.
        * Once mouse is pressed on a prev/next button, the pager is moved
        * right/left by one position. If mouse is kept pressed, the pager will
        * shift continuosly. When mouse is released or moved away from the icon,
        * shifting will stop.
        * If mouse is pressed on a first/last button, the pager is moved to
        * first/last page.
        */
      $('.pagerer-scrollpane-button', context).once('pagerer').each(function (index) {
        this.pagererState = {
          outerPager: $(this).parents('.pagerer-pager-scrollpane').get(0),
          innerPager: $(this).parents('.pagerer-pager-scrollpane').find('.pagerer-scrollpane-embedded').get(0),
          pager: $(this).parents('.pagerer-pager-scrollpane').find('.pagerer-scrollpane-embedded').find('.pager__items').get(0)
        };
        $(this).button();
        // Set button enable/disabled state.
        setButtonState(this);
        $(this)
          .on('mousedown', function (event) {
            var button = this;
            var innerPager = button.pagererState.innerPager;
            var scope;

            // Return immediately if button is disabled.
            if ($(button).button('option', 'disabled')) {
              return false;
            }

            // Determine scope of scroll request.
            if ($(button).hasClass('pagerer-next')) {
              scope = 'next';
            }
            else if ($(button).hasClass('pagerer-previous')) {
              scope = 'previous';
            }
            else if ($(button).hasClass('pagerer-first')) {
              scope = 'first';
            }
            else if ($(button).hasClass('pagerer-last')) {
              scope = 'last';
            }

            // If scrollpane is currently transitioning, and a request for a
            // different scope is received, reset all transitions.
            if (innerPager.pagererState.scrolling && innerPager.pagererState.scrolling !== scope) {
              Drupal.pagerer.reset();
            }

            // Transition duration based on single click.
            switch (innerPager.pagererState.scrollingDuration) {
              case 0:
                innerPager.pagererState.scrollingDuration = 500;
                break;

              case 500:
              case 200:
                innerPager.pagererState.scrollingDuration = 200;
                break;

            }
            scrollRequestEnqueue(innerPager.pagererState, scope, innerPager.pagererState.scrollingDuration);

            // If button is kept pressed long enough, start fastScrolling mode.
            if ((scope === 'previous' || scope === 'next') && !$(button).button('option', 'disabled')) {
              Drupal.pagerer.state.timeoutAction = setTimeout(function () {
                innerPager.pagererState.fastScrolling = 1;
                scrollRequestEnqueue(innerPager.pagererState, scope, getScrollDuration(innerPager.pagererState));
              }, innerPager.pagererState.scrollingDuration + 20);
            }
          })
          .on('mouseup mouseleave', function (event) {
            // Stop fastScrolling mode if active.
            clearTimeout(Drupal.pagerer.state.timeoutAction);
            this.pagererState.innerPager.pagererState.fastScrolling = 0;
          });
      });

      /**
       * Helper functions.
       */

      /**
       * Enqueues a scrollpane scroll request.
       *
       * Scrolls embedded pager to first/previous/next/last 'scope' in a
       * 'duration' timelapse.
       *
       * @param {object} pState
       *   A Pagerer state object.
       * @param {string} scope
       *   The scope of the scroll, first/previous/next/last.
       * @param {number} duration
       *   The duration of the scroll.
       */
      function scrollRequestEnqueue(pState, scope, duration) {
        $(pState.innerPager).queue('pagererQueue', function () {
          pState.scrolling = scope;

          // In fastScrolling mode, enqueue next iteration straight ahead.
          if (pState.fastScrolling) {
            pState.fastScrolling++;
            scrollRequestEnqueue(pState, scope, getScrollDuration(pState));
          }

          var pagerPages = $(pState.pagerList).find('li:not(.pagerer-separator)');
          var first = Drupal.pagerer.elementToIndex(pagerPages[0], pState);
          var last = Drupal.pagerer.elementToIndex(pagerPages[pagerPages.length - 1], pState);
          var addedElements;
          var fromEl;

          switch (scope) {
            // ***** Next - shift left.
            case 'next':
              // Add a pager element on the right.
              addedElements = addPagerElements(pState, PAGERER_RIGHT, last + 1, 1);
              if (pState.leftOverflow < pState.quantity) {
                // There's space on the left side to shift pager.
                if (pState.rightOverflow > 0) {
                  // Pager overflows to the right, so shift pager to the left.
                  shiftPagerList(pState, PAGERER_LEFT, 1, duration);
                  return;
                }
              }
              else {
                // No space on the left side to shift pager.
                if (addedElements || pState.rightOverflow > 0) {
                  // Remove first element on the left, then shift pager one
                  // position to the left.
                  removePagerElements(pState, PAGERER_LEFT, 1);
                  shiftPagerList(pState, PAGERER_LEFT, 1, duration);
                  return;
                }
              }
              break;

            // ***** Previous - shift right.
            case 'previous':
              // Add a pager element on the left.
              addedElements = addPagerElements(pState, PAGERER_LEFT, first - 1, 1);
              if (pState.rightOverflow < pState.quantity) {
                // There's space on the right side to shift pager.
                if (pState.leftOverflow > 0) {
                  // Pager overflows to the left, so shift pager to the right.
                  shiftPagerList(pState, PAGERER_RIGHT, 1, duration);
                  return;
                }
              }
              else {
                // No space on the right side to shift pager.
                if (addedElements || pState.leftOverflow > 0) {
                  // Remove first element on the right, then shift pager one
                  // position to the right.
                  removePagerElements(pState, PAGERER_RIGHT, 1);
                  shiftPagerList(pState, PAGERER_RIGHT, 1, duration);
                  return;
                }
              }
              break;

            // ***** First.
            case 'first':
              fromEl = Math.min((pState.quantity * 2) - 1, first - 1);
              addedElements = addPagerElements(pState, PAGERER_LEFT, fromEl, pState.quantity * 2);
              shiftPagerList(
                pState,
                PAGERER_RIGHT,
                pState.leftOverflow,
                duration,
                function () {
                  if (pState.rightOverflow > pState.quantity) {
                    removePagerElements(pState, PAGERER_RIGHT, pState.rightOverflow - pState.quantity);
                  }
                }
              );
              return;

            // ***** Last.
            case 'last':
              fromEl = Math.max((pState.total - (pState.quantity * 2)), last + 1);
              addedElements = addPagerElements(pState, PAGERER_RIGHT, fromEl, pState.quantity * 2);
              shiftPagerList(
                pState,
                PAGERER_LEFT,
                pState.rightOverflow,
                duration,
                function () {
                  if (pState.leftOverflow > pState.quantity) {
                    removePagerElements(pState, PAGERER_LEFT, pState.leftOverflow - pState.quantity);
                  }
                }
              );
              return;

          }

          // Dequeue next iteration in the queue.
          scrollRequestDequeue(pState);

        });

        // Starts the queue processing.
        if (pState.scrolling === false) {
          $(pState.innerPager).dequeue('pagererQueue');
        }
      }

      /**
       * Dequeues a scrollpane scroll request.
       *
       * If no more requests in the queue, clear state variables.
       *
       * @param {object} pState
       *   A Pagerer state object.
       */
      function scrollRequestDequeue(pState) {
        if ($(pState.innerPager).queue('pagererQueue').length > 0) {
          $(pState.innerPager).dequeue('pagererQueue');
        }
        else {
          pState.scrolling = false;
          pState.scrollingDuration = 0;
          pState.fastScrolling = 0;
        }
      }

      /**
       * Gets duration of next scroll transition.
       *
       * @param {object} pState
       *   A Pagerer state object.
       *
       * @return {number}
       *   The duration (msec) of next scroll transition.
       */
      function getScrollDuration(pState) {
        var ret = ((pState.fastScrolling - 1) * -19.8) + 200;
        return (ret > 2) ? ret : 2;
      }

      /**
       * Enables/disables scrollpane buttons.
       *
       * @param {HTMLElement} element
       *   An HTML element for a scrollpane button.
       */
      function setButtonState(element) {
        if ($(element).hasClass('pagerer-first') || $(element).hasClass('pagerer-previous')) {
          if (element.pagererState.innerPager.pagererState.leftOverflow === 0) {
            $(element).mouseup().mouseleave();
            $(element).button('disable');
          }
          else {
            $(element).button('enable');
          }
        }
        if ($(element).hasClass('pagerer-next') || $(element).hasClass('pagerer-last')) {
          if (element.pagererState.innerPager.pagererState.rightOverflow === 0) {
            $(element).mouseup().mouseleave();
            $(element).button('disable');
          }
          else {
            $(element).button('enable');
          }
        }
      }

      /**
       * Add pages to the embedded pager.
       *
       * Add 'count' pages and separators on left/right 'side', starting with
       * page at index 'start'.
       *
       * @param {object} pState
       *   A Pagerer state object.
       * @param {number} side
       *   The side of the pager to add elements to,
       *   PAGERER_LEFT|PAGERER_RIGHT.
       * @param {number} start
       *   The 0-indexed page number to start adding from.
       * @param {number} count
       *   The number of elements to remove.
       * @param {boolean} onReady
       *   TRUE if function is invoked at .ready().
       *
       * @return {number}
       *   The number of pages added to the pager.
       */
      function addPagerElements(pState, side, start, count, onReady) {

        // onReady will be true if function is invoked at .ready()
        onReady = onReady || false;

        var pagerPages;
        var pageWidth;
        var pageDupe;
        var margin;
        var pagerSeparators;
        var separatorWidth = 0;
        var separatorDupe;
        var last;
        var currentLeft;
        var i;

        for (i = 0; i < count; i++) {
          pagerPages = $(pState.pagerList).find('li:not(.pagerer-separator)');
          pagerSeparators = $(pState.pagerList).find('li.pagerer-separator');

          // If we have separators, prepare dupe and set width.
          if (pagerSeparators.length) {
            separatorDupe = $(pagerSeparators[0]).clone();
            separatorWidth = pState.separatorWidth;
          }
          else {
            separatorWidth = 0;
          }

          // Add separator and page.
          if (side === PAGERER_RIGHT) {
            last = pagerPages.length - 1;
            // Skip at end of run.
            if (Drupal.pagerer.elementToIndex(pagerPages[last], pState) >= (pState.total - 1)) {
              break;
            }
            // Current left.
            currentLeft = parseInt($(pagerPages[last]).css('left'));
            // Separator.
            if (separatorWidth) {
              $(separatorDupe).css('left', (currentLeft + pState.pageWidth) + 'px');
              $(pState.pagerList).append(separatorDupe);
            }
            // Page.
            pageDupe = $(pagerPages[last]).clone();
            setPagerElementHtml(pageDupe, pState, start + i, onReady);
            $(pageDupe)
              .css('left', (currentLeft + pState.pageWidth + separatorWidth) + 'px');
            $(pState.pagerList).append(pageDupe);
            pageWidth = $(pageDupe).outerWidth(true);
            margin = (pState.pageWidth - pageWidth) / 2;
            $(pageDupe).css('margin-left', (parseInt($(pageDupe).css('margin-left')) + margin) + 'px');
            $(pageDupe).css('margin-right', (parseInt($(pageDupe).css('margin-right')) + margin) + 'px');
            pState.rightOverflow++;
          }
          else if (side === PAGERER_LEFT) {
            // Skip at end of run.
            if (Drupal.pagerer.elementToIndex(pagerPages[0], pState) === 0) {
              break;
            }
            // Current left.
            currentLeft = parseInt($(pagerPages[0]).css('left'));
            // Separator.
            if (separatorWidth) {
              $(separatorDupe).css('left', (currentLeft - separatorWidth) + 'px');
              $(pState.pagerList).prepend(separatorDupe);
            }
            // Page.
            pageDupe = $(pagerPages[0]).clone();
            setPagerElementHtml(pageDupe, pState, start - i, onReady);
            $(pageDupe)
              .css('left', (currentLeft - pState.pageWidth - separatorWidth) + 'px');
            $(pState.pagerList).prepend(pageDupe);
            pageWidth = $(pageDupe).outerWidth(true);
            margin = (pState.pageWidth - pageWidth) / 2;
            $(pageDupe).css('margin-left', (parseInt($(pageDupe).css('margin-left')) + margin) + 'px');
            $(pageDupe).css('margin-right', (parseInt($(pageDupe).css('margin-right')) + margin) + 'px');
            pState.leftOverflow++;
          }
        }
        // Resize pager.
        pagerPages = $(pState.pagerList).find('li:not(.pagerer-separator)');
        pagerSeparators = $(pState.pagerList).find('li.pagerer-separator');
        $(pState.pagerList).css('width', getPagerWidth(pState, pagerPages.length, pagerSeparators.length) + 'px');
        // If elements were added on the left side, pager and elements will be
        // misplaced, so reposition the elements.
        if (side === PAGERER_LEFT) {
          $(pState.pagerList).css({
            left: (parseInt($(pState.pagerList).css('left')) - (pState.pageWidth * i) - (pState.separatorWidth * i)) + 'px'
          });
          shiftPagerElements(pState, PAGERER_RIGHT, i);
        }
        return i;
      }

      /**
       * Removes pages from the embedded pager.
       *
       * Remove 'count' pages and separators on left/right 'side'.
       *
       * @param {object} pState
       *   A Pagerer state object.
       * @param {number} side
       *   The side of the pager from where to remove elements,
       *   PAGERER_LEFT|PAGERER_RIGHT.
       * @param {number} count
       *   The number of elements to remove.
       *
       * @return {boolean}
       *   TRUE if successful.
       */
      function removePagerElements(pState, side, count) {
        var pagerPages;
        var pagerSeparators;
        var i;

        for (i = 0; i < count; i++) {
          pagerPages = $(pState.pagerList).find('li:not(.pagerer-separator)');
          pagerSeparators = $(pState.pagerList).find('li.pagerer-separator');
          if (side === PAGERER_RIGHT) {
            $(pagerPages[pagerPages.length - 1]).remove();
            if (pagerSeparators.length) {
              $(pagerSeparators[pagerSeparators.length - 1]).remove();
            }
            pState.rightOverflow--;
          }
          else if (side === PAGERER_LEFT) {
            $(pagerPages[0]).remove();
            if (pagerSeparators.length) {
              $(pagerSeparators[0]).remove();
            }
            pState.leftOverflow--;
          }
        }
        // Resize pager.
        $(pState.pagerList).css('width', getPagerWidth(pState, pagerPages.length - 1, pagerSeparators.length - 1) + 'px');
        // If elements were removed on the left side, the remaining ones will
        // be misplaced wihin the pager, so reposition them.
        if (side === PAGERER_LEFT) {
          $(pState.pagerList).css({
            left: (parseInt($(pState.pagerList).css('left')) + ((pState.pageWidth + pState.separatorWidth) * count)) + 'px'
          });
          shiftPagerElements(pState, PAGERER_LEFT, i);
        }
        return true;
      }

      /**
       * Shifts the embedded pager elements.
       *
       * Shift the elements of the embedded pager by 'count' pages in
       * left/right 'direction'.
       *
       * @param {object} pState
       *   A Pagerer state object.
       * @param {number} direction
       *   The direction of the shift, PAGERER_LEFT|PAGERER_RIGHT.
       * @param {number} count
       *   The number of pages to shift.
       */
      function shiftPagerElements(pState, direction, count) {
        $(pState.pagerList).find('li').each(function (index) {
          $(this).css({
            left: (parseInt($(this).css('left')) + (direction * (pState.pageWidth + pState.separatorWidth) * count)) + 'px'
          });
        });
      }

      /**
       * Shifts the embedded pager in the inner pager.
       *
       * Shift the entire pager by 'count' pages in left/right 'direction'.
       * If 'duration' is set (msec), the shift will be jQuery animated.
       * A 'complete' callback is executed at completion if set.
       * Overall pager shift is executed in a jQuery queue, so next action is
       * dequeued at the end of the call (for execution after the animation
       * is completed).
       *
       * @param {object} pState
       *   A Pagerer state object.
       * @param {number} direction
       *   The direction of the shift, PAGERER_LEFT|PAGERER_RIGHT.
       * @param {number} count
       *   The number of pages to shift.
       * @param {number} [duration]
       *   If set (msec), the shift will be jQuery animated.
       * @param {callback} [complete]
       *   Callback executed at completion if set.
       */
      function shiftPagerList(pState, direction, count, duration, complete) {
        var left = parseInt($(pState.pagerList).css('left'));
        var offset = direction * count * (pState.pageWidth + pState.separatorWidth);
        $(pState.pagerList).animate(
          {
            left: (left + offset) + 'px'
          },
          {
            duration: duration,
            queue: false,
            complete: function () {
              pState.leftOverflow -= direction * count;
              pState.rightOverflow += direction * count;
              if (typeof complete !== 'undefined') {
                complete();
              }
              if (pState.leftOverflow <= 1 || pState.rightOverflow <= 1) {
                $(pState.outerPager).find('.ui-button').each(function () {
                  setButtonState(this);
                });
              }
              scrollRequestDequeue(pState);
            }
          }
        );
      }

      /**
       * Sets HTML of a page element in the pager.
       *
       * @param {HTMLElement} element
       *   An HTML element.
       * @param {object} pState
       *   A Pagerer state object.
       * @param {number} targetPage
       *   The page to relocate to.
       * @param {boolean} onReady
       *   TRUE if function is invoked at .ready().
       */
      function setPagerElementHtml(element, pState, targetPage, onReady) {

        // onReady will be true if function is invoked at .ready()
        onReady = onReady || false;

        // Add 'is-active' class to current page.
        if (targetPage === pState.current) {
          $(element[0]).addClass('is-active');
        }
        else {
          $(element[0]).removeClass('is-active');
        }

        // Page link.
        var anchor = $(element).find('a');
        if (!anchor.length) {
          $(element).text('');
          $(element).append('<a></a>');
          anchor = $(element).find('a');
        }
        // Format hyperlink.
        var targetUrl = Drupal.pagerer.getTargetUrl(pState, targetPage, true);
        anchor[0].href = targetUrl;
        $(anchor[0]).text(Drupal.pagerer.indexToTag(targetPage, pState, 'page'));
        anchor[0].title = Drupal.pagerer.indexToTag(targetPage, pState, 'title');
        // In views, add AJAX where appropriate.
        if (!onReady && pState.context === 'viewsAjax') {
          // Element is in AJAX enabled view.
          Drupal.pagerer.setAjaxViewPaging(anchor[0], 'click', pState.ajaxViewId, targetUrl);
        }
        else if (pState.context === 'viewsPreview') {
          // Element is in Views preview context.
          Drupal.pagerer.setAjaxViewPreviewPaging(anchor[0], 'click', targetUrl);
        }
      }

      /**
       * Calculates embedded pager width.
       *
       * @param {object} pState
       *   A Pagerer state object.
       * @param {number} pages
       *   The number of page elements in the pager.
       * @param {number} separators
       *   The number of separator elements in the pager.
       *
       * @return {number}
       *   The total width of the pager.
       */
      function getPagerWidth(pState, pages, separators) {
        return ((pages * pState.pageWidth) + (separators * pState.separatorWidth));
      }

    },

    detach: function (context, settings) {
      $('.pagerer-scrollpane-embedded', context).each(function (index) {
        Drupal.pagerer.detachState(this);
      });
    }

  };
})(jQuery);
;
