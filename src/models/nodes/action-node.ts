import {Node, NodeType, Point} from "@alchemist/core";
import {withRuleset} from "@treacherous/decorators";
import {ActionData} from "../data/action-data";

export class ActionNode extends Node<ActionData>
{
    public static NodeType = new NodeType("aspmvc-controller-action", "Action");

    @withRuleset(ActionData)
    public data: ActionData;

    constructor(data = new ActionData(), position?: Point)
    {
        super(ActionNode.NodeType, position);
        this.data = data;
    }
}