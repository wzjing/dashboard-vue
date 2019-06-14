<template>
  <div class="list-filter">
    <div class="filter--navigation">
      <div v-for="(item, index) in options"
           :key="index"
           v-bind:class="index === currentIndex ? 'filter--option-selected' : 'filter--option'"
           v-bind:value="index"
           @click="currentIndex=index">
        <div class="filter--option-text">{{item}}</div>
        <div class="filter--option-line"></div>
      </div>
    </div>
    <div class="filter--space"></div>
    <SVGSearch class="filter--search"/>
  </div>
</template>

<script>
  import SVGSearch from '@/assets/ic_search.svg'

  export default {
    name: 'ListFilter',
    props: {
      options: Array
    },
    data: () => {
      return {
        currentIndex: 0
      }
    },
    components: {
      SVGSearch
    }
  }
</script>

<style scoped lang="scss">

  .list-filter {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .filter--navigation {
    position: relative;
    display: flex;
    flex-flow: row;
  }

  .filter--option {
    flex: 1 0 60px;
    display: flex;
    flex-flow: column;
    align-items: center;
    color: #000;
    cursor: pointer;
    user-select: none;

    &:hover {
      opacity: 1;
    }
  }

  .filter--option-selected {
    @extend .filter--option;
  }

  .filter--option-text {
    flex: 0 0 auto;
    font-size: 14px;
    padding: 4px 6px 4px;
    text-align: center;

    .filter--option & {
      opacity: 0.5;
    }

    .filter--option-selected & {
      opacity: 1;
    }
  }

  .filter--option-line {
    flex: 0 0 auto;
    height: 4px;
    width: 60%;
    border-radius: 4px 4px 0 0;
    background: dodgerblue;

    .filter--option & {
      visibility: hidden;
    }

    .filter--option-selected & {
      visibility: visible;
    }
  }

  .filter--space {
    flex: 1 1 auto;
  }

  .filter--search {
    flex: 0 0 auto;
    justify-content: flex-end;
  }
</style>