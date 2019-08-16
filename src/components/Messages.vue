<template>
    <div class="messages">
        <messages-item v-for="item of messages" :key="item.id" :item="item"/>
    </div>
</template>
<script>
import MessagesItem from '@/components/MessagesItem'
import { mapState } from 'vuex'

export default {
  name: 'messages',
  components: { MessagesItem },
  computed: {
    ...mapState(['messages'])
  }
}
</script>
<style scoped lang="scss">

    .messages {
        &__item {
            margin: 14px 0;
        }
    }

    .message {
        display: flex;
        padding: 7px 5px 7px 15px;
        border-radius: 3px;

        &__image {
            width: 30px;
            height: 30px;
        }

        &__text {
            padding: 0 15px;
            max-width: 400px;
        }

        &__time {
            flex: 1;
            text-align: right;
            font-size: 12px;
            color: #7f7f7f;
            padding-top: 3px;
        }

        &_outgoing {
            background-color: #f7f5f7;
        }

        &_incoming {

        }
    }

</style>
