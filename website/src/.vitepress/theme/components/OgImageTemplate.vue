<script setup lang="ts">
	defineProps<{ title: string; description?: string; dir?: string }>();
</script>

<template>
    <div
        tw="w-full h-full bg-white flex flex-col"
		style="background:linear-gradient(0deg, rgba(255, 255, 255, 0.92), rgba(231,230,255,0.86)), url(https://kodo.moe/img/open-graph-background.png)"
    >
		<div tw="p-10 w-full min-h-0 grow flex flex-col items-center justify-between">
			<div tw="w-full flex justify-between items-center text-4xl font-medium">
				<div tw="flex items-center">
					<svg width="64" height="64" viewBox="0 0 288 288" preserveAspectRatio="xMidYMid meet" fill="#8995FF"><path d="M141.2 36.7l-18.3.3.8 9.8c.4 5.3.8 11.9.8 14.7v5h-41-41l.3 17.9.3 17.9 6.7-.7c15.2-1.4 101.5-1.8 146.2-.7l48 1.6c1.3.4 1.5-2 1.5-17.8V66.5l-38.3.4c-21 .2-39.8 0-41.8-.3l-3.5-.7.3-15c.3-12.8.1-14.9-1.2-14.7-.8.1-9.7.4-19.8.5zm-56.7 76.9c-12.8 5-16 6.7-15.8 8.1.1 1 2.2 7.3 4.7 14 5.8 15.3 12.4 38.4 16.6 57.8l3.5 15.3c.2.2 8.3-2.5 18.2-6l17.9-6.3-1.2-6c-3.5-16.8-24.8-83.6-26.7-83.4-.7.1-8.4 3-17.2 6.5zm93.6 10.1c-10.4 41.7-22.9 83.2-27.1 90.1l-1.9 3.1-17.3.3c-20 .3-91.3-.9-94.3-1.6-1.9-.5-2 0-2 18v18.6l5-.6c2.8-.3 51.8-.9 109-1.2l104-.7v-17.6-17.6l-8.5.7c-4.7.3-19.5.7-32.9.7-19.1.1-24.2-.2-23.8-1.2.3-.6 2.2-5 4.2-9.7 6.5-15.2 29.6-86.3 28.4-87.4-.4-.4-32.6-9.4-36.5-10.3-2-.4-2.4.7-6.3 16.4z"/></svg>
					<div tw="text-slate-900 ml-2 mt-1 font-semibold">Tachiyomi</div>
				</div>
				<div v-if="dir" tw="flex items-center text-slate-600">
					<div v-if="dir" tw="text-4xl font-semibold mr-2">{{ dir }}</div>
					<svg v-if="dir == 'FAQ'" width="48" height="48" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" fill="currentColor"><path d="M18,15H6L2,19V3A1,1 0 0,1 3,2H18A1,1 0 0,1 19,3V14A1,1 0 0,1 18,15M23,9V23L19,19H8A1,1 0 0,1 7,18V17H21V8H22A1,1 0 0,1 23,9M8.19,4C7.32,4 6.62,4.2 6.08,4.59C5.56,5 5.3,5.57 5.31,6.36L5.32,6.39H7.25C7.26,6.09 7.35,5.86 7.53,5.7C7.71,5.55 7.93,5.47 8.19,5.47C8.5,5.47 8.76,5.57 8.94,5.75C9.12,5.94 9.2,6.2 9.2,6.5C9.2,6.82 9.13,7.09 8.97,7.32C8.83,7.55 8.62,7.75 8.36,7.91C7.85,8.25 7.5,8.55 7.31,8.82C7.11,9.08 7,9.5 7,10H9C9,9.69 9.04,9.44 9.13,9.26C9.22,9.08 9.39,8.9 9.64,8.74C10.09,8.5 10.46,8.21 10.75,7.81C11.04,7.41 11.19,7 11.19,6.5C11.19,5.74 10.92,5.13 10.38,4.68C9.85,4.23 9.12,4 8.19,4M7,11V13H9V11H7M13,13H15V11H13V13M13,4V10H15V4H13Z" /></svg>
					<svg v-if="dir == 'Guide'" width="48" height="48" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" fill="currentColor"><path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" /></svg>
				</div>
			</div>
			<div tw="w-full pr-56 flex flex-col items-start justify-end">
				<div tw="text-6xl font-bold text-slate-900">{{ title }}</div>
				<div v-if="description" tw="mt-2 text-4xl text-slate-600">{{ description }}</div>
			</div>
		</div>
		<div tw="shrink-0 h-2 w-full flex" style="background-color: #8995ff;" />
	</div>
</template>
