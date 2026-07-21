import { page } from '$app/stores'
import { chatStore, mailStore } from 'freenit'
import store from '$lib/store'

let mailStarted = false

export function initConnectivity() {
  $effect(() => {
    const unsubscribe = page.subscribe(($page) => {
      const path = $page.url.pathname
      chatStore.currentPath = path
      mailStore.setMailCurrentPath(path)
    })
    return unsubscribe
  })

  $effect(() => {
    const loggedIn = store.auth.loggedin()
    const modules = store.modules
    const modulesLoaded = store.modulesLoaded
    const email = store.user.profile?.email

    if (loggedIn && modulesLoaded && modules.includes('chat') && email) {
      if (!chatStore.connected && !chatStore.connecting) {
        chatStore.connect(email)
      }
    }

    if (!loggedIn) {
      chatStore.disconnect()
    }

    if (loggedIn && modulesLoaded && modules.includes('mail')) {
      if (!mailStarted) {
        mailStarted = true
        void mailStore.initMail()
      }
    }

    if (!loggedIn && mailStarted) {
      mailStarted = false
      mailStore.disconnectMailWebSocket()
    }
  })
}
