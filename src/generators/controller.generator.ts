import {INodeGenerator, INode, addGeneratedFileHeader} from "@alchemist/core";
import {NamespaceNodeGroup, addUsings, generateUsings, getAllUsingsFromTypes} from "@alchemist/dotnet";

import {ControllerData} from "../models/data/controller-data";
import {ControllerNode} from "../models/nodes/controller-node";
import {AspMvcProject} from "../models/project/asp-mvc-project";

const template = (data: ControllerData, namespace: string, generator: INodeGenerator) => {

    const usingStatements = ["Microsoft.AspNetCore.Mvc"];
    for(const action of data.actions)
    {
        const actionUsings = getAllUsingsFromTypes(action.actionArgs.map(x => x.type));
        addUsings(usingStatements, ...actionUsings);
    }

    return `
        ${addGeneratedFileHeader(generator)}
        ${generateUsings(usingStatements)}
            
        namespace ${namespace}
        {           
            public class ${data.name} : Controller
            {
                ${data.actions.map(action => `
                    public IActionResult ${action.name}(${action.actionArgs.map(arg => `${arg.type.name} ${arg.name}`).join(", ")})
                    {
                        return View();
                    }                    
                `)}                
            }
        }`;
};

export class ControllerGenerator implements INodeGenerator
{
    public name = "ASP MVC Controller Generator";
    public replaceExisting = true;
    public version = "1.0.0";

    public canHandleType(node: INode): boolean {
        return node.type.id == ControllerNode.NodeType.id;
    }

    public generate(node: ControllerNode, group: NamespaceNodeGroup, project: AspMvcProject): Promise<string> {
        const templateOutput = template(node.data, group.name, this);
        return Promise.resolve(templateOutput);
    }

    public computeFileLocation(node: ControllerNode, group: NamespaceNodeGroup, project: AspMvcProject): string {
        return `${project.outputDirectory}/${group.name}/Controllers/${node.data.name}.cs`;
    }
}