<template>
  <div class="navbar navbar-default navbar-static-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <router-link  class="btn btn-sm btn-primary" :to="{name:'complex'}" >
          Complex
        </router-link>
        <router-link class="btn btn-sm btn-primary"  :to="{name:'complexfield'}" >
          Complex Field Select
        </router-link>
        <router-link class="btn btn-sm btn-primary"  :to="{name:'nonvalidation'}" >
          Non validation
        </router-link>

        <router-link class="btn btn-sm btn-primary"  :to="{name:'validation'}" >
          Validation
        </router-link>
      </div>

    </div>
  </div>
</template>
