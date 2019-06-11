<template>
  <div v-bind:class="selected ? 'card selected' : 'card'" v-on:click="onClick">
    <div class="card--icon"></div>
    <div class="card--title">{{data.title}}</div>
    <div class="card--content">{{data.content}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      selected: Boolean,
      data: Object
    },
    methods: {
      onClick: (event) => {
        if (event) {
          let target = event.target
          while (!target.classList.contains('card')) {
            console.log(`target: ${target}`)
            if (target.parentElement != null) {
              target = target.parentElement
            } else {
              return;
            }
          }
          if (target.classList.contains('selected')) {
            target.classList.remove('selected')
          } else {
            target.classList.add('selected')
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .card {
    display: inline-block;
    width: 140px;
    height: 110px;
    background: #FFFFFF;
    border-radius: 8px;
    border: solid 1px transparent;
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
    border: solid 1px #e3e3e3;
  }

  .card--icon {
    width: 36px;
    height: 36px;
    border: solid 1px #989898;
  }

  .card--title {
    font-size: 12px;
    color: #000000;
    margin-top: 4px;
  }

  .card--content {
    font-size: 12px;
    color: #989898;
    margin-top: 4px;
  }
</style>