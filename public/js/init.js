particlesJS('js-particles',
  {
    "particles": {
      "number": {
        // シェイプの数
        "value": 200,
        "density": {
          "enable": true,
          // シェイプの密集度
          "value_area": 1200
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        // //シェイプの形（circle:丸、edge:四角、triangle:三角、polygon:多角形、star:星型、image:画像）
        "type": "circle",
        "stroke": {
           //シェイプの外線の太さ
          "width": 0,
          "color": "#ffffff"
        },
        //typeをpolygonにした時の設定
        "polygon": {
          "nb_sides": 5
        },
         //typeをimageにした時の設定
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        //シェイプの透明度
        "value": 0.7,
        //シェイプの透明度をランダムにするか否か
        "random": true,
        "anim": {
           //シェイプの透明度をアニメーションさせるか否か
          "enable": false,
          //アニメーションのスピード
          "speed": 10,
          //透明度の最小値
          "opacity_min": 0.1,
          //全てのシェイプを同時にアニメーションさせるか否か
          "sync": false
        }
      },
      "size": {
         //シェイプの大きさ
        "value": 5,
         //シェイプの大きさをランダムにするか否か
        "random": true,
        "anim": {
          //シェイプの大きさをアニメーションさせるか否か
          "enable": false,
          //アニメーションのスピード
          "speed": 40,
           //大きさの最小値
          "size_min": 0.1,
          //全てのシェイプを同時にアニメーションさせるか否か
          "sync": false
        }
      },
      "line_linked": {
         //線を表示するか否か
        "enable": true,
        //線をつなぐシェイプの間隔
        "distance": 175,
        //線の色
        "color": "#ffffff",
        //線の透明度
        "opacity": 0.4,
        //線の太さ
        "width": 1
      },
      "move": {
        //シェイプの動かすか
        "enable": true,
        //シェイプの動くスピード
        "speed": 10,
        //エリア全体の動き(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-leftより選択)
        "direction": "none",
        "random": false,
        //個々のシェイプの動きを止めるか否か
        "straight": false,
        //エリア外に出たシェイプの動き(out、bounceより選択)
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
         //マウスオーバーが有効か否か
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          //クリックが有効か否か
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      // 上記2つの処理詳細
      "modes": {
        "grab": {
          "distance": 200,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 200,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
);