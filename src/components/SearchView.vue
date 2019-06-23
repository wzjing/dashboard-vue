<template>
  <div class="search-view">
    <textarea class="search-view--text" placeholder="Exp: id=10,user='Jerry'"></textarea>
    <SVGSearch class="search-view--search"/>
  </div>
</template>

<script>
import SVGSearch from "@/assets/ic_search.svg";

export default {
  name: "SearchView",
  data: () => {
    return {
      currentIndex: 0
    };
  },
  components: {
    SVGSearch
  }
};
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
  font-size: 14px;
  color: #000;
  text-align: left;
  padding: 0 4px;
  border: none;
  resize: none;
  white-space: nowrap;
  line-height: 20px;
  outline: none;

}

textarea::-webkit-input-placeholder {
  color: #2f69ff !important;
  opacity: 0.4;
  &:focus {
    color: #000 !important;
  }
}

.search-view--search {
  flex: 0 0 auto;
  justify-content: flex-end;
  opacity: 0.6;
  cursor: pointer;
}
</style>