import React, { useState } from 'react';
import { useEffect } from 'react';

const Problem1 = () => {

    const [show, setShow] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/detail')
            .then(res => res.json())
            .then(data => setShow(data));
    }, [])

    const handleClick = (val) => {
        setShow(val);
    }

    let contacts = []

    const submit = e => {
        console.log(e);
        const name = e.target.name.value;
        const status = e.target.status.value;
        const newContacts = {
            name: name,
            status: status
        }
        contacts.push(newContacts)
        console.log(contacts);
        e.preventDefault();

        fetch('http://localhost:5000/detail', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newContacts)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('New Status added successfully!!!');
                event.target.reset();
            })
    }


    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={submit} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" name='name' className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-auto">
                            <input type="text" name='status' className="form-control" placeholder="Status" />
                        </div>
                        <div className="col-auto">
                            <button type='submit' className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Serial</th>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                show.map((details, index) => <tr>
                                    <th>{index + 1}</th>
                                    <td>{details.name}</td>
                                    <td>{details.status}</td>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;