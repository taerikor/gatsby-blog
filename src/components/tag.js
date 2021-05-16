import React from 'react'
import { css } from "@emotion/react"
import _ from 'lodash'
import { Link } from "gatsby"

const Tag = ({name}) => {
    return (
    <div style={{
    }}
    css={css`
    all: unset;
    cursor: pointer;
    background-color: white;
    padding: 5px 5px;
    width: 80px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0, 0.7);
    text-transform: uppercase;
    font-weight: 800;
    font-size: 12px;
    &:active {transform: scale(0.96);}
    `}
    >
        <Link
           css={css`
           all: unset;
           `}
        to={`/tag/${_.kebabCase(name)}/`}>{name}</Link>
    </div>
    )
    }

export default Tag;