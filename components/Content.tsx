import {useState, useEffect} from 'react'
import styled from 'styled-components';

const StyledContent = styled.div`
    width: 57.5%;
    height: 100%;
    background: #243447;
    border-radius: 15px;
`

interface IProps {
    data: Array<any>
}

const Content = ({data}: IProps) => {
    const [title, setTitle] = useState('');

    useEffect(()=> {
        setTitle(data.businesses[0].alias);
    }, [data])

    return <StyledContent>
        <h2>title: {title}</h2>
    </StyledContent>
}

export default Content;