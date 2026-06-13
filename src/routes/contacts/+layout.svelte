<script lang="ts">
  import { onMount } from 'svelte'
  import { initContacts, contactsLoading, contactsError } from '$lib/contacts/store'

  let { children } = $props()

  onMount(async () => {
    await initContacts()
  })
</script>

<svelte:head>
  <title>Contacts — sysit</title>
</svelte:head>

<div class="contacts-shell">
  {#if $contactsLoading && !$contactsError}
    <div class="state-msg">Loading contacts…</div>
  {:else if $contactsError}
    <div class="state-msg error">{$contactsError}</div>
  {:else}
    {@render children?.()}
  {/if}
</div>

<style>
  .contacts-shell {
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
