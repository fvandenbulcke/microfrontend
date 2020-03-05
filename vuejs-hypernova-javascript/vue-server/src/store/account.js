import loyaltyService from '../services/loyaltyService'

/* eslint-disable no-param-reassign */
export default {
  namespaced: true,
  state: () => ({
    account: null
  }),
  actions: {
    loadAccount ({ commit }, { customerNumber, token }) {
      return loyaltyService.getLoyaltyAccount({ customerNumber, token })
        .then((response) => {
          commit('saveAccount', response)
        })
    }
  },
  mutations: {
    saveAccount (state, newAccount) {
      state.account = newAccount
    }
  }
}
