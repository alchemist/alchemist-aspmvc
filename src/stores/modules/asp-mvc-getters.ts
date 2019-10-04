import {TypeData} from "@alchemist/dotnet";
import {ControllerNode} from "../../models/nodes/controller-node";
import {ModelNode} from "../../models/nodes/model-node";

export class AspMvcGetters
{
    public controllerTypes = (state: any, getters: any, rootState: any, rootGetters: any): Array<TypeData> =>
    {
        if(rootState.project.activeProject == null) { return []; }

        return rootGetters.allProjectTypes.filter((x: TypeData) => x.metadata["nodeType"] == ControllerNode.NodeType.id);
    };

    public modelTypes = (state: any, getters: any, rootState: any, rootGetters: any): Array<TypeData> =>
    {
        if(rootState.project.activeProject == null) { return []; }

        return rootGetters.allProjectTypes.filter((x: TypeData) => x.metadata["nodeType"] == ModelNode.NodeType.id);
    };
}