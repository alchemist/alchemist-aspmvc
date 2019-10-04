import { ControllerData } from "../models/data/controller-data";
import { ControllerNode } from "../models/nodes/controller-node";
import { AspMvcProject } from "../models/project/asp-mvc-project";
import { ModelData } from "../models/data/model-data";
import { ModelNode } from "../models/nodes/model-node";
import { ActionData } from "../models/data/action-data";
import { ViewNode } from "../models/nodes/view-node";
import { ViewData } from "../models/data/view-data";

import {NamespaceNodeGroup, commonTypes, PropertyData} from "@alchemist/dotnet";
import {WorkspaceConfig, Point, IProject} from "@alchemist/core";

const homeController = new ControllerData("HomeController");
const indexAction = new ActionData("Index");
homeController.actions.push(indexAction);

const modelData = new ModelData("HomeModel");
const viewData = new ViewData("ExampleView")

export function createExampleProject(projectName: string, outputDirectory: string) : IProject
{
    const exampleProject = new AspMvcProject(projectName, outputDirectory);
    const examplesNamespace = new NamespaceNodeGroup(false, projectName, new WorkspaceConfig(),[
        new ControllerNode(homeController, new Point(5000,5000)),
        new ModelNode(modelData, new Point(5500, 5000)),
        new ViewNode(viewData, new Point(5000, 5500))
    ]);

    exampleProject.nodeGroups.push(examplesNamespace);

    return exampleProject;
}