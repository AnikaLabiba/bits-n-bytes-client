import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import UserRow from './UserRow';
// import UserRow from './UserRow';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () =>
        fetch('https://safe-escarpment-45724.herokuapp.com/users', {
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
            <h2 className='text-2xl font-bold'>{users.length} users found</h2>
            <div className="overflow-x-auto">
                <table className="table lg:table md:table table-auto">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <UserRow
                            key={user._id}
                            index={index}
                            user={user}
                            refetch={refetch}
                        ></UserRow>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;