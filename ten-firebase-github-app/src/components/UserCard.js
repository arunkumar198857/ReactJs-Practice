import React from 'react'
import {Card, CardBody} from 'reactstrap'

const UserCard = ({user}) => {
    return (
        <Card className="text-center mt-3 mb-4">
            <img src={user.avatar_url} className="img-thumbail"/>
            <CardBody>
               <div className="text-primary">{user.name}</div> 
               <div className="text-primary">{user.location}</div> 
               <div className="text-primary">{user.bio}</div> 
               <div className="text-INFO">Avalaible for hire: {user.hireable ? 'Yes' : 'NO'}</div> 
               <div className="text-INFO">Followers: {user.followers}</div> 
            </CardBody>
        </Card>
    )
}

export default UserCard;