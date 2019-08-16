<template>
  <div class="chat">
    <div class="chat-head">
      <img src="../assets/user-1.png" alt="name-user" class="chat-head__image">
      <div class="chat-head__info">
        <div class="chat-head__name title-text">Токсикова Ольга</div>
        <div class="chat-head__city">Днепропетровск</div>
      </div>
      <a href="#" @click.prevent class="chat-head__close">+</a>
    </div>
    <div class="chat__body">
      <div class="messages">
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
    </div>
    <div class="chat-footer">
      <img src="../assets/user-2.png" alt="name-user" class="chat-footer__image">
      <form class="chat-form chat-footer__chat-form">
        <textarea rows="4" class="chat-form__textarea"></textarea>
        <button class="chat-form__btn">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat'
}
</script>

<style scoped lang="scss">

.chat {
  width: 600px;
  min-height: 250px;
  max-height: 550px;
  height: 70vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  overflow-y: hidden;
  display: flex;
  flex-flow: column wrap;
  box-shadow:  0 0 11px 0 rgba(52, 56, 63, 0.5);

  &__body {
    padding: 7px 15px 7px 30px;
    margin-right: 7px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column-reverse;
    flex: 1;

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: none;
      background-color: transparent;
    }

    &::-webkit-scrollbar {
      width: 8px;
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
      background-color: #c2c2c2;
    }
  }
}

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
