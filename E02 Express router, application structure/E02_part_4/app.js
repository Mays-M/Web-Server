const express = require('express')
const app = express()
// json parser middleware that takes the json data and assigns it to the requests body
// so that it can be accessed in the route handler
app.use(express.static('public'))

const result = document.querySelector('.result')
const baseUrl = `${window.location.origin}/api`
const fetchAlbum = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/album`)

    const vehicles = data.data.map((vehicle) => {
      return `<ul><li>${album.id}</li><li>${album.name}</li>`
    })
    result.innerHTML = album.join('')
  } catch (error) {
    console.log(error)
    result.innerHTML = `<div class="alert alert-danger">Could not fetch data</div>`
  }
  const PORT = 5001
app.listen(PORT, ()=> {
  console.log(`server listening on port ${PORT}...`)
})
}
fetchAlbum()

