const result = document.querySelector('.result')
const baseUrl = `${window.location.origin}/api`
const fetchAlbums = async (search_string) => {
  const url = search_string != '' ? `${baseUrl}/query?search=${search_string}` : `${baseUrl}/albums`

  try {
    const { data } = await axios.get(url)
    console.log(data)
    const albums = data.data.map((album) => {
      return createVehicleCard(album)
    })
    result.innerHTML = `<div class="row">
                         ${albums.join('')} 
                        </div>`
  } catch (error) {
    console.log(error)
    result.innerHTML = `<div class="alert alert-danger mt-3">Error fetching data</div>`
  }
}

const createAlbumCard = (album) => {
  return `<div class="col-sm-4 pt-4">
            <div class="card">
              <div class="card-body">
              <h5 class="card-title">${album.name}</h5>
              <p class="card-text">${album.title}</p>
            
              </div>
            </div>
          </div>
          `
}

const emptyFields = (name, title) => {
  name.value = ''
  title.value = ''
}

const setNotification = (msg) => {
  formAlert = document.querySelector('.form-alert')
  formAlert.textContent = msg
  setTimeout(() => {
    formAlert.textContent = '' }, 5000)
}

// search functionality
const searchField = document.querySelector('#searchField')
searchField.addEventListener('input', async (e) => {
  e.preventDefault()
  const search_string = searchField.value
  fetchAlbums(search_string)
})

// submit form
const btn = document.querySelector('.btn-primary')
const name = document.querySelector('#name')
const title = document.querySelector('#title')

btn.addEventListener('click', async (e) => {
  e.preventDefault()
  const nameValue = name.value
  const titlelValue = title.value

  try {
    const { data } = await axios.post(`${baseUrl}/albums`, { name: nameValue, title: titleValue })
    fetchAlbums('')
    emptyFields(name, title)
  } catch (error) {
    const { msg } = error.response.data
    setNotification(msg)
  }
})

// Fetch vehicles on page load
fetchAlbums(search_string = '')