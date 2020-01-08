import axios from 'axios'

export function getAuthorizationToken (authorizationCode, redirectUri) {
  return axios
    .create()
    .post('https://iky-backend.apps.op.acp.adeo.com/oauth-proxy/groupToken/loyalty?buCode=lmsa')
    .then(response => localStorage.setItem('loyalty_group_token', response.data))
    .catch((e) => {
      throw new Error(e.response.data.message)
    })
}
