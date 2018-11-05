import { LitElement, html } from "./assets/@polymer/lit-element/lit-element.js";
import './assets/vo-merklogo/vo-merklogo.js';

/**
 * `vo-header`
 * De standaard header voor websites en applicaties van de Vlaamse overheid
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class VoHeader extends LitElement {
    render() {
    	return html`
   			<style>
   				:host {
   					display: block;
					background: rgb(51, 51, 51);
					color: rgb(184, 184, 184);
					font-size: 14px;
		  		}
	
				#wrapper {
					width: 100%;
					max-width: 1040px;
					margin: auto;
					@apply --vo-header-wrapper-style;
				}
					
				vo-merklogo {
					margin-right: 5px;
				}
					
				a,
				a:active,
				a:link,
				a:visited {
					color: rgb(184, 184, 184);
					text-decoration: none;
				}
					
				a:hover {
					color: white
				}
					
				.separator {
					margin: auto 1em;
					height: 1.5em;
					border-left: solid 1px #444;
				}
					
				.spacer {
					@apply --layout-flex-10;
				}
					
				#wrapper {
					@apply --layout-horizontal;
					@apply --layout-center;
					padding-right: 10px;
					box-sizing: border-box;
				}
					
				#vlaanderen {
					font-size: 18px;
					font-weight: 500;
				}
   			</style>
   			
    		<div id='wrapper'>
    			<vo-merklogo></vo-merklogo>
				<a id='vlaanderen' href='//www.vlaanderen.be' target='_self'>VLAANDEREN.be</a>
				<div class='separator'></div>
				<a id='departement' href='//www.omgevingvlaanderen.be' target='_self'>Departement Omgeving</a>
				<div class='spacer'></div>
    		</div>
    	`;
    }
}

customElements.define('vo-header', VoHeader);
