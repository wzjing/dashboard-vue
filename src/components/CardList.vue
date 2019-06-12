<template>
  <div class="card-list">
    <Card v-for="(item, index) in listData"
          :key="index"
          v-bind:data="item"
          v-bind:index="index"
          v-bind:selected="index===currentIndex"
          @item-click="currentIndex = $event"/>
  </div>
</template>

<script>
  import Card from '@/components/Card.vue'

  export default {
    name: "CardList",
    props: {
      listData: Array,
    },
    data: () => {
      return {
        currentIndex: 0
      }
    },
    components: {
      Card
    },
    methods: {},
    watch: {
      currentIndex: (index) => {
        console.log(`index: ${index}`)
      }
    }
  }
</script>

<style scoped lang="scss">

  .card-list {
    background: transparent;
  }

  .card {
    margin-right: 20px;
  }

</style>