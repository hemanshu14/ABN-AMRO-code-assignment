<template>
    <div id="app" class="container-fluid">
        <display-data :data="filteredData[0]" :root-element="rootElement" v-if="rootElement"></display-data>
    </div>
</template>

<script>
    import DataService from './data-access/Data';
    import HttpError from "./data-access/HttpError";
    import DisplayData from "./components/DisplayData";

    export default {
        name: "App",
        components: {
            DisplayData
        },
        data: () => ({
            dataResponse: null,
            errorResponse: null,
            filteredData: null,
            rootElement: null,
            tempsData: []
        }),
        async created() {
            try{
                this.dataResponse = await this.getData();
                this.rootElement = this.dataResponse.filter(el => !el.parentId)[0];
                this.filteredData =  this.getTempData();
                for(let i=0; i<this.filteredData[0].length; i++){
                    for(let j=0; j<this.filteredData.length - 1; j++){
                        if(this.filteredData[0][i].name === this.filteredData[j+1][0].parentId){
                            this.filteredData[0][i].children = this.filteredData[j+1];
                        }
                    }
                }
            }
            catch(error){
                this.errorResponse = error;
            }
        },
        methods: {
            async getData(){
                return DataService.getData()
                    .then((response) => {
                        if(response.ok){
                            return response.text();
                        }
                        throw new HttpError(response);
                    })
                    .then(
                        data => {
                            return JSON.parse(data);
                        }
                    )
            },
            getTempData(){
                for(let i =0; i<this.dataResponse.length; i++) {
                    let tempData = [];
                    tempData = this.dataResponse.filter(data => data.parentId === this.dataResponse[i].name);
                    if (tempData.length > 0) {
                        this.tempsData.push(tempData);
                    }
                }
                return this.tempsData;
            }
        }
    };
</script>
