<template>
  <v-container>
    <v-row justify="center">
      <v-card class="centered-card px-5 pb-5 text-center" elevation="5" max-width="400" width="400">
        <v-card-title class="mb-3 mt-4">login to your account</v-card-title>
        <v-form>
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
          <v-layout align-center class="mt-n3 mb-n3" row>
            <v-checkbox v-model="rememberMe" class="mx-auto" color="primary" label="remember me"/>
            <v-btn color="primary" style="margin-top: 10px" to="/recover" variant="text">
              forgot password
            </v-btn>
          </v-layout>
          <v-btn block color="primary" @click="login">
            login
          </v-btn>
          <v-btn class="mt-5" color="primary" to="/register" variant="text">create an account</v-btn>
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
      email: '',
      password: '',
      rememberMe: false,
      loading: false
    }
  },
  methods: {
    async login() {
      console.log('login')
      const supabase = useSupabaseClient()

      const email = ref(this.email)
      const password = ref(this.password)

      const loading = ref(this.loading)

      try {
        loading.value = true
        const {error} = await supabase.auth.signInWithPassword({email: email.value, password: password.value})
        if (error) throw error
        this.$router.push('/')
      } catch (error: any) {
        console.log('error', error)
        alert(error.error_description || error.message)
      } finally {
        loading.value = false
      }
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