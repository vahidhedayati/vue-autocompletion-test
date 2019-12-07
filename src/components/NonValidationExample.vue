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
        <h1>Test for vue-autocompletion  &  vue-field-select </h1>

        <div class="col-sm-6 text-white label-primary navbar "  style="color:#FFF" >

          <h1>Autocompletion</h1>
          <h4>1. vue-autocompletion overrideClearFunction = true</h4>
          <vue-autocompletion v-model="vehicle"
                              @key-press="updateAutoCompleteItems"
                              name="vehicleName"
                              :overrideClearFunction="true"

                              placeholder="aaa"
                              :selected="vehicle"
                              key-field="id" value-field="vehicleName"
                              :items="vehicles" />



          Current Vehicle  vehicle is {{vehicle}}

          <br><br>
          <h4>2. vue-autocompletion overrideClearFunction = false</h4>
          <vue-autocompletion v-model="vehicle2"
                              @key-press="updateAutoCompleteItems"
                              name="vehicleName"
                              :overrideClearFunction="false"

                              placeholder="aaa"
                              :selected="vehicle2"
                              key-field="id" value-field="vehicleName"
                              :items="vehicles" />



          Current Vehicle  vehicle2 is {{vehicle2}}

          <br><br>


          <h4>3. vue-autocompletion overrideClearFunction = false {blank object} default is false</h4>
          <vue-autocompletion v-model="vehicle3"
                              @key-press="updateAutoCompleteItems"
                              name="vehicleName"
                              :overrideClearFunction="false"
                              placeholder="aaa"
                              :selected="vehicle3"
                              key-field="id" value-field="vehicleName"
                              :items="vehicles" />


          Current Vehicle  vehicle3 is {{vehicle3}}

          <br><br>



          <h4>4. Vue Auto completion update many items :additionalProperties with objectName</h4>

          v-model will always model from where it is currently can't really step backwards in object model.
          So therefore if objectName is given it must be hanging off the current v-model object name
<br>
          When you click X every sub compontent in additionalProperties is also cleared

          <vue-autocompletion v-model="currentEdit5"
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

          <vue-autocompletion v-model="currentEdit6"
                              @key-press="updateAutoCompleteItems"
                              name="vehicleName"
                              validation='required|max:50'
                              :validationErrors="validationErrors"
                              placeholder="aaa"
                              :overrideClearFunction="false"
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
          <h4>1.vue-field-select basic</h4>
          <vue-field-select v-model="currentEdit1.vehicle" name="name"
                            keyField="id"
                            valueField="name"
                            field="select a vehicle"
                            :actualItem="currentEdit1.vehicle" :values="vehicles1" />




          Current Vehicle currentEdit1 is {{currentEdit1.vehicle}}
          <br><br>
          <h4>2. vue-field-select return promise</h4>
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
          <h4>3.vue-field-select return key/value</h4>
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


  </div>
</template>

<script>
    import VueAutocompletion from 'vue-autocompletion'
    import VueFieldSelect from 'vue-field-select'
    export default {
        name: 'Welcome',

        data () {
            return {


                validationErrors:[],
                vehicle:{id:'a',vehicleName:'vehicle 01'},
                vehicle2:{id:'a',vehicleName:'vehicle 01'},
                vehicle3:{id:'',vehicleName:''},
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

