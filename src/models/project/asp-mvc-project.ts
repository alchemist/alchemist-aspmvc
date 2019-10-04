import {DotNetProject} from "@alchemist/dotnet";
import {AspMvcApplicationProjectDescriptor} from "./asp-mvc-application-project-descriptor";

export class AspMvcProject extends DotNetProject
{
    constructor(projectName: string, outputDirectory: string, projectType = AspMvcApplicationProjectDescriptor.type, projectVersion = AspMvcApplicationProjectDescriptor.currentVersion)
    {
        super(projectType, projectVersion, projectName, outputDirectory)
    }
}