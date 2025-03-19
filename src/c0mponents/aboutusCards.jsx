import { memo } from "react";
import Card from "react-bootstrap/Card";

function AboutusCards() {
  return (
    <div className="aboutuscards py-5">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="acard col-sm-6 col-xl-3 ">
            <Card>
              <Card.Body>
                <Card.Title>120</Card.Title>
                <h5>Years With You</h5>
                <Card.Text>
                  
                 
                    Etiam ante ante, molestie vitae cursus ac, pharetra euismod
                    libero.
                  
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="acard col-sm-6 col-xl-3 ">
            <Card>
              <Card.Body>
                <Card.Title>400</Card.Title>
                <h5>Awards</h5>

                <Card.Text>
            
                    Etiam ante ante, molestie vitae cursus ac, pharetra euismod
                    libero.
                 
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="acard col-sm-6 col-xl-3 ">
            <Card>
              <Card.Body>
                <Card.Title>250</Card.Title>
                <h5>Doctors</h5>

                <Card.Text>
                  
                    Etiam ante ante, molestie vitae cursus ac, pharetra euismod
                    libero.
                  
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="acard col-sm-6 col-xl-3">
            <Card>
              <Card.Body>
                <Card.Title>800</Card.Title>
                <h5>Satisfied Client</h5>

                <Card.Text>
              
                    Etiam ante ante, molestie vitae cursus ac, pharetra euismod
                    libero.
                 
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(AboutusCards);
