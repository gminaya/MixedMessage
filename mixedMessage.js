//Object that contain the messages parts and methods to generates the message
const mixedMessages = { 
    messageParts : {
    partOne:["Harry","Dumbledore","Ron","Hermione","James","Snape","Malfoy"],
    partTwo:["likes","loves","dislike","hates"],
    partTree:["going to Hogsmeade","talk about Voldy","leaving Hogwarts"]},
    
    //Select a random index from the partOne array
    randomPartOne(){
        return Math.floor(Math.random()  * this.messageParts.partOne.length);
    },

    //Select a random index from the partTwo array
    randomPartTwo(){
        return Math.floor(Math.random()  * this.messageParts.partTwo.length);
    },

    //Select a random index from the partTree array
    randomPartTree(){
        return Math.floor(Math.random()  * this.messageParts.partTree.length);
    },

    //generates the message
    generate(){
        let part_1 = this.messageParts.partOne[this.randomPartOne()];
        let part_2 = this.messageParts.partTwo[this.randomPartTwo()];
        let part_3 = this.messageParts.partTree[this.randomPartTree()];

        return `${part_1} ${part_2} ${part_3}.`


    } 

}


console.log(mixedMessages.generate())