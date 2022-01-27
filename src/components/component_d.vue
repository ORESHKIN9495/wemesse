<template>
  <div class="d">
    <button>iOS</button>

    <article class="d__img">
      <button>Android</button>

      <img src="@/assets/images/wemesse-blind.svg" alt="blind" />
    </article>

    <button>Windows 10</button>
  </div>
</template>

<style lang="scss" scoped>
.d {
  display: flex;
  padding: 0 var(--gap);

  button {
    margin: var(--gap) auto;
  }

  &__img {
    display: flex;
    margin: 0 0 0 var(--gap);

    img {
      margin: -50px 0 0 0;
      width: 20px;
    }
  }
}

@media only screen and (max-width: 678px) {
  .d {
    align-items: center;
    flex-direction: column;
  }
}
</style>
