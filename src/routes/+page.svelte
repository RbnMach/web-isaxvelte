<script>
	import { assets } from '$app/paths';
	import { Button, Card, Grid, MultiSelectField, TextField } from 'svelte-ux';
	import { mdiMagnify } from '@mdi/js';
	import { Isax } from 'isaxvelte';

	import { icons } from '$lib/isaxvelte';

	const options = [
		{ name: 'Linear', value: 'Linear' },
		{ name: 'Bold', value: 'Bold' },
		{ name: 'Broken', value: 'Broken' },
		{ name: 'Bulk', value: 'Bulk' },
		{ name: 'Outline', value: 'Outline' },
		{ name: 'Twotone', value: 'Twotone' }
	];
	let iconsJson = {
		type: ['Linear'],
		list: icons
	};

	let valueSearch = '';

	// buscar valueSearch en el objeto icons por su key y filtrar, mostrar todos los resultados cercanos y asignarlo a iconsJson.list

	// let filteredIcons = Object.keys(icons)
	// 	.filter((key) => key.toLowerCase().includes(valueSearch.toLowerCase()))
	// 	.map((key) => ({ name: key, value: icons[key] }));
	// $: iconsJson.list = filteredIcons;
</script>

<Grid gap={8}>
	<div class="flex items-center justify-center" style="height: 75vh;">
		<div class="text-center">
			<h1 class="averta-bold text-7xl text-primary">Isaxvelte</h1>
			<h3 class="text-xl">
				Iconsax for <img src="{assets}/svelte.svg" alt="" width="24" class="inline-img" /> Svelte
			</h3>
			<div class="mt-8">
				<Button
					variant="fill"
					color="primary"
					rounded="full"
					size="lg"
					href="https://www.npmjs.com/package/isaxvelte"
					target="_blank"
				>
					Get Started <img src="{assets}/rocket.svg" alt="Github" width="24" class="inline-img" />
				</Button>
			</div>
		</div>
	</div>
	<div class="flex justify-center px-5">
		<TextField
			type="text"
			label="Search Icon.."
			labelPlacement="float"
			placeholder="Enter the name of the icon..."
			icon={mdiMagnify}
			class="w-fit"
			bind:value={valueSearch}
		/>
		<MultiSelectField
			type="text"
			label="Icon type"
			labelPlacement="float"
			placeholder="Enter the type of the icon..."
			{options}
			bind:value={iconsJson.type}
			formatSelected={({ options }) => options.map((o) => o.name).join(', ') || ''}
			class="w-fit"
		/>
	</div>
	<div class="mb-6 mt-12 px-5">
		<Grid autoColumns="130px" gap={8}>
			{#each Object.keys(iconsJson.list) as name}
				<Card class="p-4 drop-shadow">
					<div slot="default" class="truncate text-center font-semibold text-info">{name}</div>
					<div slot="contents" class="text-center text-info-700">
						{#each iconsJson.type as type}
							<Isax {name} type={type.toLowerCase()} size="70px" />
						{/each}
					</div>
				</Card>
			{/each}
		</Grid>
	</div>
</Grid>
