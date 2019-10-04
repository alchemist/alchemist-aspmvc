<template>
    <node-container :node="node" :position.sync="node.position">
        <template slot="header">
            <div class="model-name-container control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Model Name" v-model="node.data.name" v-show-error validate-property="node.data.name">
                <span class="icon is-left">
                    <i class="fas fa-edit"></i>
                </span>
            </div>
        </template>
        <template slot="content">
            <properties-section :properties="node.data.dependencies" :propertiesName="'Dependencies'" :typesToShow="allowedDependencyTypes" @model-state-changed="refreshValidation"></properties-section>
            <properties-section :properties="node.data.properties" :typesToShow="allowedPropertyTypes" @model-state-changed="refreshValidation"></properties-section>
        </template>
    </node-container>
</template>

<script lang="ts">
    import {ModelNode} from "../../models/nodes/model-node";
    import {Getter} from "vuex-class";
    import {Prop, Component, Vue} from "vue-property-decorator";

    import {NodeContainerComponent as NodeContainer, ValidateNode} from "@alchemist/core";
    import {ITypesToShow, ITypeData, commonTypeList, PropertiesSectionComponent as PropertiesSection} from "@alchemist/dotnet";

    @Component({
        components: {
            NodeContainer,
            PropertiesSection
        },
        mixins: [ ValidateNode(ModelNode) ]
    })
    export default class extends Vue
    {
        @Prop()
        public node: ModelNode;

        @Getter("aspmvc/modelTypes")
        public modelTypes: Array<ITypeData>;

        public get allowedDependencyTypes(): ITypesToShow
        {
            return {
                "Models": this.modelTypes
            }
        };

        public allowedPropertyTypes: ITypesToShow = {
            "Common": commonTypeList
        }
    }
</script>

<style lang="scss">
    @import "~@alchemist/core/src/styles/helpers";
    @import "../../styles/variables";

    [node-type="aspmvc-model"] .node-header
    {
        @include auto-gradient($model-node-color);
    }

    .model-name-container
    {
        width: 21em;
    }
</style>