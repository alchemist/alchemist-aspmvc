import {Node, NodeType, Point} from "@alchemist/core";
import {withRuleset} from "@treacherous/decorators";
import {ViewData} from "../data/view-data";

export class ViewNode extends Node<ViewData>
{
    public static NodeType = new NodeType("aspmvc-view", "View (Razor)");

    @withRuleset(ViewData)
    public data: ViewData;

    constructor(data = new ViewData(), position?: Point)
    {
        super(ViewNode.NodeType, position);
        this.data = data;
    }
}