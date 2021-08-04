import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {

    return (
        <header className="min-w-screen">
            <nav className="px-4 py-8 text-bg-theme-light flex flex-col items-center md:flex-row">
                <div className="flex-1 px-8 pb-8">
                    <a href="/" className="text-4xl text text-theme-orange inline">FreGa</a>
                </div>
                <div className="flex-none w-96">
                    <input disabled placeholder="Search a Game Title (coming soon)" className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-theme-dark2 leading-tight focus:outline-none focus:shadow-outline" type="text" name="game-search" id="game-search" />
                </div>
                <div className="flex-1 px-8">
                    <div className="text-right"></div>
                </div>
            </nav>
        </header>
    );
};

export default Header;