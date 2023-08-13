import React from "react";
import './index.css'

const EditProfileModal = ({ display = 'none' }) => {

    function closeEditModal() {
        const editProfile = document.getElementById('edit-profile-main')

        editProfile.style.display = 'none'
    }

    function openModal() {
        const editProfile = document.getElementById('edit-profile-main')

        editProfile.style.display = 'flex'
    }

    return (
        <div className="edit-profile-main" id="edit-profile-main" style={{ display: display }}>
            <div className="close" onClick={() => closeEditModal()}>X</div>
            <input type="text" name="profilePic" id="profilePic" placeholder="Profile pic" />
            <input type="text" name="username" id="username" placeholder="Username" />
            <input type="password" name="pass" id="pass" placeholder="Password" />
            <input type="password" name="newPass" id="newPass" placeholder="New password" />
            <button>Edit</button>
        </div>
    )
}

export default EditProfileModal