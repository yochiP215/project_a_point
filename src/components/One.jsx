import person from "../assets/person.svg"
import phone from "../assets/phone.svg"
import email from "../assets/email.svg"
import Star from "../assets/Star.svg"
import eye from "../assets/eye.svg"

const One = (contact) => {

    return (
        <div>
            <h3></h3>
            <h3></h3>
            <h3></h3>
            <h3>
                <img src={person} alt="" />
                <img src={phone} alt="" />
                <img src={email} alt="" />
            </h3>
            <h3>
            <img src={Star} alt="" />
            <img src={eye} alt="" />
            </h3>
        </div>
    )
}
export default One;