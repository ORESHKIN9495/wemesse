<template>
  <div class="c">
    <img src="@/assets/images/wemesse-tram.svg" alt="tram" />

    <p>Available on</p>

    <img src="@/assets/images/wemesse-heart.svg" alt="heart" />
  </div>
</template>

<style lang="scss" scoped>
.c {
  display: flex;
  justify-content: space-between;
  padding: 0 var(--gap);

  img {
    width: 70px;
  }

  p {
    color: #fff;
  }
}

@media only screen and (max-width: 375px) {
  .c {
    img {
      width: 40px;
    }
  }
}
</style>
