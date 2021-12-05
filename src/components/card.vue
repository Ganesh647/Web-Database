<template>
  <div class="card" >
    <div class="details" >
      <div class="user_photo horizontal_center" id="user_photo">
        <img src="https://randomuser.me/api/portraits/women/95.jpg">
      </div>
      <div class="content">
        <p id="user_value" style="text-transform: capitalize;">{{ msg }}</p>
        <p id="Created">Created at {{`${date.getDate()}/${date.getMonth()}`}}</p>
      </div>
    </div>
    <button @click="onDelete()" class="delete">Delete</button>
  </div>
</template>


<script>
export default {
  name: 'Card',
  props: {
    msg: String,
    date:Date,
    id:String
  },
  methods:{
    onDelete(){
      console.log("clicked")
      this.$emit("deleteHandler")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.delete{
  color: red;
}
.card {
  position: relative;
  padding: 20px 0;
  width: 60%;
  background: #f8efef;
  border-radius: 3px;
  box-shadow: 0 0 1px rgb(0 0 0 / 50%);
  overflow: hidden;
  text-align: center;
  z-index: 1;
  margin: auto;
  max-height: 150px;
}

.user_photo {
  float: left;
  /*position: relative;*/
  margin-left: auto;
  margin-right: auto;
  padding-left: 40px;
}

.content {
  float: none;
  justify-content: space-between;
  padding-right: 40px;
}

.card .user_photo img {
  width: 150px;
  border-radius: 50%;
}

</style>
