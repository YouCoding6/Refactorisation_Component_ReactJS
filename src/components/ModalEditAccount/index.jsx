import React from 'react'
import { Col, Row, Modal, Input } from 'antd/es';


const ModalEditAccount = ({ editProfilModal, updateProfile, setEditProfilModal, setEmail, email, setFirstname, firstname, setLastname, lastname, phoneNumber, setPhoneNumber }) => {
    return (
        <Modal title="Edit your account" okText="Update" visible={editProfilModal} onOk={updateProfile} onCancel={() => setEditProfilModal(false)}>
            <b>EMail</b>
            <Row type="flex" justify="center" className="input-container">
                <Col span={20}>
                    <Input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Col>
            </Row>
            <Row type="flex" justify="center" className="input-container">
                <Col span={20}>
                    <b>Firstname</b>
                    <Input id="firstname" type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                </Col>
            </Row>
            <Row type="flex" justify="center" className="input-container">
                <Col span={20}>
                    <b>Lastname</b>
                    <Input id="lastname" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                </Col>
            </Row>
            <Row type="flex" justify="center" className="input-container">
                <Col span={20}>
                    <b>Phone number</b>
                    <Input id="email" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </Col>
            </Row>
        </Modal>
    )
}

export default ModalEditAccount;