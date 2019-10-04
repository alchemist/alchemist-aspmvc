<template>
    <node-container :node="node" :position.sync="node.position">
        <template slot="header">
            <div class="controller-name-container control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Controller Name" v-model="node.data.name">
                <span class="icon is-left">
                    <i class="fas fa-edit"></i>
                </span>
            </div>
        </template>
        <template slot="content">
            <p>TODO</p>
        </template>
    </node-container>
</template>

<script lang="ts">
    import {ControllerNode} from "../../models/nodes/controller-node";
    import {Prop, Vue, Component} from "vue-property-decorator";

    import {NodeContainerComponent as NodeContainer, createNodeRuleset, ValidateNode} from "@alchemist/core";
    import {ITypesToShow, commonTypeList, ITypeData} from "@alchemist/dotnet";
    import {Getter} from "vuex-class";

    @Component({
        components: {
            NodeContainer
        },
        mixins: [ ValidateNode(ControllerNode) ]
    })
    export default class extends Vue
    {
        @Prop()
        public node: ControllerNode;

        @Getter("aspmvc/modelTypes")
        public modelTypes: Array<ITypeData>;

        public allowedPropertyTypes: ITypesToShow = {
            "Common": commonTypeList,
            "Models": this.modelTypes
        }
    }
</script>

<style lang="scss">
    @import "~@alchemist/core/src/styles/helpers";
    @import "../../styles/variables";

    [node-type="aspmvc-controller"] .node-header
    {
        @include auto-gradient($controller-node-color);
    }

    .component-name-container
    {
        width: 21em;
    }
</style>