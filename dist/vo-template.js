import { LitElement, html } from "@polymer/lit-element/lit-element";
import "vo-header/dist/vo-header.js";
import "vo-footer/dist/vo-footer.js";

/**
 * `vo-template`
 * De standaard template voor websites en applicaties van de Vlaamse overheid
 *
 * ### Styling
 * 
 * De volgende properties en mixins zijn beschikbaar voor stijl:
 * 
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--vo-template-content-style` | de content mixin | `{}`
 * `--vo-template-content-inner-style` | de content element mixin | `{}`
 * `--vo-template-footer-style` | de footer mixin | `{}`
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class VoTemplate extends LitElement {
  render() {
    return html`
			<style>
				:host {
					padding: 0;
					margin: 0;
					height: 100vh;
					position: relative;
					@apply --layout-vertical;
				}
	
				@media print {
					:host(.print-content-only) > vo-header {
						display: none;
					}
					:host(.print-content-only) > vo-footer {
						display: none;
					}
				}
	
				#content {
					position: relative;
					flex-shrink: 0;
					flex-grow: 1;
					padding: 0 10px 0 10px;
					height: max-content;
					overflow: scroll;
					@apply --vo-template-content-style;
				}
		
				#content > div {
					max-width: 1040px;
					margin: auto;
					min-height: 100%;
					background: white;
					box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2) !important;
					@apply --vo-template-content-inner-style;
				}
				
				vo-footer {
					@apply --vo-template-footer-style;
				}
			</style>
			
			<vo-header style="width: 100vw"></vo-header>
	
		    <div id="content">
				<div>
					<slot></slot>
				</div>
			</div>
		
			<vo-footer>
				<slot name="footer"></slot>
			</vo-footer>
		`;
  }
}

customElements.define('vo-template', VoTemplate);