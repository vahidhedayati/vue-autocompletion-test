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
        <h1>Welcome to my test for vue-autocompletion plugin 1.0.8+ works </h1>


        <p>
Auto Complete Should appear next to this
          <vue-autocompletion-valid
            @key-press="updateAutoCompleteItems"
            name="vehicleName"
            validation='required|max:50'
            :validationErrors="validationErrors"
            placeholder="aaa"
            :selected="{}"
            key-field="id" value-field="vehicleName"
            :items="vehicles" />

        </p>


      </section>
    </div>

    <div class="footer" role="contentinfo"></div>

  </div>
</template>

<script>
    import {VueAutocompletionValid} from 'vue-autocompletion'
    export default {
        name: 'Welcome',
        $_veeValidate: {
            validator: 'new'
        },
        data () {
            return {
                msg: 'Welcome',
                serverInfo: null,
                validationErrors:[],
                showLinks: false,
                serverURL: process.env.SERVER_URL,
                vehicles:[{id:'a',vehicleName:'vehicle 01'},{id:'a0', vehicleName:'zyz vehice 01'},
                    {id:'a1', vehicleName:'abc vehicle 02'},{id:'a2', vehicleName:'vehicle 03'},{id:'a3', vehicleName:'vehicle 03'},
                    {id:'a4', vehicleName:'abc vehicle 04'},{id:'a5', vehicleName:'vehicle 05'},{id:'a6', vehicleName:'vehicle 06'},
                    {id:'a7', vehicleName:'abc vehicle 07'},{id:'a8', vehicleName:'vehicle 08'},{id:'a9', vehicleName:'vehicle 09'}
                ]
            }
        },
        components: {
            VueAutocompletionValid
        },
        methods: {

            updateAutoCompleteItems: function (searchValue) {
               // this.vehicles=[{id:'a',vehicleName:'alpha car'},{id:'a0', name:'zyz vehic 01'},{id:'a1', name:'abc vehicle aa02'},{id:'a2', name:'vehicle03'},{id:'a3', name:'vehicle03'}]

            },
        },
        created: function () {

        }
    }
</script>

