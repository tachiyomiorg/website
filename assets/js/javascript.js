(function ($) {
	'use strict';
	$(document).on('ready', function () {
		$('body').bootstrapMaterialDesign();
		getLatestRelease();
		getLatestIssues();
		getInfo();
		//////////////////////////
		var oneHour = 60 * 60 * 1000;
		var oneDay = 24 * oneHour;
		var navMain = $(".navbar-collapse");
		var header = $('#menu').height();
		var now = new Date()
		const times = [["second", 1], ["minute", 60], ["hour", 3600], ["day", 86400], ["week", 604800], ["month", 2592000], ["year", 31536000]]
		navMain.on("click", "a:not([data-toggle])", null, function () {
			navMain.collapse('hide');
		});

		$('.devRelease').tooltip();

		$('body').scrollspy({ target: '#menu'});
		$('[data-spy="scroll"]').each(function () {
			$('body').scrollspy('refresh')
		})
		$(window).scroll(function() {
            $('video').each(function(){
                if ($(this).is(":in-viewport")) {
                    $(this)[0].play();
                } else {
                    $(this)[0].pause();
                }
            })
        });


		$("nav, footer").find("a").click(function (e) {
			e.preventDefault();
			var section = $(this).attr("href");
			$("html, body").animate({
				scrollTop: $(section).offset().top
			});
		});
		$('#myList a').on('click', function (e) {
			e.preventDefault()
			$(this).tab('show')
		})

		$(window).scroll(function () {
			if ($(window).scrollTop() >= header - header) {
				$('nav').addClass('fixed-header');
				$('nav div').addClass('visible-title');
			} else {
				$('nav').removeClass('fixed-header');
				$('nav div').removeClass('visible-title');
			}
		});
		function getLatestIssues() {
			$.getJSON("https://api.github.com/repos/inorichi/tachiyomi/issues?page1&per_page=3").done(function (releases) {
				for (let release = 0; release < releases.length; release++) {
					const element = releases[release];
					// console.log(element);
					var dateDiff = new Date() - new Date(element.created_at);
					// var timeAgo;
					// if (dateDiff < oneDay) {
					// 	timeAgo = (dateDiff / oneHour).toFixed(1) + " hours ago";
					// } else {
					// 	timeAgo = (dateDiff / oneDay).toFixed(1) + " days ago";
					// }
					var item = $('<a href="' + element.html_url + '" class="list-group-item list-group-item-action flex-column align-items-start bg-white mb-1 shadow" target="_blank">' +
						'<div class="card d-flex w-100 justify-content-between">' +
						'<h5 class="mb-1 card-header">' + element.title + '</h5>' +
						'<small class="ml-auto">' + timeAgo(new Date(element.created_at)) + '</small>' +
						'<div class="card-body"></div>'+
						'<p class="mb-1 text-secondary card-text">' + element.body.substr(0, 150) + ' ...' + '</p>' +
						// '<small>Donec id elit non mi porta.</small>' +
						'</div>'+
						'</div>' +
						'</a>');
					$('.issuesList').append(item);
					// console.log(timeAgo);
				}
			});
		}
		function getLatestRelease() {
			$.getJSON("https://api.github.com/repos/inorichi/tachiyomi/releases/latest").done(function (release) {
				// console.log(release);
				var asset = release.assets[0];
				var downloadCount = 0;
				for (var i = 0; i < release.assets.length; i++) {
					downloadCount += release.assets[i].download_count;
				}
				$(".tarRelease").attr("href", release.tarball_url);
				$(".zipRelease").attr("href", release.zipball_url);
				$(".stableRelease").attr({href :asset.browser_download_url,
												title: release.name});
				$('.stableRelease').tooltip();
				$(".downloaded").html(downloadCount.toLocaleString() + " times");
				$(".downloaded").fadeIn("slow");
			});
		}
		function getInfo() {
			$.getJSON("https://api.github.com/repos/inorichi/tachiyomi").done(function (release) {
				// console.log(release);
				// console.log(release.stargazers_count);
				var gitbutton = $(".starGithub span");
				$(".starGithub").attr("href", release.html_url);
				gitbutton.html(release.stargazers_count);
				$('.starGithub').tooltip();
			});
		}

		function timeAgo(date) {
			var diff = Math.round((now - date) / 1000)
			for (var t = 0; t < times.length; t++) {
				if (diff < times[t][1]) {
					if (t == 0) {
						return "Just now"
					} else {
						diff = Math.round(diff / times[t - 1][1])
						return diff + " " + times[t - 1][0] + (diff == 1?" ago":"s ago")
					}
				}
			}
		}
	});
})(jQuery);
