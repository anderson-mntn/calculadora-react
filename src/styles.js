import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f2a202;
    display:flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    
`
export const Content = styled.div`
    background-color: #a09090;
    width: auto;
    min-height: 350px;
    margin: 0;
        
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
export const Title = styled.div`
    margin: 2.5rem auto;
    font-size: 2.5rem;
    font-family: 'Courier New', monospace;
    font-weight: 700;
`
export const Footer = styled.div`
    position: fixed;
    bottom: 1rem;
    margin: auto;
    font-family: 'Trebuchet MS', sans-serif;
    font-size: 1.5rem;
`
