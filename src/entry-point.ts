import {
    ControllerNodeComponent, ModelNodeComponent, ViewNodeComponent
} from "./component.exports"

import {ControllerGenerator} from "./generators/controller.generator";
import {ModelGenerator} from "./generators/model.generator";
import {ControllerAutoViewGenerator} from "./generators/controller-auto-view.generator";
import {ViewGenerator} from "./generators/view.generator";

import {NodeEntry, NodeRegistry, ProjectEntry, ProjectRegistry, NodeGeneratorRegistry} from "@alchemist/core";

import {ControllerNode} from "./models/nodes/controller-node";
import {ModelNode} from "./models/nodes/model-node";
import {ViewNode} from "./models/nodes/view-node";
import {AspMvcGetters} from "./stores/modules/asp-mvc-getters";
import {AspMvcNodeFactory} from "./factory/asp-mvc-node-factory";

import {AspmvcProjectGenerator} from "./generators/projects/aspmvc-project-generator";

import {AspMvcApplicationProjectDescriptor} from "./models/project/asp-mvc-application-project-descriptor";
import {AspMvcProjectFactory} from "./factory/asp-mvc-project-factory";
import {AspMvcProjectSerializer} from "./projects/asp-mvc-project-serializer";
import {IPlugin, DefaultOrdering, PluginContext} from "@alchemist/core";

import "./styles/theme.ext.scss";


export class Plugin implements IPlugin
{
    public name = "alchemist-aspmvc";
    public version = "0.1.0";
    public order = DefaultOrdering;

    public setup(pluginContext: PluginContext): Promise<any>
    {
        pluginContext.nodeGeneratorRegistry.addGenerator(new ControllerGenerator());
        pluginContext.nodeGeneratorRegistry.addGenerator(new ModelGenerator());
        pluginContext.nodeGeneratorRegistry.addGenerator(new ControllerAutoViewGenerator());
        pluginContext.nodeGeneratorRegistry.addGenerator(new ViewGenerator());

        const aspMvcCategory = "AspMvc";
        const aspMvcNodeFactory = new AspMvcNodeFactory();

        pluginContext.nodeRegistry.addNode(new NodeEntry(ControllerNode.NodeType.id, ControllerNodeComponent, aspMvcNodeFactory, aspMvcCategory, "Controller"));
        pluginContext.nodeRegistry.addNode(new NodeEntry(ModelNode.NodeType.id, ModelNodeComponent, aspMvcNodeFactory, aspMvcCategory, "Model"));
        pluginContext.nodeRegistry.addNode(new NodeEntry(ViewNode.NodeType.id, ViewNodeComponent, aspMvcNodeFactory, aspMvcCategory, "View"));

        pluginContext.projectRegistry.addProject(new ProjectEntry(new AspMvcApplicationProjectDescriptor(), new AspMvcProjectFactory(), new AspMvcProjectSerializer()));
        pluginContext.projectGeneratorRegistry.addGenerator(new AspmvcProjectGenerator());

        const aspMvcModule = {
            namespaced: true,
            getters: new AspMvcGetters()
        };

        pluginContext.store.registerModule("aspmvc", aspMvcModule);

        console.log("Loaded Plugin: AspMvc");
        return Promise.resolve();
    }
}

