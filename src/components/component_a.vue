<template>
  <div class="a">
    <img src="@/assets/images/wemesse-icon-l.svg" alt="WeMesse" />

    <p>WeMesse</p>
  </div>
</template>

<style lang="scss" scoped>
.a {
  align-items: center;
  display: flex;
  font-size: 15px;
  padding: var(--gap);

  img {
    margin: 0 10px 0 0;
    width: 40px;
  }
}

@media only screen and (max-width: 375px) {
  .a {
    img {
      width: 25px;
    }

    p {
      font-size: 10px;
    }
  }
}
</style>
