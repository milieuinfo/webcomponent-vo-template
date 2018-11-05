/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   iron-a11y-announcer.js
 */

import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

export {IronA11yAnnouncer};

import {LegacyElementMixin} from '@polymer/polymer/lib/legacy/legacy-element-mixin.js';

declare class IronA11yAnnouncer {

  /**
   * The value of mode is used to set the `aria-live` attribute
   * for the element that will be announced. Valid values are: `off`,
   * `polite` and `assertive`.
   */
  mode: string|null|undefined;
  _text: string|null|undefined;
  created(): void;

  /**
   * Cause a text string to be announced by screen readers.
   *
   * @param text The text that should be announced.
   */
  announce(text: string): void;
  _onIronAnnounce(event: any): void;
}

interface IronA11yAnnouncer extends LegacyElementMixin, HTMLElement {
}

declare global {

  interface HTMLElementTagNameMap {
    "iron-a11y-announcer": IronA11yAnnouncer;
  }
}