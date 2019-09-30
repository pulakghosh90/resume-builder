import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { ClassNames } from '@emotion/core';
import PropTypes from 'prop-types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../button/IconButton';

const StyledBadge = styled('div')`
    display: inline-block;
    padding: 0.25em 0.4em;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin-top: 5px;

    &.pill {
        padding-right: 0.6em;
        padding-left: 0.6em;
        border-radius: 10rem;
        margin-left: 5px;
        margin-right: 5px;
    }

    &.primary {
        color: #fff;
        background-color: #007bff;
    }

    &.secondary {
        color: #fff;
        background-color: #6c757d;
    }

    &.danger {
        color: #fff;
        background-color: #dc3545;
    }

    &.warning {
        color: #212529;
        background-color: #ffc107;
    }

    &.light {
        color: #212529;
        background-color: #f8f9fa;
        border: 1px solid #212529;
    }
`;

export default function Badge(props) {
    const {
        text,
        appearence = 'default',
        className,
        pill = false,
        onDelete,
        deletable = false
    } = props;
    return (
        <ClassNames>
            {
                ({ cx, css }) => (
                    <Fragment>
                        <StyledBadge className={cx(className, appearence, { pill })}>
                            <span>{text}</span>
                            {
                                deletable && (
                                    <IconButton
                                        icon={faTimes}
                                        fontSize="12px"
                                        onClick={() => onDelete(text)}
                                        className={css`background-color: #f8f9fa; margin-right: 0px; padding: 0px;`}
                                    />
                                )
                            }
                        </StyledBadge>
                    </Fragment>
                )
            }
        </ClassNames>
    );
}

Badge.propTypes = {
    text: PropTypes.string.isRequired,
    appearence: PropTypes.oneOf([
        'primary',
        'default',
        'danger',
        'warning',
        'light'
    ]),
    className: PropTypes.string,
    pill: PropTypes.bool,
    onDelete: PropTypes.func,
    deletable: PropTypes.bool
};
