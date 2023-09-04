<script setup lang="ts">
import { computed, ref, toRefs } from "vue";

const props = defineProps<{ body: string; author: string; tag: string; }>();
const { body, author, tag } = toRefs(props);

function isHigherThan(tagName: string, reference: string) {
	return reference.localeCompare(tagName, undefined, { numeric: true, sensitivity: "base" }) >= 0;
}

const notMentioned = computed(() => {
	return isHigherThan("v0.8.5", tag.value) ? ['arkon'] : [];
});

const nonExistent = ref<string[]>([])

const contributors = computed(() => {
	const list = [...body.value.matchAll(/(?<=\(|(, ))@(.*?)(?=\)|(, ))/g)]
		.map((match) => match[2])
	const uncredited = author.value.includes('[bot]')
		? notMentioned.value
		: [author.value, ...notMentioned.value];

	return [...new Set([...uncredited, ...list])].filter((user) => !nonExistent.value.includes(user));
});

// @ts-expect-error
const listFormatter = new Intl.ListFormat("en", {
	style: "long",
	type: "conjunction",
});

const contributorsText = computed(() => {
	if (contributors.value.length <= 3) {
		return listFormatter.format(contributors.value);
	}

	return listFormatter.format([
		...contributors.value.slice(0, 2),
		`${contributors.value.length - 2} other contributors`
	]);
});

function addToNonExistent(user: string) {
	if (!nonExistent.value.includes(user)) {
		nonExistent.value.push(user);
	}
}
</script>

<template>
	<div class="contributors" v-if="contributors.length > 0">
		<h3>Contributors</h3>
		<ul>
			<li
				v-for="contributor of contributors"
				:key="contributor"
			>
				<a
					:href="`https://github.com/${contributor}`"
					target="_blank"
					:title="`${contributor} profile on GitHub`"
					:aria-label="`${contributor} profile on GitHub`"
				>
					<img
						:src="`https://github.com/${contributor}.png?size=32`"
						:alt="`@${contributor} profile picture`"
						@error="addToNonExistent(contributor)"
						loading="lazy"
						class="avatar"
					>
				</a>
			</li>
		</ul>
		<div class="names">
			{{ contributorsText }}
		</div>
	</div>
</template>

<style lang="stylus" scoped>
.contributors {
	ul {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.5rem;
		list-style-type: none;
		padding-left: 0;

		li + li {
			margin-top: 0;
		}
	}

	.avatar {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		box-shadow: var(--vp-shadow-1);
		border: 1px solid var(--vp-c-divider);
	}

	.names {
		font-size: 0.875rem;
		color: var(--vp-c-text-2);
	}
}
</style>
