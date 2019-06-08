<template>
  <div class="about">
    <Appbar title="CONSOLE"/>
  </div>
</template>

<script>
    // @ is an alias to /src
    import Appbar from '@/components/Appbar.vue'

    export default {
        name: 'about',
        components: {
            Appbar
        }
    }
</script>
