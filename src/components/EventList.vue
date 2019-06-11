<template>
  <div class="event-list">
    <EventItem class="event-list--item" v-bind:selected="true"/>
    <EventItem class="event-list--item" v-bind:selected="false"/>
    <EventItem class="event-list--item" v-bind:selected="false"/>
  </div>
</template>

<script>
  import EventItem from '@/components/EventItem.vue'

  export default {
    name: 'EventList',
    props: {
      title: String
    },
    components: {
      EventItem
    }
  }
</script>

<style scoped lang="scss">

  .event-list {
    background: transparent;
  }

  .event-list--item {
    margin-bottom: 24px;
  }
</style>