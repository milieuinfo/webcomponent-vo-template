/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   iron-doc-module.js
 */

import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {IronDocViewerBehavior} from './iron-doc-viewer-behavior.js';

import {LegacyElementMixin} from '@polymer/polymer/lib/legacy/legacy-element-mixin.js';

/**
 * `iron-doc-module` renders documentation about a JavaScript Module from a
 * JSON descriptor output by
 * [Polymer Analyzer](https://github.com/Polymer/polymer-analyzer).
 *
 * The descriptor should be an analysis format Analysis object, filtered
 * down to contain only the exported contents of a single module.
 */
interface IronDocModuleElement extends IronDocViewerBehavior, LegacyElementMixin, HTMLElement {

  /**
   * The module specifier of this module, used to give an example of
   * how to import it. So if this is 'foo' we will tell users to do:
   * `import {} from 'foo';`
   */
  moduleSpecifier: string|null|undefined;
}

export {IronDocModuleElement};

declare global {

  interface HTMLElementTagNameMap {
    "iron-doc-module": IronDocModuleElement;
  }
}