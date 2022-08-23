import styled from "styled-components"

const SliderImg = (props) => {
    return (
        <ImgWrapper>
            <a href="#"><Img src={props.img} /></a>
        </ImgWrapper>
    )
}

const ImgWrapper = styled.div`

`

const Img = styled.img`
    padding: 10px;
    margin: 0 10px;
    width: 150px;
    height: 150px;
    border: 2px solid rgb(0,0,0,0.1);
    box-shadow: 1px 1px 10px rgb(0,0,0,0.4);
    transition: 1s;
    pointer-events: none;
    &:hover {
        width: 200px;
        height: 200px;
    }
`

export default SliderImg