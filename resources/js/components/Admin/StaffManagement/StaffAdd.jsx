import React, { useState } from "react";
import swal from "sweetalert";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function StaffAdd() {
    const history = useHistory();

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
            axios.post(`api/staff_add`, data).then(res => {
                if(res.status === 200){
                    swal("スタッフの情報を追加しました。", res.data.message, "success");
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
                        <h2>StaffAdd</h2>
                        <form onSubmit={staffSubmit}>
                            <div className="inputBox mb-3">
                                <input type="text" name="name" required onChange={handleInput} value={StaffInput.name} />
                                <label>Name</label>
                                <span className="text-danger">{StaffInput.error_list.name}</span>
                            </div>
                            <div className="inputBox mb-3">
                                <input type="text" name="position" required onChange={handleInput} value={StaffInput.position} />
                                <label>Position</label>
                                <span className="text-danger">{StaffInput.error_list.position}</span>
                            </div>
                            <div className="inputBox mb-3">
                                <input type="number" name="age" required onChange={handleInput} value={StaffInput.age} />
                                <label>Age</label>
                                <span className="text-danger">{StaffInput.error_list.age}</span>
                            </div>
                            <div className="inputBox mb-3">
                                <input type="textarea" name="content" required onChange={handleInput} value={StaffInput.content} />
                                <label>Content</label>
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

export default StaffAdd;