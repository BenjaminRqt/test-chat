<template>
  <div>
    <label for="username"> Username
      <input type="text" id="username" v-model="state.username">
    </label>
    <label for="password"> Password
      <input type="password" id="password" v-model="state.password">
    </label>
    <button @click="signUp">
      Sign up
    </button>
  </div>
</template>

<script>
import {userStore} from "../store/user-store";
import {reactive, onBeforeMount} from 'vue'

export default {
  setup() {
    onBeforeMount(async () => await userStore.init())

    const state = reactive({
      username: '',
      password: ''
    })

    const signUp = () => {
      userStore.signUp(state.username, state.password)
    }

    return {
      state,
      userState: userStore.getState(),
      isInitialized: userStore.getIsInitialized(),
      signUp
    }
  }
}

</script>
