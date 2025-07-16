import '../Contact.css'
import {useEffect, useState} from "react";
import {base_url, period_month} from "../utils/constants.js";

const Contact = () => {
    const [planets, setPlanets] = useState(['wait...']);

    async function getPlanets() {
        const res = await fetch(`${base_url}/v1/planets`);
        const data = await res.json();
        const planets = data.map(item => item.name);
        setPlanets(planets);
        localStorage.setItem('planets', JSON.stringify({
            payload: planets,
            time: Date.now()
        }));
    }

    useEffect(() => {
        const planets = JSON.parse(localStorage.getItem('planets'));
        if (planets && ((Date.now() - planets.time) < period_month)) {
            setPlanets(planets.payload);
        } else {
            getPlanets().then(() => console.log('Planets were loaded'));
        }
    }, [])

    return (
        <form className="container rounded-md bg-gray-200 p-5" onSubmit={e => {
            e.preventDefault();
        }}>
            <label className="block w-full text-red-700/50">
                First Name
                <input
                    type="text"
                    name="firstname"
                    placeholder="Your name.."
                    className="w-full px-3 py-3 mt-1 mb-4 border border-gray-300 rounded-md resize-y box-border"
                />
            </label>
            <label className="block w-full text-red-700/50">
                Last Name
                <input
                    type="text"
                    name="lastname"
                    placeholder="Your last name.."
                    className="w-full px-3 py-3 mt-1 mb-4 border border-gray-300 rounded-md resize-y box-border"
                />
            </label>

            <label className="block w-full text-red-700/50">Planet
                <select
                    name="planet"
                    className="w-full px-3 py-3 mt-1 mb-4 border border-gray-300 rounded-md resize-y box-border"
                >
                    {planets.map(item => <option value={item} key={item}>{item}</option>)}
                </select>
            </label>

            <label className="block w-full text-red-700/50">
                Subject
                <textarea
                    name="subject"
                    placeholder="Write something.."
                    className="w-full h-52 px-3 py-3 mt-1 mb-4 border border-gray-300 rounded-md resize-y box-border"
                ></textarea>
            </label>
            <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white py-3 px-5 rounded-md cursor-pointer border-none"
            >Submit</button>
        </form>
    )
};

export default Contact;





