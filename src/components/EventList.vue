<template>
  <div class="event-item">
    <EventItem/>
  </div>
</template>

<script>
  import EventItem from '@/components/EventItem.vue'

  export default {
    name: 'EventItem',
    props: {
      title: String
    },
    components: {
      EventItem
    }
  }
</script>

<style scoped lang="scss">

</style>