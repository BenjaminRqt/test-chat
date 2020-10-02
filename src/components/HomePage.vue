<template>
  <div v-if="isInitialized">
    <register-button/>
  </div>
</template>

<script>
import {userStore} from "../store/user-store";
import {onBeforeMount} from 'vue'
import RegisterButton from './RegisterButton.vue'

export default {
  components: {
    RegisterButton
  },
  setup() {
    onBeforeMount(async () => await userStore.init())
    return {
      userState: userStore.getState(),
      isInitialized: userStore.getIsInitialized(),
    }
  }
}
</script>
