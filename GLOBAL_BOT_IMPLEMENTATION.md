# Bot全世界公開のための実装修正計画

## 🎯 目標
Discord Botを全世界に公開し、各サーバーの管理者が独自のGoogle アカウントで勤怠管理を行えるようにする。

## 🚨 現在の問題
- 単一のGoogle OAuth認証情報を全サーバーで共有
- 全てのスプレッドシートがBot開発者のアカウントに作成される
- プライバシーとセキュリティの問題

## ✅ 修正実装方針：サーバー個別OAuth方式

### 1. 環境変数の変更
```bash
# 削除する変数（Bot開発者固有の認証情報）
- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET  
- GOOGLE_REDIRECT_URI

# 追加する変数（一般的なOAuth設定）
+ OAUTH_BASE_URL=https://kintai-discord-v2.nasubi.dev
+ OAUTH_SCOPES=https://www.googleapis.com/auth/spreadsheets
```

### 2. OAuth実装の変更
現在：Bot開発者の固定認証情報を使用
修正後：各サーバー管理者が個別にOAuth認証

### 3. データ保存方式の変更  
現在：Bot開発者のアカウントに全データ保存
修正後：各サーバー管理者のアカウントに個別保存

### 4. セットアップフローの変更
```
/setup コマンド実行
↓
管理者権限チェック  
↓
「あなたのGoogleアカウントで認証してください」メッセージ
↓ 
管理者が自分のGoogleアカウントでOAuth認証
↓
管理者のアカウントにスプレッドシート作成
↓
そのサーバー専用の設定として保存
```

## 🔧 実装修正箇所

### A. OAuthService の修正
- 固定のクライアント認証情報を削除
- Dynamic OAuth URL 生成機能を追加
- サーバーごとの認証状態管理

### B. SheetsService の修正  
- 各サーバーの個別トークンを使用
- スプレッドシート作成を管理者アカウントで実行

### C. 環境変数設定の簡素化
- Bot開発者はGoogle認証情報を設定不要
- Discordの認証情報のみで動作

### D. セキュリティ強化
- 管理者権限の厳密チェック
- トークンの適切な暗号化とサーバー分離

## 📋 実装ステップ
1. ✅ 問題の特定（完了）
2. 🔄 OAuth実装の修正
3. 🔄 環境変数の簡素化  
4. 🔄 テスト環境での動作確認
5. 🔄 本番デプロイとドキュメント更新

## 💡 メリット
- 🌍 世界中のDiscordサーバーで使用可能
- 🔒 プライバシーとセキュリティの確保  
- 📊 各管理者が自分のスプレッドシートを管理
- ⚡ Bot開発者の設定作業が最小限
