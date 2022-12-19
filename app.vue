<template>
  <v-app v-if="!busy">
    <Transition>
      <div>
        <div>
          <TheNavbar/>
        </div>
        <v-main>
          <NuxtLayout>
            <NuxtPage/>
          </NuxtLayout>
        </v-main>
      </div>
    </Transition>
  </v-app>
  <v-app v-else />
</template>

<script>
export default {
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
}
</script>

<style scoped>
</style>