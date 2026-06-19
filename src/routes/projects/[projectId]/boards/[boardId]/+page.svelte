<script lang="ts">
  import { KanbanBoard } from 'freenit'
  import store from '$lib/store'

  let { data: props } = $props()
</script>

<KanbanBoard projectId={props.projectId} boardId={props.boardId} store={store} />
