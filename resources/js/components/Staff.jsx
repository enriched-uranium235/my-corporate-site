import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Staff(){

    var list = [];

    const [staff_list, staffDatas] = useState([])

    useEffect(() => {
        axios.get(`/api/staff_list`).then(res => {
            staffDatas(res.data.data)
        })
    })

    for(var i in staff_list){
        list.push(<div className="mx-auto my-auto"><ul><li><h2>名前:{staff_list[i].name}</h2></li><li><h3>役職:{staff_list[i].position}</h3></li><li><h3>年齢:{staff_list[i].age}</h3></li><li><h4>自己紹介文:{staff_list[i].content}</h4></li></ul></div>)
    }

    return <div className="container">
        <section>
            <div className="row font-white">
                <div className="text-center mt-5">
                    <h1>スタッフリスト</h1>
                </div>
                <div className="col-md-6 col-lg-6 order-2 order-sm-2 order-md-1 p-5">
                    <div className="mx-auto my-auto">
                        <img className="staff-image" src="img/corporate1.png" alt="staff-introduce" />
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 order-1 order-sm-1 order-md-2 my-auto">{list}</div>
            </div>
        </section>
    </div>
}

export default Staff;