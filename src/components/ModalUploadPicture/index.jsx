import React from 'react'
import MentionsTagsComponent from '../MentionsTagsComponent';
import { Col, Row, Modal, Input } from 'antd/es';


const ModalUploadPicture = ({ uploadModal, uploadPicture, description, updateMentions, updateHashtags, mentions, hashtags, setUploadModal, setDescription }) => {

    return (
        <Modal title="Upload a picture" okText="Upload" visible={uploadModal} onOk={uploadPicture} onCancel={() => setUploadModal(false)}>
            <Row type="flex" justify="center" className="input-container">
                <Col span={20}>
                    <b>Description:</b>
                    <Input id="description" title="Description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </Col>
            </Row>
            <MentionsTagsComponent type="mentions" value={mentions} title="Mention a user" setValue={updateMentions} />
            <MentionsTagsComponent type="tags" value={hashtags} title="Hashtags" setValue={updateHashtags} />
        </Modal>
    )
}


export default ModalUploadPicture;