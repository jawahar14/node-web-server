const request = require('request')

const forecast = (address, callback) => {
    const url = 'http://api.weatherstack.com/forecast?access_key=e4b43837c980c46adfdf17b69dbe4133&query='+address+'&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else {
            callback(undefined, ' It is currently ' + body.current.temperature + ' degress out and ' + body.current.weather_descriptions[0] + '.')
        }
    })
}

module.exports = forecast