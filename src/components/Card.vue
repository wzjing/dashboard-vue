<template>
  <div id="card" v-bind:class="selected ? 'card selected' : 'card'"
       @click="$emit('item-click', index)">
    <div class="card--icon"></div>
    <span class="card--title">{{data.title}}</span>
    <div class="card--content">
      <span class="card--number">{{data.number}}</span>{{data.content}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      selected: Boolean,
      index: Number,
      data: Object,
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  .card {
    position: relative;
    display: inline-flex;
    flex-flow: column;
    align-items: center;
    background: transparent;
    border-radius: 8px;
    border: solid 1px transparent;
    box-sizing: border-box;
    cursor: pointer;
    text-align: center;
    padding: 14px 18px;
    user-select: none;

    &:hover {
    }
  }

  .selected {
    background: #FFFFFF;
  }

  .card--icon {
    flex: 0 0 auto;
    position: relative;
    width: 36px;
    height: 36px;
    background: #ececec;
    box-sizing: border-box;
  }

  .card--title {
    flex: 0 0 auto;
    position: relative;
    margin-top: 6px;
    font-size: 12px;
    color: #707070;
    transform: scale(0.9);
    transform-origin: left;
  }

  .card--content {
    flex: 0 0 auto;
    font-size: 12px;
    margin-top: 8px;
  }

  .card--number {
    font-size: 14px;
    font-weight: bold;
  }
</style>