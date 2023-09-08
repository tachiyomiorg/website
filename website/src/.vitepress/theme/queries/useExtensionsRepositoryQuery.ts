import { UseQueryOptions, useQuery } from "@tanstack/vue-query";
import axios from "axios";
import { GITHUB_EXTENSION_JSON } from "../../config/constants";

export type ReleaseType = "stable" | "preview";

export interface Extension {
	name: string;
	pkg: string;
	apk: string;
	lang: string;
	code: number;
	version: string;
	nsfw: number;
	hasReadme: number;
	hasChangelog: number;
	sources: Source[];
}

export interface Source {
	name: string;
	lang: string;
	id: string;
	baseUrl: string;
	versionId: number;
	hasCloudflare: string;
}

type UseExtensionsRepositoryQueryOptions<S = Extension[]> =
	UseQueryOptions<Extension[], Error, S>

export default function useExtensionsRepositoryQuery<S = Extension[]>(options: UseExtensionsRepositoryQueryOptions<S> = {}) {
	return useQuery<Extension[], Error, S>({
		queryKey: ["extensions"],
		queryFn: async () => {
			const { data } = await axios.get<Extension[]>(GITHUB_EXTENSION_JSON);

			return data;
		},
		initialData: () => [],
		refetchOnWindowFocus: false,
		...options,
	});
}
