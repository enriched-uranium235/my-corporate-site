import React, {useState, useEffect} from "react";
import swal from "sweetalert";
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';

function StaffEdit() {
    const history = useHistory();
    const [staff_data, staffDatas] = useState([])
    const id01 = useLocation().pathname;
    const id = id01.replace('/staffedit/', '')

    useEffect(() => {
        axios.get(`/api/staff_detail/${id}`).then(res => {
            staffDatas(res.data.data)
        })
    })

    const [StaffInput, setStaff] = useState({
        name: '',
        position: '',
        age: '',
        content: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setStaff({...StaffInput, [e.target.name]: e.target.value});
    }

    const staffSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: StaffInput.name,
            position: StaffInput.position,
            age: StaffInput.age,
            content: StaffInput.content,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`api/staff_edit/${id}`, data).then(res => {
                if(res.status === 200){
                    swal("スタッフの情報を更新しました。", res.data.message, "success");
                    history.push('/stafflist');
                    location.reload();
                } else if (res.status === 401){
                    swal("注意", res.data.message, "warning");
                } else {
                    setStaff({...StaffInput, error_list: res.data.validation_errors});
                }
            });
        });
    }

    return (<div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-6 mx-auto">
                    <div className="box">
                        <h2>StaffEdit</h2>
                        <form onSubmit={staffSubmit}>
                            <div className="inputBox mb-3">
                                <input type="text" name="name" onChange={handleInput} value={StaffInput.name} />
                                <label>Name:{staff_data.name}</label>
                                <span className="text-danger">{StaffInput.error_list.name}</span>
                            </div>
                            <div className="inputBox mb-3">
                                <input type="text" name="position" onChange={handleInput} value={StaffInput.position} />
                                <label>Position:{staff_data.position}</label>
                                <span className="text-danger">{StaffInput.error_list.position}</span>
                            </div>
                            <div className="inputBox mb-3">
                                <input type="number" name="age" onChange={handleInput} value={StaffInput.age} />
                                <label>Age:{staff_data.age}</label>
                                <span className="text-danger">{StaffInput.error_list.age}</span>
                            </div>
                            <div className="inputBox mb-3">
                                <input type="textbox" name="content" onChange={handleInput} value={StaffInput.content} />
                                <label>Content:{staff_data.content}</label>
                                <span className="text-danger">{StaffInput.error_list.content}</span>
                            </div>
                            <div className="form-group mb-3 text-center">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StaffEdit;