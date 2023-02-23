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
    width: auto;
    min-height: 350px;
    margin: 1rem;
        
`
export const Row = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: .75rem 0;
    margin: .75rem .5rem;  
`
export const Column = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`