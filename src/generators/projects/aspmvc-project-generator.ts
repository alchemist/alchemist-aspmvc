import {DotNetProjectGenerator} from "@alchemist/dotnet";
import {IProject} from "@alchemist/core";
import {AspMvcApplicationProjectDescriptor, AspMvcProject} from "../..";

const template = (project: IProject, generator: AspmvcProjectGenerator, options?: any) => {

    return `
        <ItemGroup>
            <PackageReference Include="EcsRx" Version="3.5.34" />
            <PackageReference Include="EcsRx.Infrastructure" Version="3.5.34" />
            <PackageReference Include="EcsRx.MicroRx" Version="3.5.34" />
            <PackageReference Include="EcsRx.Plugins.ReactiveSystems" Version="3.5.34" />
            <PackageReference Include="EcsRx.ReactiveData" Version="3.5.34" />
            <PackageReference Include="System.Reactive" Version="4.1.0.0" />
        </ItemGroup>`;
};

export class AspmvcProjectGenerator extends DotNetProjectGenerator
{
    readonly name = "EcsRx Project Generator";
    readonly version = "1.0.0";

    canHandleType(project: IProject): boolean {
        return project.projectType === AspMvcApplicationProjectDescriptor.type;
    }

    generateCustomSections(project: IProject, options?: any): string {
        return template(project, this, options);
    }

}