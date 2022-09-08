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
    width: 120px;
    height: 120px;
    border: 2px solid rgb(0,0,0,0.1);
    box-shadow: 1px 1px 10px rgb(0,0,0,0.4);
    pointer-events: none;
    border-radius: 5px;
    @media (min-width: 780px) {
        width: 250px;
        height: 250px;
    }
`

export default SliderImg