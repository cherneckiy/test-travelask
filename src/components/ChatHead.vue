<template>
    <div class="chat-head">
        <img src="../assets/user-1.png" alt="name-user" class="chat-head__image">
        <div class="chat-head__info">
            <div class="chat-head__name title-text">Токсикова Ольга</div>
            <div class="chat-head__city">Днепропетровск</div>
        </div>
        <a href="#" @click.prevent="closeModal" class="chat-head__close">+</a>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'chat-head',
  methods: {
    ...mapMutations(['closeModal'])
  }
}
</script>
<style scoped lang="scss">

    .chat-head {
        display: flex;
        background: url('../assets/chat-head-line.png') 0 0 repeat-x;
        padding: 28px 6px 15px 30px;
        border-bottom: 1px solid #ebebeb;

        &__image {
            width: 45px;
            height: 45px;
        }

        &__name {
            font-weight: bold;
            font-size: 24px;
            padding-bottom: 5px;
        }

        &__city {
            font-size: 16px;
            line-height: 20px;
            color: #7f7f7f;
        }

        &__info {
            flex: 1;
            padding: 0 15px;
        }

        &__close {
            text-decoration: none;
            display: block;
            color: #666666;
            width: 23px;
            height: 23px;
            border-radius: 50%;
            border: 2px solid #666666;
            line-height: 19px;
            text-align: center;
            font-size: 22px;
            transform: rotate(45deg);
            position: relative;
            top: -5px;
            transition: opacity .3s;

            &:hover {
                opacity: 0.7;
            }
        }
    }

</style>
