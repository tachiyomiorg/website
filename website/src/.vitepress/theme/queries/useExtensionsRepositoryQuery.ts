import { useQuery } from "@tanstack/vue-query";
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

export interface GitHubAsset {
	name: string;
	content_type: string;
	browser_download_url: string;
}

export default function useExtensionsRepositoryQuery() {
	return useQuery({
		queryKey: ["extensions"],
		queryFn: async () => {
			const { data } = await axios.get<Extension[]>(GITHUB_EXTENSION_JSON);

			return data;
		},
		initialData: () => [],
		refetchOnWindowFocus: false,
	});
}
