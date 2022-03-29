import React from "react";
import { useStyles } from "../../style/RecordStyle";
import { BackButton } from "../atoms/BackButton";
import img1_1 from "../atoms/RecordImg/1-1.jpg";
import img1_2 from "../atoms/RecordImg/1-2.jpg";
import img1_3 from "../atoms/RecordImg/1-3.jpg";
import img1_4 from "../atoms/RecordImg/1-4.jpg";
import img1_5 from "../atoms/RecordImg/1-5.jpg";
import movie1_1 from "../atoms/RecordImg/movie1-1.mp4";
import movie1_2 from "../atoms/RecordImg/movie1-2.mp4";
import movie1_3 from "../atoms/RecordImg/movie1-3.mp4";
import { Layout } from "../organisms/Layout";

export const Record1 = () => {
    const classes = useStyles();
    return(
        <Layout>
        <html className={classes.all}>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <title>製作記録（1）－デザイン－</title>
            </head>
            <body className={classes.body}>
                <header><h1>製作記録（1）－デザイン－</h1></header>
                <div>
                    <h2>HPをReact, TypeScriptを使って作り直そう！</h2>
                    <p>べた書きではなく、ライブラリを使ってみる。</p>
                    <p>夏のインターン（いい生活）で使ったMaterial uiを使おう。</p>
                    <br/>
                    <p>写真をいい感じ(おしゃれ)に表示したい。</p>
                    <p>ドキュメントを見て、気になったのをやってみる。</p>
                    <p>ヘッダーも付けてみる。（うれしくなるw）</p>
                    <br/>
                    <figure>
                        <img src={img1_1}/>
                    </figure>
                    <br/>
                    <p>......ださっ。</p>
                    <p>これじゃ、前の（html,cssのごりべた書きの）と変わらないじゃん。</p>
                    <br/>
                    <p>とりあえず、Topページのデザイン作ってみる。</p>
                    <br/>
                    <p>アニメーション使ってみようかな！！！</p>
                    <p>スクロール時にアニメーションをつけたい。</p>
                    <p>Material uiにもあるけど、windowsの関数を使うから使いにくい。（わからない）</p>
                    <p>React Springを使ってみる。</p>
                    <ul>
                        <li>アニメーションライブラリの中でも評価がそこそこ高く、使ってる記事が多い。</li>
                        <li>ドキュメントを見た感じ、今の私には使いやすそうな印象だった。</li>
                    </ul>
                    <br/>
                    <p>再び、やってみよう精神が暴走する。</p>
                    
                    <figure>
                        <img src={img1_2}/>
                    </figure>
                    <br/>
                    <p>Figmaでデザインを作ってから実装するも、アニメーションを使うことに夢中になり、本来の目的（おしゃれに魅せる）を見失う。</p>
                    
                    <video controls >
                        <source src={movie1_1} type="video/mp4" />
                    </video>
                    <video controls>
                        <source src={movie1_2} type="video/mp4" />
                    </video>
                    <video controls>
                        <source src={movie1_3} type="video/mp4" />
                    </video>
                    <br/>
                    <p>様々なデザインや動きが出来て嬉しかったが、友人にデザインを見てもらったところ、ごちゃごちゃして、何に焦点を当てたいのかが分からない状態にある事に気づかされた。</p>
                </div>
                <div>
                    <h2>要件定義</h2>
                    <p>一旦、デザインを真面目に考えてみよう。</p>
                    <p>本来の目的も詳しく明らかにしていこう。</p>
                    <br/>
                    <p>要件定義を自分なりに作成して、考えを整理した。</p>
                    <p>これにより、作りたいHPの雰囲気を何となくではあるが、イメージできた。</p>
                    <p>また、HPの作成に当たって、どのような流れで作っていこうかという道が少しずつ見えてきた。</p>
                    <p>初めての個人開発のため、行き辺りばっかりになることは想定していたが、進む方向が定まっていないとどこにもたどり着けない。</p>
                    <br/>
                    <p>要件定義は、全部しっかりと作成できたわけではないが、ザっと書ける分だけを書き出した。</p>
                    <p>あまりここに時間をかけていられないので、次へ進む。</p>
                </div>
                <div>
                    <h2>Figmaでデザインを再作成 !!!</h2>
                    <p>このときの目標は、デザインを相談した友人に、(・∀・)ｲｲﾈ!! かわいい!! を言わせること。</p>
                    <br/>
                    <p>イメージは...</p>
                    <ul>
                        <li>シンプルだけどおしゃれ</li>
                        <li>抜け感</li>
                        <li>オーガニックな（ではないけど）雰囲気</li>
                        <li>作品の写真を使う</li>
                    </ul>
                    <br/>
                    <p>デザイン作成時に、参考にした本 ↓</p>
                    <p>ingectar-e, 『けっきょく、よはく 。』余白を活かしたデザインレイアウトの本, ソシム株式会社</p>
                    <a href="https://www.socym.co.jp/book/1169"></a>
                    <br/>
                    <figure>
                        <img src={img1_3}/>
                    </figure>
                    <p>Figmaで画像を丸く切り取る方法を知った。</p>
                    <p>あまり変化はないが、body部分がすっきりした。シンプルだが小洒落感は前より表現できたと思う。</p>
                    <p>素材（写真）がきれいだから、それを魅せて活かした。</p>
                    <br/>
                    <figure>
                        <img src={img1_4}/>
                    </figure>
                    <br/>
                    <p>作品一覧画面は、写真自体が洒落ているため、あえて色は使わないようにした。</p>
                    <p>何もないのは物足りないので、展示会風に枠を付けた。</p>
                    <p>Gridを使って画面の幅に対応して横の表示枚数が変化するように実装。</p>
                    <p>ヘッダーあるの？ないの？事件が発生しつつあるが、色を透明にしたり白くしたりひっそりと変化させたいと思っている。</p>
                    <br/>
                    <figure>
                        <img src={img1_5}/>
                    </figure>
                    <br/>
                    <p>モーダルで拡大表示。作品1つ1つの綺麗さをアピール☆</p>
                    <p>チェキ風にするのも良いけど、ここにレトロ感は似合わないのでは？（左）</p>
                    <p>枠を維持し、白字のタイトルで良さそう（右）</p>
                    <br/>
                    <p>ちなみに、例の友人に再作成したデザインを見せたところ、</p>
                    <p>「むちゃくちゃ可愛い」「個人的に好きなデザインです素敵」と、コメントを頂いた。</p>
                    <br/>
                    <br/>
                    <p>むちゃくちゃ嬉しかったです。</p>
                </div>
                <br/>
                <BackButton />
            </body>
        </html>
        </Layout>
    )
}