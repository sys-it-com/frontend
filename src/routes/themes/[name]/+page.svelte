<script lang="ts">
  import { setThemeMode, getThemeMode } from 'freenit'
  import { browser } from '$app/environment'

  let { data } = $props()

  $effect(() => {
    if (browser && ['light', 'dark', 'auto'].includes(data.name)) {
      setThemeMode(data.name as 'light' | 'dark' | 'auto')
    }
  })
</script>

<svelte:head>
  <title>Theme: {data.name}</title>
</svelte:head>

<div class="container">
  <p>Theme set to <strong>{getThemeMode()}</strong>.</p>
</div>
