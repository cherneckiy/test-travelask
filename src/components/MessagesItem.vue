<template>
    <div class="messages__item message message_incoming">
        <img src="../assets/user-1.png" alt="name-user" class="message__image">
        <div class="message__text">
            Где взять на прокат вечернее красивое платье? А еще лучше дизайнерское!
            Предстоит участие в <a href="#" @click.prevent>мероприятии</a>, где все гости будут наверняка одеты
            в наряды "от кутюр", а у меня со средствами туговато,
            да и жалко на один раз такие деньжищи отваливать. Мне
        </div>
        <div class="message__time">вчера в 17.45</div>
    </div>
</template>
<script>
export default {
  name: 'messages-item'
}
</script>
<style scoped lang="scss">

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
