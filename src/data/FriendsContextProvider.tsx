import React,{useState} from "react";
import FriendsContext, {Friend} from "./friend-context";

const FriendsContextProvider: React.FC<{children:any}> = props =>{
    const [friends, setFriends] = useState<Friend[]>([
        {
            id:'f1',
            name:'John Thor',
            photo:'',
            description:'I am a Thor',
            gender:'male'
        },
        {
            id:'f2',
            name:'nana',
            photo:'',
            description:'I am a nana',
            gender:'female'
        },
        {
            id:'f3',
            name:'gawang',
            photo:'',
            description:'I am a gawang',
            gender:'female'
        },
        {
            id:'f4',
            name:'evos',
            photo:'',
            description:'I am a evos',
            gender:'female'
        },
        {
            id:'f5',
            name:'alucard',
            photo:'',
            description:'I am a alucard',
            gender:'female'
        },
    ]);

    const addFriend = (name:string, photo: string,gender:string, description:string)=>{
        const newFriend: Friend={
            id: Math.random().toString(),
            name:name,
            photo:photo,
            gender:gender,
            description:description,

        }

        setFriends((currFriends:Friend[]) => {
            return currFriends.concat(newFriend);
        })
    }
    const updateFriend = () =>{};
    const deleteFriend = () => {};

    return (
        
            <FriendsContext.Provider value={{ 
                friends,
                addFriend,
                updateFriend,
                deleteFriend
            }}>
                {props.children}
            </FriendsContext.Provider>
        
    )
}

export default FriendsContextProvider;