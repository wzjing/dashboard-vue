<template>
  <div class="card" v-on:click="cardClick()">

  </div>
</template>

<script>
  export default {
    name: 'Card',
    methods: {
      cardClick: () => {
        console.log(`card: ${this}`);
        let card = document.querySelector('.card')
        if (card.classList.contains('selected')) {
          card.classList.remove('selected')
        } else {
          card.classList.add('selected')
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .card {
    display: inline-block;
    width: 120px;
    height: 80px;
    background: #FFFFFF;
    box-shadow: 0 1px 4px 0 rgba(#000, 0.08);
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
      box-shadow: 0 2px 20px 0 rgba(#000, 0.08);
    }
  }

  .selected {
    box-shadow: 0 2px 20px 0 rgba(#000, 0.08);
    border-width: 1px;
    border-style: solid;
    border-color: #cacaca;
  }
</style>