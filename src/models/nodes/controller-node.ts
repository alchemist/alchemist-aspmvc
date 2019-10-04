import {Node, NodeType, Point} from "@alchemist/core";
import {withRuleset} from "@treacherous/decorators";
import {ControllerData} from "../data/controller-data";

export class ControllerNode extends Node<ControllerData>
{
    public static NodeType = new NodeType("aspmvc-controller", "Controller");

    @withRuleset(ControllerData)
    public data: ControllerData;

    constructor(data: ControllerData = new ControllerData(), position?: Point)
    {
        super(ControllerNode.NodeType, position);
        this.data = data;
    }
}