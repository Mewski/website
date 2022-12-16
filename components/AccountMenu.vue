<template>
  <div class="mr-2">
    <v-menu v-model="menu" :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <v-btn min-height="44px" v-bind="props">
          <v-avatar class="mr-2" color="primary" density="compact">AK</v-avatar>
          Mewski
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>

      <v-card elevation="10" min-width="300">
        <v-list>
          <v-list-item>
            <v-list-item-title>Mewski</v-list-item-title>
            <v-list-item-subtitle>Lead Developer</v-list-item-subtitle>
          </v-list-item>
          <v-divider class="mt-2"></v-divider>
          <v-list-item class="mt-2" link>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>


<script lang="ts">
export default {
  name: "AccountMenu",
  data: () => ({
    menu: false,
  }),
}
</script>

<style scoped>

</style>