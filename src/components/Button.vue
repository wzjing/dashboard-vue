<template>
  <div class="button" @click="$emit('click')">
    <component :is="background" class="button--background"/>
    <div class="button--text">
      <slot>Button</slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Button",
    props: {
      background: Object,
      text: String
    }
  }
</script>

<style scoped lang="scss">

  .button {
    position: relative;
    min-width: 84px;
    min-height: 36px;
    user-select: none;
    cursor: pointer;
  }

  .button--background {
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
    left: 0;
    top: 0;
    margin: auto;
    &:hover {
      transform: scale(1.05)
    }
    &:active {
      transform: scale(0.95);
    }
  }

  .button--text {
    position: absolute;
    text-align: center;
    width: 100%;
    height: 100%;
    line-height: 36px;
    font-size: 12px;
    color: #ffffff;
    pointer-events: none;
  }

</style>