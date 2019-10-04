import {ITypeData, TypeData} from "@alchemist/dotnet";
import {minLength, required, withDisplayName} from "@treacherous/decorators";

export class ArgumentData
{
    @required()
    @minLength(1)
    @withDisplayName("Argument Name")
    public name: string;

    @required()
    public type: ITypeData;

    constructor(name = "", type = new TypeData()) {
        this.name = name;
        this.type = type;
    }
}