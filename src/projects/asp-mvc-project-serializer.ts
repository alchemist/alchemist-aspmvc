import {DotNetProjectSerializer} from "@alchemist/dotnet";
import {INode, INodeGroup, IProject, NodeType} from "@alchemist/core";
import {ControllerNode} from "../models/nodes/controller-node";
import {ModelNode} from "../models/nodes/model-node";
import {ControllerData} from "../models/data/controller-data";
import {ModelData} from "../models/data/model-data";
import {ActionData} from "..";

export class AspMvcProjectSerializer extends DotNetProjectSerializer
{
    protected afterProcessed(project: IProject): void
    {
        for(const nodeGroup of project.nodeGroups)
        {
            for(const node of nodeGroup.nodes)
            { this.processEcsRxNodeTypeReferences(node, nodeGroup, project); }
        }
    }

    protected processEcsRxNodeTypeReferences(node: INode, group: INodeGroup, project: IProject): void
    {
        switch(node.type.id)
        {
            case ControllerNode.NodeType.id: { this.processControllerNode(node as ControllerNode, group, project); } break;
            case ModelNode.NodeType.id: { this.processModelNode(node as ModelNode, group, project); } break;
        }
    }

    public processControllerNode(node: ControllerNode, group: INodeGroup, project: IProject): void
    {
        const dataType = new ControllerData();
        Object.assign(dataType, node.data);
        node.data = dataType;

        for(const action of node.data.actions)
        {
            this.processControllerAction(action, node, group, project);
        }
    }

    public processControllerAction(action: ActionData, node: ControllerNode, group: INodeGroup, project: IProject): void
    {
        for(const actionArg of action.actionArgs)
        {
            if(this.hasNodeReferenceMetadata(actionArg.type))
            { actionArg.type = this.getNodeTypeData(project, actionArg.type); }
        }
    }

    public processModelNode(node: ModelNode, group: INodeGroup, project: IProject): void
    {
        const dataType = new ModelData();
        Object.assign(dataType, node.data);
        node.data = dataType;

        for(const property of node.data.properties)
        {
            if(this.hasNodeReferenceMetadata(property.type))
            { property.type = this.getNodeTypeData(project, property.type); }
        }

        for(const dependency of node.data.dependencies)
        {
            if(this.hasNodeReferenceMetadata(dependency.type))
            { dependency.type = this.getNodeTypeData(project, dependency.type); }
        }
    }
}