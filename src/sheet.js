// Kata written by Matthieu BRAULT for the next-react formation from TheHackingProject
import React, { Component, useState } from 'react';
import { Avatar, Button, Card, Col, Icon, Row, Modal, List, Tag, Input, message } from 'antd/es';
import MentionsTagsComponent from './MentionsTagsComponent';
import profileData from './data.js'

const App = () => {

  const [editProfilModal, setEditProfilModal] = useState(false);
  const [editPublicationModal, setEditPublicationModal] = useState(false);
  const [previewPublicationModal, setPreviewPublicationModal] = useState(false);
  const [previewItem, setPreviewItem] = useState(0);
  const [uploadModal, setUploadModal] = useState(false);
  const [description, setDescription] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [mentions, setMentions] = useState("");
  const [email, setEmail] = useState("myprofile@thp.fr");
  const [phoneNumber, setPhoneNumber] = useState("0601020304");
  const [firstname, setFirstname] = useState("TheHacking");
  const [lastname, setLastname] = useState("Project");
  const [profileDt, setProfileData] = useState(profileData)


  formatDate = (date) => {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
  }

  openPreview = (postNumber) => {

    setPreviewItem(postNumber);
    setPreviewPublicationModal(true);
  }

  updatePic = () => {
    alert("J'update la publcation avec l'id : " + profileDt.posts[previewItem].id);
  }

  deletePic = () => {
    alert("Je supprime la publcation avec l'id : " + profileDt.posts[previewItem].id);
  }

  uploadPicture = () => {
    alert("J'upload une image avec la description : " + description + " et les hashtags " + hashtags + " et les mentions " + mentions);
  }

  updateMentions = (value) => {
    setMentions(value);
  }

  updateHashtags = (value) => {
    setHashtags(value)
  }

  updateProfile = () => {
    let tmp = profileDt;
    tmp.email = email;
    tmp.firstname = firstname;
    tmp.lastname = lastname;
    tmp.phoneNumber = phoneNumber;
    setProfileData(tmp);
    setEditProfilModal(false);
    message.success('Profile well updated', 3);
  }

  return (
    <div style={{ margin: 50 }}>
      <Modal width={520} visible={this.state.previewPublicationModal} onCancel={() => this.setState({ previewPublicationModal: false })}
        footer={<Row type="flex">
          <Col span={12} className="text-center">
            <Button type="ghost" icon="edit" onClick={this.updatePic}>Edit</Button>
          </Col>
          <Col span={12} className="text-center">
            <Button type="danger" icon="delete" onClick={this.deletePic}>Delete</Button>
          </Col>
        </Row>}
      >
        <Row type="flex" align="middle">
          <Col xs={24} md={50} className="text-center">
            <img src={this.state.profileData.posts[this.state.previewItem].imageUrl} width={200} height={200} alt={this.state.profileData.posts[this.state.previewItem].description} />
          </Col>
          <Col xs={24} md={12}>
            <div>
              <b>Description: </b>
              <p>{this.state.profileData.posts[this.state.previewItem].description}</p>
            </div>
            <div>
              <b>Hashtag:</b>
              <List
                grid={{ gutter: 16, column: 2 }}
                dataSource={this.state.profileData.posts[this.state.previewItem].hashtags}
                renderItem={(tag) => (
                  <List.Item>
                    <Tag>{`${tag}`}</Tag>
                  </List.Item>
                )}
              />
            </div>
            <div>
              <b>Mention:</b>
              <List
                grid={{ gutter: 16, column: 2 }}
                dataSource={this.state.profileData.posts[this.state.previewItem].mentions}
                renderItem={(user) => (
                  <List.Item>
                    <Tag>{`@${user}`}</Tag>
                  </List.Item>
                )}
              />
            </div>
          </Col>
        </Row>
      </Modal>
      <Modal title="Upload a picture" okText="Upload" visible={this.state.uploadModal} onOk={this.uploadPicture} onCancel={() => this.setState({ uploadModal: false })}>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>Description:</b>
            <Input id="description" title="Description" type="text" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} />
          </Col>
        </Row>
        <MentionsTagsComponent type="mentions" value={this.state.mentions} title="Mention a user" setValue={this.updateMentions} />
        <MentionsTagsComponent type="tags" value={this.state.hashtags} title="Hashtags" setValue={this.updateHashtags} />
      </Modal>
      <Modal title="Edit your account" okText="Update" visible={this.state.editProfilModal} onOk={this.updateProfile} onCancel={() => this.setState({ editProfilModal: false })}>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>EMail</b>
            <Input id="email" type="text" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
          </Col>
        </Row>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>Firstname</b>
            <Input id="firstname" type="text" value={this.state.firstname} onChange={(e) => this.setState({ firstname: e.target.value })} />
          </Col>
        </Row>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>Lastname</b>
            <Input id="lastname" type="text" value={this.state.lastname} onChange={(e) => this.setState({ lastname: e.target.value })} />
          </Col>
        </Row>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>Phone number</b>
            <Input id="email" type="text" value={this.state.phoneNumber} onChange={(e) => this.setState({ phoneNumber: e.target.value })} />
          </Col>
        </Row>
      </Modal>
      <Row type="flex" align="middle" justify="center">
        <Col sm={16} xs={24}>
          <Card bordered>
            <Row type="flex" align="middle" justify="center">
              <Col md={14} sm={16} xs={24}>
                <Row type="flex" justify="space-between">
                  <Col span={10} className="text-center">
                    <Avatar size={100} icon="user" className="profil-pic" src={this.state.profileData.profilePicture} />
                    <h3>{`${this.state.profileData.firstname} ${this.state.profileData.lastname}`}</h3>
                  </Col>
                  <Col span={10}>
                    <p>
                      <Icon type="user" className="p-icon" />
                      {this.state.profileData.username}
                    </p>
                    <p>
                      <Icon type="mail" className="p-icon" />
                      {this.state.profileData.email}
                    </p>
                    <p>
                      <Icon type="phone" className="p-icon" />
                      {this.state.profileData.phoneNumber}
                    </p>
                    <p>
                      <Icon type="calendar" className="p-icon" />
                      {this.formatDate(this.state.profileData.createdAt)}
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col md={10} sm={16} xs={24} className="text-center">
                <Button type="ghost" icon="setting" onClick={() => this.setState({ editProfilModal: true })}>Edit account</Button>
                <br />
                <br />
                <Button type="ghost" icon="upload" onClick={() => this.setState({ uploadModal: true })}>Upload a picture</Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col sm={18} xs={24}>
          <Col span={24} className="container text-center">
            <h2>
              <Icon type="save" />
              <span className="span-icon">Publications</span>
            </h2>
            <Card bordered className="card-pubs" onClick={() => this.openPreview(0)}>
              <img src={this.state.profileData.posts[0].imageUrl} width={200} height={200} alt={this.state.profileData.posts[0].imageUrl} />
            </Card>
            <Card bordered className="card-pubs" onClick={() => this.openPreview(1)}>
              <img src={this.state.profileData.posts[1].imageUrl} width={200} height={200} alt={this.state.profileData.posts[1].imageUrl} />
            </Card>
            <Card bordered className="card-pubs" onClick={() => this.openPreview(2)}>
              <img src={this.state.profileData.posts[2].imageUrl} width={200} height={200} alt={this.state.profileData.posts[2].imageUrl} />
            </Card>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default App;
