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

          <router-link :to="{name:'validation'}" >
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

      <router-link :to="{name:'validation'}" >
        Validation
      </router-link>


      <section class="row colset-2-its well">
        <h1>Test for vue-autocompletion-valid , vue-field-select & vue-field-select-valid </h1>

        <div class="col-sm-6 text-white label-primary navbar " style="color:#FFF">
          <h1>Autocompletion</h1>
          <h4>1. vue-autocompletion-valid overrideClearFunction = true</h4>
          <vue-autocompletion-valid v-model="vehicleTest.vehicle"
                                    @key-press="updateAutoCompleteItems"
                                    :overrideClearFunction="true"
                                    name="vehicleName"
                                    validation='required|max:50'
                                    :validationErrors="validationErrors"
                                    placeholder="aaa"
                                    :selected="vehicleTest.vehicle"
                                    key-field="id" value-field="vehicleName"
                                    :items="vehicles" />

          Current Vehicle  - vehicleTest is {{vehicleTest}}

          <br><br>

          <h4>2. vue-autocompletion-valid overrideClearFunction = false - you will notice item does not clear when pressing X on search unlike above</h4>
          <vue-autocompletion-valid v-model="vehicleTest1.vehicle"
                                    @key-press="updateAutoCompleteItems"
                                    :overrideClearFunction="false"
                                    name="vehicleName"
                                    validation='required|max:50'
                                    :validationErrors="validationErrors"
                                    placeholder="aaa"
                                    :selected="vehicleTest1.vehicle"
                                    key-field="id" value-field="vehicleName"
                                    :items="vehicles" />


          Current Vehicle  - vehicleTest1 is {{vehicleTest1}}
          <br><br>

          <h4>3. vue-autocompletion-valid overrideClearFunction = false - you will notice item does clear due to item not being set</h4>
          <vue-autocompletion-valid v-model="vehicleTest2"
                                    @key-press="updateAutoCompleteItems"
                                    :overrideClearFunction="false"
                                    name="vehicleName1"
                                    validation='required|max:50'
                                    :validationErrors="validationErrors"
                                    placeholder="aaa"
                                    :selected="vehicleTest2"
                                    key-field="id" value-field="vehicleName1" remote-value="vehicleName"
                                    :items="vehicles" />


          Current Vehicle  - vehicleTest2 is {{vehicleTest2}}
          <br><br>


          <h4>4. Vue Auto completion update many items :additionalProperties with objectName</h4>
          v-model will always model from where it is currently can't really step backwards in object model.
          So therefore if objectName is given it must be hanging off the current v-model object name
          <br>
          When you click X every sub compontent in additionalProperties is also cleared
          <vue-autocompletion-valid v-model="currentEdit5"
                                    @key-press="updateAutoCompleteItems"
                                    name="vehicleName"
                                    validation='required|max:50'
                                    :validationErrors="validationErrors"
                                    placeholder="aaa"
                                    :overrideClearFunction="true"
                                    :selected="currentEdit5"
                                    key-field="id" value-field="vehicleName" remote-value="name"
                                    :additionalProperties="[{keyField:'chassis', remoteKey:'chassisNumber'},
                                  {objectName:'country', keyField:'id', remoteKey:'countryId', valueField:'name', remoteValue:'countryName'},
                                   {keyField:'colour'}]"
                                    :items="vehicles3" />

          Current Vehicle currentEdit5 is {{currentEdit5}}
          <br><br>

          <h4>4.1 Vue Auto completion update many items :additionalProperties with objectName as seconday auto complete</h4>
          v-model will always model from where it is currently can't really step backwards in object model.
          So therefore if objectName is given it must be hanging off the current v-model object name
          <br>
          When you click X every sub compontent in additionalProperties is also cleared
          <vue-autocompletion-valid v-model="currentEdit5.country"
                                    @key-press="updateAutoCompleteItems"
                                    name="name"
                                    validation='required|max:50'
                                    :validationErrors="validationErrors"
                                    placeholder="aaa"
                                    :overrideClearFunction="true"
                                    :selected="currentEdit5.country"
                                    :items="vehicles3" />

          Current Vehicle currentEdit5.country is {{currentEdit5.country}}
          <br><br>


          <h4>5. Vue Auto completion update many items :additionalProperties with no objectName (flat}</h4>
          When you click X every sub compontent in additionalProperties is also cleared
          <vue-autocompletion-valid v-model="currentEdit6"
                                    @key-press="updateAutoCompleteItems"
                                    name="vehicleName"
                                    validation='required|max:50'
                                    :validationErrors="validationErrors"
                                    placeholder="aaa"
                                    :overrideClearFunction="true"
                                    :selected="currentEdit6"
                                    key-field="id" value-field="vehicleName" remote-value="name"
                                    :additionalProperties="[{keyField:'chassis', remoteKey:'chassisNumber'},
                                  {keyField:'countryId', valueField:'countryName'},
                                   {keyField:'colour'}]"
                                    :items="vehicles3" />

          Current Vehicle currentEdit6 is {{currentEdit6}}
          <br><br>




          <hr/>
        </div>
        <div class="col-sm-6 text-white label-success navbar "  style="color:#FFF">
          <h1>FieldSelect</h1>

          <h4>1.vue-field-select / basic</h4>
          <vue-field-select v-model="currentEdit1.vehicle" name="name"
                            keyField="id"
                            valueField="name"
                            field="select a vehicle"
                            :actualItem="currentEdit1.vehicle" :values="vehicles1" />

          Current Vehicle currentEdit1 is {{currentEdit1.vehicle}}
          <br><br>
          <h4>2. vue-field-select-valid / validation</h4>
          <vue-field-select-valid v-model="currentEdit2" name="vehicName"
                                  :validationErrors="validationErrors"
                                  validation='required'
                                  remoteKey="vhecId"
                                  remoteValue="vehicleName"
                                  keyField="vehicleId"
                                  valueField="vehicName"
                                  field="select a vehicle"
                                  :actualItem="currentEdit2" :values="vehicles2" />

          Current Vehicle currentEdit2 is {{currentEdit2}}
          <br><br>
          <h4>3.vue-field-select return promise</h4>
          <vue-field-select  name="vehicleName"
                             :returnPromise="true"
                             @return-promise="returnPromise"
                             remoteKey="id"
                             remoteValue="name"
                             keyField="vehicleId"
                             valueField="vehicleName"
                             field="select a vehicle"
                             :actualItem="currentEdit3" :values="vehicles3"/>

          Current Vehicle currentEdit3 is {{currentEdit3}}
          <br><br>
          <h4>4. vue-field-select send key / value</h4>
          <vue-field-select  name="name"
                             @id-sent="updateSelectKey"
                             @search-value="updateSelectValue"
                             keyField="id"
                             valueField="name"
                             field="select a vehicle"
                             :actualItem="currentEdit4" :values="vehicles4"/>

          Current Vehicle currentEdit4 is {{currentEdit4}}
          <br>
        </div>
      </section>
    </div>


    <vue-paginater :total="300" :max="10" @offset="giveOffset"/>
  </div>
</template>

<script>
    import {VueAutocompletionValid} from 'vue-autocompletion'
    import VueFieldSelect from 'vue-field-select'
    import {VueFieldSelectValid} from 'vue-field-select'
    import VuePaginater from 'vue-paginater'
    export default {
        name: 'Welcome',
        $_veeValidate: {
            validator: 'new'
        },
        data () {
            return {


                validationErrors:[],

                vehicle:{id:'a',vehicleName:'vehicle 01'},
                vehicleTest:{id:'', vehicle:{id:'a',vehicleName:'vehicle 01'}},
                vehicleTest1:{id:'', vehicle:{id:'a',vehicleName:'vehicle 01'}},
                //Item is not set and clears with X function
                vehicleTest2:{id:'',vehicleName1:''},

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



                vehicles2:[{vhecId:'a',vehicleName:'vehicle 01'},{vhecId:'a0', vehicleName:'zyz vehicle 01'},
                    {vhecId:'a1', vehicleName:'abc vehicle 02'},{vhecId:'a2', vehicleName:'vehicle 03'},{vhecId:'a3', vehicleName:'vehicle 03'},
                    {vhecId:'a4', vehicleName:'abc vehicle 04'},{vhecId:'a5', vehicleName:'vehicle 05'},{vhecId:'a6', vehicleName:'vehicle 06'},
                    {vhecId:'a7', vehicleName:'abc vehicle 07'},{vhecId:'a8', vehicleName:'vehicle 08'},{vhecId:'a9', vehicleName:'vehicle 09'}],
                currentEdit2: {id:'', vehicleId:'a',vehicName:'vehicle 01', someOtherProperty:''},


                vehicles3:[ {id:'a',name:'vehicle 01', colour:'red', chassisNumber:'x1', steering:'Power', countryId:'1', countryName:'France'},
                    {id:'a0', name:'zyz vehicle 01',colour:'blue', chassisNumber:'x2', steering:'Manual', countryId:'2', countryName:'Italy'},
                    {id:'a1', name:'abc vehicle 02',colour:'green', chassisNumber:'x3', steering:'Power Steering', countryId:'3', countryName:'Denmark'},
                    {id:'a2', name:'vehicle 03',colour:'orange', chassisNumber:'x4', steering:'Manual', countryId:'4', countryName:'Poland'},
                    {id:'a3', name:'vehicle 03',colour:'black', chassisNumber:'x5', steering:'Power Steering', countryId:'4', countryName:'Germany'}],
                currentEdit3: {id:'', vehicleId:'', vehicleName:'', chassisNumber:'',colour:'',steering:'', someOtherProperty:''},

                currentEdit5: {id:'a',  vehicleName:'vehicle 01',country:{id:'1', name:'France'}, colour:'red', chassisNumber:'x1', steering:'Power',  someOtherProperty:''},
                currentEdit6: {id:'a',  vehicleName:'vehicle 01',colour:'red', chassisNumber:'x1', steering:'Power', countryId:'1', countryName:'France', someOtherProperty:''},

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
            VueFieldSelectValid,
            VuePaginater
        },
        methods: {
            giveOffset(offset) {
                console.log('currentOffet '+offset)
                //MyService.fetch('balh?offset='+offset)
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
            /**
             * This would be your AJAX call to get data back based on the user's input
             */
            updateAutoCompleteItems: function (searchValue) {
                // this.vehicles=[{id:'a',vehicleName:'alpha car'},{id:'a0', name:'zyz vehic 01'},{id:'a1', name:'abc vehicle aa02'},{id:'a2', name:'vehicle03'},{id:'a3', name:'vehicle03'}]
                /**
                 *
                 * An example
                 *
                 * if (searchValue.length>=3) {
                var variables = $.param({search:searchValue});
                variables+="&max=40&offset=0";
                MyService.fetch('/objectListing/search?'+params)
               .then((res) => {
                   if (res && res.data) {
                       this.myRemoteObjectsList = res.data;
                       // Should return json array something like this
                       // [
                       //  {id:'something1', name:'something1'},
                       //  {id:'something2', name:'something2'},
                       //  {id:'something3', name:'something3'}
                       // ]
                   }
               });
            }
                 */

            },
        },
        mounted: function () {
            this.vehicle={id:'a',vehicleName:'vehicle 01'}
            //this.vehicleTest2={id:'a',vehicleName:'vehicle 01'}
            this.currentEdit5.id='a'
            this.currentEdit5.vehicleName='vehicle 01'
        }
    }
</script>

