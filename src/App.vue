<template>
  <div id="app">
    <div class="createProfile">
      <label for="create-profile">Create Contact...</label>
      <input type="text" id="create-profile" v-model="text" placeholder="Enter your name">
      <button v-on:click="createProfile">Create</button>
    </div>
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="posts">
      <Card v-for="(profile,index) in this.profiles"
            v-bind:item="profile"
            v-bind:index="index"
            v-bind:key="profile._id" :msg="profile.name" :date="profile.createdAt" :id="profile._id"
            @deleteHandler="deletProfile(profile._id)"
            >
      </Card>
    </div>
  </div>
</template>
<script>
import Card from './components/card.vue'
import ProfileService from './profileService'

export default {
  name: 'App',
  data() {
    return {
      profiles: [],
      error: '',
      text: "",
    }
  },
  async created() {
    try {
      this.profiles = await ProfileService.getProfiles();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async createProfile() {
      await ProfileService.createProfile(this.text);
      this.profiles = await ProfileService.getProfiles();
    },
    async deletProfile(id) {
      console.log(id)
      await ProfileService.deletePost(id);
      this.profiles = await ProfileService.getProfiles();
    }
  },
  components: {
    Card
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
