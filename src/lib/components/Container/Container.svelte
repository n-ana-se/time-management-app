<script lang="ts">
	import { goto } from '$app/navigation';
	import { Icon } from 'svelte-hero-icons';
	import type { IconProps } from 'svelte-hero-icons/Icon.svelte';
	type route = Pick<IconProps, 'src'> & {
		name: string;
		path: string;
	};
	let routes: route[] = [];
</script>

<div class="wrapper">
	{#each routes as route}
		<li>
			<a href={route.path}>
				<Icon src={route.src} />
			</a>
		</li>
	{/each}
</div>
