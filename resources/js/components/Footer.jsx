import axios from 'axios';
import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import swal from 'sweetalert';

function Footer () {

    const history = useHistory();

    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post(`/api/logout`).then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token', res.data.token);
                localStorage.removeItem('auth_name', res.data.username);
                swal("ログアウトしました", res.data.message, "success");
                history.push('/');
                location.reload();
            } 
        });
    }

    var AuthButtons = '';
    if (!localStorage.getItem('auth_token')){
        AuthButtons = (
            <ul className="inline mt-5">
                <li>
                    <Link to="/login">
                        <span className="footer-icon"><ion-icon name="lock-open-outline"></ion-icon></span>
                        <span className="text-white">管理者としてログイン</span>
                    </Link>
                </li>
            </ul>
        );
    } else {
        AuthButtons = (
            <ul className="inline mt-5">
                <li>
                    <div onClick={logoutSubmit}>
                        <span className="footer-icon"><ion-icon name="log-out-outline"></ion-icon></span>
                        <span className="text-white">ログアウト</span>
                    </div>
                </li>
            </ul>
        );
    }

    return(
        <footer>
            <article id="wrap">
                <div className="text-center">
                    <p className="font-white mt-5">&copy; Concilium Societatis.2022.</p>
                    <ul className="inline mt-5">
                        <li className="list">
                        <Link className="absolute" to="/">
                            <span className="footer-icon"><ion-icon name="desktop-outline"></ion-icon></span>
                        </Link>
                        </li>
                        <li className="list">
                        <Link className="absolute" to="/about">
                            <span className="footer-icon"><ion-icon name="business-outline"></ion-icon></span>
                        </Link>
                        </li>
                        <li className="list">
                        <Link className="absolute" to="/staff">
                            <span className="footer-icon"><ion-icon name="people-outline"></ion-icon></span>
                        </Link>
                        </li>
                        <li className="list">
                        <Link className="absolute" to="/achievement">
                            <span className="footer-icon"><ion-icon name="bar-chart-outline"></ion-icon></span>
                        </Link>
                        </li>
                        <li className="list">
                        <Link className="absolute" to="/activity">
                            <span className="footer-icon"><ion-icon name="code-slash-outline"></ion-icon></span>
                        </Link>
                        </li>
                        <li className="list">
                        <Link className="absolute" to="/creation">
                            <span className="footer-icon"><ion-icon name="color-palette-outline"></ion-icon></span>
                        </Link>
                        </li>
                        <li className="list">
                        <Link className="absolute" to="/contact">
                            <span className="footer-icon"><ion-icon name="mail-outline"></ion-icon></span>
                        </Link>
                        </li>
                    </ul>
                    <ul className="inline mt-5">
                        <li>
                            <Link className="twitter-share-button" to="https://twitter.com/share">
                                Tweet
                            </Link>
                        </li>
                        <li>
                            <div className="fb-share-button v-top" 
                            data-layout="button_count">
                            </div>
                        </li>
                    </ul>
                    {AuthButtons}
                </div>
                <article id="lightings">
                    <section id="one">
                        <section id="two">
                            <section id="three">
                                <section id="four">
                                    <section id="five">
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </article>
            </article>
        </footer>
    )
}

export default Footer;