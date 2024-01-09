---
title: Prerequisites
titleTemplate: Creating extensions - Guides
description: Prerequisites to creating your own Tachiyomi extensions.
---

# Prerequisites

Before you start, please note that the ability to use following technologies is **required** and that existing contributors will not actively teach them to you.

- Basic [Android development](https://developer.android.com/)
- [Kotlin](https://kotlinlang.org/)
- Web scraping
    - [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
    - [CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
    - [OkHttp](https://square.github.io/okhttp/)
    - [JSoup](https://jsoup.org/)

## Tools

- [Android Studio](https://developer.android.com/studio)
- Emulator or phone with developer options enabled and a recent version of Tachiyomi installed
- [Icon Generator](https://as280093.github.io/AndroidAssetStudio/icons-launcher.html)

## Cloning the repository

Some alternative steps can be followed to ignore "repo" branch and skip unrelated sources, which will make it faster to pull, navigate and build. This will also reduce disk usage and network traffic.

<details><summary>Steps</summary>

1. Make sure to delete "repo" branch in your fork. You may also want to disable Actions in the repo settings.

    **Also make sure you are using the latest version of Git as many commands used here are pretty new.**

2. Do a partial clone.
    ```bash
    git clone --filter=blob:none --sparse <fork-repo-url>
    cd extensions/
    ```
3. Configure sparse checkout.

    There are two modes of pattern matching. The default is cone (🔺) mode.
    Cone mode enables significantly faster pattern matching for big monorepos
    and the sparse index feature to make Git commands more responsive.
    In this mode, you can only filter by file path, which is less flexible
    and might require more work when the project structure changes.

    You can skip this code block to use legacy mode if you want easier filters.
    It won't be much slower as the repo doesn't have that many files.

    To enable cone mode together with sparse index, follow these steps:

    ```bash
    git sparse-checkout set --cone --sparse-index
    # add project folders
    git sparse-checkout add .run buildSrc core gradle lib
    # add a single source
    git sparse-checkout add src/<lang>/<source>
    ```

    To remove a source, open `.git/info/sparse-checkout` and delete the exact
    lines you typed when adding it. Don't touch the other auto-generated lines
    unless you fully understand how cone mode works, or you might break it.

    To use the legacy non-cone mode, follow these steps:

    ```bash
    # enable sparse checkout
    git sparse-checkout set --no-cone
    # edit sparse checkout filter
    vim .git/info/sparse-checkout
    # alternatively, if you have VS Code installed
    code .git/info/sparse-checkout
    ```
    Here's an example:
    ```bash
    /*
    !/src/*
    # allow a single source
    /src/<lang>/<source>
    # or type the source name directly
    <source>
    ```

    Explanation: the rules are like `gitignore`. We first exclude all sources
    while retaining project folders, then add the needed sources back manually.

4. Configure remotes.
    ```bash
    # add upstream
    git remote add upstream <tachiyomiorg-repo-url>
    # optionally disable push to upstream
    git remote set-url --push upstream no_pushing
    # ignore 'repo' branch of upstream
    # option 1: use negative refspec
    git config --add remote.upstream.fetch "^refs/heads/repo"
    # option 2: fetch main only (ignore all other branches)
    git config remote.upstream.fetch "+refs/heads/main:refs/remotes/upstream/main"
    # update remotes
    git remote update
    # track main of upstream instead of fork
    git branch main -u upstream/main
    ```
5. Useful configurations. (optional)
    ```bash
    # prune obsolete remote branches on fetch
    git config remote.origin.prune true
    # fast-forward only when pulling main branch
    git config pull.ff only
    # Add an alias to sync main branch without fetching useless blobs.
    # If you run `git pull` to fast-forward in a blobless clone like this,
    # all blobs (files) in the new commits are still fetched regardless of
    # sparse rules, which makes the local repo accumulate unused files.
    # Use `git sync-main` to avoid this. Be careful if you have changes
    # on main branch, which is not a good practice.
    git config alias.sync-main '!git switch main && git fetch upstream && git reset --keep FETCH_HEAD'
    ```
6. Later, if you change the sparse checkout filter, run `git sparse-checkout reapply`.

Read more on
[Git's object model](https://github.blog/2020-12-17-commits-are-snapshots-not-diffs/),
[partial clone](https://github.blog/2020-12-21-get-up-to-speed-with-partial-clone-and-shallow-clone/),
[sparse checkout](https://github.blog/2020-01-17-bring-your-monorepo-down-to-size-with-sparse-checkout/),
[sparse index](https://github.blog/2021-11-10-make-your-monorepo-feel-small-with-gits-sparse-index/),
and [negative refspecs](https://github.blog/2020-10-19-git-2-29-released/#user-content-negative-refspecs).
</details>
