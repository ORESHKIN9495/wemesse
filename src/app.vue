<template>
  <div class="container">
    <component_a />
    <component_b />
    <component_c />
    <component_d />
  </div>

  <router-view />
</template>

<style lang="scss">
.container {
  background: no-repeat center url("./assets/images/heru-personality.svg");
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;

  max-width: 1280px;
  margin: 0 auto;
}
:root {
  --gap: 20px;
}

// project reset css
* {
  box-sizing: border-box;

  // remove highlights on tap on mobile
  * {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  html,
  body {
    background: rgb(0, 0, 0);
    margin: 0;
  }

  body {
    position: relative;
  }

  main,
  section {
    position: relative;
  }

  p {
    color: rgba(255, 255, 255, 0.418);
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 400;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  b {
    font-weight: 700;
  }

  strong {
    font: inherit;
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
    }
  }

  img {
    display: block;
    width: 100%;
    // object-fit: cover;
  }

  figure {
    margin: 0;

    svg {
      vertical-align: middle;
    }
  }

  input,
  button {
    background: none;
    border: none;
    box-shadow: none;

    font: inherit;

    margin: 0;
    outline: none;
    padding: 0;
  }

  button {
    background: #fff;
    border-radius: 25px;
    width: 200px;
    padding: 10px;
    cursor: pointer;
  }
}
</style>
