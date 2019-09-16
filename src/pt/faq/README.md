---
title: FAQ
lang: pt-BR
sidebarDepth: 2
---

# FAQ

Você pode encontrar mais perguntas [aqui].

[aqui]: https://github.com/inorichi/tachiyomi/wiki/FAQ#frequently-asked-questions

## Aplicativo

### Quais são as extensões boas?

As mais populares são o MangaDex, mangaRock e MangaSee. Estes são
grandes sites que hospedam conteúdo dos *scanlators*. Há também extensões
como Genkan, Madara, FoolSlide e ComiCake que possuem fontes que utilizam
diretamente os sites dos *scanlators*.

[Esta planilha] mostra as diferentes extensões e suas fontes.

[Esta planilha]: https://docs.google.com/spreadsheets/d/1TyJEUg78WWH4zgnf3g6M2lkbWpBWbd40FYiPVQhW8IU/edit#gid=0

### Como eu permito a instalação por terceiros no meu celular?

Quando estiver instalando sua primeira extensão e for informado
que seu celular não permite instalação de aplicativos desconhecidos
daquela fonte, simplesmente pressione o botão `Configurações`
e permita-a.

Dois vídeos de exemplo, onde o da esquerda é para Androids mais novos.

<figure class="centered">
	<video autoplay crossorigin="use-credentials" height="355"
	  intrinsicsize="400x688" loading="lazy" loop="loop" muted="muted"
	  playsinline="playsinline" :poster="$withBase('/assets/media/unknownapps-api28.png')"
	  preload="none" width="200">
		<source :src="$withBase('/assets/media/unknownapps-api28.webm')" type="video/webm" />
		<source :src="$withBase('/assets/media/unknownapps-api28.mp4')" type="video/mp4" />
	</video>
	<video autoplay crossorigin="use-credentials" height="355"
	  intrinsicsize="400x688" loading="lazy" loop="loop" muted="muted"
	  playsinline="playsinline" :poster="$withBase('/assets/media/unknownapps-api25.png')"
	  preload="none" width="200">
		<source :src="$withBase('/assets/media/unknownapps-api25.webm')" type="video/webm" />
		<source :src="$withBase('/assets/media/unknownapps-api25.mp4')" type="video/mp4" />
	</video>
</figure>

### Porque as extensões não instalam?

Em alguns casos seu celular pode ter alguns problemas baixando as
extensões. Nestes casos você pode tentar instalar elas você mesmo
diretamente. [Aqui](https://github.com/inorichi/tachiyomi-extensions/tree/repo/apk)
está o repositório para os arquivos.

Para instalar, apenas baixe o arquivo `.apk` da extensão que você
quer e instale, assim como você instalou o Tachiyomi.

### O Tachiyomi possui atualizações automáticas?

O aplicativo Tachiyomi agora tem atualizações dentro do app para ambas
as versões, estável e de desenvolvimento. Se você for em `Configurações >
Sobre > Versão` para verificar por atualizações, você pode forçar a
atualização ali ou esperar o aplicativo te notificar.

### Porque algumas imagens não são exibidas?

Além de problemas com a internet, pode ser por causa que as imagens
são muito grandes ou o decodificador não suporta aquela imagem.

### Como eu mudo o idioma do aplicativo?

O Tachiyomi está disponivel (no momento de escrita) em 35 idiomas diferentes.

Por padrão, o idioma do aplicativo segue a configuração de idioma do seu aparelho.

Você também pode escolher seu idioma preferido para o Tachiyomi.
Simplesmente a partir do painel lateral vá em `Configurações > Geral > Idioma`.

::: tip NOTA
Apenas a interface de usuário foi localizada, o conteúdo ainda continuará
usando o idioma da fonte escolhida (ou seja, inglês para a fonte KissManga).
Algumas fontes possuem múltiplos idiomas também.
:::

Se você quer ajudar a traduzir o Tachiyomi, leia [isto].

<figure>
	<a href="https://hosted.weblate.org/engage/tachiyomi/?utm_source=widget" target="_blank">
		<img src="https://hosted.weblate.org/widgets/tachiyomi/-/multi-auto.svg">
	</a>
</figure>

[isto]: https://github.com/inorichi/tachiyomi/wiki/Translation

## MangaDex

### Sem resultados ao buscar

::: tip
Certifique-se que você possui a versão `0.8.4`, ou maior, do aplicativo.
:::

Se você não está obtendo nenhum resultado ao buscar no MangaDex, então
você precisa fazer login.

Para isto, vá em `Navegar`/`Mais Recente` no MangaDex em `Catálogos`,
abra qualquer mangá da lista e então pressione o menu de mais opções
(três pontinhos) no canto superior direito e então vá na opção
`Open in web view`.

Agora vá para o menu, pressione o *drop-down* `Manga` e então escolha
ou `Sign up` ou `Log in` para continuar com o login.

### Capítulos do Mangaplus não funcionam

Instale a extensão MangaPlus e então migre os mangas que usam o
Mangaplus no MangaDex para a fonte do MangaPlus.

## MangaRock

### Atualizações lentas no Tachiyomi

A API do MangaRock atualiza menos frequentemente que o site ou o
aplicativo, então você talvez precise esperar algumas horas ou mais
para que ele apareça no Tachiyomi.

## Madara

### Está faltando a Leviatan Scans

A Leviatan Scans mudou do Madara para a extensão Genkan.

Instale Genkan. Migre todos os mangás da Leviatan. Atualize o Madara.

## MangasProject

### Está faltando o MangaLivre

Por ser apenas um *mirror*, o MangaLivre foi incorporado na nova versão
da extensão MangasProject. Para continuar usando, desinstale a versão
antiga do MangaLivre, instale (ou atualize) a MangasProject e reinicie
o aplicativo. Você não vai precisar migrar os mangás de sua biblioteca.
