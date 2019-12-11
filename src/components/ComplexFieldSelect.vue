<template>
  <div>
    <navigation/>
    <div id="content" role="main">
      <links/>
      <section class="row colset-2-its well">
        <h1>Test complex field select</h1>
        <div  v-for="(currentField,index) in dynamicContent"  v-if="currentField.type=='SELECT'">
          <vue-field-select v-model="findFromArray(selectItems,'id',currentField.id).currentObject"
                          :validationErrors="validationErrors"
                          :name="currentField.id" field=""
                          :actualItem="findFromArray(selectItems,'id',currentField.id).currentObject"
                          :values="currentField.values"
                          remoteKey="code"
                          remoteValue="description"
                          remoteStoreValue="code"
                          valueField="value"
                          keyField="value"
                          :validation="{required:currentField.mandatory}"></vue-field-select>

        </div>
        <h4>Curent select to be sent is : <br></h4>
        <h6>{{selectItems}}</h6>
      </section>
    </div>
  </div>
</template>
<script>
    import VueFieldSelect from 'vue-field-select'
    import Navigation from './Navigation'
    export default {
        name: 'Welcome',
        data () {
            return {
                validationErrors:[],
                selectItems:[{id:'SPORT', value:'FOOT'}, {id:'OFFICE', value:''}, {id:'HOME', value:'AWAY'}],
                dynamicContent:[
                    {id:'SPORT',
                        type:'SELECT',
                        mandatory:true,
                        values:[
                            {code:'FOOT', description:'FootBall'},
                            {code:'BASE', description:'BaseBall'},
                            {code:'RUG', description:'RUGBY'}
                        ]
                    },
                    {id:'OFFICE',
                        type:'SELECT',
                        mandatory:false,
                        values:[
                            {code:'FOC', description:'Focus'},
                            {code:'REA', description:'READ'},
                            {code:'RES', description:'Research'}
                        ]
                    },
                    {id:'HOME',
                        type:'SELECT',
                        mandatory:false,
                        values:[
                            {code:'AWAY', description:'Vacation'},
                            {code:'BUSY', description:'Busy'},
                            {code:'SPO', description:'Sports'}
                        ]
                    },
                ]
            }
        },
        components: {
            VueFieldSelect,
            Navigation,
        },
        methods: {
            findFromArray(array, key, value) {
                let currentObject = {}
                if (Array.isArray(array)) {
                    currentObject = array.filter(function (element) {
                        return element[key] == value;
                    }).shift();
                }
                return {
                    currentObject
                };
            }
        }
    }
</script>

