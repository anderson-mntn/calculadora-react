import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f2a202;
    display:flex;
    align-items: center;
    justify-content: start;
    
`
export const Content = styled.div`
    background-color: #a09090;
    width: fit-content;
    min-height: 350px;
    margin: 1rem;
    
`
export const Row = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const Column = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`