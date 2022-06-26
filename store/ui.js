
export const state = () => ({
  sidebar: true,
  overlay: false,
  microcart: false,
  loader: false,
  authElem: 'login',
  openMyAccount: false,
  ip: [],
  submenu: {
    depth: 0,
    path: []
  }
})
export const mutations = {
  setAuthElem(state, payload) {
    state.authElem = payload
  },
  setIp(state, payload) {
    state.ip = payload
  },
  setMyAccount(state, payload) {
    state.openMyAccount = payload === true
    state.overlay = payload
  },
  setSidebar(state, payload) {
    state.sidebar = payload === true
    state.overlay = payload === true
  },
  setOverlay(state, action) {
    state.overlay = action === true
  },
  setSubmenu(state, { id }) {
    if (id) {
      state.submenu.path.push(id)
      state.submenu.depth = ++state.submenu.depth
    }
  },
  setLoader(state, action) {
    state.loader = action === true
  },
  setSubmenuminus(state) {
    state.submenu.depth = --state.submenu.depth
    state.submenu.path.pop()
  },
  setMicrocart(state, action) {
    state.microcart = action === true
    state.overlay = action === true
  }
}

