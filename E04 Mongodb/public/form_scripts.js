const result = document.querySelector('.result')
const baseUrl = `${window.location.origin}/api`
const fetchVehicles = async (search_string) => {
  const url = search_string != '' ? `${baseUrl}/query?search=${search_string}` : `${baseUrl}/albums`

  try {
    const { data } = await axios.get(url)
    console.log(data)
    const album = data.data.map((album) => {
      return createAlbumCard(album)
    })
    result.innerHTML = `<div class="row">
                         ${albums.join('')} 
                        </div>`
  } catch (error) {
    console.log(error)
    result.innerHTML = `<div class="alert alert-danger mt-3">Error fetching data</div>`
  }
}

const createVehicleCard = (album) => {
  return `<div class="col-sm-4 pt-4">
            <div class="card">
              <div class="card-body">
              <h5 class="card-title">${album.make}</h5>
              <p class="card-text">${album.model}</p>
              <p class="card-text">${album.type}</p>
              </div>
            </div>
          </div>
          `
}

const emptyFields = (make, model) => {
  make.value = ''
  model.value = ''
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
  fetchVehicles(search_string)
})

// submit form
const btn = document.querySelector('.btn-primary')
const make = document.querySelector('#make')
const model = document.querySelector('#model')

btn.addEventListener('click', async (e) => {
  e.preventDefault()
  const makeValue = make.value
  const modelValue = model.value

  try {
    const { data } = await axios.post(`${baseUrl}/albums`, { make: makeValue, model: modelValue })
    fetchAlbums('')
    emptyFields(make, model)
  } catch (error) {
    const { msg } = error.response.data
    setNotification(msg)
  }
})

// Fetch vehicles on page load
fetchAlbums(search_string = '')