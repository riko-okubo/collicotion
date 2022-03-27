import React from "react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../component/atoms/BackButton";
import { Page404 } from "./Page404";

export const ProductionRecord = () => {
  const navigate = useNavigate();
  return(
        <>
          {/* <Page404 /> */}
            <h1>collocotion 制作記録</h1>
            <ul>
                <li onClick={() => navigate('/Record1')}>(1) デザイン</li>
                <li>(2) 実装</li>
                <li>(3) デプロイ</li>
                <li>(4) レスポンシブ</li>
                <li>(5) 修正・調整 その1</li>
                <li>(6) 修正・調整 その2</li>
                <li>(7) アニメーション その1</li>
                <li>(8) アニメーション その2</li>
            </ul>
            <BackButton />
        </>
    )
}