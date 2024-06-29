<script>
	import '../styles/app.css';
	import '../styles/fonts/style.css';
	import { assets } from '$app/paths';
	import { AppBar, AppLayout, Button, ListItem, Shine, ThemeSwitch } from 'svelte-ux';
</script>

<AppLayout areas="'header header' 'aside main'" headerHeight={90} navWidth={0}>
	<AppBar class="gradiente-inferior mx-3 mt-4 pb-6">
		<div slot="menuIcon">
			<img src="{assets}/favicon.png" alt="" width="55" class="mx-1" />
		</div>
		<div slot="title">
			<ListItem
				classes={{ title: 'averta-bold text-lg', subheading: 'text-xs font-semibold' }}
				noShadow
				noBackground
			>
				<div slot="title" class="averta-bold text-pretty text-xl">RubenMach</div>
				<div slot="subheading" class="text-sm text-gray-400">
					<img src="{assets}/svelte.svg" alt="" width="17px" class="inline-img" /> SvelteDev
				</div>
			</ListItem>
		</div>
		<div slot="actions">
			<ThemeSwitch />
			<Button
				variant="fill-light"
				color="primary"
				rounded="full"
				size="lg"
				href="https://github.com/RbnMach/isaxvelte-pro"
				target="_blank"
				class="p-2"
			>
				<img src="{assets}/github.svg" alt="Github" width="28" />
			</Button>
		</div>
	</AppBar>

	<main>
		<slot />
	</main>
</AppLayout>

<style>
	main {
		margin-top: -1.1rem;
	}
</style>
