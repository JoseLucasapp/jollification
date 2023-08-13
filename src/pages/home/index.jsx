import React from "react";
import './index.css'

const Home = () => {
    const posts = [{
        username: 'user',
        profile_pic: 'https://criticalhits.com.br/wp-content/uploads/2022/01/Dio_Brando.png',
        post: 'kslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjkkslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjkkslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjkkslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjkv'
    }, {
        username: 'user',
        profile_pic: 'https://pm1.narvii.com/8134/05481da521602f31f89f942eed3e6988263dda3cr1-500-500v2_00.jpg',
        post: 'kslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjkkslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjkkslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjkkslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjk'
    }, {
        username: 'user',
        profile_pic: 'https://criticalhits.com.br/wp-content/uploads/2022/01/Dio_Brando.png',
        post: 'kslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjkkslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjkkslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjkkslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjkkslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjkkslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjk'
    }]

    const users = [
        {
            username: 'user',
            profile_pic: 'https://criticalhits.com.br/wp-content/uploads/2022/01/Dio_Brando.png',
        },
        {
            username: 'user',
            profile_pic: 'https://criticalhits.com.br/wp-content/uploads/2022/01/Dio_Brando.png',
        },
        {
            username: 'user',
            profile_pic: 'https://criticalhits.com.br/wp-content/uploads/2022/01/Dio_Brando.png',
        },
        {
            username: 'user',
            profile_pic: 'https://criticalhits.com.br/wp-content/uploads/2022/01/Dio_Brando.png',
        },
        {
            username: 'user',
            profile_pic: 'https://criticalhits.com.br/wp-content/uploads/2022/01/Dio_Brando.png',
        },
        {
            username: 'user',
            profile_pic: 'https://criticalhits.com.br/wp-content/uploads/2022/01/Dio_Brando.png',
        },]

    let display = 'none'

    function showUserProfileModal() {
        const userMenuModal = document.getElementById('user-menu')
        const closeMenu = document.getElementById('close-menu')

        document.getElementById('home-left').style.display = 'none'
        document.getElementById('home-right').style.display = 'none'
        document.getElementById('footer').style.width = `60%`
        userMenuModal.style.display = 'flex'
        closeMenu.style.display = 'flex'

        closeDeleteModal()
        closeEditModal()
    }

    function hideUserProfileModal() {
        const userMenuModal = document.getElementById('user-menu')
        const closeMenu = document.getElementById('close-menu')

        document.getElementById('home-left').style.display = 'flex'
        document.getElementById('home-right').style.display = 'flex'
        document.getElementById('footer').style.width = `100%`
        userMenuModal.style.display = 'none'
        closeMenu.style.display = 'none'
    }

    function toPrivate() {
        const profilePrivacy = document.getElementById('profile-privacy')
        const privacyImg = document.getElementById('privacy-img')
        const imgUrl = (privacyImg.src).split('/')

        if (imgUrl[4] === 'padlock.png') {
            profilePrivacy.style.justifyContent = 'end'
            profilePrivacy.style.backgroundColor = 'green'
            privacyImg.src = getImg(imgUrl, 'unlock.png')
        } else {
            profilePrivacy.style.justifyContent = 'start'
            profilePrivacy.style.backgroundColor = 'red'
            privacyImg.src = getImg(imgUrl, 'padlock.png')
        }

        function getImg(array, newImg) {
            array.pop()
            array[1] = '/'
            array.push(newImg)
            return array.join('/')
        }
    }

    function toFriends() {
        const footerImg = document.getElementById('footer-img')
        const imgUrl = (footerImg.src).split('/')

        if (imgUrl[4] === 'user.png') {
            footerImg.src = getImg(imgUrl, 'all.png')
        } else if (imgUrl[4] === 'all.png') {
            footerImg.src = getImg(imgUrl, 'friends.png')
        } else {
            footerImg.src = getImg(imgUrl, 'user.png')
        }

        function getImg(array, newImg) {
            array.pop()
            array[1] = '/'
            array.push(newImg)
            return array.join('/')
        }
    }

    function closeEditModal() {
        const editProfile = document.getElementById('edit-profile-main')

        editProfile.style.display = 'none'
    }

    function openEditModal() {
        const editProfile = document.getElementById('edit-profile-main')

        editProfile.style.display = 'flex'
        hideUserProfileModal()
    }
    function closeDeleteModal() {
        const deleteProfile = document.getElementById('delete-profile-main')

        deleteProfile.style.display = 'none'
    }

    function openDeleteModal() {
        const deleteProfile = document.getElementById('delete-profile-main')

        deleteProfile.style.display = 'flex'
        hideUserProfileModal()
    }
    function closeFriendsModal() {
        const friendsModal = document.getElementById('friends-modal')

        friendsModal.style.display = 'none'
    }

    function openFriendsModal() {
        const friendsModal = document.getElementById('friends-modal')

        friendsModal.style.display = 'flex'
        hideUserProfileModal()
    }

    return (
        <div className="home-main">
            <div className="home-left" id="home-left">
                <div className="home-logo">
                    <img src={process.env.PUBLIC_URL + 'images/logomain.png'} alt="" />
                </div>
            </div>
            <div className="home-middle">
                <ul>
                    {
                        posts.map(post => (
                            <li className="home-post">
                                <div className="home-post-header">
                                    <img src={post.profile_pic} alt="" />
                                    <p>{post.username}</p>
                                </div>

                                <div className="home-post-text">
                                    <p>{post.post}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="home-right" id="home-right">
                <div className="home-user-menu" onClick={() => showUserProfileModal()}>
                    <img src={process.env.PUBLIC_URL + 'images/group4.png'} alt="" />
                </div>
            </div>

            <div className="user-menu" id="user-menu">
                <p>Jollification</p>
                <div className="user-pic">
                    <img src="https://tm.ibxk.com.br/2022/12/15/15135939320320.jpg?ims=1200x675" alt="" />
                </div>
                <div className="options-icons">
                    <img src={process.env.PUBLIC_URL + 'images/edit.png'} alt="" onClick={() => openEditModal()} />
                    <img src={process.env.PUBLIC_URL + 'images/delete.png'} alt="" onClick={() => openDeleteModal()} />
                    <img src={process.env.PUBLIC_URL + 'images/log-out.png'} alt="" />
                </div>
                <div className="profile-stats">
                    <p>Username</p>
                    <p onClick={() => openFriendsModal()}>1 friend</p>
                    <p>1 post</p>
                    <p>1 like</p>
                </div>
                <div className="profile-privacy" id="profile-privacy" onClick={() => toPrivate()}>
                    <div className="privacy-btn">
                        <img id="privacy-img" src={process.env.PUBLIC_URL + 'images/padlock.png'} alt="" />
                    </div>
                </div>
            </div>

            <div className="close-user-menu" id="close-menu" onClick={() => hideUserProfileModal()}>
                <img src={process.env.PUBLIC_URL + 'images/two-arrows.png'} alt="" />
            </div>

            <div className="footer" id="footer">
                <img id="footer-img" src={process.env.PUBLIC_URL + 'images/friends.png'} alt="" onClick={() => toFriends()} />
            </div>

            <div className="edit-profile-main" id="edit-profile-main" style={{ display: display }}>
                <div className="close" onClick={() => closeEditModal()}>X</div>
                <input type="text" name="profilePic" id="profilePic" placeholder="Profile pic" />
                <input type="text" name="username" id="username" placeholder="Username" />
                <input type="password" name="pass" id="pass" placeholder="Password" />
                <input type="password" name="newPass" id="newPass" placeholder="New password" />
                <button>Edit</button>
            </div>

            <div className="delete-account-main" id="delete-profile-main">
                <div className="close" onClick={() => closeDeleteModal()}>X</div>
                <p>Delete account?</p>
                <div className="delete-account-buttons">

                    <button>YES</button>
                    <button>NO</button>
                </div>
            </div>

            <div className="friends-modal" id="friends-modal">
                <div className="close" onClick={() => closeFriendsModal()}>X</div>
                <ul className="friends-list">
                    {
                        users.map(post => (
                            <li>
                                <div>
                                    <img src={post.profile_pic} alt="" />
                                    <p>{post.username}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Home