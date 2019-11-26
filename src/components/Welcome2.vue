<template>
  <div>
    <div class="navbar navbar-default navbar-static-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/#">
            Hi :)
          </a>
          <router-link :to="{name:'nonvalidation'}" >
            Non validation
          </router-link>
          <router-link :to="{name:'Welcome'}" >
            Validation
          </router-link>
        </div>
        <div class="navbar-collapse collapse" aria-expanded="false" style="height: 0.8px;">
          <ul class="nav navbar-nav navbar-right">

        <li>Presto</li>

          </ul>
        </div>
      </div>
    </div>

    <div class="svg" role="presentation">
   Nice!
    </div>

    <div id="content" role="main">
      <section class="row colset-2-its">
        <h1>Test for vue-autocompletion  &  vue-field-select </h1>



          0. vue-autocompletio

          <vue-autocompletion v-model="vehicle"
            @key-press="updateAutoCompleteItems"
            name="vehicleName"


            placeholder="aaa"
            :selected="vehicle"
            key-field="id" value-field="vehicleName"
            :items="vehicles" />



        Current Vehicle is {{vehicle}}

<br><br>

        1.vue-field-select basic
        <vue-field-select v-model="currentEdit1.vehicle" name="name"
                          keyField="id"
                          valueField="name"
                          field="select a vehicle"
                          :actualItem="currentEdit1.vehicle" :values="vehicles1" />




        Current Vehicle is {{currentEdit1.vehicle}}
        <br><br>
        2. vue-field-select return promise
        <vue-field-select  name="vehicleName"
                           :returnPromise="true"
                           @return-promise="returnPromise"
                           remoteKey="id"
                           remoteValue="name"
                           keyField="vehicleId"
                           valueField="vehicleName"
                           field="select a vehicle"
                           :actualItem="currentEdit3" :values="vehicles3"/>

        Current Vehicle is {{currentEdit3}}
        <br><br>
        3.vue-field-select return key/value
        <vue-field-select  name="name"
                           @id-sent="updateSelectKey"
                           @search-value="updateSelectValue"
                           keyField="id"
                           valueField="name"
                           field="select a vehicle"
                           :actualItem="currentEdit4" :values="vehicles4"/>
        Current Vehicle is {{currentEdit4}}
        <br>

      </section>
    </div>

    <div class="footer" role="contentinfo"></div>

  </div>
</template>

<script>
    import VueAutocompletion from 'vue-autocompletion'
    import VueFieldSelect from 'vue-field-select'
    export default {
        name: 'Welcome',

        data () {
            return {
                msg: 'Welcome',
                serverInfo: null,
                validationErrors:[],
                vehicle:{id:'a',vehicleName:'vehicle 01'},
                showLinks: false,
                serverURL: process.env.SERVER_URL,
                vehicles:[{id:'a',vehicleName:'vehicle 01'},{id:'a0', vehicleName:'zyz vehice 01'},
                    {id:'a1', vehicleName:'abc vehicle 02'},{id:'a2', vehicleName:'vehicle 03'},{id:'a3', vehicleName:'vehicle 03'},
                    {id:'a4', vehicleName:'abc vehicle 04'},{id:'a5', vehicleName:'vehicle 05'},{id:'a6', vehicleName:'vehicle 06'},
                    {id:'a7', vehicleName:'abc vehicle 07'},{id:'a8', vehicleName:'vehicle 08'},{id:'a9', vehicleName:'vehicle 09'}
                ],
                vehicles1:[{id:'a',name:'vehicle 01'},{id:'a0', name:'zyz vehicle 01'},
                    {id:'a1', name:'abc vehicle 02'},{id:'a2', name:'vehicle 03'},{id:'a3', name:'vehicle 03'},
                    {id:'a4', name:'abc vehicle 04'},{id:'a5', name:'vehicle 05'},{id:'a6', name:'vehicle 06'},
                    {id:'a7', name:'abc vehicle 07'},{id:'a8', name:'vehicle 08'},{id:'a9', name:'vehicle 09'}],
                currentEdit1: {id:'', vehicle:{id:'', name:''}, someOtherProperty:''},

                vehicles3:[ {id:'a',name:'vehicle 01', colour:'red', chassisNumber:'x', steering:'Power'},
                    {id:'a0', name:'zyz vehicle 01',colour:'red', chassisNumber:'x', steering:'Power'},
                    {id:'a1', name:'abc vehicle 02',colour:'red', chassisNumber:'x', steering:'Power'},
                    {id:'a2', name:'vehicle 03',colour:'red', chassisNumber:'x', steering:'Power'},
                    {id:'a3', name:'vehicle 03',colour:'red', chassisNumber:'x', steering:'Power'}],
                currentEdit3: {id:'', vehicleId:'', vehicleName:'', chassisNumber:'',colour:'',steering:'', someOtherProperty:''},
                vehicles4:[{id:'a',name:'vehicle 01'},{id:'a0', name:'zyz vehicle 01'},
                    {id:'a1', name:'abc vehicle 02'},{id:'a2', name:'vehicle 03'},{id:'a3', name:'vehicle 03'},
                    {id:'a4', name:'abc vehicle 04'},{id:'a5', name:'vehicle 05'},{id:'a6', name:'vehicle 06'},
                    {id:'a7', name:'abc vehicle 07'},{id:'a8', name:'vehicle 08'},{id:'a9', name:'vehicle 09'}],
                currentEdit4: {id:'', name:''},
            }
        },
        components: {
            VueAutocompletion,
            VueFieldSelect,
        },
        methods: {

            updateAutoCompleteItems: function (searchValue) {
               // this.vehicles=[{id:'a',vehicleName:'alpha car'},{id:'a0', name:'zyz vehic 01'},{id:'a1', name:'abc vehicle aa02'},{id:'a2', name:'vehicle03'},{id:'a3', name:'vehicle03'}]

            },
            updateSelectKey:function(value) {
                this.currentEdit4.id=value
            },
            updateSelectValue:function(value) {
                this.currentEdit4.name=value
            },
            returnPromise:function(data) {
                // for (var key in data) {
                //     this.currentEdit[key]=data[key]
                // }
                this.currentEdit3.chassisNumber=data.chassisNumber
                this.currentEdit3.colour=data.colour
                this.currentEdit3.steering=data.steering

                this.currentEdit3.vehicleId=data.id
                this.currentEdit3.vehicleName=data.name
            },
        },
        created: function () {

        }
    }
</script>

