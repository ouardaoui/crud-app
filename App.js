import {createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexSceen from "./src/screen/IndexScreen";

const navigator = createStackNavigator (
  {index : IndexSceen
  },{
    initialRouteName : "index",
    defaultNavigationOptions :{
      title : "Blogs"  
    }  
  }
);

export default createAppContainer(navigator);
