import React from "react";
import { useStyles } from "../../style/RecordStyle";
import { Layout } from "../organisms/Layout";
import { BackButton } from "../atoms/BackButton";
import img6_1 from "../atoms/RecordImg/6-1.jpg";
import img6_2 from "../atoms/RecordImg/6-2.jpg";

export const Record6 = () => {
    const classes = useStyles();
    return(
        <Layout>
        <html className={classes.all}>
            <body className={classes.body}>
                <header>
                    <h1>制作記録（6）－調整②－</h1>
                </header>
                <p>まだまだ気になるところを修正・調整していきます！</p>
                <div>
                    <h3>戻るボタン</h3>
                    <p>そういえば、まだ各ページに戻るボタンがなかった。</p>
                    <br/>
                    <p>制作記録（2）のHeaderのところにも書いたが、画面遷移に関しては、react-router-dom（v6）のuseNavigateを使う。</p>
                    <br/>
                    <p>戻るボタンは、ほとんどすべてのページに付けるから、いちいち記述するのではなく、コンポーネントを作って、使いたいところに呼び出して使えるようにした。（BackButton.tsx）</p>
                    <br/>
                    <p>任意のページに遷移するなら、navigate('/pathname')とすればよい。</p>
                    <p>今のところ、戻った先はHomeだから、navigate('/')でいいやと思った。動き自体は一見問題ないが、このサイトを閉じたくて、既存の戻る（以下の画像の赤丸）を押すと、今までに開いたページすべてを戻ることになる。</p>
                    <p>例) Home→Flower→Home→Earrings という順に開いてここから戻ろうとしたら、→Home→Flowers→Home→（閉じる）</p>
                    <img src={img6_1}/>
                    <p>（↑ Webの戻る）</p>
                    <img src={img6_2}/>
                    <p>（↑ スマホの戻る）</p>
                    <p>これは使いづらい。</p>
                    <br/>
                    <p>本当の意味で戻るには、navigate( -1 )とすればよい。</p>
                    <p>v5のhistoryでは、history.gobackだったから、-1だけでいいのは楽！</p>
                </div>
                <div>
                    <h3>モーダルの閉じるボタン</h3>
                    <p>ついでに、モーダルの閉じるボタンも実装しておくぅ</p>
                    <br/>
                    <p>Material uiのmodalを使っていて、モーダルで表示される写真の外をクリックすればモーダルは閉じるようになっていたが、それに気づかない人もいる。（私の母）</p>
                    <br/>
                    <p>でも、この閉じ方はそのままあってもいいと思ったから、クリックしたときに閉じる関数（handleClose）を追加した。</p>
                    <p>onClickを追加しただけだから、すんなりできた。</p>
                    <p>（すんなりできた自分に（・∀・）ﾆﾔﾆﾔ したw）</p>
                </div>
                <p>どちらのボタンも、いい感じの位置に配置するcssをすんなり実装するのは、、、もうちょい！^^;</p>
                <div>
                    <h3>フォント</h3>
                    <p>実はずっと気になってた、フォントォォォ。</p>
                    <p>パソコンでは手書き風になっていたが、mobileでは細字の読みにくい筆記体になっていた。</p>
                    <p>おしゃれだから緊急性はと思い、後回しにしていた。</p>
                    <br/>
                    <p>文字は、読ませるところと見せるところがあると考えている。</p>
                    <p>　読ませる文字：説明、コメント（日本語部分）</p>
                    <p>　見せる文字：タイトル（Topの”collicotion”など）</p>
                    <p>このうち、見せる文字はこのページの雰囲気を表現できると思うから、しっかり選んだ。</p>
                    <br/>
                    <p>無料ダウンロードできるフォントサイトDafontからダウンロードしたが、これもWebでは使えるが、mobileでは使えなかった。（ﾁｰﾝ）</p>
                    <br/>
                    <p>Webでもmobileでも使えるフォントをWebフォントというらしいが、意外とない（探し方が下手？）と思う。これってのが見当たらなかった。</p>
                    <p>調べ方を変えて、「react font family」って調べたら、Google fontが出てきた。</p>
                    <br/>
                    <p>調べてるときにほぼ毎回目にしていたが、なぜか流れていた。</p>
                    <p>いざ見てみたら、種類豊富で良いのあった！</p>
                    <p>【Google Fonts：<a href="https://fonts.google.com/">Browse Fonts - Google Fonts</a>】</p>
                    <br/>
                    <p>使い方は、（create-react-appの場合）</p>
                    <p>index.cssの中に、@import url(’ ここに使いたいフォントのURLを入れる ’)　を書く。</p>
                    <p>body {}のfont-familyに、すでにフォントがいくつか書かれているから、その中に、インポートしたフォント名を追加する。</p>
                    <br/>
                    <p>これだけ！簡単！</p>
                    <p>これなら、Webでもmobileでも同じフォントが使われるように実装できた。</p>
                    <br/>
                    <p>（補足）</p>
                    <p>フォントを使う時、複数のフォント名を書いておけば、記述した順に使えるフォントが表示されるため、目的のフォントが使えない場合でも、そのあとに書かれたフォントで表示できる。</p>
                    <p>様々なところで開かれるサイトなら、複数のフォントを記述して置いた方が崩れるリスクは減る。</p>
                </div>
                <BackButton/>
            </body>
        </html>
        </Layout>
    )
}