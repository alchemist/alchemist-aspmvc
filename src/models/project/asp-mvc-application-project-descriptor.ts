import {IProjectDescriptor} from "@alchemist/core";
import {ControllerNode} from "../nodes/controller-node";
import {ModelNode} from "../nodes/model-node";
import {NamespaceNodeGroup} from "@alchemist/dotnet";

export class AspMvcApplicationProjectDescriptor implements IProjectDescriptor
{
    public static currentVersion = "1.0.0";
    public static type = "aspmvc-application";

    public projectCategory = "aspmvc";
    public projectType = AspMvcApplicationProjectDescriptor.type;
    public version = AspMvcApplicationProjectDescriptor.currentVersion;

    public tagName = "aspmvc";
    public title = "Asp Mvc Application";
    public description = `Create an asp mvc web application for the .net core framework`;

    public compatibleNodeTypeIds = [
        ControllerNode.NodeType.id,
        ModelNode.NodeType.id
    ];

    public compatibleNodeGroupTypeIds = [
        NamespaceNodeGroup.NodeGroupType.id
    ]
}