import {friends} from "../utils/constants.js";
import Friend from "./Friend.jsx";

const DreamTeam = () => {
    return (
        <section className="float-end row w-50 border rounded-bottom-4 me-0 ms-2">
            <h2 className="text-center">Dream team</h2>
            {friends.map((f, i) => <Friend picture={f} key={i} pos={i + 1} />)}
        </section>
    );
};

export default DreamTeam;