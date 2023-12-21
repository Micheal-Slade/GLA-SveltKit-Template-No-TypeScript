<script>
	// Example
	import { Button, Select } from '@ldn-viz/ui';
	import RadioButton from '@ldn-viz/ui';

	let value = 1;

	const options = [
		{ id: 0, label: 'One', value: 1 },
		{ id: 1, label: 'Two', value: 2 },
		{ id: 2, label: 'Three', value: 3 }
	];
</script>

<!-- Example -->
<div class="container py-16">
	<h1 class="text-xl font-bold mb-8">
		You can delete these components and start building your app
	</h1>
	<div class="w-full md:w-1/2 xl:w-1/3 space-y-4">
		<Select label="I'm a label" {options} bind:value />
		<Button>I am a button</Button>
	</div>
</div>

<!-- using 'dark' modifier -->
<div class="dark bg-core-grey-800">
	<div class="container py-16">
		<div class="w-full md:w-1/2 xl:w-1/3 space-y-4">
			<Select label="I'm a label" {options} bind:value />
			<Button>I am a button</Button>
		</div>
	</div>
</div>
