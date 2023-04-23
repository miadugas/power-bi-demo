<template>
	<div class="lg:flex-col">
		<div class="flex justify-center items-center pb-6">
			<button
				type="button"
				@click="viewReport"
				class="flex items-center rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
				<font-awesome-icon icon="eye" class="mr-2" />
				View Report
			</button>
		</div>

		<div class="lg:flex-col p-4 pt-6">
			<div class="flex">
				<span class="lg:px-6 lg:pb-2 text-lg text-violet-700 font-bold"
					>Jurisdiction Information</span
				>
			</div>
			<div
				class="lg:flex lg:flex-col p-4 lg:w-full border-1 border-gray-3 rounded-lg">
				<div class="lg:flex pb-2">
					<div class="p-2 lg:w-1/2">
						<div class="text-left">
							<label class="font-bold">Display Name :</label>
						</div>
						<input
							type="text"
							id="disabled-input-2"
							v-model="displayName"
							:disabled="isDisabled2"
							class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
					</div>
					<div class="p-2 lg:w-1/2">
						<div class="text-left">
							<label class="font-bold">Acronym :</label>
						</div>
						<input
							type="text"
							id="disabled-input-2"
							v-model="acronym"
							:disabled="isDisabled2"
							class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
					</div>
				</div>
				<div class="flex justify-center">
					<div v-if="isDisabled2">
						<button
							@click="editInfo2"
							class="button font-bold py-2 px-4 rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
							Edit Info
						</button>
					</div>
					<div v-else>
						<button
							@click="save2"
							class="button font-bold py-2 px-4 rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
							Save
						</button>
						<button
							@click="cancel2"
							class="button font-bold py-2 px-4 rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="lg:flex-col p-4 pt-6">
			<div class="flex">
				<span class="lg:px-6 lg:pb-2 text-lg text-violet-700 font-bold"
					>Reporting Configuration</span
				>
			</div>
			<div class="lg:flex-col p-4 lg:w-full border-1 border-gray-3 rounded-lg">
				<div class="p-2">
					<div class="text-left">
						<label class="font-bold">Report Url :</label>
					</div>
					<input
						type="text"
						id="disabled-input-2"
						v-model="reportUrl"
						:disabled="isDisabled"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						required />
				</div>
				<div class="lg:flex">
					<div class="p-2 lg:w-1/2">
						<div class="text-left">
							<label class="font-bold">Group Id :</label>
						</div>
						<input
							type="text"
							id="disabled-input-2"
							v-model="groupId"
							:disabled="isDisabled"
							class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
					</div>
					<div class="p-2 lg:w-1/2">
						<div class="text-left">
							<label class="font-bold">Report Id :</label>
						</div>
						<input
							type="text"
							id="disabled-input-2"
							v-model="reportId"
							:disabled="isDisabled"
							class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
					</div>
				</div>
				<div class="flex justify-center pt-2">
					<div v-if="isDisabled">
						<button
							@click="editInfo"
							class="button font-bold py-2 px-4 rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
							Edit Info
						</button>
					</div>
					<div v-else>
						<button
							@click="saveReportInfo"
							class="button font-bold py-2 px-4 rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
							Save
						</button>
						<button
							@click="cancel"
							class="button font-bold py-2 px-4 rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { ref } from 'vue';

	export default {
		name: 'Admin',
		setup() {
			const isDisabled = ref(true);
			const reportUrl = ref(
				'https://app.powerbi.com/groups/cd105cd2-1804-4f50-b979-1c49ff001171/reports/ed44234d-578f-449a-b606-8b7436720e3a/ReportSection'
			);
			const groupId = ref('cd105cd2-1804-4f50-b979-1c49ff001171');
			const reportId = ref('ed44234d-578f-449a-b606-8b7436720e3a');
			const isDisabled2 = ref(true);
			const displayName = ref('Demo Jurisdiction');
			const acronym = ref('DEMO');
			const errorMessage = ref('');

			function editInfo() {
				isDisabled.value = false;
			}

			function saveReportInfo() {
				const regex = /.+\/groups\/(.+)\/reports\/(.+)\/.*/;

				if (regex.test(reportUrl.value)) {
					groupId.value = RegExp.$1;
					reportId.value = RegExp.$2;
					isDisabled.value = true;
				} else {
					errorMessage.value = 'Please enter an embeddable Power BI report URL';
				}
			}

			function save() {
				isDisabled.value = true;
				// Save the updated values to storage
			}

			function cancel() {
				isDisabled.value = true;
			}

			function editInfo2() {
				isDisabled2.value = false;
			}

			function save2() {
				isDisabled2.value = true;
				// Save the updated values to storage
			}

			function cancel2() {
				isDisabled2.value = true;
			}

			function viewReport() {
				this.$router.push('/reports');
			}

			return {
				isDisabled,
				reportUrl,
				groupId,
				reportId,
				isDisabled2,
				displayName,
				acronym,
				errorMessage,
				editInfo,
				saveReportInfo,
				save,
				cancel,
				editInfo2,
				save2,
				cancel2,
				viewReport,
			};
		},
	};
</script>
