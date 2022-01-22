<template>
  <div class="c">
    <img src="../assets/images/wemesse-tram.svg" alt="tram" />
    <p>Available on</p>
    <img src="../assets/images/wemesse-heart.svg" alt="heart" />
  </div>
</template>

<style lang="scss" scoped>
.c {
  display: flex;
  justify-content: space-between;
  padding: 0 calc(var(--gap) * 2);

  img {
    width: 70px;
  }

  p {
    color: #fff;
  }
}
</style>
