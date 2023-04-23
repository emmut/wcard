<script lang="ts">
	import '$lib/styles/app.css';
	import type { Content } from './+layout';

	export let data: Content;
</script>

<div class="h-full bg-cover" style={`background-image: url(${data.attributes.background})`}>
	<div class="backdrop-blur-lg h-full grid place-items-center">
		<slot />
	</div>
</div>
