<template>
  <v-app v-if="!busy">
    <Transition>
      <div>
        <div>
          <TheNavbar/>
        </div>
        <v-main style="height: 100vh">
          <NuxtLayout>
            <NuxtPage/>
          </NuxtLayout>
        </v-main>
      </div>
    </Transition>
  </v-app>
  <v-app v-else/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  data() {
    return {
      busy: true,
    }
  },
  mounted() {
    this.busy = false;
  },
  watch: {
    group() {
      this.busy = true
    },
  }
})
</script>

<style scoped>

</style>
