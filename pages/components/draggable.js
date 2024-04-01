import Image from 'next/image';
import styles from 'styles/Home.module.css';
import inProgress from 'assets/img/illustrations/4.png';
import { useRouter } from 'next/router';
import { Button, Card, Col, Row } from 'react-bootstrap';

export default function Draggable() {
  const router = useRouter();

  const goToGettingStarted = () => {
    router.push('/documentation/getting-started');
  };

  return (
    <div className={styles.container}>
      <div className="card mb-3">
        <Card>
          <Card.Body className="overflow-hidden p-lg-6">
            <Row className="align-items-center">
              <Col lg={5}>
                <Image
                  className="img-fluid"
                  src={inProgress}
                  alt="In progress"
                />
              </Col>
              <Col lg={7} className="my-5 text-center text-lg-start">
                <span className="badge badge-soft-success rounded-pill">
                  Coming soon
                </span>
                <h3 className="mt-1 fs-1 fs-sm-3">
                  We are working on this page
                </h3>
                <p>
                  We are continuously working to bring all the pages from the
                  React JavaScript version of Falcon here in the Next.js
                  version. Stay tuned!
                </p>
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
    </div>
  );
}
