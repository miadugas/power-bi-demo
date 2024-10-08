<template>
	<div class="min-h-full">
		<Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
			<div class="mx-auto max-w-7xl px-4">
				<div class="flex h-16 items-center justify-between">
					<div class="flex items-center">
						<div class="flex-shrink-0 pt-6">
							<img
								class="h-8 w-8"
								src="../assets/mia-abt-me.png"
								alt="Mia Dugas Logo" />
						</div>
						<div class="hidden md:block">
							<div class="ml-10 flex items-baseline space-x-4 pt-8">
								<a
									v-for="item in navigation"
									:key="item.name"
									:href="item.href"
									:class="[
										item.current
											? 'bg-gray-900 text-white'
											: 'text-gray-300 hover:bg-gray-700 hover:text-white',
										'rounded-md px-3 py-2 text-sm font-medium',
									]"
									:aria-current="item.current ? 'page' : undefined"
									>{{ item.name }}</a
								>
							</div>
						</div>
					</div>
					<div class="hidden md:block">
						<div class="ml-4 flex items-center md:ml-6">
							<button
								type="button"
								class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
								<span class="sr-only">View notifications</span>
							</button>

							<!-- Profile dropdown -->
							<Menu as="div" class="relative ml-3">
								<transition
									enter-active-class="transition ease-out duration-100"
									enter-from-class="transform opacity-0 scale-95"
									enter-to-class="transform opacity-100 scale-100"
									leave-active-class="transition ease-in duration-75"
									leave-from-class="transform opacity-100 scale-100"
									leave-to-class="transform opacity-0 scale-95">
									<MenuItems
										class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
										<MenuItem
											v-for="item in userNavigation"
											:key="item.name"
											v-slot="{ active }">
											<a
												:href="item.href"
												:class="[
													active ? 'bg-gray-100' : '',
													'block px-4 py-2 text-sm text-gray-700',
												]"
												>{{ item.name }}</a
											>
										</MenuItem>
									</MenuItems>
								</transition>
							</Menu>
						</div>
					</div>
					<div class="-mr-2 flex md:hidden">
						<!-- Mobile menu button -->
						<DisclosureButton
							class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
							<span class="sr-only">Open main menu</span>
							<Bars3Icon
								v-if="!open"
								class="block h-6 w-6"
								aria-hidden="true" />
							<XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
						</DisclosureButton>
					</div>
				</div>
			</div>

			<DisclosurePanel class="md:hidden">
				<div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
					<DisclosureButton
						v-for="item in navigation"
						:key="item.name"
						as="a"
						:href="item.href"
						:class="[
							item.current
								? 'bg-gray-900 text-white'
								: 'text-gray-300 hover:bg-gray-700 hover:text-white',
							'block rounded-md px-3 py-2 text-base font-medium',
						]"
						:aria-current="item.current ? 'page' : undefined"
						>{{ item.name }}</DisclosureButton
					>
				</div>
				<div class="border-t border-gray-700 pb-3 pt-4">
					<div class="flex items-center px-5">
						<div class="ml-3">
							<div class="text-base font-medium leading-none text-white">
								{{ user.name }}
							</div>
							<div class="text-sm font-medium leading-none text-gray-400">
								{{ user.email }}
							</div>
						</div>
					</div>
					<div class="mt-3 space-y-1 px-2">
						<DisclosureButton
							v-for="item in userNavigation"
							:key="item.name"
							as="a"
							:href="item.href"
							class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
							>{{ item.name }}</DisclosureButton
						>
					</div>
				</div>
			</DisclosurePanel>
		</Disclosure>
	</div>
</template>

<script lang="ts">
	import {
		Disclosure,
		DisclosureButton,
		DisclosurePanel,
		Menu,
		MenuButton,
		MenuItem,
		MenuItems,
	} from '@headlessui/vue';
	import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

interface NavItem {
  name: string;
  href: string;
  current: boolean;
}

	const user = {
		name: 'Jane Doe',
		email: 'jane.doe@example.com',
	};
	const navigation = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Admin', href: '/admin', current: false },
		{ name: 'Reports', href: '/reports', current: false },
	];

  const userNavigation: NavItem[] = [
  // Add user navigation items if needed
]

	export default {
		components: {
			Disclosure,
			DisclosureButton,
			DisclosurePanel,
			Menu,
			MenuButton,
			MenuItem,
			MenuItems,
			Bars3Icon,
			XMarkIcon,
		},
		setup() {
			return {
				user,
				navigation,
				userNavigation,
			};
		},
	};
</script>
