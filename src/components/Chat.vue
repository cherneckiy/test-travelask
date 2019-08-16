<template>
  <div class="chat">
    <div class="chat__head chat-head">
      <img src="../assets/user-1.png" alt="name-image" class="chat-head__image">
      <div class="chat-head__info">
        <div class="chat-head__name title-text">Токсикова Ольга</div>
        <div class="chat-head__city">Днепропетровск</div>
      </div>
      <a href="#" @click.prevent class="chat-head__close">+</a>
    </div>
    <div class="chat__body"> body </div>
    <div class="chat__footer"> footer </div>
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
  border: 1px solid #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
}

.chat-head {
  display: flex;
  background: url('../assets/chat-head-line.png') 0 0 repeat-x;
  padding: 28px 30px 15px;

  &__image {

  }

  &__name {
    font-weight: bold;
    font-size: 24px;
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
  }
}
</style>
