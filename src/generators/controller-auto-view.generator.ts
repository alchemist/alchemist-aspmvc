import {INodeGenerator, INode, addGeneratedFileHeader} from "@alchemist/core";
import {NamespaceNodeGroup, addUsings, generateUsings, getAllUsingsFromTypes} from "@alchemist/dotnet";

import {ControllerNode} from "../models/nodes/controller-node";
import {AspMvcProject} from "../models/project/asp-mvc-project";
import {ViewData} from "../models/data/view-data";
import {ViewNode} from "../models/nodes/view-node";

const template = (data: ViewData, namespace: string, generator: INodeGenerator) => {

    return `
        @*
            ${addGeneratedFileHeader(generator)}
        *@
        <div>
            <h1>${data.name} View</h1>
        </div>
        `;
};

export class ControllerAutoViewGenerator implements INodeGenerator
{
    public name = "ASP MVC Auto View Generator";
    public replaceExisting = true;
    public version = "1.0.0";

    public canHandleType(node: INode): boolean {
        return node.type.id == ControllerNode.NodeType.id;
    }

    public generate(node: ViewNode, group: NamespaceNodeGroup, project: AspMvcProject): Promise<string> {
        const templateOutput = template(node.data, group.name, this);
        return Promise.resolve(templateOutput);
    }

    public computeFileLocation(node: ViewNode, group: NamespaceNodeGroup, project: AspMvcProject): string {
        return `${project.outputDirectory}/${group.name}/Views/${node.data.name}.cshtml`;
    }
}