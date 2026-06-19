<script lang="ts">
  import { Boards } from 'freenit'
  import store from '$lib/store'

  let { data: props } = $props()
</script>

<Boards projectId={props.projectId} store={store} />
