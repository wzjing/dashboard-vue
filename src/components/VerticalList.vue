<template>
  <div class="vertical-list">
    <div v-for="(item, index) in listData"
         :key="index"
         class="vertical-list-item"
         v-bind:class="{'vertical-list-item vertical-list-item--selected': currentIndex === index}"
         @click="currentIndex = index">
      <div class="vertical-list-item--main">
        <div class="vertical-list-item--title">
          <slot name="title" :data="item">{{index}}</slot>
          <span class="vertical-list-item--id">{{item.id}}</span>
        </div>
        <div class="vertical-list-item--content">
          <slot :data="item"></slot>
        </div>
        <div class="vertical-list-item--user">来自：{{item.user}}</div>
      </div>

      <div class="vertical-list-item--time">
        {{formatDate(item.applyTime)}}
      </div>
    </div>
    <div v-if="loading" class="vertical-list-loader-more" @click="$emit('load-more')">
      <SVGProgressbar class="vertical-list-progressbar"/>
    </div>
    <div v-else-if="loadMore" class="vertical-list-loader-more" @click="$emit('load-more')">
      加载更多
    </div>
  </div>
</template>

<script>
  import TimeUtil from '@/util/timeutil'
  import SVGProgressbar from '@/assets/progressbar.svg'

  export default {
    name: 'VerticalList',
    components: {
      SVGProgressbar
    },
    props: {
      listData: Array,
      type: String,
      loadMore: false,
      loading: false
    },
    data: () => {
      return {
        currentIndex: 0
      }
    },
    methods: {
      formatDate: TimeUtil.formatDate,
    },
    watch: {
      currentIndex: function (value) {
        this.$emit('item-selected', this.listData[value])
      },
      listData: function (value) {
        this.$emit('item-selected', value[0])
        this.currentIndex = 0
      }
    }
  }
</script>

<style scoped lang="scss">

  .vertical-list {
    background: transparent;
    overflow-y: visible;
    min-width: 280px;
  }

  $color-selected: #2f69ff;

  .vertical-list-item {
    position: relative;
    height: auto;
    margin-bottom: 1px;
    padding: 16px 24px 16px 18px;
    box-sizing: border-box;
    text-align: left;
    background: white;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
    color: black;
    cursor: pointer;
    user-select: none;

    &:hover {
      background-color: #bfd3ff;
    }

  }

  .vertical-list-item--selected {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background: $color-selected;
    z-index: 2;
    color: white;

    &:hover {
      background: $color-selected;
    }
  }

  .vertical-list-item--id {
    font-size: 12px;
    font-weight: normal;
    padding: 0 3px;
    margin-left: 4px;
  }

  .vertical-list-item--time {
    position: absolute;
    right: 24px;
    top: 16px;
    font-size: 12px;
    opacity: 0.7;
    transform-origin: right;
    transform: scale(0.9);
  }

  .vertical-list-item--main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .vertical-list-item--dot {
    display: inline-block;
    background: #ff4b43;
    margin: 0 4px;
    width: 5px;
    height: 5px;
    border-radius: 3px;
  }

  .vertical-list-item--title {
    flex: 0 0 auto;
    display: inline-block;
    font-weight: 700;
    font-size: 12px;
    text-align: left;
  }

  .vertical-list-item--content {
    flex: 0 0 auto;
    margin: 8px 0 0;
    font-weight: normal;
    font-size: 12px;
    text-align: left;
    line-height: 14px;
    max-height: 28px;
    opacity: 0.7;
    transform: scale(0.9);
    transform-origin: left;
    overflow-x: hidden;
  }

  .vertical-list-item--user {
    align-self: flex-end;
    font-weight: normal;
    font-size: 12px;
    margin: 4px 0 0;
    transform: scale(0.9);
    transform-origin: right;
    white-space: nowrap;
    max-width: 120px;
    overflow-x: hidden;
    text-overflow: ellipsis;
  }

  .vertical-list-loader-more {
    position: relative;
    font-size: 12px;
    color: black;
    background: #ffffff;
    margin: 1px auto;
    padding: 6px 0;
    user-select: none;
    cursor: pointer;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
  }
</style>