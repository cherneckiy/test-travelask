import Vue from 'vue'
import Vuex from 'vuex'
import randomId from './helpers/randome-id'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [
      {
        id: randomId(),
        outgoing: false,
        imageUrl: require('../src/assets/user-1.png'),
        message: `Где взять на прокат вечернее красивое платье? А еще лучше дизайнерское!
            Предстоит участие в <a href="#" >мероприятии</a>, где все гости будут наверняка одеты
            в наряды "от кутюр", а у меня со средствами туговато,
            да и жалко на один раз такие деньжищи отваливать. Мне`,
        date: new Date('2019, 8, 13, 15:30:30'),
        read: true
      },
      {
        id: randomId(),
        outgoing: true,
        imageUrl: require('../src/assets/user-2.png'),
        message: `Поисковик вам в помощь! Но цена примерно в половину стоимости платья.`,
        date: new Date('2019, 8, 15, 21:15:30'),
        read: true
      },
      {
        id: randomId(),
        outgoing: false,
        imageUrl: require('../src/assets/user-1.png'),
        message: `Где взять на прокат вечернее красивое платье? А еще лучше дизайнерское!
                Предстоит участие в мероприятии, где все гости будут наверняка одеты в
                наряды "от кутюр", а у меня со средствами туговато`,
        date: new Date('2019, 8, 15, 22:15:30'),
        read: true
      },
      {
        id: randomId(),
        outgoing: true,
        imageUrl: require('../src/assets/user-2.png'),
        message: `Поисковик вам в помощь! Но цена примерно в половину стоимости платья.`,
        date: new Date('2019, 8, 15, 23:15:30'),
        read: true
      }
    ],
    formTextarea: {
      value: ''
    },
    showModal: false
  },
  mutations: {
    messageAdd (state, message) {
      state.messages.push(message)
    },
    clearForm (state) {
      state.formTextarea.value = ''
    },
    readMessage (state) {
      state.messages = state.messages.map(msg => {
        if (msg.read === false) {
          msg.read = true
        }
        return msg
      })
    },
    openModal (state) {
      state.showModal = true
    },
    closeModal (state) {
      state.showModal = false
    }
  },
  actions: {
    addMessage ({ state, commit }) {
      if (state.formTextarea.value === '') {
        return
      }

      const message = {
        id: randomId(),
        message: state.formTextarea.value,
        imageUrl: require('../src/assets/user-2.png'),
        date: new Date(),
        outgoing: true,
        read: false
      }
      commit('messageAdd', message)
      commit('clearForm')
      setTimeout(() => commit('readMessage'), 2000)
    }
  }
})
