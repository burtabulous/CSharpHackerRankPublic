using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;


/// <summary>
///   Complete the implementation below however you see fit. (Hint: Use Object Oriented Programming techniques)
///
///   Requirements
///     -Create a Dog class
///        -with the following properties
///           -id
///           -name
///           -age
///           -sortOrder
///           -bread
///        -with the following method that displays
///           -print()
///              -Displays 3 lines using Console.WriteLine()
///                 -id - (dog's id here)
///                 -name - (dog's name here)
///                 -bread - (dog's bread here)
///     -Create a Cat class 
///        -with the following properties
///           -id
///           -name
///           -age
///           -sortOrder
///           -lives
///        -with the following method that displays
///           -print()
///              -Displays 3 lines using Console.WriteLine()
///                 -id - (cat's id here)
///                 -name - (cat's name here)
///                 -live - (cat's lives here)
/// </summary>
class Solution
{
    private interface IAnimal
    {
        int id { get; set; }
        string name { get; set; }
        int age { get; set; }
        int sortOrder { get; set; }

        void print();
    }

    /**********************************************************************/
    /***                 Implement Classes Here                         ***/
    /**********************************************************************/


    //todo





    private static void printDashes()
    {
        Console.WriteLine("--------------------");
    }

    private static List<Dog> dogs;
    private static List<Cat> cats;


    static void Main(String[] args)
    {

        dogs = new List<Dog>()
        {
            new Dog() {id = 1, name = "Fido", age = 10, sortOrder = 2, bread = "Akita"},
            new Dog() {id = 2, name = "Spot", age = 1, sortOrder = 0, bread = "German Shepherd"},
            new Dog() {id = 3, name = "Sam", age = 4, sortOrder = 0, bread = "Labrador Retriever"},
            new Dog() {id = 4, name = "Jim", age = 12, sortOrder = 5, bread = "Akita"},
            new Dog() {id = 5, name = "Spotty", age = 2, sortOrder = 4, bread = "German Shepherd"},
            new Dog() {id = 6, name = "Alfred", age = 4, sortOrder = 1, bread = "Labrador Retriever"}
        };


        cats = new List<Cat>()
        {
            new Cat() {id = 1, name = "Fido", age = 10, sortOrder = 2, lives = 4},
            new Cat() {id = 2, name = "Spot", age = 1, sortOrder = 0, lives = 9},
            new Cat() {id = 3, name = "Sam", age = 4, sortOrder = 0, lives = 1},
            new Cat() {id = 4, name = "Jim", age = 12, sortOrder = 5, lives = 2},
            new Cat() {id = 5, name = "Spotty", age = 2, sortOrder = 4, lives = 5},
            new Cat() {id = 6, name = "Alfred", age = 4, sortOrder = 1, lives = 6}
        };

        foreach (var dog in dogs)
        {
            dog.print();
        }

        foreach (var cat in cats)
        {
            cat.print();
        }

        Console.Read();
    }
}