import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    padding: var(--150, 12px) var(--300, 24px);
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid var(--border-alpha, rgba(239, 239, 255, 0.20));
    background: var(--background-default, #0B090D);
    box-sizing: border-box; /* Isso faz com que padding e border sejam incluídos na largura total */

    @media (min-width: 1045px) and (max-width: 1440px) {
        display: flex;
        width: 100%;
        padding: var(--150, 12px) var(--300, 24px);
        justify-content: space-between;
        align-items: center;
    }

    @media (min-width: 721px) and (max-width: 1044px) {
        display: flex;
        width: 100%;
        padding: var(--150, 12px) var(--300, 24px);
        justify-content: space-between;
        align-items: center;
    }

    @media (min-width: 401px) and (max-width: 720px) {
        display: flex;
        width: 100%;
        padding: var(--150, 12px) var(--300, 24px);
        justify-content: space-between;
        align-items: center;
    }
    
    @media (max-width: 400px) {
        display: flex;
        width: 100%
        padding: var(--150, 12px) var(--300, 24px);
        justify-content: space-between;
        align-items: center;
    }
`;

export const Title = styled.div`
    width: 117.268px;
    height: var(--400, 32px);
    flex-shrink: 0;

    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`;

export const RightDiv = styled.div`
    display: flex;
    padding: var(--0, 0px);
    align-items: center;
    gap: 16px;

    @media (min-width: 1045px) and (max-width: 1440px) {
        display: flex;
        padding: var(--0, 0px);
        align-items: center;
        gap: 16px;
    }

    @media (min-width: 721px) and (max-width: 1044px) {
        display: flex;
        padding: var(--0, 0px);
        align-items: center;
        gap: 16px;
    }

    @media (min-width: 401px) and (max-width: 720px) {
        display: flex;
        padding: var(--0, 0px);
        align-items: center;
        gap: 16px;
    }
    
    @media (max-width: 400px) {
        display: contents;
    }
`;

export const Description = styled.p`
    color: var(--text-default, #FFF);
    text-align: center;
    font-family: 'Red Hat Display';
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 133.333% */

    @media (min-width: 1045px) and (max-width: 1440px) {
        color: var(--text-default, #FFF);
        text-align: center;
        font-family: Red Hat Display;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px; /* 133.333% */
    }

    @media (min-width: 721px) and (max-width: 1044px) {
        color: var(--text-default, #FFF);
        text-align: center;
        font-family: Red Hat Display;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px; /* 133.333% */
    }

    @media (min-width: 401px) and (max-width: 720px) {
        color: var(--text-default, #FFF);
        text-align: center;
        font-family: Red Hat Display;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px; /* 133.333% */
    }
    
    @media (max-width: 400px) {
        display: none;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;
