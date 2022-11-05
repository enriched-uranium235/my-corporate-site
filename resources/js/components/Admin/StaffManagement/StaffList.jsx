import React, {useState, useEffect} from 'react';
import axios from 'axios';

function StaffList(){

    var list = [];

    const [staff_list, staffDatas] = useState([])

    useEffect(() => {
        axios.get(`/api/staff_list`).then(res => {
            staffDatas(res.data.data)
        })
    })

    for(var i in staff_list){
        var url = "/staffdetail/"+staff_list[i].id;
        list.push(<tr className="link" data-url={url}><td>{staff_list[i].name}</td><td>{staff_list[i].position}</td><td>{staff_list[i].age}</td><td>{staff_list[i].content}</td><td><a className="btn btn-primary" href={url}>編集</a></td></tr>)
    }

    return <div className="container">
        <section>
            <div className="row font-white">
                <div className="col-md-10 col-lg-10 mx-auto">
                    <div className="text-center mt-5">
                        <h1>スタッフリスト</h1>
                    </div>
                    <table className="table font-white mt-5">
                        <thead>
                            <tr>
                                <th>名前</th>
                                <th>役職</th>
                                <th>年齢</th>
                                <th>自己紹介文</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {list}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>
}

export default StaffList;