import { useStyles } from "../../style/RecordStyle";
import { Layout } from "../organisms/Layout";
import { BackButton } from "../atoms/BackButton";
import img2_1 from "../atoms/RecordImg/2-1.jpg";
import img2_2 from "../atoms/RecordImg/2-2.jpg";
import img2_3 from "../atoms/RecordImg/2-3.jpg";
import img2_4 from "../atoms/RecordImg/2-4.jpg";

export const Record2 = () => {
    const classes = useStyles();
    return(
        <Layout>
        <html className={classes.all}>
            <body className={classes.body}>
                <header>
                    <h1>制作記録（2）－実装－</h1>
                </header>
                    <h2>実装</h2>
                    <p>基本的に、cssはMaterial uiのuseStyles (createStyles, makeStyles)で実装する。</p>
                <div>    
                    <h3>Home（TOPページ）</h3>
                    <p>次のように分ける。</p>
                    <p>Home.tsxでは、TopとBody部分を実装。</p>
                    <figure>
                        <img src={img2_1}/>
                    </figure>
                </div>
                <div>
                    <h4>Top</h4>
                    <p>背景の写真、やや透明な白い背景（カーテンと呼ぶことにする）、タイトル（サブタイトルも含む）の3パーツで構成。</p>
                    <ul>
                        <li>背景画像
                            <p>透明度は60%。scaleMode:‘fill’ にすることで画像の縦横比は維持したままになると思ったが、これではなく、objectFit: &#x27;cover’で縦横比を維持したまま拡大縮小できた。</p>
                        </li>
                        <li>カーテン
                            <p>Top全体を含むdiv要素をposition:’relative’とし、カーテンをposition:’absolute’, top: 0, left: ‘15%’にすることで、Figmaで作成した目的の位置に配置できた。</p>
                        </li>
                        <li>タイトル
                            <p>タイトルは、カーテンの要素の中に入れた。</p>
                            <p>ここではposition:’absolute’, top:’50%’とした。こうすることで、カーテン内の縦の真ん中にタイトルを配置できた。</p>
                            <p>メインタイトルとサブタイトルは、textAligh:’center’で中央揃えし、justify:’contents’カーテン幅の真ん中にした。（※この2つのcssの違いを理解した。）</p>
                        </li>
                    </ul>
                    <h4>body</h4>
                    <ul>
                        <li>EarringとFlowerの写真とタイトルをそれぞれdivのcontentsでまとめた。</li>
                        <li>写真は、navigateを使ってページ遷移するようにbuttonにした。</li>
                        <li>buttonはクリック時にハイライトを入れた。</li>
                            <img src={img2_2} style={{width:'15em',}}/>
                        
                        <li>横幅が画面以上にあったため、横スライドが出来ないように、overflowX: 'hidden’をbody全体に付けた。</li>
                        <li>contentsはweb表示は写真の隣にタイトル、mobile表示は写真の下にタイトルが来るようにした。
                            <p>Web : display: 'flex',　justifyContent: 'center',</p>
                            <p>mobile : display: 'flex', flexDirection: 'column',</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Work List（画像表示）</h3>
                    <ul>
                        <li>propsで受け取った画像データ（それぞれのimg, title, modal imgを配列に格納したファイル）をmap関数で順に表示。</li>
                        <li>画像の右下には拡大するアイコンをつけ、モーダル表示できるようにした。このアイコンの位置は、positionを使って写真に対する任意の位置に付けられるようにした。</li>
                        <li>モーダルはMaterial ui を使用。</li>
                        <li>レイアウトはMaterial uiのGridを使って、画面幅に合わせて列を調整(auto)。</li>
                    </ul>
                </div>
                <div>
                    <h3>各作品ページ（Earrings、Flowers）</h3>
                    <ul>
                        <li>Boxの中にタイトルと表示するコンポーネント</li>
                        <li>上記のWorkListをインポートし、それぞれデータを渡す。</li>
                        <li>作品の表示レイアウトは同じため、WorkListを共通化できるようにした。</li>
                        <img src={img2_3} />
                        <img src={img2_4} />
                    </ul>
                </div>
                <div>
                    <h3>Header</h3>
                    <ul>
                        <li>Material uiのHide App Barを使って、スクロール時に隠れるHeaderを実装。</li>
                        <li>背景色は、Homeの時だけ透明で他のページでは白色にした。react-router-domのlocationで現在のpathnameを取得しcreateStyles内で三項演算子を用いて判断するようにした。ページが変わるごとに判断できるよう、useEffectでpathnameを取得するようにした。</li>
                        <p>※React Routerがv5からv6にアップデートされ、useHistoryがuseNavigateに変更された。</p>
                        <p>【参考：<a href="https://zenn.dev/horisan/articles/2aeaf0bd3fb70f">[useNavigate + useLocationで遷移先に送付する値を管理する (zenn.dev)]</a>】</p>
                    </ul>
                </div>
                <div>
                    <h3>Footer</h3>
                    <ul>
                        <li>ulとliで3つの紹介ページを載せる。</li>
                        <li>クリックできると分かるようにcursor: 'pointer’</li>
                        <li>ページ遷移はnavigateで実装。</li>
                    </ul>
                </div>
                <div>
                    <h3>Layout</h3>
                    <ul>
                        <li>どのページにもHeaderとFooterを付けたかったため、Layoutコンポーネントを作成し、その中にHeaderとFooterをインポート。ページの内容はdiv要素の children を用いて表示する。このときの children の型はReactNodeに定義。</li>
                        <li>Flowers.tsxやEarrings.tsxでreturnの中身をLayoutに入れるのを忘れないようにする。</li>
                        <p>※childrenの型について</p>
                        <p>ReactNodeが最も幅広い。次にReactChild。ReactElememtやJSX.Elementは1つのReactコンポーネントのみで、ReactTextは文字列や数値だけの型である。</p>
                        <p>【参考：<a href="https://maku.blog/p/xenv4bh/">React の props.children の型定義には ReactNode を使う｜まくろぐ (maku.blog)</a>】</p>
                    </ul>
                </div>
                <br/>
                <p>...だいぶ形になってきた。</p>
                <br/>
                <BackButton/>
                </body>
        </html>
        </Layout>
    )
}