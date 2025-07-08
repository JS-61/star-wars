import { useEffect, useState } from "react";
import {base_url, details} from "../utils/constants.js";

const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState();

    useEffect(() => {
        fetch(`${base_url}/v1/peoples/1`)
            .then(res => res.json())
            .then(setAboutMe);
    }, []);

    if (!aboutMe) {
        return (
            <div className="about-me">
                <span className="spinner-border spinner-border-sm"></span> Loading...
            </div>
        );
    }



    return (
        <div className="about-me">
            <h1>About me</h1>
            <ul>
                {details.map(({ label, value }) => (
                    <li key={label}>
                        <strong>{label}:</strong> {value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AboutMe;


