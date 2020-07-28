import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";

import ReactTooltip from 'react-tooltip';

import "./ui/Mxtooltiptwo.css";

class Mxtooltiptwo extends Component {

    componentDidMount()
    {
        var targetlist = document.getElementsByClassName(this.props.targetClassName);
        if (targetlist) {
            for(let i = 0; i<targetlist.length; i++)
            {
                targetlist[i].setAttribute("data-tip", "")
                targetlist[i].setAttribute("data-for", this.props.targetClassName)     
            };
        } else {console.log("MxTooltipTwo: No target(list) found!")}
    }

    componentDidUpdate() {
        ReactTooltip.rebuild();
        console.log("Tooltip rebuild()");
    }

    render() {
        console.log("Rendering tooltip");
        return (
            <ReactTooltip
                id={this.props.targetClassName}
                place={this.props.place}
                effect={this.props.effect}
                type={this.props.type}
                html={this.props.renderHTML}
                multiline={this.props.multiline}
                border={this.props.border}
                offset={{top: 10, left: 10, right: 0, bottom: 0}}
                clickable={this.props.clickable}
                wrapper={this.props.wrapper}
                isCapture={this.props.isCapture}
                // delayHide={this.props.delayHide}
                //delayShow={this.props.delayShow}
            >
            {this.props.helpText.value}    
            </ReactTooltip>        
        );
    }
}

export default hot(Mxtooltiptwo);
