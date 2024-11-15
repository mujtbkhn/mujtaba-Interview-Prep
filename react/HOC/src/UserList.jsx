import React from "react";

const UserList = ({ data }) => {
    return (
        <>
            <ul>{data && data.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
        </>
    );
};
export default UserList;
