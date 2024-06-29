<script lang="ts">
	import { assets } from '$app/paths';
	import {
		Button,
		Card,
		Drawer,
		InfiniteScroll,
		MultiSelectField,
		RangeField,
		TextField
	} from 'svelte-ux';
	import { mdiMagnify, mdiFormatListBulletedType } from '@mdi/js';

	import { listIcons } from 'isaxvelte-pro';

	const options = [
		{ name: 'Linear', value: 'linear' },
		{ name: 'Bold', value: 'bold' },
		{ name: 'Broken', value: 'broken' },
		{ name: 'Bulk', value: 'bulk' },
		{ name: 'Outline', value: 'outline' },
		{ name: 'Twotone', value: 'twotone' }
	];

	let variant: ('linear' | 'bold' | 'broken' | 'bulk' | 'outline' | 'twotone')[] = ['linear'];
	let color: string = '#718fad';
	let size: number = 45;

	let valueSearch = '';
	let resultIcons = listIcons;

	function filtrarIcons() {
		if (valueSearch) {
			resultIcons = listIcons
				.filter((icon) => icon.name.toLowerCase().includes(valueSearch.toLowerCase()))
				.slice(0, 10);
		} else {
			resultIcons = listIcons;
		}
	}

	let openModal = false;
</script>

<Drawer bind:open={openModal} placement="bottom" class="h-80">
	<h1>Contents</h1>
	<!-- codigo svelte ini -->
	<pre>
		{resultIcons[0]}
	</pre>
	<!-- codigo svelte fin -->
	<div slot="actions">
		<Button on:click={() => (openModal = false)}>Close</Button>
	</div>
</Drawer>

<InfiniteScroll items={resultIcons} let:visibleItems perPage={24}>
	<div class="grid gap-2">
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

		<div class="mx-auto flex flex-wrap items-center justify-center gap-2 px-5">
			<TextField
				type="text"
				label="Search Icon"
				labelPlacement="float"
				placeholder="Enter the name..."
				class="w-full sm:w-auto md:w-80 lg:w-60"
				rounded
				dense
				clearable
				icon={mdiMagnify}
				bind:value={valueSearch}
				on:change={filtrarIcons}
			/>

			<MultiSelectField
				type="text"
				label="Icon type"
				labelPlacement="float"
				placeholder="Enter the type of the icon..."
				class="w-full sm:w-auto md:w-80 lg:w-60"
				rounded
				dense
				icon={mdiFormatListBulletedType}
				{options}
				bind:value={variant}
				formatSelected={({ options }) => options.map((o) => o.name).join(', ') || ''}
			/>

			<RangeField
				label="Font Size"
				class="w-full sm:w-auto md:w-80 lg:w-60"
				rounded
				dense
				min={14}
				max={100}
				bind:value={size}
			/>

			<TextField
				type="text"
				label="Color Icon"
				labelPlacement="float"
				placeholder="Code HEX..."
				class="w-full sm:w-auto md:w-80 lg:w-60"
				rounded
				dense
				bind:value={color}
			>
				<div slot="prepend" class="mr-3 grid grid-stack">
					<div class="h-6 w-6 rounded border" style:background={color} />
					<input type="color" bind:value={color} class="h-6 w-6 cursor-pointer rounded opacity-0" />
				</div>
			</TextField>
		</div>

		<div class="mb-6 mt-6 overflow-auto px-5 pt-4">
			<div class="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-5">
				{#each visibleItems as icono}
					<a href={'javascript:void(0)'} title={icono.name} on:click={() => (openModal = true)}>
						<Card
							class="mb-1 rounded-3xl bg-surface-100 p-2 duration-500 hover:scale-105 hover:border-primary-100"
						>
							<div slot="default" class="text-center" style="color: {color}; font-size: {size}px">
								{#each variant as variant}
									<svelte:component this={icono} {variant} />
								{/each}
							</div>
							<div slot="contents" class="truncate text-center text-sm font-light text-slate-400">
								{#if variant.length == 0}
									<svelte:component this={icono} variant="bold" />
								{/if}
								{icono.name}
							</div>
						</Card>
					</a>
				{/each}
			</div>
		</div>
	</div>
</InfiniteScroll>

<style>
	:global(input[type='range']) {
		height: 1.25rem !important;
	}
</style>
