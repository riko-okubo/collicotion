import React from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "../style/P_R_Style";
import { BackButton } from "../component/atoms/BackButton";
import { Layout } from "../component/organisms/Layout";

export const ProductionRecord = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return(
    <Layout>
      <div className={classes.div}>
          <h1>collocotion 制作記録</h1>
          <p>デザインからオリジナルで作ったHPの記録です。</p>
          <p>自分用のメモとして記録を残していたものなので、読みにくかったり日本語が下手だったりしますが、暖かい目で読んでくれたら嬉しいです。</p>
          <ol>
              <li onClick={() => navigate('/Record1')}>（１）デザイン</li>
              <li onClick={() => navigate('/Record2')}>（２）実装</li>
              <li onClick={() => navigate('/Record3')}>（３）デプロイ</li>
              <li onClick={() => navigate('/Record4')}>（４）レスポンシブ</li>
              <li onClick={() => navigate('/Record5')}>（５）修正・調整 その1</li>
              <li onClick={() => navigate('/Record6')}>（６）修正・調整 その2</li>
              <li onClick={() => navigate('/Record7')}>（７）アニメーション その1</li>
              <li onClick={() => navigate('/Record8')}>（８）アニメーション その2</li>
          </ol>
          <br/>
          <BackButton />
      </div>
    </Layout>
  )
}