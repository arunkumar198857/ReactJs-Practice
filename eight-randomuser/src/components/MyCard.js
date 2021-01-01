import React from 'react'
import {Card, CardBody, CardTitle, CardText} from 'reactstrap'
import {FaEnvelope, FaMapMarkedAlt, FaPhone} from 'react-icons/fa'

const MyCard = ({details}) => {
    return (
        <Card>
            <CardBody className="text-center">
                <img 
                    src={details.picture?.large} 
                    alt="#"
                    className="rounded-circle img-thumbnail border-danger"
                    width="150"
                    height="150" 
                />
                <CardTitle>
                    <h1 className="text-primary">
                        <span className="pr-2">{details.name?.title} </span>
                        <span>{details.name?.first} </span>
                        <span>{details.name?.last} </span>
                    </h1>
                </CardTitle>
                <CardText >
                    <FaEnvelope /> {details.email}
                    <br/>
                    <FaMapMarkedAlt /> {details.location?.state}
                    <br/>
                    <FaPhone /> {details.cell}
                    <br/>
                    <button className="btn btn-primary p-2 mt-2">Age: {details.dob?.age}</button>
                </CardText>
                
            </CardBody>
        </Card>
    )
}

export default MyCard;
