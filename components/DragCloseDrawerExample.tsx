import React, {  ReactNode,  useState, } from "react";
import styled from "styled-components";

interface Props {
  children?: ReactNode;
  onClose: () => void;
}

export const DragCloseDrawerExample = ({ children, onClose }: Props) => {
  const [open, setOpen] = useState(true);  // This manages the open state internally.
  return (
    <Container>
      {open && (
        <Backdrop onClick={() => onClose()}>
          <Drawer>
            <DragHandle
              onMouseDown={() => setOpen(false)}
            >
              <GrabButton />
            </DragHandle>
            <ContentContainer>{children}</ContentContainer>
          </Drawer>
        </Backdrop>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  height: 100vh;
  place-content: center;
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: rgba(10, 18, 30, 0.7);
`;

const Drawer = styled.div`
  position: absolute;
  bottom: 0;
  height: 75vh;
  width: 100%;
  overflow: hidden;
  background-color: #1e293b;
  border-radius: 1.5rem 1.5rem 0 0;
`;

const DragHandle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #1e293b;
  padding: 1rem;
  z-index: 10;
`;

const GrabButton = styled.button`
  width: 3.5rem;
  height: 0.5rem;
  border-radius: 0.25rem;
  background-color: #4b5563;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  height: 100%;
  overflow-y: scroll;
  padding: 1rem;
  padding-top: 3rem;
`;
