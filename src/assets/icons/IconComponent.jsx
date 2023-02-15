import React from 'react'
import { SvgIcon } from '@material-ui/core';
import "./style.css"

function IconComponent(props) {

  const [isAnimating, setIsAnimating] = React.useState(false);
  
  const handleClick = () => {
    setIsAnimating(!isAnimating);
  };

  let name;
    switch (props.type) {
      case "tweet": 
        name = "tweet-icon";
        break;
      case "blue": 
        name = "blue";
        break;
      case "green": 
        name = "green";
        break;
      case "red": 
        name = "red";
        break;
      case "tweetIcon":
        name = "sidebar__img tweet";
        break;
    }

    return (
      
        <SvgIcon onClick={handleClick} className={`${name} ${isAnimating && name === "red"? "isAnim" : ""}`}>
          <path d={name === "red" && isAnimating ? "M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" : props.d} />
        </SvgIcon>

 
      );
}

export default IconComponent