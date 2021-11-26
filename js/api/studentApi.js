import axiosClient from './axiosClient'

const studentApi = {
  getAll(params) {
    const url = '/students'
    return axiosClient.get(url, { params }) /* key value giong nhau params: params */
  },

  getById(id) {
    const url = `/students/${id}`
    return axiosClient.get(url)
  },

  add(data) {
    const url = '/students'
    return axiosClient.post(url, data)
  },

  update(data) {
    const url = `/students/${data.id}`
    return axiosClient.patch(url, data)
  },

  updateFormData(data) {
    const url = `/students/${data.id}`
    return axiosClient.patch(url, data, {
      headers: { 'Content-type': 'multipart/form-data' },
    })
  },

  remove(id) {
    const url = `/students/${id}`
    return axiosClient.delete(url)
  },
}

export default studentApi
