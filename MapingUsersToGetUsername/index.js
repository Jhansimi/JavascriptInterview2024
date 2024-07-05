//1.Write a code to get array of names from given array of users.
//2.if it is active get username
//3.Sort users by age descending



const users=[
    {
        id:1,
        name:"Jack",
        isActive:false,
        age:25
    },
    {
        id:2,
        name:"John",
        isActive:true,
        age:28
    },
    {
        id:3,
        name:"James",
        isActive:true,
        age:20
    },

]

// const usersname=[]
// for(let i=0;i<users.length;i++){
//  const data=users[i].name
// usersname.push(data)
// console.log(usersname)

   
// }

//second way

// const usersdata=[]
// users.forEach((user)=>{
//     usersdata.push(user.name)
// })
// console.log(usersdata)

//Best way

const names=users.map((user=>user.name))
console.log(names)



// const sorteddata=users.sort((user1,user2)=>user1.age < user2.age ? 1 : -1)
// console.log(sorteddata)


const getActiveUsername=users.sort((user1,user2)=>user1.age<user2.age ? 1 : -1).filter((user)=>user.isActive).map((user)=>user.name)
console.log(getActiveUsername)



