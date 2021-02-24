<template>
  <div class="ui inverted segment" style="margin: 0; border-radius: 0">
    <div
      class="ui large inverted secondary pointing menu"
      style="display: flex; align-items: center"
    >
      <div>
        <router-link
          class="item"
          :class="{ active: active === 'Calendar' }"
          :to="isAuthenticatedRoute"
        >
          Home
        </router-link>
        <!-- If login then home for client -->
      </div>
      <div class="right item" v-if="authCheck">
        <router-link
          v-on:click="logout"
          class="item"
          :class="{ active: active === 'Login' }"
          to="/"
          >Log out</router-link
        >
      </div>

      <div class="right item" v-if="!authCheck">
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
      active: "Home",
      isAuthenticated: this.$store.state.isAuthenticated,
      isAuthenticatedRoute: this.$store.state.isAuthenticated
        ? "/calendar"
        : "/"
    };
  },
  methods: {
    logout() {
      this.$store.commit("setAuthentication", {
        isAuthenticated: false
      });
    }
  },
  computed: {
    authCheck() {
      return this.$store.state.isAuthenticated;
    }
  },
  watch: {
    $route({ name }) {
      this.active = name;
      if (this.active === "Calendar" && !this.$store.state.isAuthenticated)
        this.$router.push("/");
    }
  }
};
</script>
