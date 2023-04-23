<template>
	<div id="app">
		<h1>Login</h1>
		<form @submit.prevent="handleSubmit">
			<label
				for="email"
				class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>Your Email</label
			>
			<div class="relative">
				<div
					class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg
						aria-hidden="true"
						class="w-5 h-5 text-gray-500 dark:text-gray-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path
							d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
				</div>
				<input
					type="text"
					id="password"
					value="mia@apptesting.com" disabled
					class="cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
			</div>
			<label
				for="password"
				class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>Password</label
			>
			<div class="relative">
				<div
					class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg
						aria-hidden="true"
						class="w-5 h-5 text-gray-500 dark:text-gray-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path
							d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
				</div>
				<input
					type="text"
					id="password"
					value="**********" disabled
					class="cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					 />
			</div>
			<div class="container">
				<div class="vertical-center">
					<button
						type="submit"
						class="button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						Login
					</button>
				</div>
			</div>
		</form>
		<div class="disclosure mt-4 text-center text-sm text-gray-400">
			<p>
				Please note that this is a dummy login page for demonstration purposes
				only.
			</p>
			<p>
				It does not provide actual authentication or secure access to any
				resources.
			</p>
		</div>
	</div>
</template>

<script lang="ts">
	import { ref } from 'vue';
	import { useRouter } from 'vue-router';

	export default {
		setup() {
			const email = ref('');
			const password = ref('');
			const router = useRouter();

			const handleSubmit = () => {
				console.log('Email:', email.value);
				console.log('Password:', password.value);
				// Perform actual authentication here
				// If authentication is successful, navigate to the /admin route
				router.push('/admin');
			};

			return {
				email,
				password,
				handleSubmit,
			};
		},
	};
</script>

<style>
	#app {
		text-align: center;
	}

	form {
		display: inline-block;
		text-align: left;
	}

	div {
		margin-bottom: 10px;
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
