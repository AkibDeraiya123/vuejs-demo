import axios from 'axios'

export default {
  get (url, headers) {
    let options = {
      method: 'GET',
      url
    }

    if (Object.keys(headers).length) {
      options['headers'] = headers
    }

    axios(options)
      .then((response) => {
        console.log('response', response)
      })
      .catch((err) => {
        console.log('err', err)
      })
  },
  post (url, data, headers) {
    let options = {
      method: 'POST',
      url,
      data
    }

    if (Object.keys(headers).length) {
      options['headers'] = headers
    }

    axios(options)
      .then((response) => {
        console.log('response', response)
      })
      .catch((err) => {
        console.log('err', err)
      })
  }
}
