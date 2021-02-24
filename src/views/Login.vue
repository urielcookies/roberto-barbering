<template>
  <div class="ui middle aligned center aligned" style="height: 90vh">
    <br />
    <div class="column" style="display: flex; justify-content: center">
      <form class="ui large form" style="width: 450px">
        <div style="display: flex; justify-content: center">
          <h2 class="ui header">
            <i class="user icon" style="font-size: 20px;"></i>
            <div class="content">
              Login
            </div>
          </h2>
        </div>

        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="email" placeholder="E-mail address" />
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="password" placeholder="Password" />
            </div>
          </div>
          <!-- <router-link to="/calendar"> -->
          <div
            class="ui fluid large grey submit button"
            style="margin-bottom: 5px"
            v-on:click="login"
          >
            Log in
          </div>
          <!-- </router-link> -->
          <router-link to="/">
            <div class="ui fluid large basic submit button">
              Go back
            </div>
          </router-link>
          <div class="ui message">
            New to us?
            <router-link to="/register">
              Sign Up
            </router-link>
          </div>
        </div>

        <div class="ui error message"></div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      active: "Home",
      isAuthenticated: this.$store.state.isAuthenticated ? "/calendar" : "/"
    };
  },
  methods: {
    login() {
      this.$router.push("/calendar");
      this.$store.commit("setAuthentication", {
        isAuthenticated: true
      });
    }
  }
};
</script>

<style type="text/css" scoped>
body {
  background-color: #dadada;
}
body > .grid {
  height: 100%;
}
.image {
  margin-top: -100px;
}
.column {
  /* max-width: 450px; */
}
</style>
