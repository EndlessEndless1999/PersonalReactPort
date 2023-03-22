


const NavItem = ({text, link}) => {
    

    function handleClick() {
        const element = document.getElementById(link);
        if(element){
            element.scrollIntoView();
        }else{
            console.log(element);
        }

      }



    return (
        <li className="nav-item" text={text} onClick={handleClick}>{text}</li>
    )
}


export default NavItem;