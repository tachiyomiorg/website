---
title: Signing and releasing
titleTemplate: Creating extensions - Guides
description: Signing and releasing the repository
---

# Signing and releasing

To setup the GitHub actions to automatically release new extensions on every push, you will need to setup a signing key.
To do that, you need to create one first.

## Creating a signing key

The following steps will guide you into creating a key.

1. On Android Studio, open **Build → Generate Signed Bundle or APK**. Under the new screen, choose the **APK** option and click **Next**.
2. Click on **Create new…** under the **Key store path** field.
3. Fill up the required fields in the **New Key Store** window.

    The fields under the Certificate section are optional, but you will need to fill at least one of them.
4. Click **OK** and it will create the signing key at the path choosen at the **Key store path** field.
5. You can close the **Generate Signed Bundle or APK** window as it will not be used anymore.

::: tip
Make sure to remember the given values of **Password**, **Alias** and **Key Password** as they will be needed later.
:::

::: danger Caution
Make sure to not use any special characters such as `@` or `!` under any of the passwords, otherwise it will lead to the generation of broken keys.
:::

## Configuring the GitHub actions

This section will guide you into setting up the secrets needed for the build and also some options you need to change under the repository settings.

### Adding the secrets

All secrets depends on a generated signed key which was described in the previous section.

1. In your repository on GitHub, open the **Settings** tab and navigate to **Secrets and variables → Actions**.
2. Under the **Secrets** tab, you will need to create four secrets by following the table below.

    - `ALIAS`: The value of the key alias;
    - `KEY_PASSWORD`: The main password of the key;
    - `KEY_STORE_PASSWORD`: The password of the key store;
    - `SIGNING_KEY`: Base-64 representation of the key `.jks` file content;

#### Creating the Base-64 representation

Under a terminal window in the path of the key, you can use the following command to convert the key and copy the value.

```bash
base64 signingkey.jks | tr -d \\n | xclip -selection c
```

The previous command depends on `xclip` installed to copy the contents of the conversion to the clipboard, but you can replace that last part with any other similar tool.

:::warning Caution
Make sure your copied value doesn't have any trailing whitespace while pasting the value under GitHub.
:::

### Enabling Actions read and write permission

The workflows will need write permissions to commit to the `repo` branch.

1. Under the repository Settings on GitHub, navigate to **Actions → General**.
2. Choose the **Read and write permissions** option on the **Workflow permissions** section and click **Save**.

### Creating an empty `repo` branch

If your repository doesn't already have a `repo` branch, you will need to create it.

To create you can follow the standard flow of creating a `branch` named `repo` and then proceed by deleting all repository files (except the `.git`) folder and then commiting and pushing to GitHub.

### Changing the checks in the workflow

If your repository is forked or cloned from the official extensions repository, you will need to change two checks under the `.github/workflows/build_push.yml` file.

<!-- eslint-disable-next-line -->
```yml
- name: Upload APKs
  uses: actions/upload-artifact@v4
  if: "github.repository == 'tachiyomiorg/extensions'" # [!code --]
  if: "github.repository == '[user]/[repository]'" # [!code ++]
```

<!-- eslint-disable-next-line -->
```yml
publish_repo:
  name: Publish repo
  needs:
    - build_individual
  if: "github.repository == 'tachiyomiorg/extensions'" # [!code --]
  if: "github.repository == '[user]/[repository]'" # [!code ++]
```

### Finishing up

If all is configured correctly, GitHub should run the workflow whenever there's a new commit pushed to the `main` branch which will build the extensions APKs and release it through the `repo` branch by creating the needed structure.
