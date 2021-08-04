import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
    return (
        <footer className="flex justify-around items-center h-32 bg-theme-dark2 text-theme-light">
            <a href="/" className="text-4xl text text-theme-orange">FreGa</a>
            <div></div>
            <div>© 2021 Justin Peyatt</div>
        </footer>
    );
};

export default Footer;