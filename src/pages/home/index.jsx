import React, { useState } from "react";
import './index.css'

import { useNavigate } from "react-router-dom";

const Home = () => {
    const [postsOption, setPostsOption] = useState('friends')

    const navigate = useNavigate()
    const posts = [{
        username: 'Dio',
        profile_pic: 'https://criticalhits.com.br/wp-content/uploads/2022/01/Dio_Brando.png',
        post: 'kslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjkkslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjkkslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjkkslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjkv'
        , isPrivate: false,
        isUser: false,
        isFriend: false
    }, {
        username: 'user',
        profile_pic: 'https://pm1.narvii.com/8134/05481da521602f31f89f942eed3e6988263dda3cr1-500-500v2_00.jpg',
        post: 'kslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjkkslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjkkslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjkkslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjk'
        , isPrivate: true,
        isUser: true,
        isFriend: false
    }, {
        username: 'Amigo desbloqueado',
        profile_pic: 'https://criticalhits.com.br/wp-content/uploads/2022/01/Dio_Brando.png',
        post: 'kslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjkkslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjkkslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjkkslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjkkslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjkkslkaslkaklsnckasckmnsamxasklllllllllllllllllllllllllllllllllxkjcsajkxjk'
        , isPrivate: true,
        isUser: false,
        isFriend: true
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

        document.getElementById('other-users-modal').style.display = 'none'
        document.getElementById('close-otheruser-menu').style.display = 'none'
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
    function showOtherUserModal() {
        const userMenuModal = document.getElementById('other-users-modal')
        const closeMenu = document.getElementById('close-otheruser-menu')

        document.getElementById('user-menu').style.display = 'none'
        document.getElementById('close-menu').style.display = 'none'
        document.getElementById('home-left').style.display = 'none'
        document.getElementById('home-right').style.display = 'none'
        document.getElementById('footer').style.width = `60%`
        userMenuModal.style.display = 'flex'
        closeMenu.style.display = 'flex'

        closeDeleteModal()
        closeEditModal()
    }

    function closeOtherUserModal() {
        const userMenuModal = document.getElementById('other-users-modal')
        const closeMenu = document.getElementById('close-otheruser-menu')

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
            setPostsOption('all')
            footerImg.src = getImg(imgUrl, 'all.png')
        } else if (imgUrl[4] === 'all.png') {
            setPostsOption('friends')
            footerImg.src = getImg(imgUrl, 'friends.png')
        } else {
            setPostsOption('user')
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

    function logOut() {
        navigate('/')
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
                        posts.map(post => {
                            if (postsOption === 'all' && !post.isPrivate) {
                                return (
                                    <li className="home-post">
                                        <div className="home-post-header" onClick={() => showOtherUserModal()}>
                                            <img src={post.profile_pic} alt="" />
                                            <p>{post.username}</p>
                                        </div>

                                        <div className="home-post-text">
                                            <p>{post.post}</p>
                                        </div>
                                    </li>
                                )
                            }
                            if (postsOption === 'friends' && post.isFriend) {
                                return (
                                    <li className="home-post">
                                        <div className="home-post-header" onClick={() => showOtherUserModal()}>
                                            <img src={post.profile_pic} alt="" />
                                            <p>{post.username}</p>
                                        </div>

                                        <div className="home-post-text">
                                            <p>{post.post}</p>
                                        </div>
                                    </li>
                                )
                            }
                            if (postsOption === 'user' && post.isUser) {
                                return (
                                    <li className="home-post">
                                        <div className="home-post-header" onClick={() => showUserProfileModal()}>
                                            <img src={post.profile_pic} alt="" />
                                            <p>{post.username}</p>
                                        </div>

                                        <div className="home-post-text">
                                            <p>{post.post}</p>
                                        </div>
                                    </li>
                                )
                            }
                        })
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
                    <img src={process.env.PUBLIC_URL + 'images/log-out.png'} alt="" onClick={() => logOut()} />
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

            <div className="other-users-modal" id="other-users-modal">
                <p>Jollification</p>
                <div className="user-pic">
                    <img src="data:image/jpeg;base64,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" alt="" />
                </div>
                <div className="profile-stats">
                    <p>Username</p>
                    <p>1 friend</p>
                    <p>1 post</p>
                </div>
                <div className="be-friend" id="be-friend">
                    Be friend
                </div>
            </div>
            <div className="close-otheruser-menu" id="close-otheruser-menu" onClick={() => closeOtherUserModal()}>
                <img src={process.env.PUBLIC_URL + 'images/two-arrows.png'} alt="" />
            </div>
        </div>
    )
}

export default Home