import React from "react";

export interface Friend {
    id:string,
    name:string,
    photo:string,
    gender:string,
    description:string,
    love:number
}

interface Context{
    friends:Friend[],
    addFriend: (friendName:string, friendPhoto:string,gender:string, description:string,love:number) => void,
    updateFriend:()=>void,
    deleteFriend:(name:string, photo: string,gender:string, description:string , id:string)=>void,
    storeFriend:(name:string, photo: string,gender:string, description:string , id:string)=>void,
}
const FriendsContext = React.createContext<Context>({
    friends:[],
    addFriend:()=>{},
    updateFriend:()=>{},
    deleteFriend:()=>{},
    storeFriend:()=>{},
})

export default FriendsContext;