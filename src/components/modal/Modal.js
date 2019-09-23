import React from 'react';
import Modal from 'react-modal';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../button/Button';
import IconButton from '../button/IconButton';

const StyledModal = styled(Modal)`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3rem;
    outline: 0;

    @media (min-width: 550px) {
        &.modal-dialog {
            width: 600px;
        }
        &.modal-sm {
            width: 400px;
        }
    }
    @media (min-width: 800px) {
        &.modal-lg {
            width: 900px;
        }
    }
`;

const HeaderContainer = styled('div')`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem;
`;

const Header = ({ title, onClose }) => (
    <HeaderContainer>
        <h2>{title}</h2>
        <IconButton onClick={onClose} icon={faTimes} />
    </HeaderContainer>
);

const Body = styled('div')`
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
`;

const Footer = styled('div')`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
    border-top: 1px solid #dee2e6;
    border-bottom-right-radius: .3rem;
    border-bottom-left-radius: .3rem;
`;

const wrapperStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        outline: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content: {
        position: 'relative',
        margin: '30px auto',
        backgroundColor: 'white',
        backgroundClip: 'padding-box',
        border: '1px solid rgba(0, 0, 0, 0.2)',
        borderRadius: '0.4rem',
        outline: 0
    }
};

export default function ModalElement(props) {
    const {
        size,
        title,
        isOpen,
        onClose,
        onSave,
        children
    } = props;
    const className = `modal-dialog modal-${size || 'lg'}`;
    return (
        <StyledModal
            className={className}
            isOpen={isOpen}
            onRequestClose={onClose}
            style={wrapperStyles}
            closeTimeoutMS={0}
            shouldCloseOnEsc
            role="dialog"
        >
            <Header title={title} onClose={onClose} />
            <Body>{children}</Body>
            <Footer>
                <Button appeareance="secondary" onClick={onClose} text="Cancel" />
                <Button appeareance="primary" onClick={onSave} text="Save" />
            </Footer>
        </StyledModal>
    );
}

ModalElement.propTypes = {
    size: PropTypes.string,
    title: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    children: PropTypes.any
};
