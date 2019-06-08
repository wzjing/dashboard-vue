<template>
  <div class="appbar">
    {{title}}
  </div>
</template>

<script>
    export default {
        name: 'Appbar',
        props: {
            title: String
        }
    }
</script>

<style scoped lang="scss">
  .appbar {
    box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.08);
    background: #FFFFFF;
    text-align: center;
    line-height: 56px;
    height: 56px;
    font-family: "DIN", Arial, serif;
    font-weight: bold;
  }
</style>