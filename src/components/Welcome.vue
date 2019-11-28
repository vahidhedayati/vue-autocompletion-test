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

          <router-link :to="{name:'complex'}" >
            Complex
          </router-link>
          <router-link :to="{name:'nonvalidation'}" >
            Non validation
          </router-link>

          <router-link :to="{name:'Welcome'}" >
            Validation
          </router-link>
        </div>

      </div>
    </div>



    <div id="content" role="main">
      <router-link :to="{name:'complex'}" >
       Complex
      </router-link>

      <router-link :to="{name:'nonvalidation'}" >
        Non validation
      </router-link>

      <router-link :to="{name:'Welcome'}" >
        Validation
      </router-link>


      <section class="row colset-2-its">
        <h1>Test for vue-autocompletion-valid , vue-field-select & vue-field-select-valid </h1>

        0. vue-autocompletion-valid


          <vue-autocompletion-valid v-model="vehicle"
            @key-press="updateAutoCompleteItems"
            name="vehicleName"
            validation='required|max:50'
            :validationErrors="validationErrors"
            placeholder="aaa"
            :selected="vehicle"
            key-field="id" value-field="vehicleName"
            :items="vehicles" />



        Current Vehicle is {{vehicle}}
        <br><br>
        1.vue-field-select / basic
        <vue-field-select v-model="currentEdit1.vehicle" name="name"
                          keyField="id"
                          valueField="name"
                          field="select a vehicle"
                          :actualItem="currentEdit1.vehicle" :values="vehicles1" />

        Current Vehicle is {{currentEdit1.vehicle}}
        <br><br>
        2. vue-field-select-valid / validation
        <vue-field-select-valid v-model="currentEdit2" name="vehicName"
                          :validationErrors="validationErrors"
                          validation='required'
                          remoteKey="vhecId"
                          remoteValue="vehicleName"
                          keyField="vehicleId"
                          valueField="vehicName"
                          field="select a vehicle"
                          :actualItem="currentEdit2" :values="vehicles2" />

        Current Vehicle is {{currentEdit2}}
        <br><br>
        3.vue-field-select return promise
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
        4. vue-field-select send key / value
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



  </div>
</template>

<script>
    import {VueAutocompletionValid} from 'vue-autocompletion'
    import VueFieldSelect from 'vue-field-select'
    import {VueFieldSelectValid} from 'vue-field-select'
    export default {
        name: 'Welcome',
        $_veeValidate: {
            validator: 'new'
        },
        data () {
            return {


                validationErrors:[],

                vehicle:{id:'',name:''},


                vehicles:[{id:'a',vehicleName:'vehicle 01'},{id:'a0', vehicleName:'zyz vehice 01'},
                    {id:'a1', vehicleName:'abc vehicle 02'},{id:'a2', vehicleName:'vehicle 03'},{id:'a3', vehicleName:'vehicle 03'},
                    {id:'a4', vehicleName:'abc vehicle 04'},{id:'a5', vehicleName:'vehicle 05'},{id:'a6', vehicleName:'vehicle 06'},
                    {id:'a7', vehicleName:'abc vehicle 07'},{id:'a8', vehicleName:'vehicle 08'},{id:'a9', vehicleName:'vehicle 09'}
                ],

                vehicles1:[{id:'a',name:'vehicle 01'},{id:'a0', name:'zyz vehicle 01'},
                    {id:'a1', name:'abc vehicle 02'},{id:'a2', name:'vehicle 03'},{id:'a3', name:'vehicle 03'},
                    {id:'a4', name:'abc vehicle 04'},{id:'a5', name:'vehicle 05'},{id:'a6', name:'vehicle 06'},
                    {id:'a7', name:'abc vehicle 07'},{id:'a8', name:'vehicle 08'},{id:'a9', name:'vehicle 09'}],
                currentEdit1: {id:'', vehicle:{id:'a', name:'vehicle 01'}, someOtherProperty:''},



                vehicles2:[{vhecId:'a',vehicleName:'vehicle 01'},{vhecId:'a0', vehicleName:'zyz vehicle 01'},
                    {vhecId:'a1', vehicleName:'abc vehicle 02'},{vhecId:'a2', vehicleName:'vehicle 03'},{vhecId:'a3', vehicleName:'vehicle 03'},
                    {vhecId:'a4', vehicleName:'abc vehicle 04'},{vhecId:'a5', vehicleName:'vehicle 05'},{vhecId:'a6', vehicleName:'vehicle 06'},
                    {vhecId:'a7', vehicleName:'abc vehicle 07'},{vhecId:'a8', vehicleName:'vehicle 08'},{vhecId:'a9', vehicleName:'vehicle 09'}],
                currentEdit2: {id:'', vehicleId:'a',vehicName:'vehicle 01', someOtherProperty:''},
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
            VueAutocompletionValid,
            VueFieldSelect,
            VueFieldSelectValid
        },
        methods: {
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
            updateAutoCompleteItems: function (searchValue) {
               // this.vehicles=[{id:'a',vehicleName:'alpha car'},{id:'a0', name:'zyz vehic 01'},{id:'a1', name:'abc vehicle aa02'},{id:'a2', name:'vehicle03'},{id:'a3', name:'vehicle03'}]

            },
        },
        created: function () {

        }
    }
</script>

