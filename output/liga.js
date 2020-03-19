/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'spoon-knife': '&#xe9a3;',
            'food': '&#xe9a3;',
            'leaf': '&#xe9a4;',
            'nature': '&#xe9a4;',
            'fire': '&#xe9a9;',
            'flame': '&#xe9a9;',
            'power': '&#xe9b5;',
            'lightning': '&#xe9b5;',
            'terminal': '&#xea81;',
            'console': '&#xea81;',
            'google2': '&#xea89;',
            'brand3': '&#xea89;',
            'facebook2': '&#xea91;',
            'brand11': '&#xea91;',
            'twitter': '&#xea96;',
            'brand16': '&#xea96;',
            'youtube': '&#xea9d;',
            'brand21': '&#xea9d;',
            'steam': '&#xeaac;',
            'brand36': '&#xeaac;',
            'apple': '&#xeabe;',
            'brand53': '&#xeabe;',
            'skype': '&#xeac5;',
            'brand60': '&#xeac5;',
            'reddit': '&#xeac6;',
            'brand61': '&#xeac6;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
