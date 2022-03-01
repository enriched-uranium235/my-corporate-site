import React from 'react';
import {Link} from 'react-router-dom';

const Top = () => {
    return <div className="container">
        <section>
            <div className="row font-white">
                <div className="col-md-10 col-lg-10 mx-auto">
                    <div className="text-center">
                        <h1 className="mt-5">Concilium Societatis</h1>
                        <h2 className="mini-font001">-ITの力で、社会を支えるカンパニー-</h2>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="row font-white">
                <div className="col-md-10 col-lg-10 mx-auto">
                    <div className="text-left">
                        <h4 className="mt-5">　当サイトをご覧いただきありがとうございます‼<br /><br />
                        　当社は2021年8月創業、ITフリーランスとしてまだまだ駆け出しのエンジニアがシステムの受注開発をさせていただいております‼<br /><br />
                        　納品実績は3件、Laravelを用いた開発の受注がメインとなっておりますが、DjangoやRails、Reactを用いたWeb開発もできます‼</h4>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="row font-white">
                <div className="col-md-10 col-lg-10 mx-auto">
                    <div className="text-center">
                        <h1 className="mt-5">メインメニュー</h1>
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <Link to="/about">
                                    <div className="explain">
                                        <div className="text-center">
                                            <h1 className="information-text">会社概要</h1>
                                        </div>
                                        <img className="menu-image" src="img/corporate1.png" alt="company-introduce" />
                                    </div>
                                </Link>
                                <Link to="/achievement">
                                    <div className="explain">
                                        <div className="text-center">
                                            <h1 className="information-text">実績</h1>
                                        </div>
                                        <img className="menu-image" src="img/corporate2.png" alt="company-achievement" />
                                    </div>
                                </Link>
                                <Link to="/creation">
                                    <div className="explain">
                                        <div className="text-center">
                                            <h1 className="information-text">作成物</h1>
                                        </div>
                                        <img className="menu-image" src="img/corporate4.png" alt="company-creation" />
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <Link to="/staff">
                                    <div className="explain">
                                        <div className="text-center">
                                            <h1 className="information-text">スタッフリスト</h1>
                                        </div>
                                        <img className="menu-image" src="img/corporate5.png" alt="company-staff" />
                                    </div>
                                </Link>
                                <Link to="/activity">
                                    <div className="explain">
                                        <div className="text-center">
                                            <h1 className="information-text">活動内容</h1>
                                        </div>
                                        <img className="menu-image" src="img/corporate6.png" alt="company-activity" />
                                    </div>
                                </Link>
                                <Link to="/contact">
                                    <div className="explain">
                                        <div className="text-center">
                                            <h1 className="information-text">お問い合わせ</h1>
                                        </div>
                                        <img className="menu-image" src="img/corporate3.png" alt="company-contact" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="row font-white">
                <div className="col-md-10 col-lg-10 mx-auto">
                    <div className="text-center">
                        <h1 className="mt-5">イメージキャラクター</h1>
                    </div>
                    <div className="image-character mt-5 mb-5">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 order-2 order-sm-2 order-md-1 p-5">
                                <h2 className="m-3">アリア・スターライト</h2>
                                <span className="m-3">当社のマスコットキャラクターとして起用しているこちらのキャラクターは当社の代表が趣味で執筆しているWeb小説「追放賢者と喪われた巫女」で生み出したキャラクターをそのまま使っています。<br /><br />
                                　代表の理想を詰められるだけ詰め込んだ理想のケモミミ少女になります。<br /><br />
                                　イラストは絵師に頼むと高いという理由だけで代表自ら描きました。<br /><br />
                                　もし興味がわきましたら執筆した小説も読んでいただきキャラクターへの愛着を持っていただけますと幸いです。<br /><br />
                                　開発中のVRコンテンツのシナリオにも使う予定の小説ですので物語での矛盾点とかも指摘いただけると大変助かります。</span>
                            </div>
                            <div className="col-md-6 col-lg-6 order-1 order-sm-1 order-md-2 my-auto">
                                <img className="introduce-character" src="img/corporate4.png" alt="character-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default Top;