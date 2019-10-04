import {INodeData} from "@alchemist/core";
import {PropertyData} from "@alchemist/dotnet";
import {required, withDisplayName, withRulesetForEach} from "@treacherous/decorators";

export class ViewData implements INodeData
{
    @required()
    @withDisplayName("View Name")
    public name;



    constructor(name = "", public markup = ""){
        this.name = name;
    }
}

