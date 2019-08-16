<template>
  <div id="app">
    <h1 class="title-text">Вcплывающая панель для переписки</h1>
    <p class="title-text title-info">(aka Скайп)</p>
    <Chat/>
    <button @click.prevent="openModal" class="btn">открыть чат</button>
  </div>
</template>

<script>
import Chat from '@/components/Chat'
import { mapMutations } from 'vuex'
export default {
  name: 'app',
  components: { Chat },
  methods: {
    ...mapMutations(['openModal'])
  }
}
</script>

<style lang="scss">
  @import '~normalize.css/normalize';
  @import url('https://fonts.googleapis.com/css?family=PT+Sans:400,700&display=swap&subset=cyrillic');
  $font-PTSans: 'PT Sans', Arial, Helvetica sans-serif;
  $font-Arial: Arial, Helvetica, sans-serif;

  * {
    box-sizing: border-box;

    &:after,
    &:before {
      box-sizing: inherit;
    }
  }

  body {
    font-family: $font-Arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #3e3e3e;
    font-size: 14px;
  }

  a {
    color: #3399ff;
  }

  h1 {
    font-size: 24px;
  }

  .title-text {
    font-family: 'PT Sans', Arial, Helvetica sans-serif;
    line-height: 20px;
    color: #000;
  }

  .title-info {
    font-size: 18px;
    margin: 0;
  }

  .btn {
    border: 1px solid #b1b6bb;
    font-size: 16px;
    border-radius: 3px;
    padding: 5px 27px;
    background: white;
    background: -webkit-gradient(linear, left top, left bottom, from(white), to(#d4d4d8));
    background: linear-gradient(180deg, white 0%, #d4d4d8 100%);
  }

</style>
