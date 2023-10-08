
import CountIcon from "../CountIcon";
import "./styles.css";

export default function HeaderCard(){

    return (

        <>
            <header>
                <nav className="nav-container">
                    <div className="title-container">
                        <h1>DSFilter</h1>
                    </div>
                    <CountIcon />
                </nav>
            </header>

        </>
    );
}