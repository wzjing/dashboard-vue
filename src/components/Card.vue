<template>
  <div class="card" @click="$emit('click')">
    <div class="card--img">
      <component :is="image"></component>
    </div>
    <div class="card--text">{{text}}</div>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props: {
      image: Object,
      text: String
    }
  }
</script>

<style scoped lang="scss">
  .card {
    position: relative;
    display: inline-flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    box-sizing: border-box;
    background: #FFFFFF;
    border-radius: 4px;
    width: 160px;
    height: 120px;

    &:hover {
      box-shadow: 0 2px 40px 0 rgba(black, 0.06);
    }
  }

  .card--img {
    width: 40%;
    height: auto;
  }

  .card--text {
    font-size: 12px;
  }
</style>