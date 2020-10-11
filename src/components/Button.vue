<template>
  <button v-on:click="onclickHandler" class="buttonUI" :style="styleObject">
    {{ content }}
  </button>
</template>

<script>
const colors = {
  basic: {
    background: "transparent none !important",
    color: "rgba(0,0,0,.6)",
    fontWeight: "400",
    borderRadius: ".28571429rem",
    textTransform: "none",
    textShadow: "none !important",
    boxShadow: "0 0 0 1px rgba(34,36,38,.15)"
  },
  teal: {
    backgroundColor: "#009c95",
    color: "#fff"
  }
};

export default {
  name: "Button",
  props: {
    color: String,
    content: String,
    onclick: Function
  },
  data() {
    return {
      styleObject: colors[this.color]
    };
  },
  methods: {
    onclickHandler() {
      this.$emit("onclick");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buttonUI {
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: none;
  vertical-align: baseline;
  background: #e0e1e2 none;
  color: rgba(0, 0, 0, 0.6);
  font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  margin: 0 0.25em;
  padding: 0.78571429em 1.5em 0.78571429em;
  text-transform: none;
  text-shadow: none;
  font-weight: 700;
  line-height: 1em;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  border-radius: 0.28571429rem;
}

button:hover {
  border: black solid 0.5px !important;
}
</style>
