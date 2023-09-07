<template>
  <section class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit h-fit flex flex-col gap-4 rounded-md bg-[#292734] text-white text-sm p-8">
    <div class="flex items-center justify-between">
      <h5>User List</h5>
      <button class="py-1 px-3 rounded-sm bg-white text-black font-semibold text-xs" @click.prevent="goLogout">Logout</button>
    </div>
    <hr/>
    <div class="grid grid-cols-2 gap-x-10 gap-y-5">
      <!-- Fetch data not finished -->
      <div v-if="isLoading">
        <p>Loading ...</p>
      </div>
      <!-- Fetch data finished -->
      <div v-if="!isLoading" v-for="user in users" :key="user.id" class="flex gap-2">
        <!-- Avatar -->
        <img :src="user.avatar" alt="">
        <!-- Basic Info -->
        <div>
          <p class="font-semibold">{{ user.first_name + ' ' + user.last_name }}</p>
          <p class="font-light">{{ user.email }}</p>
        </div>
      </div>
    </div>
    <div class="w-full flex items-center justify-center gap-2 pt-5">
      <button class="py-1 px-4 rounded-sm bg-white text-black font-medium" @click.prevent="prevBtn">Prev</button>
      <p class="py-1 px-4 rounded-sm bg-white text-black font-medium">{{ currentPage }}</p>
      <button class="py-1 px-4 rounded-sm bg-white text-black font-medium" @click.prevent="nextBtn">Next</button>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'UsersPage',
  data() {
    return {
      isLoading: true,
      currentPage: 1
    }
  },
  computed: {
    ...mapState(useCounterStore, ['users'])
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchUsers']),
    async getData() {
      try {
        await this.fetchUsers(this.currentPage)
      } catch (err) {
        console.log(err)
      } finally {
        this.isLoading = false
      }
    },
    ...mapActions(useCounterStore, ['handleLogout']),
    goLogout() {
      this.handleLogout()
    },
    prevBtn() {
      if (this.currentPage === 2) {
        this.currentPage -= 1
        this.getData()
      }
      console.log(this.currentPage)
    },
    nextBtn() {
      if (this.currentPage === 1) {
        this.currentPage += 1
        this.getData()
      }
      console.log(this.currentPage)
    }
  },
  created() {
    this.getData()
  }
}
</script>

<style scoped></style>
