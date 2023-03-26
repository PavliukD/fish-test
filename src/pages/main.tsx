import { useAppSelector } from "../redux/hooks"
import styled from "styled-components"
import { spawn } from "child_process"

const TableRow = styled.div`
    outline: 1px solid tomato;
    display: grid;
    grid-template-columns: 5% 25% 10% 25% repeat(4, 7%);
    gap: 5px;
    :nth-child(2n+1){
        background-color: Silver;
    }
`
const TableHeaderTitle = styled.span`
    display: inline;
    width: 100%;
    text-align: center;
`

const StyledImage = styled.img`
    max-width: 100%;
    max-height: 160px;
    height: auto;
    margin: auto;
`

const StyledSpan = styled.span`
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;
`

const StyledP = styled.p`
    margin: 0;
    margin-top: auto;
    margin-bottom: auto;
`


export const Main: React.FC = () => {
    const { productsList} = useAppSelector((state) => state.slice)
    console.log( productsList)

    return (
        <>
            <TableRow>
                <TableHeaderTitle>ID</TableHeaderTitle>
                <TableHeaderTitle>Photo</TableHeaderTitle>
                <TableHeaderTitle>Name</TableHeaderTitle>
                <TableHeaderTitle>Description</TableHeaderTitle>
                <TableHeaderTitle>Rating</TableHeaderTitle>
                <TableHeaderTitle>Stock</TableHeaderTitle>
                <TableHeaderTitle>Price</TableHeaderTitle>
                <TableHeaderTitle>Category</TableHeaderTitle>
            </TableRow>
            {!productsList ? <span>Oops, something went wrong</span> : 
                productsList.map(product => {
                    return (
                        <TableRow key={product.id}>
                            <StyledSpan>{product.id}</StyledSpan>
                            <StyledImage src={product.thumbnail} />
                            <StyledSpan>{product.title}</StyledSpan>
                            <StyledP>{product.description}</StyledP>
                            <StyledSpan>{product.rating}</StyledSpan>
                            <StyledSpan>{product.stock}</StyledSpan>
                            <StyledSpan>{ product.price }</StyledSpan>
                            <StyledSpan>{ product.category }</StyledSpan>
                        </TableRow>
                    )
                })
            }
        </>
    )
}