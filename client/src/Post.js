import { Link } from "react-router-dom";
export default function Post() {
    return (
        <div className="post">
            <div className="image">
                <Link>
                    <img src="" alt="" />
                </Link>
            </div>
            <div className="texts">
                <Link>
                    <h2>Title</h2>
                </Link>
                <p className="info">
                    <a className="author">Ishant Sharma </a>
                    <time></time>
                </p>
                <p className="summary">lkhfuisdguihfgoijfdopigjdirgjoifdjgoijfdoi joikjhjfgnvjikfdnoju 
                jfoikjhsdnguijhoi ijkopihdjsfuoihdfojg joihngiujhrtofi oijuoirhy9u jiuhsdgfuyig </p>
            </div>
        </div>
    );
}