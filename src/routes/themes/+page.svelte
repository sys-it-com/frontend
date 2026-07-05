<script lang="ts">
  import { getThemeMode, setThemeMode, getEffectiveTheme } from 'freenit'

  const modes = ['light', 'dark', 'auto'] as const
</script>

<svelte:head>
  <title>Themes</title>
</svelte:head>

<div class="container">
  <h1>Theme</h1>
  <p>Effective theme: <strong>{getEffectiveTheme()}</strong></p>
  <div class="theme-options">
    {#each modes as mode (mode)}
      <label>
        <input
          type="radio"
          name="theme"
          value={mode}
          checked={getThemeMode() === mode}
          onchange={() => setThemeMode(mode)}
        />
        {mode}
      </label>
    {/each}
  </div>
</div>

<style>
  .theme-options {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }

  label {
    cursor: pointer;
    text-transform: capitalize;
  }
</style>
