<template>
    <div class="chat-footer">
        <img src="../assets/user-2.png" alt="name-user" class="chat-footer__image">
        <form class="chat-form chat-footer__chat-form" @submit.prevent="addMessage">
            <textarea rows="4" class="chat-form__textarea" v-model="formTextarea.value"></textarea>
            <button class="chat-form__btn">Отправить</button>
        </form>
    </div>
</template>
<script>

import { mapState, mapActions } from 'vuex'
export default {
  name: 'chat-footer',
  computed: {
    ...mapState(['formTextarea'])
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

        &__btn {
            border: 1px solid #b1b6bb;
            font-size: 16px;
            border-radius: 3px;
            padding: 5px 27px;
            background: rgb(255, 255, 255);
            background: -moz-linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(212, 212, 216) 100%);
            background: -webkit-linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(212, 212, 216) 100%);
            background: -o-linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(212, 212, 216) 100%);
            background: -ms-linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(212, 212, 216) 100%);
            background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(212, 212, 216) 100%);
        }
    }
</style>
