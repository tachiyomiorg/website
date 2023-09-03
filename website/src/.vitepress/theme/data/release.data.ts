import { defineLoader } from "vitepress"
import axios from "axios";
import { GITHUB_PREVIEW_API, GITHUB_STABLE_API } from "../../config/constants";

export interface AppRelease {
	stable: GitHubRelease;
	preview: GitHubRelease;
}

export interface GitHubRelease {
	body: string;
	tag_name: string;
	name: string;
	assets: GitHubAsset[];
	published_at: string;
}

export interface GitHubAsset {
	name: string;
	content_type: string;
	browser_download_url: string;
}

declare const data: AppRelease;
export { data };

export default defineLoader({
	async load(): Promise<AppRelease> {
		const { data: stable } = await axios.get<GitHubRelease>(GITHUB_STABLE_API);
		const { data: preview } = await axios.get<GitHubRelease>(GITHUB_PREVIEW_API);

		return { stable, preview };
	}
});
