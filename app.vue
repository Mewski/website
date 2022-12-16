<template>
  <v-app>
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
</template>

<script lang="ts">

</script>

<style scoped>

</style>