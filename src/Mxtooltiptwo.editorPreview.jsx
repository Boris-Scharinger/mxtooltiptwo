import { Component, createElement } from "react";
import ReactTooltip from 'react-tooltip';
import "./ui/Mxtooltiptwo.css";

export class preview extends Component {
    render() {
        return 
        <div>
            <div data-tip data-for='preview-example'>Example Tooltip (without the widget attributes being used)</div>
            <ReactTooltip
                id='preview-example'
                place="top"
                effect="solid"
                type="dark"
                html="false"
                multiline="false"
                border="true"
                offset={{top: 10, left: 10}}
                clickable="false"
                wrapper="div"
            >
            Tooltip Text   
            </ReactTooltip> 

        </div>
    }
}

export function getPreviewCss() {
    return require("./ui/Mxtooltiptwo.css");
}
