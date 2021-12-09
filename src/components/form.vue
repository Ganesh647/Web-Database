<template>
  <div class="container">
    <div>
      <label for="fname">First Name</label>
      <input v-model="firstname" type="text" id="fname" name="firstname" placeholder="Your name..">
      <label for="lname">Last Name</label>
      <input v-model="seconfName" type="text" id="lname" name="lastname" placeholder="Your last name..">

      <label for="number">number</label>
      <input v-model="number" type="text" id="number" placeholder="Enter your number"><br>
      <label for="subject">Info</label>
      <textarea id="subject" v-model="subject" name="subject" placeholder="Write something.."
                style="height:200px"></textarea>
      <input @click="passData()" type="submit" value="Submit"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'customeform',
  data() {
    return {
      firstname: '',
      seconfName: '',
      number: '',
      subject: ''

    }
  },
  methods: {
    passData() {
      console.log("clicked form")
      this.$emit("passData", {fname:this.firstname, sname:this.seconfName, number:this.number, sub:this.subject})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

/*body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}*/

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
