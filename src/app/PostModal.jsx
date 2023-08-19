import React from 'react';

const PostModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF',
    zIndex: 1000,
    overflowY: 'auto', // For longer content
    transition: 'transform 0.3s ease', // Optional transition
    transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    zIndex: 999,
  };

  return (
    <>
      <div style={overlayStyle} onClick={onClose} />
      <div style={modalStyle}>{children}</div>
    </>
  );
};

export default PostModal;
