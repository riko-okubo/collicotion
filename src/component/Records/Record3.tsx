import React from "react";
import { useStyles } from "../../style/RecordStyle";
import { BackButton } from "../atoms/BackButton";
import { Layout } from "../organisms/Layout";

export const Record3 = () => {
    const classes = useStyles();

    return(
        <Layout>
        <html className={classes.all}>
            <body className={classes.body}>
                <header>
                    <h1>制作記録（3）－デプロイ－</h1>
                </header>
                <div>
                    <h2>デプロイする</h2>
                    <p>だいぶ形になってきたので、そろそろデプロイしてみる。</p>
                    <p>実際にURLをクリックして見れるとサイトを作ってる実感が湧き、モチベーションにつながる！</p>
                    <br/>
                    <p>GitHub Pagesは1年前にhtmlとcssで作ったHPがあるので、違う無料サイトを使おぅ。</p>
                </div>
                <div>
                    <h2>デプロイするサイトについて</h2>
                    <div>
                        <h3>firebase</h3>
                        <ul>
                            <li>2011年にFirebase社がサービスを開始したが、2014年にGoogle社が買収。Google社が提供するようになってから知名度が上がった。</li>
                            <li>スピード向上やコスト削減を可能にすることから、バックエンド開発向き。むしろ、バックエンド環境を提供するサービス。</li>
                            <li>mBaaSの1つ。</li>
                            <p>※mBaaS (mobile backend as a service) : バックエンド環境をクラウドから提供するサービス（BaaS）に携帯端末向けのmobileが加わったもの。</p>
                            <p>【参考：<a href="https://udemy.benesse.co.jp/development/system/what-is-firabase.html">Firebaseとは？Google社の強みを活かしたメリットや…｜Udemy メディア (benesse.co.jp)</a>】</p>
                        </ul>
                    </div>
                    <div>
                        <h3>netlify</h3>
                        <ul>
                            <li>静的サイトを高速で提供できる。GitHub Pagesに近い。</li>
                            <li>フロントエンドの、ビルド、デプロイ、ホスティングを行う。</li>
                            <li>継続的デプロイ（更新頻度が高い）に適している。</li>
                            <li>UIがわかりやすく、操作しやすい（らしい）。</li>
                            <p>【参考：<a href="https://programming-world.net/platform/netlify/">Netlifyとは？無料で始められるデプロイ環境について解説 | プログラミング入門 (programming-world.net)</a>】</p>
                        </ul>
                    </div>
                    <div>
                        <h3>vercel</h3>
                        <ul>
                            <li>Vercel Inc.はNext.jsを開発した会社。</li>
                            <li>フロントエンドのためのクラウドプラットフォーム。</li>
                            <li>netlifyと同様、フロントエンドの、ビルド、デプロイ、ホスティングを行うが、netlifyよりも速い。</li>
                            <li>無料でも使える機能が多い。CDN（Contents Delivery Network : Webサイト上のコンテンツを迅速にエンドユーザーに届けるための仕組み）など。</li>
                            <li>UIがシンプルで使いやすい。</li>
                            <p>【参考：<a href="https://techblitz.com/vercel/">フロントエンド開発の心強いツールVercel。毎月30％利用増の理由 – TECHBLITZ</a>】</p>
                        </ul>
                    </div>
                    <div>
                        <h3>AWS（Amazon Web Service）</h3>
                        <ul>
                            <li>Amazonの子会社が提供している、クラウドコンピューティングサービス。</li>
                            <li>元は、Amazon自社が世界中からの膨大なアクセスに対応できるよう、インフラを支えるために開発された。</li>
                            <li>ビジネススピードを向上でき、高機能でサービスが多い。</li>
                            <li>従量課金制。</li>
                            <li>AWS特有の概念がある。</li>
                            <p>【参考：<a href="https://udemy.benesse.co.jp/development/system/what-is-aws.html">AWSとは？利用するメリットをわかりやすく解説！サー…｜Udemy メディア (benesse.co.jp)</a>】</p>
                        </ul>
                    </div>
                    <div>
                        <h3>GCP（Google Cloud Platform）</h3>
                        <ul>
                            <li>Googleが提供しているクラウドコンピューティングサービス。</li>
                            <li>Googleが使っているのと同じテクノロジーやインフラを活用できる。（Google検索やYoutubeなど）</li>
                            <li>インフラ環境が整っていて、ネットワークが高速で安定性がある。</li>
                            <li>機械学習やAI分野のサービスを利用できる。</li>
                            <li>従量課金制。少人数でも開発可能。</li>
                            <p>【参考：<a href="https://udemy.benesse.co.jp/development/system/gcp.html">GCP（Google Cloud Platform）とは？特徴・メリット…｜Udemy メディア (benesse.co.jp)</a>】</p>
                        </ul>
                    </div>
                    <div>
                        <h3>Microsoft Azure</h3>
                        <ul>
                            <li>Microsoft社が提供するクラウドサービス。</li>
                            <li>IaaS（Infrastructure as a Service）やPaaS（Platform as a Service）のサービスが充実</li>
                            <li>全てのサービスがクラウド状に展開されているため、サーバー等の設備が不要。</li>
                            <li>従量課金制ではあるが、無料で使える部分も多い。</li>
                            <p>【参考：<a href="https://www.pasonatech.co.jp/workstyle/column/detail.html?p=2343">Azureとは何か？初心者向けにわかりやすく解説 | IT・ものづくりエンジニアの転職・派遣求人情報なら【パソナテック】 (pasonatech.co.jp)</a>】</p>
                        </ul>
                    </div>
                    <br/>
                    <p>Verselを使うことにした。</p>
                    <p>フロントエンド向きで、使いやすそうでなんか良さそうだったから。</p>
                    <p>あと、分からないときに聞ける人がいるから。（これ9割）</p>
                    <br/>
                </div>
                <BackButton/>
            </body>
        </html>
        </Layout>
    )
}