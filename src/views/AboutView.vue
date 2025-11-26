<script lang="ts" setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

watch(
  () => route.params.id,
  (newId, oldId) => {
    console.log(newId, oldId)
  }
)
console.log(route.params)
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div class="flex">
    <div>asdasd</div>
    <div>asdasd2</div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>