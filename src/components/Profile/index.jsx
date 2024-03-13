import { useState } from "react";
import { FaShare, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import avatar from '/images/avatar-michelle.jpg'

import './Profile.scss'

const Profile = () => {

    const [socialMedias, setSocialMedias] = useState(false)

    return (
        <div className="profile__social_media">
            <div className="profile">
                <img className="profile__avatar" src={avatar} alt="Profile Avatar"/>
                <div>
                    <p className="profile__name">Michelle Appleton</p>
                    <p className="profile__post_date">28 Jun 2020</p>
                </div>
                {!socialMedias?
                <div className="profile__share" 
                    onClick={()=>{setSocialMedias(!socialMedias)}}
                    >
                    <FaShare className="profile__share-icon" />
                </div>
                :
                <div className="profile__share--opened" 
                    onClick={()=>{setSocialMedias(!socialMedias)}}
                    >
                    <FaShare className="profile__share-icon--opened" />
                </div>
                }
                
            </div>
            {socialMedias?
            <div className="social_media">
                <p className="social_media__share">Share</p>
                <FaFacebookSquare className="social_media__icon"/>
                <FaTwitter className="social_media__icon"/>
                <FaPinterest className="social_media__icon"/>
            </div>
            :
            <></>

            }
        </div>
    )
}

export default Profile