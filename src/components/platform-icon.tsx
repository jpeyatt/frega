import { FunctionComponent } from "react";
interface IPlatformIconProps {
    platform: string;
}
export const PlatformIcon: FunctionComponent<IPlatformIconProps> = ({platform}) => {
    return platform === 'PC (Windows)' ?
        (<div className="bg-platform-windows bg-contain bg-no-repeat h-8 w-8"></div>) :
    platform === 'Web Browser' ?
        (<div className="bg-platform-browser bg-contain bg-no-repeat h-8 w-8"></div>)  :
    platform === 'PC (Windows), Web Browser' ?
        (<div className="flex flex-row">
            <div className="bg-platform-windows bg-contain bg-no-repeat h-8 w-8"></div>
            <div className="bg-platform-browser bg-contain bg-no-repeat h-8 w-8"></div> 
        </div>) :
        (<></>);
};