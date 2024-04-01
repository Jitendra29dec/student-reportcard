import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import { Button, Card, Col, Row } from 'react-bootstrap';
import editing from 'assets/img/icons/spot-illustrations/21.png';

export default function Home() {
  const router = useRouter();

  const goToGettingStarted = () => {
    router.push('/documentation/getting-started');
  };

  return (
    <div className={styles.container}>
      <Card>
        <Card.Body className="overflow-hidden p-lg-6">
          <Row className="align-items-center justify-content-between">
            <Col lg={6}>
              <Image src={editing} className="img-fluid" alt="" priority />
            </Col>
            <Col lg={6} className="ps-lg-4 my-5 text-center text-lg-start">
              <h3 className="text-primary">Edit me!</h3>
              <p className="lead">Create Something Beautiful.</p>
              <Button
                variant="falcon-primary"
                as={'a'}
                onClick={goToGettingStarted}
              >
                Getting started
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
