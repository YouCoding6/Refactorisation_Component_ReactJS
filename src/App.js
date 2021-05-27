// Kata written by Matthieu BRAULT for the next-react formation from TheHackingProject
import React, { useState } from 'react';
import { Col, Row, message } from 'antd/es';
import profileData from './data.js';
import DisplayCards from './components/DisplayCards';
import HeaderCard from './components/HeaderCard';
import ModalBodyCards from './components/ModalBodyCards';
import ModalUploadPicture from './components/ModalUploadPicture';
import ModalEditAccount from './components/ModalEditAccount/index.jsx';

const App = () => {
  const [editProfilModal, setEditProfilModal] = useState(false);
  // const [editPublicationModal, setEditPublicationModal] = useState(false);
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

  const formatDate = (date) => {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
  }

  const openPreview = (postNumber) => {

    setPreviewItem(postNumber);
    setPreviewPublicationModal(true);
  }

  const updatePic = () => {
    alert("J'update la publcation avec l'id : " + profileDt.posts[previewItem].id);
  }

  const deletePic = () => {
    alert("Je supprime la publcation avec l'id : " + profileDt.posts[previewItem].id);
  }

  const uploadPicture = () => {
    alert("J'upload une image avec la description : " + description + " et les hashtags " + hashtags + " et les mentions " + mentions);
  }

  const updateMentions = (value) => {
    setMentions(value);
  }

  const updateHashtags = (value) => {
    setHashtags(value)
  }

  const updateProfile = () => {
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
      <ModalBodyCards previewPublicationModal={previewPublicationModal} updatePic={updatePic} setPreviewPublicationModal={setPreviewPublicationModal} deletePic={deletePic} profileDt={profileDt} previewItem={previewItem} />
      <ModalUploadPicture uploadModal={uploadModal} uploadPicture={uploadPicture} description={description} updateMentions={updateMentions} updateHashtags={updateHashtags} mentions={mentions} hashtags={hashtags} setUploadModal={setUploadModal} setDescription={setDescription} />
      <ModalEditAccount editProfilModal={editProfilModal} updateProfile={updateProfile} setEditProfilModal={setEditProfilModal} setEmail={setEmail} email={email} setFirstname={setFirstname} firstname={firstname} setLastname={setLastname} lastname={lastname} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
      <Row type="flex" align="middle" justify="center">
        <Col sm={16} xs={24}>
          <HeaderCard profileDt={profileDt} setEditProfilModal={setEditProfilModal} setUploadModal={setUploadModal} formatDate={formatDate} />
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col sm={18} xs={24}>
          <Col span={24} className="container text-center">
            <DisplayCards profileData={profileDt} openPreview={openPreview} />
          </Col>
        </Col>
      </Row>
    </div>
  )

}

export default App;
