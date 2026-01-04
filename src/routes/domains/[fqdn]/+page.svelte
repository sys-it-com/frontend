<script lang="ts">
  import { Domain } from '@freenit-framework/core'
  import store from '$lib/store'

  let { data: props } = $props()
</script>

<Domain fqdn={props.fqdn} store={store} />
