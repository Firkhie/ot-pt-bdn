<template>
  <section class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-fit flex flex-row rounded-md bg-[#292734] text-white text-sm">
    <!-- Left -->
    <div class="flex-[50%] flex flex-col justify-center gap-2 px-10 py-12">
      <h5 class='pb-2'>TECH-TEST</h5>
      <h6>Create your account</h6>
      <p class="text-gray-400">Let's get started by creating your account first</p>
      <form class="flex flex-col gap-3 w-full" @submit.prevent="submitRegister">
        <div class="flex flex-col gap-1">
          <p>Email</p>
          <input
            type="email"
            v-model="email"
            class="bg-white text-black outline-none w-full p-2 rounded-sm"
            placeholder="Enter email"
            autoComplete="off"
            required
          />
        </div>
        <div class="flex flex-col gap-1">
          <p>Password</p>
          <input
            type="password"
            v-model="password"
            class="bg-white text-black outline-none w-full p-2 rounded-sm"
            placeholder="Enter password"
            autoComplete="off"
            required
          />
        </div>
        <button type="submit" class="w-full py-3 rounded-md bg-white text-black font-semibold mt-4">Register</button>
      </form>
      <div class="flex justify-center pt-2">
        <div class="flex w-fit gap-1 items-center justify-center py-2 px-3 bg-white/10 rounded-md">
          <div>
            <p class="text-white/70 sm:text-xs text-[11px]">Email: </p>
            <p class="text-white/70 sm:text-xs text-[11px]">Pass: </p>
          </div>
          <div>
            <p class="text-white/70 sm:text-xs text-[11px]">eve.holt@reqres.in</p>
            <p class="text-white/70 sm:text-xs text-[11px]">pistol</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Right -->
    <div class="flex-[50%]">
      <img src="../assets/register-img.jpg" alt="register-img" class="rounded-r-md object-cover object-center w-full h-full">
    </div>
  </section>
</template>

<script>
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'RegisterPage',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(useCounterStore, ['handleRegister']),
    submitRegister() {
      this.handleRegister(this.email, this.password)
    },
  }
}
</script>

<style scoped></style>
