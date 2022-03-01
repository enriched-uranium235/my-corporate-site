import React from 'react';
import 'leaflet/dist/leaflet.css';
import Map from './Map';
import Leaflet from 'leaflet';

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'

const About = () => {
    return <div className="container">
        <section>
            <div className="row font-white">
                <div className="col-md-10 col-lg-10 mx-auto">
                    <div className="text-center mt-5">
                        <h1>コンシリウム・ソシエタティスってどんな会社？</h1>
                    </div>
                    <span className="mt-5">　社名「Concilium Societatis」はラテン語を由来としています。<br /><br />
                    　会社を作って何をしたいか、どんな願いを叶えたいかを真剣に考え、自分にできる技術を使って社会を支えたい、そんな理念を抱き、また、万国共通のラテン語でその意思が伝わればという願いから「社会を支える」という意味を持つ社名にしました。<br /><br />
                    　特に、事業内容として重視していくことは、IT技術を使って普段の仕事の苦労を軽減すること、社会の歯車の中で疲れ果てた人々を癒すコンテンツを開発することです。<br /><br />
                    　代表自身が元々工場勤めをしていた中でうつ病を発症し、一度社会からドロップアウトした経験をしているからこそ、世の中の理不尽によって居場所を奪われた人、社会からドロップアウトせざるを得なくなった人に、もう一度立ち上がれるような、世の中は悪いことだけではないと気づいてもらえるようなコンテンツの開発に力を入れています。</span>
                    <div className="text-center mt-5">
                        <h1>会社情報</h1>
                    </div>
                    <table className="table font-white mt-5">
                        <tr>
                            <td>社名</td>
                            <td>コンシリウム・ソシエタティス</td>
                        </tr>
                        <tr>
                            <td>代表</td>
                            <td>加藤　雅人</td>
                        </tr>
                        <tr>
                            <td>資本金</td>
                            <td>2,000,000円</td>
                        </tr>
                        <tr>
                            <td>会社所在地</td>
                            <td>岐阜県養老郡養老町下笠1476-1</td>
                        </tr>
                        <tr>
                            <td>地図</td>
                            <td><Map /></td>
                        </tr>
                        <tr>
                            <td>アクセス</td>
                            <td>養老鉄道烏江駅より徒歩45分</td>
                        </tr>
                        <tr>
                            <td>事業内容</td>
                            <td>システムの受託開発、ゲーム開発</td>
                        </tr>
                        <tr>
                            <td>設立</td>
                            <td>2021年7月29日</td>
                        </tr>
                        <tr>
                            <td>主要取引先</td>
                            <td>
                                <ul>
                                    <li className="ml-3">株式会社アリアーレ様</li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                    <div className="text-center mt-5">
                        <h1>代表からのメッセージ</h1>
                    </div>
                    <div className="image-character mt-5 mb-5">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 order-2 order-sm-2 order-md-1 p-5">
                                <span className="m-3">　当社のコーポレートサイトをご覧いただきありがとうございます‼<br /><br />
                                　当社は2021年7月末に創業したばかりの会社になります。<br /><br />
                                　まだまだ人を雇えるほど業績好調なわけではなく、私一人で何もかもしなければならない大変さがありますが、ゆくゆくは会社を大きくして志を同じくする同志たちと共に世の中で疲れ果てた方々のために役立つものや、一時でも苦しみを忘れてもらうためのコンテンツをリリースしていきたいと思っております‼<br /><br />
                                　当社のオリジナルコンテンツをもしリリースしましたら、是非ともご愛顧いただきますと幸いです。</span>
                                <div className="mt-3">
                                    <span className="float-right">代表 加藤　雅人</span>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 order-1 order-sm-1 order-md-2 my-auto">
                                <img className="rounded-circle introduce-character" src="img/corporate4.png" alt="leader" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default About;