import HomeScreenList from "../container/HomeScreenList"

export interface IHomePageProps {}
const HomePage: React.FC<IHomePageProps> = (props) => {

    return (
        <div className="App">
            <header className="App-Header">
            <HomeScreenList/>
            </header>
        </div>
    )
}
export default HomePage