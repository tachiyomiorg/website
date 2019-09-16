---
title: Primeiros Passos
lang: pt-BR
---

## Instalação

Efetue o *download* da versão mais recente do Tachiyomi no [GitHub].

`tachiyomi-vX.Y.Z.apk`

Se você deseja testar novas funcionalidades antes que elas entrem na
versão estável, você pode baixar a versão de desenvolvimento [aqui].

Abra e instale o arquivo `.apk` que você acabou de baixar do GitHub.

<figure class="centered">
	<img height="145" intrinsicsize="1000x500" width="300"
	  :src="$withBase('/assets/media/installprompt.png')">
</figure>

[GitHub]: https://github.com/inorichi/tachiyomi/releases/latest
[aqui]: http://tachiyomi.kanade.eu/latest

## Instalando uma extensão

Agora que o Tachiyomi está instalado, abra o aplicativo e navegue até
a aba `Extensões`.

Neste guia iremos utilizar o MangaDex, a extensão mais popular.
Pressione o botão `Instalar` e aceite a confirmação de instalação
que irá aparecer.

Se você está sendo impedido por um alerta de segurança e não sabe o
que fazer, você pode ler esta seção no FAQ: ["Como eu permito a instalação
por terceiros no meu celular?"](/pt/faq/#como-eu-permito-a-instalacao-por-terceiros-no-meu-celular).

<figure class="centered">
	<video autoplay crossorigin="use-credentials" height="534"
	  intrinsicsize="500x100" loading="lazy" loop="loop" muted="muted"
	  playsinline="playsinline" :poster="$withBase('/assets/media/extensioninstaller.png')"
	  preload="none" width="300">
		<source :src="$withBase('/assets/media/extensioninstaller.webm')" type="video/webm" />
		<source :src="$withBase('/assets/media/extensioninstaller.mp4')" type="video/mp4" />
	</video>
</figure>

## Adicionando mangás em sua biblioteca

Agora que você instalou a extensão do MangaDex, ela deve aparecer na
aba `Catálogos`. Os itens que aparecem aqui são chamados de `Fontes`
(também podem ser chamados de catálogos). Uma extensão pode ter
múltiplas fontes.

Para procurar e adicionar um mangá, você pode ou usar o botão `Mais Recente`
em sua fonte, ou pode utilizar o `Navegar` e buscar por ele.

Agora que você encontrou o mangá que queria adicionar em sua biblioteca,
clique nele e então pressione o butão azul com o ícone de favoritos.

Ele deve aparecer na aba `Minha biblioteca`, pronto para ser lido!

<figure class="centered">
	<video autoplay crossorigin="use-credentials" height="534"
	  intrinsicsize="500x1000" loading="lazy" loop="loop" muted="muted"
	  playsinline="playsinline" :poster="$withBase('/assets/media/addtolibrary.png')"
	  preload="none" width="300">
		<source :src="$withBase('/assets/media/addtolibrary.webm')" type="video/webm" />
		<source :src="$withBase('/assets/media/addtolibrary.mp4')" type="video/mp4" />
	</video>
</figure>
