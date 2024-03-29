/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');
  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = {
  behaviors: {},
  locale: {}
};

(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};
    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });
    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});
      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }

    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);
    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }

    var baseUrl = "".concat(protocol, "//").concat(window.location.host).concat(drupalSettings.path.baseUrl.slice(0, -1));

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}

    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf("".concat(baseUrl, "/")) === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;
    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;

    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn("[Deprecation] ".concat(message));
    }
  };

  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
        deprecatedProperty = _ref2.deprecatedProperty,
        message = _ref2.message;

    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: function get(target, key) {
        if (key === deprecatedProperty) {
          Drupal.deprecationError({
            message: message
          });
        }

        for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }

        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return "<em class=\"placeholder\">".concat(Drupal.checkPlain(str), "</em>");
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    var listener = function listener() {
      callback();
      document.removeEventListener('DOMContentLoaded', listener);
    };

    if (document.readyState !== 'loading') {
      setTimeout(callback, 0);
    } else {
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
;
(function () {

  'use strict';

  /**
   * Provides the off-canvas menu.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behavior for the off-canvas menu.
   */
  Drupal.behaviors.responsive_menu_mmenu = {
    attach: function (context) {

      const mmenuId = '#off-canvas';
      const offCanvas = document.querySelector(mmenuId)

      // The instatiation of the mmenu must only happen once.
      if (offCanvas && !offCanvas.hasOwnProperty('mmApi') && typeof (Mmenu) !== 'undefined') {
        const settings = drupalSettings.responsive_menu;
        const position = settings.position,
          theme = settings.theme,
          pagedim = settings.pagedim;

        const options = {
          extensions: [
            theme,
            'fx-menu-slide',
            position === 'left' ? 'position-left' : 'position-right'
          ],
          keyboardNavigation: {
            enable: true,
            enhance: true,
          },
          drag: {
            open: settings.drag
          }
        };

        if (pagedim !== 'none') {
          options.extensions.push(pagedim);
        }

        const config = {
          classNames: {
            selected: 'menu-item--active-trail'
          }
        };

        // Allow the settings and options to be extended or overridden.
        if (typeof settings.custom !== 'undefined') {
          if (typeof settings.custom.options !== 'undefined') {
            extend(options, drupalSettings.responsive_menu.custom.options);
          }
          if (typeof drupalSettings.responsive_menu.custom.config !== 'undefined') {
            extend(config, drupalSettings.responsive_menu.custom.config);
          }
        }

        // Set up the off canvas menu.
        const mmenu = new Mmenu(mmenuId, options, config);

        // Due to a rendering issue with Chrome the page needs the viewport
        // metatag to have a value including initial-scale=1.0 otherwise it
        // won't render properly.
        // @see issue #3153145
        const mmenuApi = mmenu.API;
        const viewports = document.getElementsByName('viewport');

        if (viewports.length !== 0 && settings.modifyViewport) {
          const viewportMeta = viewports[0]
          const defaultViewport = viewports[0].content
          const staticViewport = "width=device-width, initial-scale=1.0, minimum-scale=1.0";

          mmenuApi.bind('open:start', function() {
            viewportMeta.setAttribute('content', staticViewport);
          });
          mmenuApi.bind('close:start', function() {
            viewportMeta.setAttribute('content', defaultViewport);
          });
        }
      }
    }
  };
})();

/**
 * Similar to the jQuery extend but shallow.
 *
 * @param out
 * @returns {*|{}}
 */
const extend = function (out) {
  out = out || {};

  for (let i = 1; i < arguments.length; i++) {
    if (!arguments[i])
      continue;

    for (let key in arguments[i]) {
      if (arguments[i].hasOwnProperty(key))
        out[key] = arguments[i][key];
    }
  }

  return out;
};
;
(function () {

  'use strict';

  /**
   * Provides the off-canvas menu.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behavior for the bootstrap modifications.
   */
  Drupal.behaviors.responsive_menu_bootstrap = {
    attach: function (context) {
      // Hijack the Bootstrap toggler so it expands the mmenu rather than the
      // bootstrap dropdown menu.
      let parent = document.querySelector('#navbar-main');
      let offCanvas = document.querySelector('#off-canvas');

      if (parent && offCanvas.hasOwnProperty('mmApi') && typeof (Mmenu) !== 'undefined' && !parent.classList.contains('mmenu-bootstrap')) {
        // Add a class to the parent so that this code is only triggered once.
        parent.classList.add('mmenu-bootstrap')

        // Remove bootstrap classes from the off-canvas menu.
        _removeClasses(offCanvas.getElementsByTagName('a'));
        _removeClasses(offCanvas.getElementsByTagName('li'));
        _removeClasses(offCanvas.getElementsByTagName('ul'));

        let toggler = parent.querySelector('.navbar-toggler');

        if (toggler) {
          toggler.removeAttribute('data-target');
          // delete toggler.dataset.target; // IE10 has no dataset :(
          toggler.removeAttribute('aria-controls');

          // Remove all bound events.
          toggler.outerHTML = toggler.outerHTML;
          toggler = parent.querySelector('.navbar-toggler');

          // Get the mmenu API.
          const mmenuApi = offCanvas.mmApi;

          // Open the menu on-click.
          toggler.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            // Check if the menu needs to open or close.
            let opened = offCanvas.classList.contains('mm-menu_opened');
            // Trigger the open or close method.
            mmenuApi[opened ? 'close' : 'open']();
          });
        }

        // Removes bootstrap classes.
        function _removeClasses(els) {
          [].forEach.call(els, function(el) {
            el.classList.remove('nav', 'nav-link', 'nav-item')
          })
        }
      }

    }

  }

})();
;
