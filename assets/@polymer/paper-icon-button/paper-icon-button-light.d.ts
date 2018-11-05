/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   paper-icon-button-light.js
 */

import {PaperRippleBehavior} from '@polymer/paper-behaviors/paper-ripple-behavior.js';

import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {afterNextRender} from '@polymer/polymer/lib/utils/render-status.js';

import {LegacyElementMixin} from '@polymer/polymer/lib/legacy/legacy-element-mixin.js';

/**
 * This is a lighter version of `paper-icon-button`. Its goal is performance, not
 * developer ergonomics, so as a result it has fewer features than
 * `paper-icon-button` itself. To use it, you must distribute a `button` containing
 * the `iron-icon` you want to use:
 *
 * <script type="module">
 *   import '@polymer/iron-icon/iron-icon.js';
 *   import '@polymer/paper-icon-button/paper-icon-button-light.js';
 *   import '@polymer/iron-icons/iron-icons.js';
 * </script>
 *
 * <paper-icon-button-light>
 *   <button title="heart">
 *     <iron-icon icon="favorite"></iron-icon>
 *   </button>
 * </paper-icon-button-light>
 *
 * Note that this button is assumed to be distributed at the startup of
 * `paper-icon-button-light`. Dynamically adding a `button` to this element is
 * not supported.
 *
 * The `title`/`disabled` etc. attributes go on the distributed button, not on the
 * wrapper.
 *
 * The following custom properties and mixins are also available for styling:
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--paper-icon-button-light-ripple` | Mixin applied to the paper ripple | `{}`
 */
interface PaperIconButtonLightElement extends PaperRippleBehavior, LegacyElementMixin, HTMLElement {
  ensureRipple(...var_args: any[]): void;
  ready(): void;
  _rippleDown(): void;
  _rippleUp(): void;
}

export {PaperIconButtonLightElement};

declare global {

  interface HTMLElementTagNameMap {
    "paper-icon-button-light": PaperIconButtonLightElement;
  }
}