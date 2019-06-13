<template>
  <div class="list-filter">
    <div class="filter--select">
      <select>
        <option v-for="(item, index) in options" :key="index" v-bind:value="index">{{item}}</option>
      </select>
    </div>
    <div class="filter--space"></div>
    <SVGSearch class="filter--search"/>
  </div>
</template>

<script>
  import SVGSearch from '@/assets/ic_search.svg'

  function closeAllSelect(el) {
    let x, y, arrNo = [];
    x = document.querySelectorAll(".select-items");
    y = document.querySelectorAll(".select-selected");
    for (let i = 0; i < y.length; i++) {
      if (el === y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (let i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  function initSelector() {

    let a, b, c;
    let x = document.querySelectorAll(".filter--select");
    console.log(`count: ${x.length}`)
    for (let i = 0; i < x.length; i++) {
      console.log(`select: ${x[i].innerHTML}`);
      let selectEl = x[i].querySelector("select");
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selectEl.options[selectEl.selectedIndex].innerHTML;
      x[i].appendChild(a);
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (let j = 1; j < selectEl.length; j++) {
        c = document.createElement("DIV");
        c.innerHTML = selectEl.options[j].innerHTML;
        c.addEventListener("click", (ev) => {
          let y, i, k, s, h;
          let el = ev.target;
          s = el.parentNode.parentNode.querySelector("select")[0];
          h = el.parentNode.previousSibling;
          for (i = 0; i < s.length; i++) {
            if (s.options[i].innerHTML === el.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = el.innerHTML;
              y = el.parentNode.querySelector(".same-as-selected");
              for (k = 0; k < y.length; k++) {
                y[k].removeAttribute("class");
              }
              el.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", (ev) => {
        let el = ev.target;
        ev.stopPropagation();
        closeAllSelect(el);
        el.nextSibling.classList.toggle("select-hide");
        el.classList.toggle("select-arrow-active");
      });
    }

    document.addEventListener("click", closeAllSelect);
  }

  export default {
    name: 'ListFilter',
    props: {
      options: Array
    },
    components: {
      SVGSearch
    },
    mounted: ()=> {
      initSelector()
    }
  }
</script>

<style scoped lang="scss">

  .list-filter {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .filter--select {
    position: relative;
  }

  .filter--select select {
    display: none;
  }

  .select-selected {
    background-color: DodgerBlue;
  }

  .select-selected:after {
    position: absolute;
    content: "";
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid;
    border-color: #fff transparent transparent transparent;
  }

  .select-selected.select-arrow-active:after {
    border-color: transparent transparent #fff transparent;
    top: 7px;
  }

  .select-items .select-selected {
    color: #ffffff;
    padding: 8px 16px;
    border: 1px solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
    cursor: pointer;
  }

  .select-items {
    position: absolute;
    background-color: DodgerBlue;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 99;
  }

  .select-hide {
    display: none;
  }

  .select-items div:hover, .same-as-selected {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .filter--space {
    flex: 1 1 auto;
  }

  .filter--search {
    flex: 0 0 auto;
    justify-content: flex-end;
  }
</style>