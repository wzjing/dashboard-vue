<template>
  <div class="list-filter">
    <div class="filter--selector">
      <select>
        <option v-for="(item, index) in options" :key="index" v-bind:value="index">{{item}}</option>
      </select>
    </div>
    <SVGExpand class="filter--expand"/>
    <div class="filter--space"></div>
    <SVGSearch class="filter--search"/>
  </div>
</template>

<script>
  import SVGSearch from '@/assets/ic_search.svg'
  import SVGExpand from '@/assets/ic_expand.svg'

  export default {
    name: 'ListFilter',
    props: {
      options: Array
    },
    components: {
      SVGSearch,
      SVGExpand
    }
  }
</script>

<style scoped lang="scss">

  .list-filter {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .filter--selector {
    display: inline-block;
    line-height: 32px;
  }

  .filter--expand {

  }

  .filter--space {
    flex: 1 1 auto;
  }

  .filter--search {
    flex: 0 0 auto;
    justify-content: flex-end;
  }
</style>