import {INode, INodeFactory, Point} from "@alchemist/core";

import {ControllerNode} from "../models/nodes/controller-node";
import {ControllerData} from "../models/data/controller-data";
import {ModelNode} from "../models/nodes/model-node";
import {ModelData} from "../models/data/model-data";
import {ViewNode} from "../models/nodes/view-node";
import {ViewData} from "../models/data/view-data";

export class AspMvcNodeFactory implements INodeFactory
{
    public create = (nodeTypeId: string, position: Point, args: any): INode => {
        switch(nodeTypeId)
        {
            case ControllerNode.NodeType.id: return new ControllerNode(new ControllerData("NewComponent"), position);
            case ModelNode.NodeType.id: return new ModelNode(new ModelData("NewModel"), position);
            case ViewNode.NodeType.id: return new ViewNode(new ViewData("NewView"), position);
        }
        return null;
    }
}

