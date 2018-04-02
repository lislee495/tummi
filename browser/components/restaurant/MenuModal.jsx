import React from 'react';
import { showModal, clearCart } from '../../redux'
import { connect } from 'react-redux';

function MenuModal(props) {
  return (
    <div className="modal-container">
      <div className="modal-background" />
      <div className="menu-modal">
        <div className="content">
          Your cart already has items from another restaurant. Clear cart?
        </div>
        <div className="prompt">
          <button className="gen-btn" onClick={() => props.handleYes()}>Yes</button>
          <button className="gen-btn" onClick={() => props.handleNo()}>No</button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  handleYes: () => {
    dispatch(clearCart())
    dispatch(showModal())
  },
  handleNo: () => dispatch(showModal())
})
export default connect(null, mapDispatchToProps)(MenuModal);
/* -----------------    CONTAINER     ------------------ */
