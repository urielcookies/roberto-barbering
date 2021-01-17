<template>
  <div class="ui inverted segment" style="margin: 0; border-radius: 0">
    <div
      class="ui large inverted secondary pointing menu"
      style="display: flex; align-items: center"
    >
      <div>
        <router-link class="item" :class="{ active: active === 'Home' }" to="/">
          Home
        </router-link>
        <!-- If login then home for client -->
      </div>
      <div class="right item">
        <router-link
          class="item"
          :class="{ active: active === 'Login' }"
          to="/login"
          >Log in</router-link
        >
        <router-link
          class="item"
          :class="{ active: active === 'Register' }"
          to="/register"
        >
          Sign Up
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      active: "Home"
    };
  },
  watch: {
    $route({ name }) {
      this.active = name;
    }
  }
};
</script>
