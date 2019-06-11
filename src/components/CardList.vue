<template>
  <div class="card-list">
    <Card v-for="item in listData" v-bind:key="item.key" v-bind:data="item" v-bind:selected="item.key===listSelection"/>
  </div>
</template>

<script>
  import Card from '@/components/Card.vue'

  export default {
    name: "CardList",
    props: {
      listData: Array,
      listSelection: Number
    },
    components: {
      Card
    }
  }
</script>

<style scoped>

  .card-list {
    background: transparent;
  }

  .card {
    margin-right: 20px;
  }

</style>