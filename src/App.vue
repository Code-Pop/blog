<template>
  <main>
    <p>Hi, please enter your name:</p>
    <p>First: <input v-model="firstName" /></p>
    <p>Last: <input v-model="lastName" /></p>
    <p>{{ fullName }}</p>
    <p><button v-on:click="reset">Reset</button></p>
  </main>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: ''
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    }
  },
  methods: {
    reset() {
      this.firstName = ''
      this.lastName = ''
    }
  }
}
</script>

<style scoped>
main {
  font-family: Arial, Helvetica, sans-serif;
  padding: 1em;
  max-width: 240px;
  margin: 0 auto;
  background-color:#eee;
}
</style>