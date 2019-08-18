<template>
    <div class="messages__item message" :class="[isOutgoingClass, isReadMessage]">
        <img :src="item.imageUrl" alt="name-user" class="message__image">
        <div class="message__text" v-html="item.message"></div>
        <div class="message__time">
          {{ isToDay }}
          {{ isYesterDay }}
          {{ time }}
        </div>
    </div>
</template>
<script>
export default {
  name: 'messages-item',
  props: {
    item: Object
  },
  computed: {
    isToDay () {
      return new Date(this.item.date).getUTCDate() === new Date().getUTCDate() ? 'сегодня в' : ''
    },
    isYesterDay () {
      return new Date(this.item.date).getUTCDate() === new Date().getUTCDate() - 1 ? 'вчера в' : ''
    },
    time () {
      return `${this.item.date.getHours()}:${this.item.date.getMinutes()}`
    },
    isOutgoingClass () {
      return this.item.outgoing ? 'message_outgoing' : 'message_incoming'
    },
    isReadMessage () {
      return !this.item.read ? 'message_read' : ''
    }
  }
}
</script>
<style scoped lang="scss">

    .message {
        display: flex;
        padding: 7px 5px 7px 15px;
        border-radius: 3px;
        transition: background-color 0.3s;

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

        &_read {
          background-color: #e9f2fa!important;
        }
    }

</style>
