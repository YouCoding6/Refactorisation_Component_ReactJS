import React from 'react';
import { Avatar, Button, Card, Col, Icon, Row } from 'antd/es';




const HeaderCard = ({ profileDt, setEditProfilModal, setUploadModal, formatDate }) => {

    return (
        <div>
            <Card bordered>
                <Row type="flex" align="middle" justify="center">
                    <Col md={14} sm={16} xs={24}>
                        <Row type="flex" justify="space-between">
                            <Col span={10} className="text-center">
                                <Avatar size={100} icon="user" className="profil-pic" src={profileDt.profilePicture} />
                                <h3>{`${profileDt.firstname} ${profileDt.lastname}`}</h3>
                            </Col>
                            <Col span={10}>
                                <p>
                                    <Icon type="user" className="p-icon" />
                                    {profileDt.username}
                                </p>
                                <p>
                                    <Icon type="mail" className="p-icon" />
                                    {profileDt.email}
                                </p>
                                <p>
                                    <Icon type="phone" className="p-icon" />
                                    {profileDt.phoneNumber}
                                </p>
                                <p>
                                    <Icon type="calendar" className="p-icon" />
                                    {formatDate(profileDt.createdAt)}
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={10} sm={16} xs={24} className="text-center">
                        <Button type="ghost" icon="setting" onClick={() => setEditProfilModal(true)}>Edit account</Button>
                        <br />
                        <br />
                        <Button type="ghost" icon="upload" onClick={() => setUploadModal(true)}>Upload a picture</Button>
                    </Col>
                </Row>
            </Card>
        </div>
    )
};


export default HeaderCard;