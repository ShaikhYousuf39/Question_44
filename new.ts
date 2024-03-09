function sandwich(...items: string[]): void{
    console.log("Sandwich order:")

    for (let i = 0 ; i< items.length; i++){
        console.log(`- ${items[i]}`)
    }
}
console.log ("enjoy your sandwich sir zia")

sandwich(`capsicum`,`tomato`,`chicken`)
sandwich(`cheese`,`beef`,)
sandwich(`chilli garlic`,`mayo sause`)