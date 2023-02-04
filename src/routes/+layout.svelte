<script>
	import { config } from '$lib/config/default';
	import '$lib/styles/app.css';
</script>

<div class="h-full bg-cover" style={`background-image: url(${config.backgroundImage})`}>
	<div class="backdrop-blur-lg h-full grid place-items-center">
		<slot />
	</div>
</div>
