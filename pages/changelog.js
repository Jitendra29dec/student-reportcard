import { useEffect, useState } from 'react';
import styles from 'styles/Home.module.css';
import { Alert, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flex from 'components/common/Flex';
import PageHeader from 'components/common/PageHeader';
import FalconEditor from 'components/common/FalconEditor';
import changelogs from 'data/changelogs';
import Logs from 'components/changelogs/logs';

export default function Changelog() {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <div className={styles.container}>
      <PageHeader title="Changelog" className="mb-3" />

      <Card className="mb-3">
        <Card.Body>
          <Alert variant="warning" className="p-4 mb-0">
            <Flex>
              {mount && (
                <FontAwesomeIcon icon="exclamation-triangle" className="fs-3" />
              )}
              <div className="ms-3 flex-1">
                <h4 className="alert-heading">Before you update!</h4>
                Backup your files and read the changelog before updating Falcon
                on your project. If you come across with any problems with
                Falcon template during the update, feel free to contact us at{' '}
                <a href="mailto:info@themewagon.com">info@themewagon.com</a>.
              </div>
            </Flex>
          </Alert>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Alert variant="info" className="p-4 mb-0 bg-white">
            <Flex>
              {mount && <FontAwesomeIcon icon="tools" className="fs-3" />}
              <div className="ms-3 flex-1">
                <h4 className="alert-heading">After you update</h4>

                <p className="mb-0">
                  After successfully updating all the latest files and changes
                  from a new version of Falcon in your Next.js project, you need
                  to run the following commands in your project directory. These
                  commands will install the updated versions of all
                  dependencies, install if any new dependencies are required,
                  and run the project.
                </p>
                <h6 className="mt-3">
                  If you use{' '}
                  <strong>
                    <code>yarn</code>
                  </strong>{' '}
                  , run:
                </h6>
                <FalconEditor
                  code={`yarn install && yarn dev`}
                  language="bash"
                  hidePreview
                />
                <h6 className="mt-3">
                  If you use{' '}
                  <strong>
                    <code>npm</code>
                  </strong>{' '}
                  , run:
                </h6>
                <FalconEditor
                  code={`npm i && npm run dev`}
                  language="bash"
                  hidePreview
                />
              </div>
            </Flex>
          </Alert>
        </Card.Body>
      </Card>

      {changelogs.map((logs, index) => (
        <Logs {...logs} index={index} key={index} />
      ))}
    </div>
  );
}
