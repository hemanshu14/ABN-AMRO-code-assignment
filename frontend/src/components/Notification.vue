<template>
    <div class="row" v-if="isPopUpOpen">
        <div class="col-sm-2">
            <div class="info">
                <div class="name">
                    <label>{{name}}</label>
                </div>
                <div class="desc">
                    <span>{{description}}</span>
                </div>
                <div class="buttonDiv">
                    <button type="button" class="close buttonClass" aria-label="Close" @click="closeNotification()">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Notification",
        data: () => ({
            child: null,
            isNotificationOpen: false
        }),
        props: {
            name: String,
            description: String,
            isPopUpOpen: Boolean
        },
        async created(){
            this.isNotificationOpen = this.isPopUpOpen;
        },
        methods:{
            closeNotification(){
                this.isNotificationOpen = false;
                this.$emit('isPopUpOpen', this.isNotificationOpen);
            }
        }
    };
</script>
<style>
    .info{
        border: 1px solid;
        border-radius: 4px;
        background: white !important;
        width: 220px;
        height: 70px;
    }

    .name{
        margin-left: 11px;
        font-size: 19px;
        color: green;
        font-weight: 400;
    }

    .desc{
        margin-left: 11px;
        font-size: 14px;
        color: green;
    }
    .buttonDiv{
        margin-top: -58px;
        margin-right: -18px;
        border-radius: 4px;
    }
    .buttonClass{
        background: #003311 !important;
        color: white !important;
    }

    body{
        background:  #e0ebeb;
    }
</style>
