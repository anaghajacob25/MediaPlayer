import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {

  const navigate=useNavigate()
  return (
   <>
     <Row className='mb-3 d-flex justify-content-center align-items-center mt-3'>
      <Col lg={1}></Col>
      <Col lg={5}>
        <h3>Welcome to <span className='text-warning'>Media Player</span> </h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque voluptate hic unde eveniet officia, facere reiciendis explicabo saepe voluptatum nihil temporibus, pariatur quidem eaque esse suscipit repudiandae. Exercitationem, corporis velit!</p>
        <button onClick={()=>navigate('/home')} className='btn btn-warning mt-4'>Get Started <i class="fa-solid fa-arrow-right " style={{color:'white'}}></i></button>
      </Col>
     
      <Col lg={1}></Col>
      <Col lg={5}>
        <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="img1" style={{height:'430px'}} />
      </Col>
     </Row>

     <div className="container d-flex justify-content-center align-items-center mt-5 flex-column mb-5">
     <h3 >Features</h3>
     <div className='d-flex justify-content-center align-items-center mt-5'>

     <Card className='p-4 m-3' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:'100%',height:'300px'}} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title className='text-center'>Managing Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-4 m-3' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:'100%',height:'300px'}}  src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title className='text-center'>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-4 m-3' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:'100%',height:'300px'}}  src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title className='text-center'>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

     </div>
     </div>

     <div className="w-100 d-flex justify-content-center align-items-center mt-5 mb-5 flex-column">
         <div className="row w-100">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="row border rounded border-1 w-100 p-4" style={{borderColor:'white'}}>
              <div className="col-md-5">
                <h3 className='text-warning' style={{fontSize:'36px',fontWeight:'600'}}>Simple fast and Powerful</h3>
                <h6 className='mt-5'><span style={{fontSize:'28px'}}>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi cum reiciendis fugit. Illum tenetur cumque rem inventore dolores. Sapiente, ipsum et. </h6>

               <h6 className='mt-4'><span style={{fontSize:'28px'}}>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi cum reiciendis fugit. Illum tenetur cumque rem inventore dolores. Sapiente, ipsum et. </h6>

               <h6 className='mt-4'><span style={{fontSize:'28px'}}>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi cum reiciendis fugit. Illum tenetur cumque rem inventore dolores. Sapiente, ipsum et.</h6>
             
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-6">
              <iframe style={{width:'100%'}} height="400px" src="https://www.youtube.com/embed/VAdGW7QDJiU?si=KO1WnX47QY_yuwwX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>

         </div>
     </div>
   </>
  )
}

export default LandingPage
