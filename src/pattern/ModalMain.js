import React from "react";
import Modal from "react-modal";
import gsap from "gsap";
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

export const ModalMain = (props) => {
  const [modalIsOpen, setIsOpen] = React.useState(props.modalIsOpen);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div>
        <div className="cursor" onClick={() => openModal(!modalIsOpen)}>
          {props.button}
        </div>
        <div>
          <ModalMainOverlay
            content={props.content}
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            width={props.width}
            height={props.height}
            fullwidth={props.fullwidth}
            closeBtn={props.closeBtn}
          />
        </div>
      </div>
    </>
  );
};

export const ModalMainOverlay = (props) => {
  const customStyles = {
    content: {
      width: props.fullwidth ? "100%" : props.width,
      height: props.fullheight ? "100%" : props.height,
    },
  };

  return (
    <div>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        className="modal-main"
        contentLabel="Example Modal"
        overlayClassName="Overlay"
        style={customStyles}
        closeTimeoutMS={100}
      >
        <div className="raisedCardDark modal-header">
          <h2>Livestream Provider Setup</h2>
          <div className="cursor" onClick={props.closeModal}>
            <img src="images/X.svg" />
          </div>
        </div>
        <div>{props.content}</div>
        {props.closeBtn ? (
          <div className="cursor center" onClick={props.closeModal}>
            {props.closeBtn}
          </div>
        ) : null}
      </Modal>
    </div>
  );
};
