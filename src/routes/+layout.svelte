<script lang="ts">
  import './styles.css'
  import 'chota'
  import { onMount } from 'svelte'
  import { SvelteToast } from '@zerodevx/svelte-toast'
  import { LeftPane, MenuItems, MenuBar } from '@freenit-framework/core'
  import store from '$lib/store'

  const options = {}
  let { children } = $props()
  let open = $state(false)

  const toggle = () => {
    open = !open
  }

  const logout = async () => {
    open = !open
    await store.auth.logout()
  }

  onMount(async () => { await store.auth.refresh_token() })
</script>

<svelte:head>
  <title>sysit</title>
  <meta name="sysit" content="sysit" />
</svelte:head>

<SvelteToast {options} />
<LeftPane {open} {toggle}>
  <MenuItems {toggle} {logout} {store} />
</LeftPane>

<section class="root">
  <MenuBar {toggle} title="sysit" />
  <div class="main">
    {@render children?.()}
  </div>
</section>

<style>
  .root {
    height: 100dvh;
    display: flex;
    flex-direction: column;
  }

  .main {
    height: 100%;
    width: 100%;
  }
</style>
