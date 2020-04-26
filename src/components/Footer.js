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
const Footer = ({titulo}) => {
    const year = new Date().getFullYear();
    return (
        <>

            <footer
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
                    <Navegaacion />
                    <Enlacehome to='/'>
                        <h1
                            css={css`
                    color:#FFF;
                    text-align:center;
                
                `}
                        >Hotel Gatsby</h1>
                    </Enlacehome>


                </div>
            </footer>
            <p
                css={css`
                text-align: center;
                color: #fff;
                background-color: rgb(33,44,55);
                margin: 0;
                padding: 1rem;
            `}
            >{titulo}. todos los dereches reservados {year} &copy;</p>
        </>
    );
};

export default Footer;