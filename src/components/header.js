import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Navegaacion from './nav';


const Enlacehome = styled(Link)`
    color:#FFF;
    text-align:center;
    text-decoration:none;


`;
const Header = () => {
    return (
        <header
            css={css`
            background-color:rgba(44,62,80);
            margin-top:5rem;
            padding:1rem;
        
        `}
        >
            <div
                css={css`
                max-width:1200px;
                margin:0 auto;

                @media(min-width:768px){
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                }
            `}
            >
                <Enlacehome to='/'>
                    <h1
                        css={css`
                    color:#FFF;
                    text-align:center;
                
                `}
                    >Hotel Gatsby</h1>
                </Enlacehome>

                <Navegaacion />
            </div>
        </header>
    );
};

export default Header;