import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';
import { ClassNames } from '@emotion/core';
import PropTypes from 'prop-types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../button/IconButton';
import StringElement from '../input-elements/StringElement';
import Button from '../button/Button';

const StyledBadge = styled('div')`
    display: inline-flex;
    align-items: flex-end;
    padding: 0.25em 0.4em;
    white-space: nowrap;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin-top: 5px;

    &.pill {
        padding-right: 0.6em;
        padding-left: 0.6em;
        border-radius: 10rem;
        margin-left: 5px;
        margin-right: 5px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
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

const Pills = styled('div')`
    margin-top: 8px;
`;

const Flex = styled('div')`
    display: inline-flex;
    width: 100%;
`;

export function BadgeInput(props) {
    const {
        id,
        value,
        onChange,
        placeHolder
    } = props;
    const [badge, setBadge] = useState('');
    return (
        <Fragment>
            <Flex>
                <StringElement
                    id="badge-input"
                    placeHolder={placeHolder}
                    value={badge}
                    onChange={({ value: bdg }) => setBadge(bdg)}
                />
                <Button
                    appeareance="primary"
                    text="Add"
                    onClick={() => {
                        onChange({ id, value: [...value, badge] });
                        setBadge('');
                    }}
                />
            </Flex>
            <Pills>
                {
                    value.map((v) => (
                        <Badge
                            key={v}
                            text={v}
                            appearence="light"
                            pill
                            deletable
                            onDelete={() => onChange({ id, value: value.filter((x) => x !== v) })}
                        />
                    ))
                }
            </Pills>
        </Fragment>
    );
}

BadgeInput.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
    placeHolder: PropTypes.string.isRequired
};
