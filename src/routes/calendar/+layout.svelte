<script lang="ts">
  import { onMount } from 'svelte'
  import { initCalendar, calendarLoading, calendarError } from '$lib/calendar/store'

  let { children } = $props()

  onMount(async () => {
    await initCalendar()
  })
</script>

<svelte:head>
  <title>Calendar — sysit</title>
</svelte:head>

<div class="calendar-shell">
  {#if $calendarLoading && !$calendarError}
    <div class="state-msg">Loading calendar…</div>
  {:else if $calendarError}
    <div class="state-msg error">{$calendarError}</div>
  {:else}
    {@render children?.()}
  {/if}
</div>

<style>
  .calendar-shell {
    height: 100%;
    display: flex;
    overflow: hidden;
  }

  .state-msg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 0.95rem;
    color: var(--color-grey, #60708a);
  }

  .state-msg.error {
    color: var(--color-error, #d43939);
  }
</style>
