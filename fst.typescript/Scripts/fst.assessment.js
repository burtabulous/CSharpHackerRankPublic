//***********************************************************************************************//
//****            Do Not Modify Any Code below this point (For testing purposes)            *****//
//***********************************************************************************************//
$(function () {
    var animals = [];
    animals.push(new fst.assessment.Cat(9, 1000, "whiskers", 2, 0));
    animals.push(new fst.assessment.Cat(2, 1001, "albert", 8, 1));
    animals.push(new fst.assessment.Cat(1, 1002, "Saul", 12, 5));
    animals.push(new fst.assessment.Cat(4, 1003, "Jimmy", 6, 4));
    animals.push(new fst.assessment.Dog("Labrador", 1004, "Jack", 1, 2));
    animals.push(new fst.assessment.Dog("Boxer", 1005, "Mike Tyson", 3, 3));
    animals.push(new fst.assessment.Dog("Husky", 1006, "Ghost", 5, 6));
    animals.push(new fst.assessment.Dog("German Shepherd", 1007, "Rover", 8, 7));
    $.each(animals, function (index, item) {
        item.great("Brian");
        if (item.ToJsonString) {
            console.log(item.ToJsonString());
        }
    });
    /*

    The above output should be:

        Meow Brian from whiskers
        {"id":1000,"name":"whiskers","age":2,"sortOrder":0,"lives":9}
        Meow Brian from albert
        {"id":1001,"name":"albert","age":8,"sortOrder":1,"lives":2}
        Meow Brian from Saul
        {"id":1002,"name":"Saul","age":12,"sortOrder":5,"lives":1}
        Meow Brian from Jimmy
        {"id":1003,"name":"Jimmy","age":6,"sortOrder":4,"lives":4}
        Bark Brian from a Labrador
        Bark Brian from a Boxer
        Bark Brian from a Husky
        Bark Brian from a German Shepherd

    */
});
