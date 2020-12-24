<template>
  <body>
    <div class="pusher">
      <div class="ui inverted vertical masthead center aligned segment">
        <div class="ui container">
          <div class="ui large secondary inverted pointing menu">
            <a class="toc item">
              <i class="sidebar icon"></i>
            </a>
            <a class="active item">Home</a>
            <a class="item">Work</a>
            <a class="item">Company</a>
            <a class="item">Careers</a>
            <div class="right item" style="display:block">
              <router-link class="ui inverted button" to="/login"
                >Log in
              </router-link>
              <router-link class="ui inverted button" to="/register"
                >Sign Up
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "Navbar",
  mounted() {
    console.log("mounted");
    const $ = window.$;
    $(document).ready(function() {
      // fix menu when passed
      $(".masthead").visibility({
        once: false,
        onBottomPassed: function() {
          $(".fixed.menu").transition("fade in");
        },
        onBottomPassedReverse: function() {
          $(".fixed.menu").transition("fade out");
        }
      });

      // create sidebar and attach to menu open
      $(".ui.sidebar").sidebar("attach events", ".toc.item");
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hidden.menu {
  display: none;
}

.masthead.segment {
  padding: 1em 0em;
}
.masthead .logo.item img {
  margin-right: 1em;
}
.masthead .ui.menu .ui.button {
  margin-left: 0.5em;
}
.masthead h1.ui.header {
  margin-top: 3em;
  margin-bottom: 0em;
  font-size: 4em;
  font-weight: normal;
}
.masthead h2 {
  font-size: 1.7em;
  font-weight: normal;
}

.ui.vertical.stripe {
  padding: 8em 0em;
}
.ui.vertical.stripe h3 {
  font-size: 2em;
}
.ui.vertical.stripe .button + h3,
.ui.vertical.stripe p + h3 {
  margin-top: 3em;
}
.ui.vertical.stripe .floated.image {
  clear: both;
}
.ui.vertical.stripe p {
  font-size: 1.33em;
}
.ui.vertical.stripe .horizontal.divider {
  margin: 3em 0em;
}

.quote.stripe.segment {
  padding: 0em;
}
.quote.stripe.segment .grid .column {
  padding-top: 5em;
  padding-bottom: 5em;
}

.footer.segment {
  padding: 5em 0em;
}

.secondary.pointing.menu .toc.item {
  display: none;
}

@media only screen and (max-width: 700px) {
  .ui.fixed.menu {
    display: none !important;
  }
  .secondary.pointing.menu .item,
  .secondary.pointing.menu .menu {
    display: none;
  }
  .secondary.pointing.menu .toc.item {
    display: block;
  }
  .masthead h1.ui.header {
    font-size: 2em;
    margin-top: 1.5em;
  }
  .masthead h2 {
    margin-top: 0.5em;
    font-size: 1.5em;
  }
}
</style>
