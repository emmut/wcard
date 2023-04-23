<script lang="ts">
	import type { Content } from './+layout';

	export let data: Content;
</script>

<div class="bg-neutral-200 p-6 rounded-md m-2 md:m-8">
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-[30%_auto]">
		<img
			src={data.attributes.avatar}
			alt="Avatar"
			class="rounded-full ring-4 ring-zinc-300/70 justify-self-center"
		/>
		<div class="prose prose-headings:mb-1 prose-p:mt-2 prose-headings:text-3xl">
			{@html data.content}
		</div>
	</div>
</div>
