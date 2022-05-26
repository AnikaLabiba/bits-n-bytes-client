import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import SetProfileModal from './SetProfileModal';

const MyProfile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [user] = useAuthState(auth)
    const email = user?.email
    const { data: userInfo, isLoading, refetch } = useQuery('user', () =>
        fetch(`http://localhost:5000/user?email=${email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl text-accent font-bold mt-3 text-center'>My Profile</h2>
            <div class="card lg:w-96 md:w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-xl text-center font-bold">{user.displayName}</h2>
                    <p className='text-lg text-center'>Email: {userInfo.email}</p>
                    <label onClick={() => setIsModalOpen(true)} for="profileModal" class="btn modal-button btn-sm btn-accent">Edit Profile</label>
                </div>
            </div>
            {
                isModalOpen && <SetProfileModal
                    setIsModalOpen={setIsModalOpen}
                    name={user.displayName}
                    email={userInfo.email}
                    id={userInfo._id}
                    userInfo={userInfo}
                ></SetProfileModal>
            }
        </div>
    );
};

export default MyProfile;