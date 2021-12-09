<template>
  <div id="app">
    <div v-if="!showportfolio" class="createProfile">
      <label for="create-profile">Create Contact...</label>
<!--      <input type="text" id="create-profile" v-model="text" placeholder="Enter your name">-->
      <Customeform id="create-profile" v-if="!showportfolio" @passData="createProfile"></Customeform>
<!--      <button v-on:click="createProfile">Create</button>-->
    </div>
    <img v-if="!showportfolio" alt="Vue logo" src="./assets/logo.png">

    <div class="posts">
      <portfolio v-if="showportfolio" @projectHandler="toggleHandler"></portfolio>
      <Card v-else v-for="(profile,index) in this.profiles"
            v-bind:item="profile"
            v-bind:index="index"
            v-bind:key="profile._id" :msg="profile.name" :date="profile.createdAt" :id="profile._id"
            :sname="profile.secondName" :number="profile.number" :sub="profile.sub"
            @deleteHandler="deletProfile(profile._id)"
      >
      </Card>
    </div>
  </div>
</template>
<script>
import Card from './components/card.vue'
import ProfileService from './profileService'
import Portfolio from "@/components/portfoli";
import Customeform from "@/components/form";

export default {
  name: 'App',
  data() {
    return {
      profiles: [],
      error: '',
      text: "",
      showportfolio: true,
      formData: {}
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
    async createProfile(event) {
      this.formData=event
      await ProfileService.createProfile(this.formData);
      console.log("rendereed 1")
      this.profiles = await ProfileService.getProfiles();
      console.log("rendereed 2")

    },
    async deletProfile(id) {
      console.log(id)
      await ProfileService.deletePost(id);
      this.profiles = await ProfileService.getProfiles();
    },
    toggleHandler() {
      this.showportfolio = !this.showportfolio;
    },
  },
  components: {
    Customeform,
    Portfolio,
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
