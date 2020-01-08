import axios from 'axios'

export function loyaltyClient (token) {
  const newAxios = axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
  return newAxios
}
