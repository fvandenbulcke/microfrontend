import { loyaltyClient } from './baseService'
const loyaltyUrl = 'https://gateway-gravitee-uat.euw3-gcp1-private.acp.adeo.com'

export default {
  getLoyaltyAccount ({ customerNumber, token }) {
    // loyaltyClient(token)
    console.log('getLoyaltyAccount()')
    return loyaltyClient(token)
      .get(`${loyaltyUrl}/customers-management/v1/loyalty-accounts?customer=${customerNumber}&includeLoyaltyProgram=true`)
      .then(response => response && response.data)
  }/* ,
  referenceCard (customerNumber, requestBody) {
    return loyaltyClient()
      .post(`${loyaltyUrl}/customers-management/v1/loyalty-accounts/_referenceCard?customer=${customerNumber}`, requestBody)
      .then(response => response && response.data)
  },
  deleteLoyaltyAccount (customerNumber) {
    return loyaltyClient()
      .delete(`${loyaltyUrl}/customers-management/v1/loyalty-accounts?customer=${customerNumber}`)
      .then(response => response && response.data)
  },
  deleteLoyaltyCard (supportNumber) {
    return loyaltyClient()
      .post(`${loyaltyUrl}/customers-management/v1/loyalty-accounts/_invalidateCard?supportNumber=${supportNumber}`, null)
      .then(response => response && response.data)
  } */
}
