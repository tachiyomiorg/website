import { useQuery } from "@tanstack/vue-query";
import axios from "axios";
import { GITHUB_STABLE_API, GITHUB_PREVIEW_API } from "../../config/constants";
import { unref, type Ref } from 'vue';

export type ReleaseType = "stable" | "preview";

export interface GitHubRelease {
	body: string
	tag_name: string
	name: string
	assets: GitHubAsset[]
	published_at: string
}

export interface GitHubAsset {
	name: string
	content_type: string
	browser_download_url: string
}

const apiUrls: Record<ReleaseType, string> = {
	stable: GITHUB_STABLE_API,
	preview: GITHUB_PREVIEW_API,
};

export default function useReleaseQuery(type: ReleaseType | Ref<ReleaseType>) {
	return useQuery({
		queryKey: ["release", type],
		queryFn: async () => {
			const typeKey = unref(type);
			const { data } = await axios.get<GitHubRelease>(apiUrls[typeKey]);

			return data;
		},
		initialData: () => null,
		refetchOnWindowFocus: false,
	})
}
