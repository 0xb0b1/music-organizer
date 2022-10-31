import { useState } from 'react'
import axios from 'axios'
import qs from 'qs'

type RefreshTokenType = {
  token: string
}

export const useRefreshToken = () => {
  const [token, setToken] = useState<RefreshTokenType>()

  const data = {
    /* eslint-disable camelcase */
    grant_type: 'client_credentials',
  }

  const getRefreshToken = async () => {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify(data),
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic ZWI3ZTQ0MWZkNTZhNGY5YWExZDNhMWEzZTM4ZjU5NjE6YWY1NzQzZjU4YzE0NDc5Njk5ZGQ1Y2Q0ZDYzYzQxZWE=',
        },
      },
    )

    const access_token = response.data.access_token

    setToken(access_token)

    return access_token
  }

  return { token, getRefreshToken }
}
