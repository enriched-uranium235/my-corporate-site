import React from 'react';
import {Link} from 'react-router-dom';

function GlobalNav () {

    var AuthButtons = '';

    if (localStorage.getItem('auth_token')){
        AuthButtons = (
            <li className="list">
                <Link className="absolute" to="/stafflist">
                    <span className="icon"><ion-icon name="people-outline"></ion-icon></span>
                    <span className="nav-title">Staff Management/スタッフ管理</span>
                </Link>
            </li>
        );
    }

    return(
        <div className="outer-menu">
            <input className="checkbox-toggle" type="checkbox" />
            <div className="hamburger">
                <div></div>
            </div>
            <div className="menu">
                <div>
                    <div>
                        <ul>
                            <li className="list">
                            <Link className="absolute" to="/">
                                <span className="icon"><ion-icon name="desktop-outline"></ion-icon></span>
                                <span className="nav-title">Top/メインメニュー</span>
                            </Link>
                            </li>
                            <li className="list">
                            <Link className="absolute" to="/about">
                                <span className="icon"><ion-icon name="business-outline"></ion-icon></span>
                                <span className="nav-title">About/会社概要</span>
                            </Link>
                            </li>
                            <li className="list">
                            <Link className="absolute" to="/staff">
                                <span className="icon"><ion-icon name="people-outline"></ion-icon></span>
                                <span className="nav-title">Staff/スタッフリスト</span>
                            </Link>
                            </li>
                            <li className="list">
                            <Link className="absolute" to="/achievement">
                                <span className="icon"><ion-icon name="bar-chart-outline"></ion-icon></span>
                                <span className="nav-title">Achievement/実績</span>
                            </Link>
                            </li>
                            <li className="list">
                            <Link className="absolute" to="/activity">
                                <span className="icon"><ion-icon name="code-slash-outline"></ion-icon></span>
                                <span className="nav-title">Activity/活動内容</span>
                            </Link>
                            </li>
                            <li className="list">
                            <Link className="absolute" to="/creation">
                                <span className="icon"><ion-icon name="color-palette-outline"></ion-icon></span>
                                <span className="nav-title">Creation/作成物</span>
                            </Link>
                            </li>
                            <li className="list">
                            <Link className="absolute" to="/contact">
                                <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                                <span className="nav-title">Contact/お問い合わせ</span>
                            </Link>
                            </li>
                            {AuthButtons}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlobalNav;