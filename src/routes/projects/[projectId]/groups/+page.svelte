<script lang="ts">
  import { ProjectGroups } from 'freenit'
  import store from '$lib/store'

  let { data: props } = $props()
</script>

<ProjectGroups projectId={props.projectId} store={store} />
