import React from 'react';
import { Card, Icon } from 'antd/es';

const DisplayCards = ({ profileData, openPreview }) => {

    return (
        <div>
            <h2>
                <Icon type="save" />
                <span className="span-icon">Publications</span>
            </h2>
            <Card bordered className="card-pubs" onClick={() => openPreview(0)}>
                <img src={profileData.posts[0].imageUrl} width={200} height={200} alt={profileData.posts[0].imageUrl} />
            </Card>
            <Card bordered className="card-pubs" onClick={() => openPreview(1)}>
                <img src={profileData.posts[1].imageUrl} width={200} height={200} alt={profileData.posts[1].imageUrl} />
            </Card>
            <Card bordered className="card-pubs" onClick={() => openPreview(2)}>
                <img src={profileData.posts[2].imageUrl} width={200} height={200} alt={profileData.posts[2].imageUrl} />
            </Card>
        </div>
    )
}


export default DisplayCards;