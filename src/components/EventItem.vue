<template>
  <div v-bind:class="selected ? 'event-item event-item--selected' : 'event-item'"
  @click="$emit('item-click', index)">
    <div class="event-item-dot"></div>
    <div class="event-item--time">{{`${data.time.getFullYear()}年${data.time.getMonth()}月${data.time.getDay()} ${data.time.getHours()}:${data.time.getMinutes()}`}}</div>
    <div class="event-item--title">{{data.title}}</div>
    <div class="event-item--p1">来自：{{data.user}}</div>
    <div class="event-item--p2">{{data.content}}</div>
  </div>
</template>

<script>
  export default {
    name: 'EventItem',
    props: {
      data: Object,
      index: Number,
      selected: Boolean
    }
  }
</script>

<style scoped lang="scss">

  .event-item {
    position: relative;
    height: 120px;
    box-sizing: border-box;
    padding: 18px 16px;
    text-align: left;
    background: transparent;
    border: 1px solid #707070;

    &:hover {
      background: rgba(#989898, 0.16);
    }
  }

  .event-item--selected {
    box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.08);
    border: 1px solid transparent;
    background: #FFEBBF;

    &:hover {
      background: #FFEBBF;
    }
  }

  .event-item--time {
    float: right;
    font-size: 12px;
    margin-top: 0;
    color: rgba(black, 0.5);
  }

  .event-item-dot {
    display: inline-block;
    background: #FF434A;
    margin: 0 4px;
    width: 6px;
    height: 6px;
    border-radius: 3px;
  }

  .event-item--title {
    display: inline-block;
    font-weight: 700;
    font-size: 12px;
    text-align: left;
  }

  .event-item--p1 {
    font-weight: normal;
    font-size: 12px;
    text-align: left;
    margin: 8px 0 0 14px;
  }

  .event-item--p2 {
    font-weight: normal;
    font-size: 12px;
    text-align: left;
    margin: 16px 0 0 14px;
    color: rgba(black, 0.5);
    transform: scale(0.9);
    transform-origin: left;
  }
</style>