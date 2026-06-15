<script lang="ts">
  import 'chota/dist/chota.min.css'
  import './styles.css'
  import { onMount } from 'svelte'
  import { SvelteToast } from '@zerodevx/svelte-toast'
  import { LeftPane, MenuItems, MenuBar, getThemeMode } from 'freenit'
  import store from '$lib/store'

  // Force theme.svelte to load and apply the user's light/dark/auto preference
  // before the first render.
  void getThemeMode

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
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .main {
    flex: 1;
    min-height: 0;
    width: 100%;
  }
</style>
