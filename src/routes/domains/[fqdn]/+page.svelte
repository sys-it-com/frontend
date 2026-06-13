<script lang="ts">
  import { Domain } from 'freenit'
  import store from '$lib/store'

  let { data: props } = $props()
</script>

<Domain fqdn={props.fqdn} store={store} />
