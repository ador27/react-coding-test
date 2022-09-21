import React from 'react';
import { useState } from 'react';
import Modal from './../components/Modal';

const Problem2 = () => {

    const [modalOpen, setModalOpen] = useState(false);

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary openModalBtn" onClick={() => {
                        setModalOpen(true);
                    }}
                    >All Contacts</button>
                    {modalOpen && <Modal setModalOpen={setModalOpen} />}
                    <button className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>

            </div>
        </div>
    );
};

export default Problem2;