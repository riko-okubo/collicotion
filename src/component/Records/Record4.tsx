import React from "react";
import { useStyles } from "../../style/RecordStyle";
import { Layout } from "../organisms/Layout";
import { BackButton } from "../atoms/BackButton";
import img4_1 from "../atoms/RecordImg/4-1.jpg";
import img4_2 from "../atoms/RecordImg/4-2.jpg";
import img4_3 from "../atoms/RecordImg/4-3.jpg";

export const Record4 = () => {
    const classes = useStyles();

    return(
        <Layout>
        <html className={classes.all}>
            <body className={classes.body}>
                <header>
                    <h1>制作記録（4）－レスポンシブ－</h1>
                </header>
                <div>
                    <h2>レスポンシブ対応する</h2>
                    <p>いざ、デプロイ！えいっ!!!</p>
                    <p>よしよし、早速開いてみよう！って、、、スマホで見ると、ぐちゃぐちゃ　(ﾁｰﾝ)</p>
                    <br/>
                    <p>Web表示のデザインばかり考えて、レスポンシブを何もしていなかった。</p>
                    <p>友人や知り合いに見てもらう（見せたい）時、ほとんどの人がスマホで見るため、レスポンシブ対応は欠かせない。</p>
                    <br/>
                    <p>Material ui のレスポンシブを調べたところ、3つの方法があった。</p>

                    <div>
                        <h3>media query</h3>
                        <ul>
                            <li>cssの仕様の1つで、スマホ対応するレスポンシブ。</li>
                            <li>メディアタイプやメディア特性によって対応する。</li>
                        </ul>
                    </div>
                    <div>
                        <h3>useMediaQuery</h3>
                        <ul>
                            <li>Material ui 独自。</li>
                            <li>React上で使用し、trueかfalseで結果を返す。</li>
                            <li>スタイリングには不向き。</li>
                        </ul>
                    </div>
                    <div>
                        <h3>theme</h3>
                        <p>Material ui のthemeでbreakpoint（xs, sm, md, lg, xl）の valueを任意の値に定義し直して、その大きさに応じてレスポンシブ対応する。しかし、デフォルトのvalueは定義されているため、設定し直さなくても良い。</p>
                        <p>【Default Theme : <a href="https://mui.com/customization/default-theme/?expand-path=$.breakpoints.values"> Default Theme - MUI</a>】</p>
                        <br/>
                        <p>レスポンシブ対応する画面サイズについて ↓</p>
                        <img src={img4_1} />
                        <p>【参考：<a href="https://hashimotosan.hatenablog.jp/entry/2020/12/06/182327">【図解で納得】レスポンシブデザインのブレイクポイントの細かすぎる新解釈 [2022年更新版] - webのあれこれ (hatenablog.jp)</a>】</p>
                        <br/>
                        <p>のちに文字色やアクセント色をthemeに定義して使いたいと思ったため、themeを使うことにした。</p>
                        <p>とりあえず、デフォルト値のままでスマホサイズの画面に対応する。</p>
                        <br/>
                        <p>theme.breakpoints.up(key) : keyよりも大きい時</p>
                        <p>theme.breakpoints.down(key) : keyよりも小さい時</p>
                        <p>theme.breakpoints.only(key) : keyから次のkeyまで</p>
                        <p>theme.breakpoints.not(key) : keyの時だけ止まる</p>
                        <p>theme.breakpoints.between(start, end) : start以上end以下の時</p>
                        <br/>
                        <p>これらをcreateStyleの中のスタイリングを変えたい部分に記述していく。</p>
                        <p>とりあえず、画面サイズが小さい時のみ対応できればよいと思い、theme.breakpoints.down('sm') を使った。</p>
                        <br/>
                        <img src={img4_2}/>
                        <img src={img4_3}/>
                        <p>Top部分やbody部分のタイトルをそれぞれ小さくした。</p>
                        <p>また、丸い写真も小さくし、制作記録(2)でも書いたが、縦並びになるようにcssを変えた。</p>
                        <br/>
                        <p>HeaderとFooterの文字サイズも、小さくした。</p>
                        <p>全体的にmarginの大きさを小さくし、無駄な余白は詰めるようにした。</p>
                        <br/>
                        <br/>
                        <p>縦並びが思ったより良い...。w</p>
                        <br/>
                    </div>
                </div>
                <BackButton/>
            </body>
        </html>
        </Layout>
    )
}