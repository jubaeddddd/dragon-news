import { format } from "date-fns";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex justify-center flex-col items-center gap-3 mt-6">
            <img src={logo} alt="" />
            <h1 className="">Journalism Without Fear or Favour</h1>
            <p className="font-semibold">{format(new Date(),"EEEE,MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;