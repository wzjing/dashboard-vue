<template>
  <div class="search-view">
    <input class="search-view--text"
           type="text"
           v-model="keyword"
           placeholder="搜索: 订单号, 订单ID，用户名"
           @focusin="focused =true"
           @focusout="focused = false"/>
    <SVGClear class="search-view--button" v-if="keyword" @click="keyword = null"/>
    <SVGSearch class="search-view--button" v-else/>
  </div>
</template>

<script>
  import SVGSearch from '@/assets/ic_search.svg'
  import SVGClear from '@/assets/ic_clear.svg'

  export default {
    name: 'SearchView',
    components: {
      SVGSearch,
      SVGClear
    },
    data: () => {
      return {
        currentIndex: 0,
        keyword: null,
        focused: false
      };
    },
    methods: {
      clear() {
        this.keyword = null
        console.log('cleared')
      }
    },
    watch: {
      keyword: function (value) {
        this.$emit('keyword-change', value)
      }
    }
  }
</script>

<style scoped lang="scss">
  .search-view {
    display: flex;
    height: 32px;
    flex-direction: row;
    align-items: center;
    padding: 6px 12px;
    background: white;
  }

  .search-view--text {
    flex: 1 1 auto;
    height: 20px;
    font-size: 12px;
    color: #000;
    text-align: left;
    padding: 0 4px;
    border: none;
    resize: none;
    white-space: nowrap;
    line-height: 20px;
    outline: none;
  }

  .search-view--button {
    flex: 0 0 24px;
    height: 24px;
    justify-content: flex-end;
    opacity: 0.6;
    cursor: pointer;
    user-select: none;
  }
</style>