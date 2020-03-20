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
        "extension": "BoomManga",
        "sourceName": "BoomManga",
        "sourceWebsite": "https://m.boommanga.com",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "BoomManga",
        "sourceName": "ManManga",
        "sourceWebsite": "https://m.manmanga.com",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "BoomManga",
        "sourceName": "TwinComics",
        "sourceWebsite": "https://m.twincomicsmanga.com",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "BoomManga",
        "sourceName": "BoomMangaZH",
        "sourceWebsite": "https://m.boommanga.com/cn",
		"language": "Zhōngwén",
		"notes": "None",
	  },
      {
        "extension": "BoomManga",
        "sourceName": "ManMangaZH",
        "sourceWebsite": "https://m.manmanga.com/cn",
		"language": "Zhōngwén",
		"notes": "None",
	  },
      {
        "extension": "BoomManga",
        "sourceName": "TwinComicsZH",
        "sourceWebsite": "https://m.twincomics.com/cn",
		"language": "Zhōngwén",
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
        "sourceWebsite": "https://read.ptscans.com",
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
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FMReader",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "FoolSlide",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "",
		"notes": "None",
	  },
      {
        "extension": "Genkan",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "Genkan",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "Genkan",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "Genkan",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "Genkan",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "Genkan",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "Genkan",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "Genkan",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "Genkan",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "Genkan",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "English",
		"notes": "None",
	  },
      {
        "extension": "Genkan",
        "sourceName": "",
        "sourceWebsite": "",
		"language": "Spanish",
		"notes": "None",
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
