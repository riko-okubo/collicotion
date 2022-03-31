import React from "react";
import { useStyles } from "../../style/RecordStyle";
import { Layout } from "../organisms/Layout";
import { BackButton } from "../atoms/BackButton";
import img5_1 from "../atoms/RecordImg/5-1.jpg";
import img5_2 from "../atoms/RecordImg/5-2.jpg";
import img5_3 from "../atoms/RecordImg/5-3.jpg";

export const Record5 = () => {
    const classes = useStyles();
    return(
        <Layout>
        <html className={classes.all}>
            <body className={classes.body}>
                <header>
                    <h1>制作記録（5）－調整①－</h1>
                </header>
                <h3>いろいろ調節していく</h3>
                <p>デプロイしてレスポンシブ対応して、だいぶ人様に見せられる程度になってきた。</p>
                <p>でも、気になる点はたくさんあるので修正してく。（キリがないから、妥協しながら...）</p>

                <div>
                    <h3>クリックできる範囲</h3>
                    <p>2つのページは、それぞれの写真がボタンだった。</p>
                    <p>文字もクリックできるのは自然と思うものだから、写真とタイトルを含めたコンポーネントをクリックできる範囲に修正した。</p>
                    <br/>
                    <p>この時、Buttonタグ（onClick）をどこに動かせばいいかは難なくクリア（すごく初歩的なことだけど、思ったことをスムーズにできたという成長を感じた）したが、この変化によってcssも修正するのに、少し手こずった。</p>
                    <p>新しいcssは使っていないが、コンポーネントの構造が変わっただけ。だから、どこでどのcssを書くのかを、やたらめったら試していくのではなく、ここはこの中のだからこうしてああして、、？、、って考えて調節っしていくことが出来た。（指示語多いけど、ツタワレ~）</p>
                    <br/>
                    <p>時間はかかったが、効率は悪くないと思うし、頭を使ったから今後につながる（と信じてる）。</p>
                    <br/>
                    <p>ボタンは、押した感覚（ボタンらしい動きや変化）が欲しくて、cssに</p>
                    <img src={img5_1}/>
                    <p>を加えた。</p>
                    <br/>
                    <p>丸い写真なのに四角い画像として表示されていたのを、ボタン範囲を買えたことにより隠すことが出来た。(yahhoi !)</p>
                </div>
                <div>
                    <h3>アニメーション</h3>
                    <p>人に見せて感想をいただいていたが、HTMLと思われることが多く、ちょっと残念だった。</p>
                    <p>（まあ、そりゃそうだよね。データ関連？何もしてないし、平面的というかぁ、静止的だし。。。）</p>
                    <br/>
                    <p>デプロイとレスポンシブ対応してスマホでも見れるようになって、うれしくなってたけど、普通に見たら、いうて面白くない</p>
                    <br/>
                    <p>見て楽しいものを作りたいし、アニメーション入れたいんじゃん！（ワスレテタ）</p>
                    <br/>
                    <p>ってなわけでアニメーションについて調べ始めるんだが、これは長くなるため、制作記録（7）に書くことにする。</p>
                </div>
                <div>
                    <h3>ファビコンとロゴ</h3>
                    <p>人に見せるとき、URLを送ると、ドーーンってreactのロゴが出る。</p>
                    <img src={img5_2}/>
                    <p>react知らない人から見たら怪しいサイトみたいじゃない？って思った。</p>
                    <br/>
                    <p>illustratorで作ってみるか？と思て、Topの写真のチューリップ（英語の花言葉：perfect lover（理想の恋人）←合ってないww）を描こうと思って何となくillustratorをいじって3分。。。</p>
                    <p>やめた。なんかしっくりこないし、今これに時間かけるの違う。</p>
                    <br/>
                    <p>illustratorを初めて触った時に作った画像でいいや。何気に気に入ってるし。と思って、これ↓にした。</p>
                    <img src={img5_3}/>
                    <p>で、本題。</p>
                    <p>ファビコンを変えるのは、チョー簡単だった！publicの中のfavicon.icoをこの画像に変えるだけ！</p>
                    <p>index.thmlを見れば、iconのところにlogo.pngがあるから、それもこの画像に変えればいいだけだし、titleタグがあったから、そこもreact appじゃなくてcollicotionに変えた。</p>
                    <br/>
                    <p>...って、そもそも今までsrcの中とindex.tsx、App.tsxくらいしか見てなかったことに気づいた。</p>
                    <p>ほんと、一部しか見てないし、まだまだ知識無いワ(-_-;)</p>
                </div>
                <BackButton/>
            </body>
        </html>
        </Layout>
    )
}