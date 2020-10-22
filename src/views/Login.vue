<template>
  <div id="container">
    <div id="inner">
      <h2 id="title">Roberto Barbering</h2>
      <h3>Login</h3>
      <div id="message">
        New to us?
        <router-link to="/register">Register</router-link>
      </div>

      <div id="form">
        <div id="email">
          <input placeholder="E-mail address" />
        </div>
        <div id="password">
          <input placeholder="Password" />
        </div>
        <div id="login-div">
          <button id="login-button" @click="$router.push('calendar')">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#container {
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#inner {
  width: 100%;
  max-width: 450px;
}

#message {
  font-size: 14px;
  position: relative;
  min-height: 1em;
  margin: 1em 0;
  background: #f8f8f9;
  padding: 1em 1.5em;
  line-height: 1.4285em;
  color: rgba(0, 0, 0, 0.87);
  transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease,
    box-shadow 0.1s ease;
  border-radius: 0.28571429rem;
  box-shadow: inset 0 0 0 1px rgba(34, 36, 38, 0.22), 0 0 0 0 transparent;
}

#form {
  /* position: relative; */
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
  margin: 1rem 0;
  padding: 16px;
  border-radius: 0.28571429rem;
  border: 1px solid rgba(34, 36, 38, 0.15);
}

#login-button {
  font-size: 16px;
  background-color: #767676 !important;
  color: #fff !important;
  text-shadow: none;
  background-image: none;
  width: 100%;
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: none;
  vertical-align: baseline;
  background: #e0e1e2 none;
  color: rgba(0, 0, 0, 0.6);
  font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  padding: 0.78571429em 1.5em;
  text-transform: none;
  text-shadow: none;
  font-weight: 700;
  line-height: 1em;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  border-radius: 0.28571429rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease,
    box-shadow 0.1s ease, background 0.1s ease;
  will-change: "";
  -webkit-tap-highlight-color: transparent;
}

#login-button:hover {
  background-color: #838383;
  color: #fff;
  text-shadow: none;
}

#email,
#password,
#login-div {
  padding: 10px 0;
}

input {
  font-size: 16px;
  width: 95%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 2.5%;
  padding-right: 2.5%;
  background: #fff;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  box-shadow: inset 0 0 0 0 transparent;
}
</style>
