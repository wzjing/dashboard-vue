<template>
  <div v-bind:class="selected ? 'card selected' : 'card'">
    <div class="card--icon"></div>
    <div class="card--title">{{data.title}}</div>
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
      data: Object
    },
    methods: {
      onClick: (event) => {
        if (event) {
          let target = event.target
          while (!target.classList.contains('card')) {
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
    height: 116px;
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
    width: 36px;
    height: 36px;
    background: #ececec;
  }

  .card--title {
    font-size: 12px;
    color: #707070;
    margin-top: 8px;
    transform: scale(0.9);
    transform-origin: left;
  }

  .card--content {
    font-size: 12px;
    margin-top: 4px;
  }

  .card--number {
    font-size: 14px;
    font-weight: bold;
  }
</style>