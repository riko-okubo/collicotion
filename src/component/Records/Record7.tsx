import React from "react";
import { useStyles } from "../../style/RecordStyle";
import { Layout } from "../organisms/Layout";
import { BackButton } from "../atoms/BackButton";

export const Record7 = () => {
    const classes = useStyles();
    return(
        <Layout>
        <html className={classes.all}>
            <body className={classes.body}>
                <header>
                    <h1>制作記録（7）</h1>
                    <h1>－アニメーション①－</h1>
                </header>
                <p>アニメーションライブラリを使うのは初めてで、どのライブラリがいいのかわからなく、調べた。</p>
                <br/>
                <p>様々なサイトをサーっと見たが、</p>
                <a href="https://openbase.com/categories/js/best-react-animation-libraries">10 Best React Animation Libraries in 2022 | Openbase</a>
                <p>このサイトで、上位にあるかつstarが多いやつに焦点を絞り、使い方やアニメーションの動きを調べた。</p>
                <br/>
                <p>react-springとreact-motionを中心に調べたが、公式ドキュメントがreact-springの方が見やすく、使いやすそうだったから、react-springを使うことにした。</p>
                <div>
                    <h3>react-spring について</h3>
                    <p>react-springの特徴は、物理ベースのアニメーションライブラリであるということ。</p>
                    <br/>
                    <p>...... n？</p>
                    <br/>
                    <p>詳しく説明すると、</p>
                    <p>これでもいいんだけど、よりインタラクティブな実装をする場合、ユーザーがどんな風に操作しても常に同じ動きになってしまう。</p>
                    <p>例えば、ユーザーが素早くスライドやフリックしたのに、設定したアニメーションが遅かったら、ゆっくり動いてしまう。（ユーザーの動き、操作に合ってない。）</p>
                    <br/>
                    <p>react-springは、この問題を解決する。</p>
                    <p>継続時間やイージング曲線は設定せず、物理属性のconfig（mass : 質量、tension : エネルギー負荷、friction : 抵抗、precision : 精度、velocity : 速度 など）と変化後の値を設定すると、react-springが物理演算でアニメーションを演出してくれる。</p>
                    <br/>
                    <p>この設定をすればユーザーの操作に合った、インタラクティブな動きを実現できる。</p>
                    <br/>
                    <p>え、なんか、すごいwww</p>
                    <br/>
                    <p>【参考：<a href="https://qiita.com/okkuyama/items/e835fa4e483c0bc05733">react-spring , `react-spring`を使ってReactでのアニメーションを行う - Qiita</a>】</p>
                    <br/>
                    <p>ここから実装した話を書くと長くなりそうだから、実際の実装記録は、制作記録（8）で...</p>
                    <p>俺✕ 私の話は長い</p>
                </div>
                <BackButton/>
            </body>
        </html>
        </Layout>
    )
}