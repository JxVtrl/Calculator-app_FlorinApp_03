import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 15px;

    ul {
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: space-around;
    }

    ul li {
        list-style: none;
        width: 50px;
        height: 50px;
        border: 1px solid #ccc;
        border-radius: 35%;
        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
        transition: all 0.3s;

        &:hover {
            background: silver;
        }
    }
`;
