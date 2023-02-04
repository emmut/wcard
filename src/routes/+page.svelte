<script>
	import { config } from '$lib/config/default';
</script>

<div class="bg-neutral-200 p-6 rounded-md m-2 md:m-8">
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-[30%_auto]">
		<img
			src={config.profilePicture}
			alt="me"
			class="rounded-full ring-4 ring-zinc-300/70 justify-self-center"
		/>
		<div class="prose">
			<h1>Welcome to SvelteKit</h1>
			<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
		</div>
	</div>
</div>
