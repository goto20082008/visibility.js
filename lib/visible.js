/*
 * Copyright 2011 Andrey “A.I.” Sitnik <andrey@sitnik.ru>.
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

;(function() {
    "use strict"

    window.Visible = {

        // Link to document object to change it in tests.
        _doc: window.document,

        // Vendor prefixes to create event and properties names.
        _prefixes: ['webkit', 'moz', 'o', 'ms'],

        // Vendor prefix cached by _prefix function.
        _chechedPrefix: null,

        // Detect vendor prefix and return it.
        _prefix: function () {
            if (this._chechedPrefix) {
                return this._chechedPrefix;
            }
            if ('undefined' != typeof(this._doc.visibilityState)) {
                return this._chechedPrefix = '';
            }
            var name;
            for ( var i = 0; i < this._prefixes.length; i++ ) {
                name = this._prefixes[i] + 'VisibilityState';
                if ('undefined' != typeof(this._doc[name])) {
                    return this._chechedPrefix = this._prefixes[i];
                }
            }
        },

        // Return true if browser support Page Visibility API.
        support: function () {
            return ('undefined' != typeof(this._prefix()));
        }

    }

})();