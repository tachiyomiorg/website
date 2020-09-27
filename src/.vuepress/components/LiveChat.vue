<template>
	<div class="liveChat" v-bind:style="chatDisplay">
		<div class="liveChatBox">
			<div class="liveChatHeader">
				<span id="headerTitle">
					<div id="liveChatTitle">Live Support</div>
					<a v-on:click="closeChat"><MaterialIcon id="closeBtn" icon="close" /></a>
				</span>
				<hr />
			</div>
			<div class="liveChatMessage">
				<span
					><img
						id="avatar"
						src="https://cdn.discordapp.com/avatars/585587937757102105/74c1593ad8e3c64fedc1128ab9f89d82.png"
					/>
					<b>Helda</b> from Tachiyomi</span
				>
				<p class="chat">Need some assistance?</p>
			</div>
		</div>
		<a href="https://discorg.gg/tachiyomi/">
			<div class="liveChatReplyBox"><i>Reply here</i></div>
		</a>
	</div>
</template>

<script>
export default {
	data: function () {
		return {
			chatDisplay: {
				display: "inline",
			},
		};
	},
	mounted: function () {
		if (localStorage.noChat) {
			this.$data.chatDisplay.display = "none";
		}
	},
	methods: {
		closeChat() {
			localStorage.noChat = 1;
			this.$data.chatDisplay.display = "none";
		},
	},
};
</script>

<style lang="stylus">
#avatar {
  border-radius: 50%;
  height: 1.25em;
  width: 1.25em;
}

.chat {
  background-color: #f0f0f0;
  padding: 0 0.5em;
  font-size: 0.8em;
  border-radius: 0.75em;
}

#closeBtn {
  margin-left: auto;
  margin-right: 0;
  width: 10%;
}

#headerTitle {
  width: 100%;
  display: inline-block;
}

.liveChat {
  position: fixed;
  bottom: 3.3em;
  right: 1.5em;
  z-index: 1;
}

.liveChatBox {
  background-color: #ffffff;
  border-radius: 0.75em;
  border: 1px solid #cfd4db;
}

.liveChatHeader {
  padding: 0.25em 0.5em;
}

.liveChatMessage {
  padding: 0 0.5em;
}

.liveChatReplyBox {
  background-color: #ffffff;
  color: #cccccc;
  border: 1px solid #cfd4db;
  padding: 0.1em 0.5em;
  border-radius: 0.5em;
  margin-top: 2vh;
}

#liveChatTitle {
  display: inline-block;
  width: 85%;
}
</style>
