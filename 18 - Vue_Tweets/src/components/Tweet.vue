<template>
  <div className="tweet">
    <ProfileImage :image="userImage"/>
    <!-- <img
      :src="userImage"
      className="profile"
      alt="profile"
    /> -->


    <div className="body">
      <div className="top">
        <User :userData="user"/>
        <TimeStamp :time="timeStamp"/>
      </div>
      <Message :tweet-message="message"/>
      <div className="actions">
        <!-- Font Awesome icons -->
        <i class="far fa-comment"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
        <i class="fas fa-share"></i>
      </div>
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>

<script setup>
import ProfileImage from "./ProfileImage.vue"
import User from "./User.vue"
import TimeStamp from "./TimeStamp.vue"
import Message from "./Message.vue"

defineProps({
  userImage: {
    type: String
  },
  user: {
    type: Object
  },
  timeStamp: {
    type: String
  },
  message: {
    type: String
  }
})

</script>>