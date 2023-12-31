import styled from 'styled-components';

export const StyledHeader = styled.header`
    width: 100%;
    height: 60px;
    padding: 12px 20px;
    background: var(--header-background-color);
    box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25),
        0px -3px 2px 0px rgba(0, 0, 0, 0.1) inset;
    display: flex;
    align-items: center;
    position: relative;

    div {
        text-align: center;
        width: 115px;
        margin-right: auto;
    }

    p {
        font-size: 13px;
    }

    svg {
        display: inline-block;
        
    }

    span {
        margin-right: 8px;
        color: var(--white-60);
    }

    button {
        width: 18px;
        height: 18px;
        background-color: transparent;
        color: var(--white-60);
        box-shadow: none;
        text-align: right;
    }

    button:hover {
        color: var(--white);
    }

    @media only screen and (min-width: 768px) {
        height: 80px;
        padding: 16px 32px;
        p {
            font-size: 17px;
        }
        span {
            margin-right: 12px;
        }
        button {
            width: 69px;
            height: 30px;
            border-left: 1px solid var(--white-60);
        }
        /* span.animation {
            position: absolute;
            display: block;
            bottom: 0;
            right: -100%;
            width: 100%;
            height: 2px;
            animation: line 4s linear infinite;
            animation-delay: 0.5s;
        } */
    }

    @media only screen and (min-width: 1280px) {
        padding: 16px;
    }
`;
