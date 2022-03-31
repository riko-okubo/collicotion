import React from "react";
import { useStyles } from "../../style/RecordStyle";
import { Layout } from "../organisms/Layout";
import { BackButton } from "../atoms/BackButton";
import img8_1 from "../atoms/RecordImg/8-1.jpg";
import img8_2 from "../atoms/RecordImg/8-2.jpg";
import img8_3 from "../atoms/RecordImg/8-3.jpg";
import img8_4 from "../atoms/RecordImg/8-4.jpg";

export const Record8 = () => {
    const classes = useStyles();
    return(
        <Layout>
        <html className={classes.all}>
            <body className={classes.body}>
                <header>
                    <h1>制作記録（8）</h1>
                    <h1>－アニメーション②－</h1>
                </header>
                <h2>useSpring</h2>
                <p>いきなり大きなことをすると躓くのは学習済であるので、まずは基本のアニメーションuseSpringを使ってみる。</p>
                <div>
                    <h3>useSpringを使ったアニメーション実装の流れ</h3>
                    <h5>step①</h5>
                    <p>style（名前はなんでもいい）の状態変数を定義する。</p>
                    <p>初期状態は、アニメーションのスタート状態。</p>
                    <p>　ex ) 透過率０からスタートするstyleの場合</p>
                    <img src={img8_1}/>

                    <h5>step②</h5>
                    <p>アニメーションの動きやゴールは、styleの状態を更新する。</p>
                    <p>　ex ) 透過率を０→１に変化</p>
                    <img src={img8_2}/>
                    <p>今回は、レンダリング時（useEffect）に更新する。</p>
                    <p>※ボタンをクリック時（handle...）などの、ユーザーの操作をトリガーとしてアニメーションを発動させる場合、boolean型の状態変数を定義する。</p>

                    <h5>step③</h5>
                    <p>アニメーションで動かしたいところを、animated.divタグに入れる。このコンポーネントに作成したstyleを属性値として渡す。</p>
                    <p>　ex ) </p>
                    <img src={img8_3}/>
                </div>
                <div>
                    <h3>実装したアニメーションの動き</h3>
                    <h5>fade inとslide in（上、右、左から）</h5>
                    <img src={img8_4}/>
                    <p>※右、左からのは、delayで時間差を与えている。</p>
                </div>
                <p>configはアニメーションのプロパティを加えられるから、これ使いこなせたら、インタラクティブ度が増しそう。</p>
                <p>【参考：<a href="https://react-spring.io/common/configs">react-spring</a>】</p>
                <br/>
                <p>今は基本だけだけど、うるさくならない程度に他のアニメーションも実装してみたい。</p>
            <BackButton/>
            </body>            
        </html>
        </Layout>
    )
}
