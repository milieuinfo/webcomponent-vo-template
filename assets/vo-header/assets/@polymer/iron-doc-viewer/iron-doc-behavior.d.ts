/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   iron-doc-behavior.js
 */

import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {IronDocViewerBehavior} from './iron-doc-viewer-behavior.js';

import {LegacyElementMixin} from '@polymer/polymer/lib/legacy/legacy-element-mixin.js';

/**
 * `iron-doc-behavior` renders documentation about a Polymer 1.x behavior from a
 * JSON descriptor output by
 * [Polymer Analyzer](https://github.com/Polymer/polymer-analyzer).
 */
interface IronDocBehaviorElement extends IronDocViewerBehavior, LegacyElementMixin, HTMLElement {
  readonly title: any;
  _computeTitle(descriptor: any): any;
}

export {IronDocBehaviorElement};

declare global {

  interface HTMLElementTagNameMap {
    "iron-doc-behavior": IronDocBehaviorElement;
  }
}
