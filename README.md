![delta-cms-typescript-package-templateアートボード 1@0 5x](https://user-images.githubusercontent.com/24543982/57816721-575ddb00-77b7-11e9-867a-4311eef0bd68.png)

# delta-cms/typescript-package-template
delta-cms関係のTypeScriptモジュール及びパッケージを開発するときに使う雛形です。

# 初期状態
初期状態だと`lib`と`src`と`tests`フォルダにファイルが入っています。
不要なので削除して構いません。

# 機能
`package.json`ファイルを見れば大体わかります。

- Build(`yarn build`)
- Watch(`yarn watch`)
- Lint(`yarn lint`)
- Jest(`yarn test`)

Build系で出力されるファイルはすべて`lib`ディレクトリに出力されます。

