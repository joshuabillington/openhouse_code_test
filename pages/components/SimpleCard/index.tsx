import React, { FunctionComponent, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

type CardProps = {
    img: string, 
    title: string, 
    homes: Array<any>, 
    id: String, 
}

const SimpleCard: FunctionComponent<CardProps> = ({img, title, homes, id}) => {
  const first = homes.indexOf(id)
  const last = homes.lastIndexOf(id)
  const all = homes.slice(first, last)
  

  for (var i = all.length - 1; i >= 0; i--) {
    if (all[i] === id) {
     all.splice(i, 1);
    }
   }
  const avgPrice = all.reduce((a, b) => a + b, 0)


    return (
    <Card className='simple-card'>
    <Card.Img variant="top" src={img} style={{borderRadius: '15px 15px 0 0', width: '500px', height: '350px', objectFit: 'cover' }} alt='image of' />
    <Card.Body>
    <Card.Title style={{fontSize: '1.5em', color: '#606060', fontWeight: '200'}}> {title} </Card.Title>
    <Card.Text style={{ color: '#606060', fontWeight: '600', fontSize: '2em'}}>
      Average Price: ${avgPrice}
    </Card.Text>
    </Card.Body>
    </Card>  

    )
}

export default SimpleCard
