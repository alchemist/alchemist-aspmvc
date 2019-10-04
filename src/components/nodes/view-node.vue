<template>
    <node-container :node="node" :position.sync="node.position">
        <template slot="header">
            <div class="view-name-container control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="View Name" v-model="node.data.name" v-show-error validate-property="node.data.name">
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
    import {Prop, Component, Vue} from "vue-property-decorator";
    import {NodeContainerComponent as NodeContainer, ValidateNode} from "@alchemist/core";
    import {ViewNode} from "../../models/nodes/view-node";


    @Component({
        components: {
            NodeContainer
        },
        mixins: [ ValidateNode(ViewNode) ]
    })
    export default class extends Vue
    {
        @Prop()
        public node: ViewNode;
    }
</script>

<style lang="scss">
    @import "~@alchemist/core/src/styles/helpers";
    @import "../../styles/variables";

    [node-type="aspmvc-view"] .node-header
    {
        @include auto-gradient($view-node-color);
    }

    .model-name-container
    {
        width: 21em;
    }
</style>