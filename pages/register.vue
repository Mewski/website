<template>
  <v-container>
    <v-row justify="center">
      <v-card class="centered-card px-5 pb-5 text-center" elevation="5" max-width="400" width="400">
        <v-card-title class="mb-3 mt-4">create an account</v-card-title>
        <v-form>
          <v-text-field
              v-model="username"
              color="primary"
              density="comfortable"
              height="30"
              label="username"
              type="text"
              variant="outlined"
          />
          <v-text-field
              v-model="email"
              color="primary"
              density="comfortable"
              height="30"
              label="email address"
              type="email"
              variant="outlined"
          />
          <v-text-field
              v-model="password"
              color="primary"
              density="comfortable"
              height="30"
              label="password"
              type="password"
              variant="outlined"
          />
          <v-text-field
              v-model="confirmPassword"
              color="primary"
              density="comfortable"
              height="30"
              label="confirm password"
              type="password"
              variant="outlined"
          />
          <v-layout align-center class="mt-n3 mb-n3" row>
            <v-checkbox v-model="rememberMe" class="mx-auto" color="primary" label="remember me"/>
          </v-layout>
          <v-btn block color="primary" @click="register">
            register
          </v-btn>
          <v-btn class="mt-5" color="primary" to="/login" variant="text">login instead</v-btn>
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      rememberMe: false,
      loading: false
    }
  },
  methods: {
    async register() {
      console.log('login')
      const supabase = useSupabaseClient()

    }
  }
})
</script>

<style scoped>
.centered-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% + 32px));
}
</style>
