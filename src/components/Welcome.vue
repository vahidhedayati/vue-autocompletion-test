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

Hey
          </a>
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
          <vue-autocompletion
            @key-press="updateAutoCompleteItems"
            name="vehicleName"
            placeholder="aaa"
            :selected="{id:'a',vehicleName:'alpha car'}"
            key-field="id" value-field="vehicleName"
            :items="vehicles" />

        </p>


      </section>
    </div>

    <div class="footer" role="contentinfo"></div>

  </div>
</template>

<script>
    import VueAutocompletion from 'vue-autocompletion'
    export default {
        name: 'Welcome',
        data () {
            return {
                msg: 'Welcome',
                serverInfo: null,
                showLinks: false,
                serverURL: process.env.SERVER_URL,
                vehicles:[{id:'a',vehicleName:'alpha car'},{id:'a0', vehicleName:'zyz vehic 01'},{id:'a1', vehicleName:'abc vehicle aa02'},{id:'a2', vehicleName:'vehicle03'},{id:'a3', vehicleName:'vehicle03'}]
            }
        },
        components: {
            VueAutocompletion
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

