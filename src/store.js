import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [
      {
        id: 1,
        outgoing: false,
        imageUrl: require('../src/assets/user-1.png'),
        message: `Где взять на прокат вечернее красивое платье? А еще лучше дизайнерское!
            Предстоит участие в <a href="#" >мероприятии</a>, где все гости будут наверняка одеты
            в наряды "от кутюр", а у меня со средствами туговато,
            да и жалко на один раз такие деньжищи отваливать. Мне`,
        time: `вчера в 17.45`
      },
      {
        id: 2,
        outgoing: true,
        imageUrl: require('../src/assets/user-2.png'),
        message: `Поисковик вам в помощь! Но цена примерно в половину стоимости платья.`,
        time: `вчера в 18.45`
      },
      {
        id: 3,
        outgoing: false,
        imageUrl: require('../src/assets/user-1.png'),
        message: `Где взять на прокат вечернее красивое платье? А еще лучше дизайнерское!
                Предстоит участие в мероприятии, где все гости будут наверняка одеты в
                наряды "от кутюр", а у меня со средствами туговато`,
        time: `сегодня в 17.45`
      },
      {
        id: 4,
        outgoing: true,
        imageUrl: require('../src/assets/user-2.png'),
        message: `Поисковик вам в помощь! Но цена примерно в половину стоимости платья.`,
        time: `18.45`
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
