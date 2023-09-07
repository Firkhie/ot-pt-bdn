import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', {
  state: () => ({ 
    baseUrl: 'https://reqres.in/api',
    users: []
  }),
  getters: {
    // doubleCount: (state) => state.count * 2,
  },
  actions: {
    async handleRegister(email, password) {
      try {
        const user = await axios({
          url: `${this.baseUrl}/register`,
          method: 'post',
          data: { email, password }
        })
        localStorage.setItem('access_token', user.data.token)
        this.router.push('/users')
      } catch (err) {
        console.log(err)
      }
    },
    handleLogout() {
      localStorage.clear()
      this.router.push('/')
    },
    async fetchUsers(page = 1) {
      try {
        const users = await axios.get(`${this.baseUrl}/users?page=${page}`)
        this.users = users.data.data
      } catch (err) {
        console.log(err)
      }
    }
  },
})