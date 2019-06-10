<template>
  <div class="event-item">

  </div>
</template>

<script>
  export default {
    name: 'EventItem',
    props: {
      title: String
    }
  }
</script>

<style scoped lang="scss">
  .event-item {
    height: 128px;
    box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.08);
    background: #ffffff;
  }
</style>