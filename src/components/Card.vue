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
    display: inline-block;
    width: 140px;
    height: 90px;
    background: #FFFFFF;
    border-radius: 8px;
    border: solid 1px transparent;
    /*font-family: "Helvetica Neue",serif;*/
    box-sizing: border-box;
    cursor: pointer;
    text-align: left;
    padding: 14px 18px;
    -webkit-user-select: none;

    &:hover {
      box-shadow: 0 2px 20px 0 rgba(#000, 0.08);
    }
  }

  .selected {
    box-shadow: 0 2px 20px 0 rgba(#000, 0.08);
    border: solid 1px #acacac;
  }

  .card--icon {
    position: relative;
    width: 36px;
    height: 36px;
    display: inline-block;
    background: #ececec;
    box-sizing: border-box;
    vertical-align: bottom;
  }

  .card--title {
    position: relative;
    height: 36px;
    line-height: 36px;
    font-size: 12px;
    color: #707070;
    display: inline-block;
    margin-left: 10px;
    transform: scale(0.9);
    transform-origin: left;
  }

  .card--content {
    font-size: 12px;
    margin-top: 8px;
  }

  .card--number {
    font-size: 14px;
    font-weight: bold;
  }
</style>