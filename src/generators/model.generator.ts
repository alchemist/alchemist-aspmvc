import {INodeGenerator, INode, addGeneratedFileHeader} from "@alchemist/core";
import {NamespaceNodeGroup, addUsings, generateUsings} from "@alchemist/dotnet";

import {ModelData} from "../models/data/model-data";
import {ModelNode} from "../models/nodes/model-node";
import {AspMvcProject} from "../models/project/asp-mvc-project";
import {getAllUsingsFromProperties} from "../generators/helpers/using-helpers";
import {
    assignDependencyFromArgs, generateDependency,
    generateDependencyArgs
} from "../generators/helpers/property-helpers";

const template = (data: ModelData, namespace: string, generator: INodeGenerator) => {

    const hasDependencies = data.dependencies.length > 0;
    const usingStatements = getAllUsingsFromProperties(data.properties);


    return `
        ${addGeneratedFileHeader(generator)}
        ${generateUsings(usingStatements)}
            
        namespace ${namespace}
        {           
            public class ${data.name}
            {
                ${data.dependencies.map(generateDependency).join("\r\n")}
                
                ${hasDependencies ? `
                public ${data.name}(${generateDependencyArgs(data.dependencies)})
                {
                    ${data.dependencies.map(assignDependencyFromArgs).join("\r\n")}
                }
                ` : ""}
            }
        }`;
};

export class ModelGenerator implements INodeGenerator
{
    public name = "AspMvc Model Generator";
    public replaceExisting = true;
    public version = "1.0.0";

    public canHandleType(node: INode): boolean {
        return node.type.id == ModelNode.NodeType.id;
    }

    public generate(node: ModelNode, group: NamespaceNodeGroup, project: AspMvcProject): Promise<string> {
        const templateOutput = template(node.data, group.name, this);
        return Promise.resolve(templateOutput);
    }

    public computeFileLocation(node: ModelNode, group: NamespaceNodeGroup, project: AspMvcProject): string {
        return `${project.outputDirectory}/${group.name}/Models/${node.data.name}.cs`;
    }
}