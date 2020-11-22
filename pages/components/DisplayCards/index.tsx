import SimpleCard from '../SimpleCard'; 
import React, { FunctionComponent } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { useState } from 'react'

type DisplayCardsProps = {
    communities: Array<any>,
    homes: Array<any>
}

const DisplayCards: FunctionComponent<DisplayCardsProps>  = ({communities, homes}) => {
    

    return (
        <div>
            <Container>
                <Row>
        {communities && communities.map(community => (
            <Col md={24} lg={6}>
                <SimpleCard img={community.imgUrl} title={community.name} homes={homes} id={community.id} />
            </Col>
        ))}
                </Row>
            </Container>
        </div>
    )
}

export default DisplayCards; 