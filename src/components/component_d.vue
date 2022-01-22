<template>
  <div class="d">
    <button>iOS</button>

    <article class="d__img">
      <button>Android</button>
      <img src="../assets/images/wemesse-blind.svg" alt="blind" />
    </article>

    <button>Windows 10</button>
  </div>
</template>

<style lang="scss" scoped>
.d {
  display: flex;
  margin: var(--gap) 0 0 0;
  justify-content: space-around;
  padding: var(--gap);

  button {
    border: 1px solid rgb(0, 0, 0);
    margin: var(--gap) auto;
  }

  &__img {
    display: flex;
    margin: 0 0 0 var(--gap);

    img {
      width: 20px;
      margin: -50px 0 0 0;
    }
  }
}

@media only screen and (max-width: 678px) {
  .d {
    flex-direction: column;
    align-items: center;
  }
}
</style>
