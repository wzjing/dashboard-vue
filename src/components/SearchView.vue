<template>
  <div class="search-view">
    <div class="search-view--hint">Search: exp id=10</div>
    <SVGSearch class="search-view--search"/>
  </div>
</template>

<script>
  import SVGSearch from '@/assets/ic_search.svg'

  export default {
    name: 'SearchView',
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

  .search-view {
    display: flex;
    flex-direction: row;
    align-items: center;
    /*border-style: solid none;*/
    /*border-width: 1px;*/
    /*border-color: #d9d9d9;*/
    padding: 12px 8px;
    background: white;
  }

  .search-view--hint {
    flex: 1 1 auto;
    font-size: 14px;
    color: #000;
    opacity: 0.3;
    text-align: left;
  }

  .search-view--search {
    flex: 0 0 auto;
    justify-content: flex-end;
    opacity: 0.8;
  }
</style>