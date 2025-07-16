import {base_url, period_month} from "../utils/constants.js";
import {useEffect, useState} from "react";

const AboutMe = () => {
    const [hero, setHero] = useState();
    useEffect(() => {
        const hero = JSON.parse(localStorage.getItem("hero"));
        if (hero && ((Date.now() - hero.timestamp) < period_month)) {
            setHero(hero.payload);
        } else {
            fetch(`${base_url}/v1/peoples/1`)
                .then(response => response.json())
                .then(data => {
                    const info = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color
                    }
                    setHero(info);
                    localStorage.setItem("hero", JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }
    }, [])

    return (
        <>
            {(!!hero) &&
                <div className="text-2xl leading-relaxed text-justify ml-12">
                <p><span className='text-4xl'>name:</span> {hero.name}</p>
                    <p><span className='text-4xl'>gender:</span> {hero.gender}</p>
                    <p><span className='text-4xl'>birth year:</span> {hero.birth_year}</p>
                    <p><span className='text-4xl'>height:</span> {hero.height}</p>
                    <p><span className='text-4xl'>mass:</span> {hero.mass}</p>
                    <p><span className='text-4xl'>hair color:</span> {hero.hair_color}</p>
                    <p><span className='text-4xl'>skin color:</span> {hero.skin_color}</p>
                    <p><span className='text-4xl'>eye color:</span> {hero.eye_color}</p>
                </div>
            }
        </>
    );
};

export default AboutMe;


