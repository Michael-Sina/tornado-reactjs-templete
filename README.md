# Tornado-Reactjs-Scaffold
Docker + ubuntu:16.04 + Tornado + Reactjs(Ant-Design) + MySQL

## 環境説明

### Develop OS
ubuntu:16.04

### 開発環境
DockerにLinux環境を構築

### フロントエンド
1. 開発言語: Javascript
2. JSフレームワーク: React.js
3. UIコンポーネント: Ant-Design

### バックエンド
1. 開発言語: Python3
2. フレームワーク: Python Tornado
3. プロセスコントロールシステム: supervisor
4. セッション管理: JWT (Json Web Token)
5. データベース: MySQL Community Server 5.7.18

### ソース管理
Github

## 利用方法

### Dockerイメージの利用

1. ランDockerイメージ
   ```
    docker-compose up -d
   
   ```


2. ランニングコンテナを入る
　 
   ```
   docker exec -it tornado bash
   ```


### 参考文献

[1]. [PythonのTornadoで解説入れながらLoginしてみる](http://conta.hatenablog.com/entry/2012/05/31/222940)

[2]. [React.js簡易開発環境をサーバー上に作る](http://qiita.com/ystg/items/bf7945226f4a94539487)

[3]. [VPS上でpythonで書かれたwebアプリケーションを運用する](http://kazy.hatenablog.com/entry/2013/10/09/134821)

[4]. [CentOS7にpython3系のインストール](http://qiita.com/glostuan/items/6030e309542615470e0d)

[5]. [nginxとgunicornとsupervisorを連携させる](http://d.hatena.ne.jp/saitodevel01/20110811/1313019218)

[6]. [entOS7にMySQL導入＆初期設定をおこなう](http://vdeep.net/centos7-mysql)

[7]. [CentOSでvi(vim)文字化けを修正](http://d.hatena.ne.jp/tageo/20100310/1268186793)
