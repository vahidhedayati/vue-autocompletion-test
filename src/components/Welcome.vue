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
        <h1>Welcome to my test of a failure of a plugin </h1>


        <p>
Auto Complete
          <vue-autocomplete
            @key-press="updateAutoCompleteItems"
            name="vehicleName"
            placeholder="aaa"
            :selected="[{id:'a',vehicleName:'bb'}]"
            key-field="id" value-field="vehicleName"
            :items="[{id:'a',vehicleName:'bb'}]" />

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
                vehicles:[{id:'a', name:'vehicle1'},{id:'a1', name:'vehicle2'},{id:'a2', name:'vehicle3'},{id:'a3', name:'vehicle3'}]
            }
        },
        components: {
            'vue-autocomplete':VueAutocompletion
        },
        methods: {

            updateAutoCompleteItems: function (searchValue) {
                this.vehicles=[{id:'a0', name:'vehicle01'},{id:'a1', name:'vehicle02'},{id:'a2', name:'vehicle03'},{id:'a3', name:'vehicle03'}]

            },
        },
        created: function () {

        }
    }
</script>

