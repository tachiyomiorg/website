<script setup lang="ts">
defineProps<{ title: string; description?: string; dir?: string }>()
</script>

<template>
  <div
    tw="w-full h-full bg-white flex flex-col"
    style="background:linear-gradient(0deg, rgba(255, 255, 255, 0.92), rgba(231,230,255,0.86)), url(https://tachiyomi.org/img/open-graph-background.png)"
  >
    <div tw="p-10 w-full min-h-0 grow flex flex-col items-center justify-between">
      <div tw="w-full flex justify-between items-center text-4xl font-medium">
        <div tw="flex items-center">
          <svg width="64" height="64" viewBox="0 0 288 288" preserveAspectRatio="xMidYMid meet" fill="#8995FF"><path d="M141.2 36.7l-18.3.3.8 9.8c.4 5.3.8 11.9.8 14.7v5h-41-41l.3 17.9.3 17.9 6.7-.7c15.2-1.4 101.5-1.8 146.2-.7l48 1.6c1.3.4 1.5-2 1.5-17.8V66.5l-38.3.4c-21 .2-39.8 0-41.8-.3l-3.5-.7.3-15c.3-12.8.1-14.9-1.2-14.7-.8.1-9.7.4-19.8.5zm-56.7 76.9c-12.8 5-16 6.7-15.8 8.1.1 1 2.2 7.3 4.7 14 5.8 15.3 12.4 38.4 16.6 57.8l3.5 15.3c.2.2 8.3-2.5 18.2-6l17.9-6.3-1.2-6c-3.5-16.8-24.8-83.6-26.7-83.4-.7.1-8.4 3-17.2 6.5zm93.6 10.1c-10.4 41.7-22.9 83.2-27.1 90.1l-1.9 3.1-17.3.3c-20 .3-91.3-.9-94.3-1.6-1.9-.5-2 0-2 18v18.6l5-.6c2.8-.3 51.8-.9 109-1.2l104-.7v-17.6-17.6l-8.5.7c-4.7.3-19.5.7-32.9.7-19.1.1-24.2-.2-23.8-1.2.3-.6 2.2-5 4.2-9.7 6.5-15.2 29.6-86.3 28.4-87.4-.4-.4-32.6-9.4-36.5-10.3-2-.4-2.4.7-6.3 16.4z" /></svg>
          <div tw="text-slate-900 ml-2 mt-1 font-semibold">
            Tachiyomi
          </div>
        </div>
        <div v-if="dir" tw="flex items-center text-slate-600">
          <div v-if="dir" tw="text-4xl font-semibold mr-2" v-html="dir" />
          <svg v-if="dir === 'FAQ'" width="48" height="48" viewBox="0 -960 960 960" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M120-55.5q-15.5 0-26.5-11T82.5-93q0-15.5 11-26.5t26.5-11h720q15.5 0 26.5 11t11 26.5q0 15.5-11 26.5t-26.5 11H120ZM207-170q-15.5 0-26.5-11t-11-26.5v-193q-32.5-54-50.75-114.25T100.5-639.5q0-59 15.25-117.5t36.75-116q7.5-20 24.5-32.25t38-12.25q26.5 0 44.75 18.5T276-854.5l-5.5 92q-3 48.5 11 93t41.75 78Q351-558 391-537.75t89 20.25q59.5 0 116.5 11.5T697-471.5q43.5 23 68.25 58.5T790-326v118.5q0 15.5-11 26.5t-26.5 11h-355v-32q0-35 24-60.25T480-287.5h120q15.5 0 26.5-11t11-26.5q0-15.5-11-26.5t-26.5-11H480q-66 0-111.75 47T322.5-202v32H207Zm273-392.5q-65.5 0-111.5-46t-46-111.5q0-65.5 46-111.5t111.5-46q65.5 0 111.5 46t46 111.5q0 65.5-46 111.5t-111.5 46Z" /></svg>
          <svg v-else-if="dir === 'Guide'" height="48" width="48" viewBox="0 -960 960 960" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M831-327.5V-558L516-386.5q-17 9-36 9t-36-9l-329.5-180q-10-5.5-14.5-14.25t-4.5-18.75q0-10 4.5-18.75t14.5-14.25l330-179.5q8.5-5 17.25-7t18.25-2q9.5 0 18.25 2t17.25 7l371 202q9 5 14.25 13.75T906-577v249.5q0 15.5-11 26.5t-26.5 11q-15.5 0-26.5-11t-11-26.5Zm-387 173-197-107q-18.5-10-28.75-27.75T208-328v-149.5L444-349q17 9 36 9t36-9l236-128.5V-328q0 21-10.25 38.75T713-261.5l-197 107q-8.5 5-17.5 7t-18.5 2q-9.5 0-18.5-2t-17.5-7Z" /></svg>
          <svg v-else-if="dir === 'News'" height="48" width="48" viewBox="0 -960 960 960" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M157.5-122.5q-31 0-53-22t-22-53v-614q0-6.5 5.5-9t10.5 2.5l35.5 35.5q5.5 5.5 13 5.25t13-5.75l40-40q5.5-5.5 13-5.75t13 5.25l41 41q5.5 5.5 13 5.5t13-5.5l41-41q5.5-5.5 13-5.25t13 5.75l40 40q5.5 5.5 13 5.75t13-5.25l41-41q5.5-5.5 13-5.5t13 5.5l41 41q5.5 5.5 13 5.25t13-5.75l40-40q5.5-5.5 13-5.75t13 5.25l41 41q5.5 5.5 13 5.5t13-5.5l41-41q5.5-5.5 13-5.25t13 5.75l40 40q5.5 5.5 13 5.75t13-5.25l35.5-35.5q5-5 10.5-2.5t5.5 9v614q0 31-22 53t-53 22h-645Zm0-75h285v-245h-285v245Zm360 0h285v-85h-285v85Zm0-160h285v-85h-285v85Zm-360-160h645v-125h-645v125Z" /></svg>
        </div>
      </div>
      <div tw="w-full pr-56 flex flex-col items-start justify-end">
        <div tw="text-6xl font-bold text-slate-900" v-html="title" />
        <div v-if="description" tw="mt-2 text-4xl text-slate-600" v-html="description" />
      </div>
    </div>
    <div tw="shrink-0 h-2 w-full flex" style="background-color: #8995ff;" />
  </div>
</template>
