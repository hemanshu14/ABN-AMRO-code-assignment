<template>
    <div class="divClass">
        <div>
            <notification v-if="isPopUpOpen" :is-pop-up-open="isPopUpOpen" :name="name" :description="description" @isPopUpOpen="isPopUpOpen = $event"></notification>
        </div>
        <ul class="tree">
            <li>
                <span class="block" @click="openDescription(rootElement.name, rootElement.description, data)">{{rootElement.name}}</span>
                <ul>
                    <li v-for="d in data" v-bind:key="d.name">
                        <span @click="openDescription(d.name, d.description)">
                            {{d.name}}
                        </span>
                        <span :id="d.name" class="spanClass" @click="openDescription(d.name, d.description,d.children)"></span>
                        <ul v-if="d.children">
                            <li v-for="d2 in d.children" v-bind:key="d2.name">
                                <span @click="openDescription(d2.name, d2.description)">{{d2.name}}</span>
                                <span @click="openDescription(d2.name, d2.description)" :id="d2.name" class="spanClass"></span>
                            </li>
                        </ul>

                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    import Notification from "./Notification";
    export default {
        name: "DisplayData",
        data: () => ({
            isPopUpOpen: false,
            name: null,
            description: null,
            children: null
        }),
        props: {
            data: Array,
            rootElement: Object
        },
        components:{
            Notification
        },
        methods:{
            openDescription(name,description, children){
                if(this.children){
                    for (let i = 0; i < this.children.length; i++) {
                        document.getElementById(this.children[i].name).removeAttribute("style");
                    }
                }
                this.isPopUpOpen = true;
                this.name = name;
                this.description = description;
                for (let i = 0; i < children.length; i++) {
                    document.getElementById(children[i].name).setAttribute("style", "background-color: #ff99bb !important");
                }
                this.children = children;
            }
        }
    };
</script>
<style>
    .block{
        background: white;
        border: 1px solid;
        border-radius: 4px;
        height: 60px;
        width: 145px !important;
    }

    .spanClass{
        background: white !important;
        height: 60px;
        margin-top: -25px !important;
        border: 1px solid;
        width: 146px !important;
        border-radius: 4px;
        margin-left: 20px !important;
        cursor: pointer;
    }

    .divClass{
        margin-top: 100px;
    }

    #B{
        margin-left: 200px !important;
    }

    body{
        background:  #e0ebeb !important;
    }

    ul.tree {
        overflow-x: auto;
        white-space: nowrap;
    }
    ul.tree,
    ul.tree ul {
        width: 100%;
        margin: 0;
        list-style-type: none;
    }
    ul.tree li {
        display: block;
        width: auto;
        float: left;
        vertical-align: top;
        padding: 0;
        margin: 0;
    }
    ul.tree ul li {
        background-image: url(data:image/gif;base64,R0lGODdhAQABAIABAAAAAP///ywAAAAAAQABAAACAkQBADs=);
        background-repeat: repeat-x;
        background-position: left top;
    }
    ul.tree ul li:last-child {
        background-repeat: no-repeat;
        background-size:50% 1px;
        background-position: left top;
    }
    ul.tree ul li:first-child {
        background-repeat: no-repeat;
        background-size: 50% 1px;
        background-position: right top;
    }
    ul.tree ul li:first-child:last-child {
        background: none;
    }
    ul.tree li span {
        display: block;
        width: 5em;
        margin: 0 auto;
        text-align: center;
        white-space: normal;
        letter-spacing: normal;
        cursor: pointer;
    }
    ul.tree ul li span {
        background: url(data:image/gif;base64,R0lGODdhAQABAIABAAAAAP///ywAAAAAAQABAAACAkQBADs=) no-repeat 50% top;
        background-size: 1px 5ex;
        padding-top: 5.2ex;
    }
    ul.tree ul {
        background: url(data:image/gif;base64,R0lGODdhAQABAIABAAAAAP///ywAAAAAAQABAAACAkQBADs=) no-repeat 50% top;
        background-size: 1px 4ex;
        margin-top: 0.2ex;
        padding-top: 4ex;
    }
</style>
