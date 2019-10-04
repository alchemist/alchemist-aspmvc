import {ITypeData, PropertyData, TypeData} from "@alchemist/dotnet";
import {minLength, required, withDisplayName} from "@treacherous/decorators";
import {ArgumentData} from "./argument-data";
import {INodeData} from "@alchemist/core";

export class ActionData  implements INodeData
{
    @required()
    @withDisplayName("Action Name")
    public name: string;

    @minLength(1)
    public route: string;

    public actionArgs: Array<ArgumentData> = [];

    constructor(name = "", args = new Array<ArgumentData>()) {
        this.name = name;
        this.actionArgs = args;
    }
}