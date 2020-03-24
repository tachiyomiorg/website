<template lang="html">
  <div>
    <vs-table
      :data="users">

      <template slot-scope="{data}">
        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data" >

          <vs-td class="tableExtension" :data="tr.extension">
            <strong>{{tr.extension}}</strong>
          </vs-td>

          <vs-td class="tableSourceName" :data="tr.sourceName">
            {{tr.sourceName}}
          </vs-td>

		  <vs-td class="tableSourceWebsite" :data="tr.sourceWebsite">
            <a>{{tr.sourceWebsite}}</a>
          </vs-td>

          <template class="expand-user" slot="expand">
            <div class="con-expand-users">
              <div class="con-btns-user">
                <div class="con-userx">
                  <vs-avatar :badge="tr.id" size="45px" :src="`https://randomuser.me/api/portraits/women/3.jpg`"/>
                  <span>
                    <strong>{{ tr.extension }}</strong>
                  </span>
                </div>
              </div>
              <vs-list>
				<vs-list-item title="Source Name" :subtitle="tr.sourceName"></vs-list-item>
				<vs-list-item title="Source Website" :subtitle="tr.sourceWebsite"></vs-list-item>
                <vs-list-item title="Language" :subtitle="tr.language"></vs-list-item>
                <vs-list-item title="Notes" :subtitle="tr.notes"></vs-list-item>
              </vs-list>
            </div>
          </template>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
export default {
  data:()=>({
    users:[
      {
        "extension": "E-Hentai",
        "sourceName": "E-Hentai",
        "sourceWebsite": "e-hentai.org",
		"language": "Multiple",
		"notes": "Languages: English and 15+ others",
	  },
      {
        "extension": "MangaPlus",
        "sourceName": "MANGA Plus by SHUEISHA",
        "sourceWebsite": "mangaplus.shueisha.co.jp",
		"language": "Multiple",
		"notes": "Languages: English and Spanish",
	  },
      {
        "extension": "MangaDex",
        "sourceName": "MangaDex",
        "sourceWebsite": "mangadex.org",
		"language": "Multiple",
		"notes": "Languages: English and 30+ others; Log in to search",
	  },
      {
        "extension": "NHentai",
        "sourceName": "NHentai",
        "sourceWebsite": "nhentai.net",
		"language": "Multiple",
		"notes": "Languages: English, Japanese, and Chinese",
	  },
      {
        "extension": "NineManga",
        "sourceName": "NineManga",
        "sourceWebsite": "ninemanga.com",
		"language": "Multiple",
		"notes": "Languages: English, Spanish, Breton, Russian, Greek, Italian, and French",
	  },
      {
        "extension": "Simply Hentai",
        "sourceName": "Simply Hentai",
        "sourceWebsite": "simply-hentai.com",
		"language": "Multiple",
		"notes": "Languages: English, Japanese, Chinese, Korean, Spanish, Russian, French, Greek, and Portuguese",
	  },
      {
        "extension": "Toomics",
        "sourceName": "Toomics",
        "sourceWebsite": "toomics.com",
		"language": "Multiple",
		"notes": "Languages: English, Spanish, Italian, Greek, French, Spanish (Mexico), Portuguese, Sardinian, and Chinese (Traditional)",
	  },
      {
        "extension": "BoomManga",
        "sourceName": "BoomManga",
        "sourceWebsite": "m.boommanga.com",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "BoomManga",
        "sourceName": "ManManga",
        "sourceWebsite": "m.manmanga.com",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "BoomManga",
        "sourceName": "TwinsComics",
        "sourceWebsite": "m.twinscomics.com",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "BoomManga",
        "sourceName": "BoomMangazh",
        "sourceWebsite": "m.boommanga.com/cn",
		"language": "Chinese",
		"notes": "None",
	  },
      {
        "extension": "BoomManga",
        "sourceName": "ManMangazh",
        "sourceWebsite": "m.manmanga.com/cn",
		"language": "Chinese",
		"notes": "None",
	  },
      {
        "extension": "BoomManga",
        "sourceName": "TwinsComicszh",
        "sourceWebsite": "m.twinscomics.com/cn",
		"language": "Chinese",
		"notes": "None",
	  },
      {
        "extension": "ComiCake",
        "sourceName": "LetItGo Scans",
        "sourceWebsite": "https://reader.letitgo.scans.today",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "ComiCake",
        "sourceName": "ProjectTime Scans",
        "sourceWebsite": "read.ptscans.com",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "ComiCake",
        "sourceName": "WhimSubs",
        "sourceWebsite": "https://whimsubs.xyz",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "18LHPlus",
        "sourceWebsite": "18lhplus.com",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "Comicastle",
        "sourceWebsite": "www.comicastle.org",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "LSTranslations",
        "sourceWebsite": "lhtranslation.net",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "MangaBone",
        "sourceWebsite": "mangabone.com",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "MangaBorn",
        "sourceWebsite": "hellxlight.com",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "Manhwa18",
        "sourceWebsite": "manhwa18.com",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "Manhwa18.net",
        "sourceWebsite": "Manhwa18.net",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "ManhwaScan",
        "sourceWebsite": "manhwascan.com",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "ReadComicOnline.org",
        "sourceWebsite": "readcomiconline.org",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "YoloManga",
        "sourceWebsite": "yolomanga.ca",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "HanaScan (Raw QQ)",
        "sourceWebsite": "rawqq.com",
		"language": "Japanese",
		"notes": "None",
	  },
	        {
        "extension": "FMReader",
        "sourceName": "MangaHato",
        "sourceWebsite": "mangahato.com",
		"language": "Japanese",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "MangaTiki",
        "sourceWebsite": "mangatiki.com",
		"language": "Japanese",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "RawLH",
        "sourceWebsite": "loveheaven.net",
		"language": "Japanese",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "Manhwa18.net Raw",
        "sourceWebsite": "Manhwa18.net",
		"language": "Korean",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "MangaTR",
        "sourceWebsite": "manga-tr.com",
		"language": "Turkish",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "AiLoveManga",
        "sourceWebsite": "ailovemanga.com",
		"language": "Vietnamese",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "TruyenTranhLH",
        "sourceWebsite": "truyentranhlh.net",
		"language": "Vietnamese",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "MangaScouts",
        "sourceWebsite": "mangascouts.org",
		"language": "German",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "Anata No Motokare",
        "sourceWebsite": "https://motokare.xyz/reader/",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "Death Toll Scans",
        "sourceWebsite": "deathtollscans.net",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "DKThias Scanlations",
        "sourceWebsite": "dkthias.com",
		"language": "English",
		"notes": "Down? Noticed on 11/23",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "Doki Fansubs",
        "sourceWebsite": "kobato.hologfx.com",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "Evil Flowers",
        "sourceWebsite": "evilflowers.com",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "Helvetica Scans",
        "sourceWebsite": "helveticascans.com",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "Iskultrip Scans",
        "sourceWebsite": "maryfaye.net",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "Jaiminis Box",
        "sourceWebsite": "jaiminisbox.com",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "Kirei Cake",
        "sourceWebsite": "kireicake.com",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "Lilyreader",
        "sourceWebsite": "smuglo.li",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "Mangatellers",
        "sourceWebsite": "mangatellers.gr",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "Midnight Haven",
        "sourceWebsite": "midnighthaven.shounen-ai.net",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "One Time Scans",
        "sourceWebsite": "otscans.com",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "Sense Scans",
        "sourceWebsite": "sensescans.com",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "Silent Sky",
        "sourceWebsite": "silentskys-scans.net",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "The Cat Scans",
        "sourceWebsite": "reader2.thecatscans.com",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "World Three",
        "sourceWebsite": "slide-world-three.org",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "Yuri-ism",
        "sourceWebsite": "yuri-ism.net/slide",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "Zandy no Fansub",
        "sourceWebsite": "zandynofansub.aishiteru.org",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "HentaiCafe",
        "sourceWebsite": "https://hentai.cafe",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "Kirishima Fansub",
        "sourceWebsite": "kirishimafansub.net",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "Ajia no Scantrad",
        "sourceWebsite": "ajianoscantrad.fr",
		"language": "French",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "LupiTeam",
        "sourceWebsite": "lupiteam.net",
		"language": "Italian",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "PowerManga",
        "sourceWebsite": "reader.powermanga.org",
		"language": "Italian",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "Storm in Heaven",
        "sourceWebsite": "storm-in-heaven.net",
		"language": "Italian",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "Baixar Hentai",
        "sourceWebsite": "leitura.baixarhentai.net",
		"language": "Portuguese",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "AkaiYuhiMun Team",
        "sourceWebsite": "akaiyuhimun.ru",
		"language": "Russian",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "Russification / Русификация",
        "sourceWebsite": "rusmanga.ru",
		"language": "Russian",
		"notes": "None",
	  },
      {
        "extension": "Genkan",
        "sourceName": "Edelgarde Scans",
        "sourceWebsite": "edelgardescans.com",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "Genkan",
        "sourceName": "Hatigarm Scans",
        "sourceWebsite": "hatigarmscanz.net",
		"language": "English",
		"notes": "Must manually migrate manga if previously used MMRCMS-Hatigarm",
	  },
      {
        "extension": "Genkan",
        "sourceName": "Hunlight Scans",
        "sourceWebsite": "hunlight-scans.info",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "Genkan",
        "sourceName": "Leviatan Scans",
        "sourceWebsite": "leviatanscans.com",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "Genkan",
        "sourceName": "One Shot Scans",
        "sourceWebsite": "oneshotscans.com",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "Genkan",
        "sourceName": "Reaper Scans",
        "sourceWebsite": "reaperscams.com",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "Genkan",
        "sourceName": "SecretScans",
        "sourceWebsite": "secretscans.co",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "Genkan",
        "sourceName": "The Nonames Scans",
        "sourceWebsite": "the-nonames.com",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "Genkan",
        "sourceName": "Wowe Scans",
        "sourceWebsite": "https://wowescans.co",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "Genkan",
        "sourceName": "ZeroScans",
        "sourceWebsite": "zeroscans.com",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "Genkan",
        "sourceName": "Leviatan Scans",
        "sourceWebsite": "es.leviatanscans.com",
		"language": "Spanish",
		"notes": "None",
	  }
      { 
        "extension": "Madara",
        "sourceName": "Azora",
        "sourceWebsite": "azoramanga.com",
		"language": "Arabic",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "KingzManga",
        "sourceWebsite": "kingzmanga.com",
		"language": "Arabic",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Manga Action",
        "sourceWebsite": "manga-action.com",
		"language": "Arabic",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Niji Translations",
        "sourceWebsite": "niji-translations.com",
		"language": "Arabic",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "مانجا العاشق",
        "sourceWebsite": "https://3asq.org",
		"language": "Arabic",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "مانجا عرب تيم",
        "sourceWebsite": "mangaarabteam.com",
		"language": "Arabic",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "مانجا ليك",
        "sourceWebsite": "mangalek.com",
		"language": "Arabic",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "موقع لترجمة المانجا",
        "sourceWebsite": "golden-manga.ml",
		"language": "Arabic",
		"notes": "None",
	  }
      { 
        "extension": "Madara",
        "sourceName": "1st Kiss Manga",
        "sourceWebsite": "1stkissmanga.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "365Manga",
        "sourceWebsite": "365manga.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "AllPornComic",
        "sourceWebsite": "allporncomic.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "AoC Translations",
        "sourceWebsite": "https://aoc.moe",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Astral Library",
        "sourceWebsite": "astrallibrary.net",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Chibi Manga",
        "sourceWebsite": "www.cmreader.info",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Disaster Scans",
        "sourceWebsite": "disasterscans.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "EarlyManga",
        "sourceWebsite": "https://earlymanga.website",
		"language": "English",
		"notes": "None",
	  }
      { 
        "extension": "Madara",
        "sourceName": "GetManhwa",
        "sourceWebsite": "getmanhwa.co",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Happy Tea Scans",
        "sourceWebsite": "happyteascans.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Hiperdex",
        "sourceWebsite": "hiperdex.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Isekai Scan",
        "sourceWebsite": "isekaiscan.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Kissmanga.in",
        "sourceWebsite": "kissmanga.in",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Lily Manga",
        "sourceWebsite": "lilymanga.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Luxy Scans",
        "sourceWebsite": "luxyscans.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "MangaBob",
        "sourceWebsite": "mangabob.com",
		"language": "English",
		"notes": "None",
	  }
      { 
        "extension": "Madara",
        "sourceName": "MangaDods",
        "sourceWebsite": "www.mangadods.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "MangaKiss",
        "sourceWebsite": "mangakiss.org",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "MangaKomi",
        "sourceWebsite": "mangakomi.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Mangasushi",
        "sourceWebsite": "mangasuhi.net",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "MangaSY",
        "sourceWebsite": "www.mangasy.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "MangaTX",
        "sourceWebsite": "mangatx.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "MangazukiMe",
        "sourceWebsite": "mangazuki.me",
		"language": "English",
		"notes": "None",
	  }
      { 
        "extension": "Madara",
        "sourceName": "MangazukiOnline",
        "sourceWebsite": "https://www.mangazuki.online",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Manhwa Club",
        "sourceWebsite": "https://manhwa.club",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "ManhwaHentaiMe",
        "sourceWebsite": "https://manhwahentai.me",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Many Toon",
        "sourceWebsite": "manytoon.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Milftoon",
        "sourceWebsite": "https://milftoon.xxx",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Miracle Scans",
        "sourceWebsite": "miraclescans.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Night Comic",
        "sourceWebsite": "www.nightcomic.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "NinjaScans",
        "sourceWebsite": "ninjascans.com",
		"language": "English",
		"notes": "None",
	  }
      { 
        "extension": "Madara",
        "sourceName": "OnManga",
        "sourceWebsite": "onmanga.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Plot Twist No Fansub",
        "sourceWebsite": "www.plotwistscan.com/",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "ReadManhua",
        "sourceWebsite": "readmanhua.net",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Teabeer Comics",
        "sourceWebsite": "https://teabeercomics.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Toonily",
        "sourceWebsite": "toonily.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Wakamics",
        "sourceWebsite": "wakamics.com",
		"language": "English",
		"notes": "Use in place of ToonManga",
	  }
      {
        "extension": "Madara",
        "sourceName": "Wordrain69",
        "sourceWebsite": "https://wordrain69.com/",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Wuxia World",
        "sourceWebsite": "https://wuxiaworld.site",
		"language": "English",
		"notes": "None",
	  }
      { 
        "extension": "Madara",
        "sourceName": "Yo Manga",
        "sourceWebsite": "yomanga.info",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Zin Translator",
        "sourceWebsite": "zinmanga.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "DoujinHentai",
        "sourceWebsite": "doujinhentai.net",
		"language": "Spanish",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Hunter Fansub",
        "sourceWebsite": "hunterfansub.com",
		"language": ""Spanish,
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "ZManga",
        "sourceWebsite": "zmanga.org",
		"language": "Spanish",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "ATM-Subs",
        "sourceWebsite": "atm-subs.fr",
		"language": "French",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Novel France",
        "sourceWebsite": "novel-france.fr",
		"language": "French",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Tsubaki No Scan",
        "sourceWebsite": "tsubakinoscan.com",
		"language": "French",
		"notes": "None",
	  }
      { 
        "extension": "Madara",
        "sourceName": "Yokai Jump",
        "sourceWebsite": "yokaijump.fr",
		"language": "French",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Indian Comics Online",
        "sourceWebsite": "www.indiancomicsonline.com",
		"language": "Hindi",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "KlikManga",
        "sourceWebsite": "klikmanga.com",
		"language": "Indonesian",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Komik Go",
        "sourceWebsite": "komikgo.com",
		"language": "Indonesian",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "MangaLaw",
        "sourceWebsite": "mangalaw.com",
		"language": "Japanese",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "MangazukiClubJP",
        "sourceWebsite": "https://mangazuki.club",
		"language": "Japanese",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "MangazukiClubKO",
        "sourceWebsite": "https://mangazuki.club",
		"language": "Korean",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Ichirin No Hana Yuri",
        "sourceWebsite": "https://ichirinnohanayuri.com.br",
		"language": "Portuguese (Brazil)",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Yaoi Toshokan",
        "sourceWebsite": "www.yaoitoshokan.com.br",
		"language": "Portuguese (Brazil)",
		"notes": "Region locked",
	  }
      {
        "extension": "Madara",
        "sourceName": "Just For Fun",
        "sourceWebsite": "just-for-fun.ru",
		"language": "Russian",
		"notes": "None",
	  }
      {
        "extension": "Madara",
        "sourceName": "Adonis Fansub",
        "sourceWebsite": "adonisfansub.com",
		"language": "Turkish",
		"notes": "None",
	  }
      {
        "extension": "MangaBox",
        "sourceName": "ChapterManga",
        "sourceWebsite": "chaptermanga.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "MangaBox",
        "sourceName": "Kono-Basho",
        "sourceWebsite": "kono-basho.com",
		"language": "English",
		"notes": "Dead",
	  }
      {
        "extension": "MangaBox",
        "sourceName": "Mangabat",
        "sourceWebsite": "mangabat.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "MangaBox",
        "sourceName": "Mangafree",
        "sourceWebsite": "mangafree.online",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "MangaBox",
        "sourceName": "Mangakakalot",
        "sourceWebsite": "mangakakalot.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "MangaBox",
        "sourceName": "Manganelo",
        "sourceWebsite": "manganelo.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "MangaBox",
        "sourceName": "MangaOnl",
        "sourceWebsite": "mangaonl.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "MangaCards",
        "sourceName": "Inept Bastards",
        "sourceWebsite": "https://ineptbastards.xyz",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "MangaCards",
        "sourceName": "NANI? Scans",
        "sourceWebsite": "https://naniscans.xyz",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "MangaCards",
        "sourceName": "Valhalla Scans",
        "sourceWebsite": "valhallascans.com",
		"language": "English",
		"notes": "Website dead, their manga is on MangaDex now - 1/26",
	  }
      {
        "extension": "MangAdventure",
        "sourceName": "Arc-Relight",
        "sourceWebsite": "arc-relight.site",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "MangAdventure",
        "sourceName": "Decadence Scans",
        "sourceWebsite": "reader.decadencescans.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Mangatensei",
        "sourceName": "Bato.to",
        "sourceWebsite": "bato.to",
		"language": "Multiple",
		"notes": "Languages: English and 20+ others",
	  }
      {
        "extension": "Mangatensei",
        "sourceName": "Mangawindow",
        "sourceWebsite": "mangawindow.net",
		"language": "Multiple",
		"notes": "Languages: English and 20+ others",
	  }
      {
        "extension": "Mangatensei",
        "sourceName": "Mangatensei",
        "sourceWebsite": "www.mangatensei.com",
		"language": "Multiple",
		"notes": "Languages: English and 20+ others",
	  }
      {
        "extension": "My Manga Reader CMS",
        "sourceName": "مانجا اون لاين",
        "sourceWebsite": "onma.me",
		"language": "Arabic",
		"notes": "None",
	  }
      {
        "extension": "My Manga Reader CMS",
        "sourceName": "Utsukushii",
        "sourceWebsite": "manga.utsukushii-bg.com",
		"language": "Bulgarian",
		"notes": "None",
	  }
      {
        "extension": "My Manga Reader CMS",
        "sourceName": "Biamam Scans",
        "sourceWebsite": "biamam.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "My Manga Reader CMS",
        "sourceName": "Fallen Angels",
        "sourceWebsite": "manga.fascans.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "My Manga Reader CMS",
        "sourceName": "Mangawww Reader",
        "sourceWebsite": "https://mangawww.club",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "My Manga Reader CMS",
        "sourceName": "Read Comics Online",
        "sourceWebsite": "readcomicsonline.ru",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "My Manga Reader CMS",
        "sourceName": "White Cloud Pavilion",
        "sourceWebsite": "www.whitecloudpavilion.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "My Manga Reader CMS",
        "sourceName": "LeoManga",
        "sourceWebsite": "leomanga.me",
		"language": "Spanish",
		"notes": "None",
	  }
      {
        "extension": "My Manga Reader CMS",
        "sourceName": "Mangadoor",
        "sourceWebsite": "mangadoor.com",
		"language": "Spanish",
		"notes": "None",
	  }
      {
        "extension": "My Manga Reader CMS",
        "sourceName": "Mangas.pw",
        "sourceWebsite": "mangas.in",
		"language": "Spanish",
		"notes": "None",
	  }
      {
        "extension": "My Manga Reader CMS",
        "sourceName": "submanga",
        "sourceWebsite": "https://submanga.li",
		"language": "Spanish",
		"notes": "None",
	  }
      {
        "extension": "My Manga Reader CMS",
        "sourceName": "Tumangaonline.co",
        "sourceWebsite": "tumangaonline.fun",
		"language": "Spanish",
		"notes": "None",
	  }
      {
        "extension": "My Manga Reader CMS",
        "sourceName": "Universo Yuri",
        "sourceWebsite": "universoyuri.com",
		"language": "Spanish",
		"notes": "None",
	  }
      {
        "extension": "My Manga Reader CMS",
        "sourceName": "Scan FR",
        "sourceWebsite": "www.scan-fr.co",
		"language": "French",
		"notes": "None",
	  }
      {
        "extension": "My Manga Reader CMS",
        "sourceName": "Scan OP",
        "sourceWebsite": "scan-op.com",
		"language": "French",
		"notes": "None",
	  }
      {
        "extension": "My Manga Reader CMS",
        "sourceName": "Scan VF",
        "sourceWebsite": "www.scan-vf.net",
		"language": "French",
		"notes": "None",
	  }
      {
        "extension": "My Manga Reader CMS",
        "sourceName": "Komikid",
        "sourceWebsite": "www.komikid.com",
		"language": "Indonesian",
		"notes": "None",
	  }
      {
        "extension": "My Manga Reader CMS",
        "sourceName": "HentaiShark",
        "sourceWebsite": "www.hentaishark.com",
		"language": "Multiple",
		"notes": "Turn "Other" language in catalog on to use",
	  }
      {
        "extension": "My Manga Reader CMS",
        "sourceName": "Dracaena",
        "sourceWebsite": "dracaena.webd.pl",
		"language": "Polish",
		"notes": "None",
	  }
      {
        "extension": "My Manga Reader CMS",
        "sourceName": "Nikushima",
        "sourceWebsite": "azbivo.webd.pro",
		"language": "Polish",
		"notes": "None",
	  }
      {
        "extension": "My Manga Reader CMS",
        "sourceName": "Phoenix-Scans",
        "sourceWebsite": "https://phoenix-scans.pl",
		"language": "Polish",
		"notes": "None",
	  }
      {
        "extension": "My Manga Reader CMS",
        "sourceName": "ToraScans",
        "sourceWebsite": "torascans.pl",
		"language": "Polish",
		"notes": "None",
	  }
      {
        "extension": "My Manga Reader CMS",
        "sourceName": "Comic Space",
        "sourceWebsite": "www.comicspace.com.br",
		"language": "Portuguese",
		"notes": "None",
	  }
      {
        "extension": "My Manga Reader CMS",
        "sourceName": "Mangás Yuri",
        "sourceWebsite": "mangasyuri.net",
		"language": "Portuguese",
		"notes": "None",
	  }
      {
        "extension": "My Manga Reader CMS",
        "sourceName": "Japit Comics",
        "sourceWebsite": "j-comics.ru",
		"language": "Russian",
		"notes": "None",
	  }
      {
        "extension": "My Manga Reader CMS",
        "sourceName": "MangaHanta",
        "sourceWebsite": "mangahanta.com",
		"language": "Turkish",
		"notes": "None",
	  }
      {
        "extension": "My Manga Reader CMS",
        "sourceName": "Fallen Angels Scans",
        "sourceWebsite": "truyen.fascans.com",
		"language": "Vietnamese",
		"notes": "None",
	  }
      {
        "extension": "Webtoons",
        "sourceName": "Webtoons",
        "sourceWebsite": "webtoons.com",
		"language": "Multiple",
		"notes": "Official languages: English, Indonesian, Thai, and Chinese; 30+ more languages by fan translation",
	  }
      {
        "extension": "Webtoons",
        "sourceName": "Dongman Manhua",
        "sourceWebsite": "www.dongmanmanhua.cn",
		"language": "Chinese",
		"notes": "Chinese translations of webtoons from webtoons.com",
	  }
      {
        "extension": "WP Manga Stream",
        "sourceName": "MangaSwat",
        "sourceWebsite": "mangaswat.com",
		"language": "Arabic",
		"notes": "None",
	  }
      {
        "extension": "WP Manga Stream",
        "sourceName": "Kiryuu",
        "sourceWebsite": "kiryuu.co",
		"language": "Indonesian",
		"notes": "None",
	  }
      {
        "extension": "WP Manga Stream",
        "sourceName": "KomikAV",
        "sourceWebsite": "komikav.com",
		"language": "Indonesian",
		"notes": "None",
	  }
      {
        "extension": "WP Manga Stream",
        "sourceName": "KomikCast",
        "sourceWebsite": "komikcast.com",
		"language": "Indonesian",
		"notes": "None",
	  }
      {
        "extension": "WP Manga Stream",
        "sourceName": "KomikIndo",
        "sourceWebsite": "www.komikindo.web.id",
		"language": "Indonesian",
		"notes": "None",
	  }
      {
        "extension": "WP Manga Stream",
        "sourceName": "KomikStation",
        "sourceWebsite": "komikstation.com",
		"language": "Indonesian",
		"notes": "None",
	  }
      {
        "extension": "WP Manga Stream",
        "sourceName": "MaidManga",
        "sourceWebsite": "www.maid.my.id",
		"language": "Indonesian",
		"notes": "None",
	  }
      {
        "extension": "WP Manga Stream",
        "sourceName": "SekteKomik",
        "sourceWebsite": "sektekomik.com",
		"language": "Indonesian",
		"notes": "None",
	  }
      {
        "extension": "WP Manga Stream",
        "sourceName": "WestManga",
        "sourceWebsite": "westmanga.info",
		"language": "Indonesian",
		"notes": "None",
	  }
      {
        "extension": "HolyManga & HeavenManga",
        "sourceName": "HeavenManga",
        "sourceWebsite": "heavenmanga.org",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "HolyManga & HeavenManga",
        "sourceName": "HolyManga",
        "sourceWebsite": "holymanga.net",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Mangareader & Mangapanda",
        "sourceName": "Mangapanda",
        "sourceWebsite": "www.mangapanda.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "Mangareader & Mangapanda",
        "sourceName": "Mangareader",
        "sourceWebsite": "www.mangapanda.com",
		"language": "English",
		"notes": "None",
	  }
      {
        "extension": "mangásPROJECT",
        "sourceName": "MangaLivre",
        "sourceWebsite": "mangalivre.net",
		"language": "Portuguese",
		"notes": "Region locked",
	  }
      {
        "extension": "mangásPROJECT",
        "sourceName": "mangásPROJECT",
        "sourceWebsite": "leitor.net",
		"language": "Portuguese",
		"notes": "Region locked",
	  }
    ]
  })
}
</script>
<style lang="stylus">
.con-expand-users
  width 100%
  .con-btns-user
    display flex
    padding 10px
    padding-bottom 0px
    align-items center
    justify-content space-between
    .con-userx
      display flex
      align-items center
      justify-content flex-start
  .list-icon
    i
      font-size .9rem !important

.vs-con-table
    background-color $containerBackgroundColor

.vs-table
	tr
		border-top none
		&:nth-child(1n)
			background-color $containerBackgroundColor
		&:nth-child(2n)
			background-color $containerBackgroundColor
	.td-check
		width 4rem
	.tableExtension
	.tableSourceName
	.tableSourceWebsite
		width 10rem
	.vs-table--thead
		display none
</style>
