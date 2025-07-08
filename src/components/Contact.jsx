import { useEffect, useState } from "react";
import {base_url} from "../utils/constants.js";

const Contact = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        fetch(`${base_url}/v1/planets`)
            .then(res => res.json())
            .then(data => setPlanets(data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name..." />

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name..." />

                <label htmlFor="planet">Planet</label>
                <select id="planet" name="planet">
                    {planets.map((planet, index) => (
                        <option key={index} value={planet.name}>
                            {planet.name}
                        </option>
                    ))}
                </select>

                <label htmlFor="subject">Subject</label>
                <textarea
                    id="subject"
                    name="subject"
                    placeholder="Write something..."
                    style={{ height: '200px' }}
                />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Contact;





