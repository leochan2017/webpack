<template>
  <div id="app">
    {{#router}}
    <router-view/>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}

{{/unless}}
export default {
  name: 'App'{{#router}},
  {{/router}}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
