<template>
    <div class="chat-footer">
        <img src="../assets/user-2.png" alt="name-user" class="chat-footer__image">
        <form class="chat-form chat-footer__chat-form" @submit.prevent="addMessage">
            <textarea :rows="isBigRow" ref="textarea" class="chat-form__textarea" v-model="formTextarea.value"></textarea>
            <button class="chat-form__btn btn">Отправить</button>
        </form>
    </div>
</template>
<script>

import { mapState, mapActions } from 'vuex'
export default {
  name: 'chat-footer',
  computed: {
    ...mapState(['formTextarea']),
    isBigRow () {
      return this.formTextarea.value.length > 250 ? 7 : 4
    }
  },
  methods: {
    ...mapActions(['addMessage'])
  }
}
</script>
<style scoped lang="scss">

    .chat-footer {
        background-color: #e9f2fa;
        padding: 12px 30px 9px;
        display: flex;

        &__chat-form {
            width: 100%;
            padding-left: 15px;
        }

        &__image {
            width: 45px;
            height: 45px;
        }
    }

    .chat-form {
        &__textarea {
            display: block;
            width: 100%;
            border: 1px solid #b1b6bb;
            resize: none;
            border-radius: 3px;
            margin-bottom: 7px;
        }
    }
</style>
