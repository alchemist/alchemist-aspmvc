import {INodeData} from "@alchemist/core";
import {required, withDisplayName, withRulesetForEach} from "@treacherous/decorators";
import {ActionData} from "./action-data";

export class ControllerData implements INodeData
{
    @required()
    @withDisplayName("Controller Name")
    public name: string;

    @withRulesetForEach(ActionData)
    public actions: Array<ActionData> = [];

    constructor(name = "", actions = []){
        this.name = name;
        this.actions = actions;
    }
}

