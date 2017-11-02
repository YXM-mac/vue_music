const STORAGE_KEY = 'search-vuejs'
export default {
  fetch: function () {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save: function () {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(searchall))
  }
}
