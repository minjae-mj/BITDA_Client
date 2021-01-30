import React, { useEffect, useState } from 'react';
import LoadingImg from '../../images/loading.gif';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  width: 25rem;
  height: 25rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingImage = styled.img`
  width: 30rem;
  height: 30rem;
  z-index: 5;
`;

const LoadingModal = (): JSX.Element => {
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
    return () => {
      setDidMount(false);
    };
  });

  return (
    <Modal>
      <ModalContent>
        {didMount && <LoadingImage src={LoadingImg} />}
      </ModalContent>
    </Modal>
  );
};

export default LoadingModal;
