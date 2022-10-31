import { FaBookmark, FaHeart, FaStar } from "react-icons/fa";
import styled from "styled-components"

const ActionBarDiv = styled.div`
        background-color: #1c252f;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-radius: 0 0 1rem 1rem;
`

const ActionBarButton = styled.button`
        color: white;
`

export interface ActionBarProps {

}

const ActionBar: React.FC<ActionBarProps> = () => {

    return (
        <ActionBarDiv>
            <ActionBarButton 
            type="button" 
            id="watchlist-button" className="btn btn-default btn-lg"> <FaBookmark /> <p>Watchlist</p>
            </ActionBarButton> <ActionBarButton type="button" 
            id="like-button" className="btn btn-default btn-lg"> <FaHeart /> <p>Like</p>
            </ActionBarButton> <ActionBarButton type="button" 
            id="rate-button" className="btn btn-default btn-lg"> <FaStar /> <p>Rate</p>
            </ActionBarButton>
        </ActionBarDiv>
    )
}

export default ActionBar;