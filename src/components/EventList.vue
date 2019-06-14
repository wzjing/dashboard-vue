<template>
  <div class="event-list">
    <EventItem
            class="event-list--item"
            v-for="(item, index) in listData"
            :key="index"
            v-bind:data="item"
            v-bind:index="index"
            v-bind:selected=" currentIndex === index"
            @item-click="currentIndex = $event"/>
  </div>
</template>

<script>
  import EventItem from '@/components/EventItem.vue'

  export default {
    name: 'EventList',
    props: {
      listData: Array
    },
    data: () => {
      return {
        currentIndex: 0
      }
    },
    components: {
      EventItem
    }
  }
</script>

<style scoped lang="scss">

  .event-list {
    background: transparent;
    overflow-y: visible;

  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  .event-list--item {
    margin-bottom: 1px;
  }
</style>