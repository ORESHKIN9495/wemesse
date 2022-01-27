<template>
  <div class="b">
    <picture class="b__img">
      <img src="@/assets/images/wemesse-title.svg" alt="title" />
      <img src="@/assets/images/wemesse-commas.svg" alt="commas"
    /></picture>

    <p>
      Telegram-based coloboration and communities chat reimagined that's
      <br />free, secure, and works on both your desktop and phone.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.b {
  padding: var(--gap) calc(var(--gap) * 2);

  &__img {
    display: flex;

    img:last-child {
      width: 40px;
    }
  }

  p {
    line-height: 30px;
    text-align: center;
  }
}

@media only screen and (max-width: 678px) {
  .b__img {
    img:last-child {
      width: 15px;
    }
  }
}
</style>
