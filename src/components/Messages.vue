<template>
    <div class="messages">
        <messages-item/>

        <div class="messages__item message message_outgoing">
            <img src="../assets/user-2.png" alt="name-user" class="message__image">
            <div class="message__text">
                Поисковик вам в помощь! Но цена примерно в половину стоимости платья.
            </div>
            <div class="message__time">вчера в 18.45</div>
        </div>

        <div class="messages__item message message_incoming">
            <img src="../assets/user-1.png" alt="name-user" class="message__image">
            <div class="message__text">
                Где взять на прокат вечернее красивое платье? А еще лучше дизайнерское!
                Предстоит участие в мероприятии, где все гости будут наверняка одеты в
                наряды "от кутюр", а у меня со средствами туговато
            </div>
            <div class="message__time">сегодня в 17.45</div>
        </div>
        <div class="messages__item message message_outgoing">
            <img src="../assets/user-2.png" alt="name-user" class="message__image">
            <div class="message__text">
                Поисковик вам в помощь! Но цена примерно в половину стоимости платья.
            </div>
            <div class="message__time">18.45</div>
        </div>
    </div>
</template>
<script>
import MessagesItem from '@/components/MessagesItem'

export default {
  name: 'messages',
  components: { MessagesItem }
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
