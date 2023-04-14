
const TechIcon = ({icon, link}) => {

    function OnClick(){
        window.open(link, '_blank');
    }



    return (
        <i className={icon} onClick={OnClick}></i>
    )
}


export default TechIcon;