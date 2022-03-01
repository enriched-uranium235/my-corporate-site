import React from 'react';
import YouTube from 'react-youtube';
import {Link} from 'react-router-dom';

const Activity = () => {
    const opts = {
        playerVars: {
            autoplay: 1,
        }
    }

    return <div className="container">
        <section>
            <div className="row font-white">
                <div className="col-md-10 col-lg-10 mx-auto">
                    <div className="text-center mt-5">
                        <h1>弊社の活動内容</h1>
                    </div>
                    <span className="mt-5">　弊社では、ITの世界をより身近なものに感じていただくためにもYouTubeにて弊社のイメージキャラの3Dモデルを用いたVtuber活動をしております。<br /><br />
                    　内容は、プログラミング的な思考力はもちろん、主要な言語を用いたプログラミングの文法やシステムの設計方法等、様々です。<br /><br />
                    　また、実際にAIを使ってどんなことができるかをわかりやすくお伝えするためにもウマ娘のウィニングライブを物体検知のAIで処理してAIがウマ娘をどんなふうに認識するかを試して遊ぶ動画なんかも投稿しております。<br /><br />
                    　今後も手すきの時に面白いアイディアが浮かび次第動画を投稿しますので是非ご覧いただければと思います。</span>
                    <div className="text-center mt-5">
                        <h1>投稿した動画</h1>
                        <div className="row">
                            <div className="col-lg-6 mx-auto my-auto">
                                <section className="video-section">
                                    <div className="video-box">
                                        <div className="back-div">
                                            <span><YouTube videoId="FT4LtI9ptEI" className="youtube" opts={opts} /></span>
                                            <span><YouTube videoId="FT4LtI9ptEI" className="youtube" opts={opts} /></span>
                                            <span><YouTube videoId="FT4LtI9ptEI" className="youtube" opts={opts} /></span>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-lg-6 mx-auto my-auto">
                                <Link to="https://youtu.be/FT4LtI9ptEI">
                                    <h4>ウマ娘のウィニングライブをAIで処理して遊んだ結果</h4>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default Activity;