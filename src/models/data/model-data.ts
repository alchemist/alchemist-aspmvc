import {INodeData} from "@alchemist/core";
import {PropertyData} from "@alchemist/dotnet";
import {required, withDisplayName, withRulesetForEach} from "@treacherous/decorators";

export class ModelData implements INodeData
{
    @required()
    @withDisplayName("Model Name")
    public name;

    @withRulesetForEach(PropertyData)
    public dependencies: Array<PropertyData> = [];

    @withRulesetForEach(PropertyData)
    public properties: Array<PropertyData> = [];

    constructor(name = ""){
        this.name = name;
    }
}

