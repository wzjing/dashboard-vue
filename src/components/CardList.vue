<template>
  <div class="card-list"
       @click="updateSelection('sele')">
    <Card v-for="item in listData"
          :key="listData.indexOf(item)"
          v-bind:data="item"
          v-bind:selected="listData.indexOf(item)===listSelection"
    />
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
    },
    methods: {
      updateSelection: (key)=> {
        console.log(`key: ${key}`)

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