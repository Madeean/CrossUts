import React,{useState} from "react";
import FriendsContext, {Friend} from "./friend-context";

const FriendsContextProvider: React.FC<{children?:any}> = props =>{
    const [friends, setFriends] = useState<Friend[]>([
        {
            id:'f1',
            name:'John Thor',
            photo:'',
            description:'I am a Thor',
            gender:'male',
            love:1
        },
        {
            id:'f2',
            name:'nana',
            photo:'',
            description:'I am a nana',
            gender:'female',
            love:0
        },
        {
            id:'f3',
            name:'gawang',
            photo:'',
            description:'I am a gawang',
            gender:'female',
            love:0
        },
        {
            id:'f4',
            name:'evos',
            photo:'',
            description:'I am a evos',
            gender:'female',
            love:0
        },
        {
            id:'f5',
            name:'alucard',
            photo:'',
            description:'I am a alucard',
            gender:'female',
            love:0
        },
    ]);

    const addFriend = (name:string, photo: string,gender:string, description:string)=>{
        const newFriend: Friend={
            id: Math.random().toString(),
            name:name,
            photo:photo,
            gender:gender,
            description:description,
            love:0,

        }

        setFriends((currFriends:Friend[]) => {
            return currFriends.concat(newFriend);
        })
    }
    const updateFriend = () =>{};
    const deleteFriend = (name:string, photo: string,gender:string, description:string , id:string) => {
        const findId = friends.findIndex(friend => friend.id === id);
        console.log("findId: ",findId);

        

        const newFriend: Friend={
            id: Math.random().toString(),
            name:name,
            photo:photo,
            gender:gender,
            description:description,
            love:0,

        }

        setFriends((currFriends:Friend[]) => {
            currFriends.splice(findId,1);
            return currFriends.concat(newFriend);
        })
    };
    const storeFriend= (name:string, photo: string,gender:string, description:string , id:string) => {
        //delete friend with id
        const findId = friends.findIndex(friend => friend.id === id);
        console.log("findId: ",findId);

        

        const newFriend: Friend={
            id: Math.random().toString(),
            name:name,
            photo:photo,
            gender:gender,
            description:description,
            love:1,

        }

        setFriends((currFriends:Friend[]) => {
            currFriends.splice(findId,1);
            return currFriends.concat(newFriend);
        })
    };

    return (
        
            <FriendsContext.Provider value={{ 
                friends,
                addFriend,
                updateFriend,
                deleteFriend,
                storeFriend,
            }}>
                {props.children}
            </FriendsContext.Provider>
        
    )
}

export default FriendsContextProvider;