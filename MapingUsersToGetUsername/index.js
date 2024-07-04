//1.Write a code to get array of names from given array of users.

const users=[
    {
        id:1,
        name:"Jack",
        isActive:false
    },
    {
        id:2,
        name:"John",
        isActive:false
    },
    {
        id:3,
        name:"James",
        isActive:true
    },

]

const usersname=[]
for(let i=0;i<users.length;i++){
 const data=users[i].name
usersname.push(data)
console.log(usersname)

   
}