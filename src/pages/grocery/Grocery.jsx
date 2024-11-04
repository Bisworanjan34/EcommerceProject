import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

const Grocery = () => {
  const [grocery, setGrocery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/grocery_products')
    .then((res) => {
      setGrocery(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h2>grocery Component</h2>
      <div className='show-card w-100 d-flex flex-wrap justify-content-around pt-4'>
        {grocery.length > 0 ? (
          grocery.map((ele,i) => (
            <div key={i}>
              <Card style={{ width: '18rem' }} className='mb-3'>
                <Card.Img variant="top" src={ele.image} width={200} height={180} />
                <Card.Body>
                  <Card.Title>{ele.title}</Card.Title>
                  {/* <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          // Render placeholder cards when there's no data
          Array(40).fill(0).map((_, index) => (
            <div key={index}>
              <Card style={{ width: '18rem' }} className='mb-3'>
                <Card.Img variant="top" as={Placeholder} />
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} />
                    <Placeholder xs={4} />
                    <Placeholder xs={4} />
                    <Placeholder xs={6} />
                    <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Grocery;

