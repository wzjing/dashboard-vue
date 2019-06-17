<template>
  <div class="type-list">
    <div v-for="(item, index) in listData"
         :key="index"
         v-bind:class="currentIndex === index ? 'type-item type-item--selected' : 'type-item'"
         @click="currentIndex = index;$emit('type-click', index)">
      <component v-bind:is="item.icon" class="type-item--icon"></component>
      <div class="type-item--type">
        <span class="type-item--count">{{item.count}}</span>{{item.type}}
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "TypeList",
    props: {
      listData: Array,
    },
    data: () => {
      return {
        currentIndex: 0
      }
    }
  }
</script>

<style scoped lang="scss">

  .type-list {
    background: transparent;
    display: flex;
    flex-direction: row;
  }

  .type-item {
    flex: 1 1 auto;
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
    padding: 8px 24px;
    user-select: none;
  }

  .type-item--selected {
    background: #FFFFFF;
  }

  .type-item--icon {
    flex: 0 0 auto;
    position: relative;
    width: 48px;
    height: 48px;
    box-sizing: border-box;
    filter: grayscale(100%);

    .type-item--selected > & {
      filter: none;
    }

    .type-item:hover > & {
      filter: none;
    }
  }

  .type-item--count {
    font-size: 24px;
    margin-right: 2px;
    color: #000;
    opacity: 1;
  }

  .type-item--type {
    flex: 0 0 auto;
    position: relative;
    margin: 0;
    font-size: 13px;
    color: #000000;
    transform: scale(0.9);
    transform-origin: left;
  }

</style>