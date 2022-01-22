<template>
  <div class="b">
    <picture class="b__img">
      <img src="../assets/images/wemesse-title.svg" alt="title" />
      <img src="../assets/images/wemesse-commas.svg" alt="commas"
    /></picture>

    <p>
      Telegram-based coloboration and communities chat reimagined that's
      <br />free, secure, and works on both your desktop and phone.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.b {
  text-align: center;
  margin: var(--gap) 0 0 0;
  padding: calc(var(--gap) * 4);

  &__img {
    display: flex;
  }

  p {
    line-height: 40px;
    color: rgba(255, 255, 255, 0.418);
  }
}
</style>
