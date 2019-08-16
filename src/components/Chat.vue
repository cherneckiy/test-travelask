<template>
  <div class="chat">
    <chat-head/>
    <div class="chat__body">
      <messages/>
    </div>
    <chat-footer/>
  </div>
</template>

<script>
import ChatHead from '@/components/ChatHead'
import ChatFooter from '@/components/ChatFooter'
import Messages from '@/components/Messages'

export default {
  name: 'Chat',
  components: { Messages, ChatFooter, ChatHead }
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

</style>
