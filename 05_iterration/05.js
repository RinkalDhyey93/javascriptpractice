const coding=["js","rubby","java","python","java"]

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach((item)=>{console.log(item)})

// function printme(item)
// {
//     console.log(item);
// }

// coding.forEach(printme)

coding.forEach( (item,index,arr) => {
   // console.log(item,index,arr)
} )

const MyCoding=[
    {
        languagename:"javascript",
        languageFilenam:"js"
    },
    {
        languagename:"java",
        languageFilenam:"java"
    },
    {
        languagename:"python",
        languageFilenam:"py"
    },
]

MyCoding.forEach( (item) => {
    console.log(item.languagename);
})