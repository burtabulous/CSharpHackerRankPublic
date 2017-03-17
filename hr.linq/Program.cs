using System;
using System.Collections.Generic;
using System.Linq;


/// <summary>
/// Use LINQ to accomplish the following:
///   -print only the name of each dog using Console.WriteLine()
///   -print each dog in the list in ordered by their sortOrder (Lowest to Highest) using the Dog.print() method
///   -print each dog in the list that has an age > 3, Sort them by their sortOrder (Highest to Lowest), using the Dog.print() method

///Rules
///   -Use the provided methods
///   -You must use LINQ
/// </summary>
/// 
//Time to complete: 30 minutes
class Solution
{
    private class Dog
    {
        public int id { get; set; }
        public string name { get; set; }
        public int age { get; set; }
        public int sortOrder { get; set; }

        public void print()
        {
            Console.WriteLine("Dog - " + this.id);
            Console.WriteLine("Name - " + this.name);
            Console.WriteLine("--------------------");
        }
    }


    /*
     * Complete the functions below.
     */
    ///<summary>Print ONLY the dog names</summary>
    static void printDogNames()
    {
        Console.WriteLine("--------------------\nDOGS BY NAME \n--------------------");

        dogs.ForEach((Dog) => Console.WriteLine(Dog.name));
        Console.WriteLine("--------------------");
    }

    ///<summary>Print all dogs order by their sortOrder property</summary>
    static void printDogsInOrder()
    {
        Console.WriteLine("\nDOGS BY SORT ORDER \n--------------------\n");

        var dogOrder = dogs.OrderBy(d => d.sortOrder);

        foreach (Dog dog in dogOrder)
        {
            dog.print();
        }

    }

    ///<summary>Print all dogs that have an age > 3 (sorted by sortOrder descending)</summary>
    static void printDogsOverAge3()
    {
        Console.WriteLine("\nDOGS OLDER THAN 3 \n--------------------\n");

        var dogOver3 = dogs.Where(d => d.age > 3).OrderByDescending(d => d.sortOrder);

        foreach (Dog dog in dogOver3)
        {
            dog.print();
        }

    }

    private static List<Dog> dogs;

    static void Main(String[] args)
    {

        dogs = new List<Dog>()
        {
            new Dog() {id = 1, name = "Fido", age = 10, sortOrder = 2},
            new Dog() {id = 2, name = "Spot", age = 1, sortOrder = 0},
            new Dog() {id = 3, name = "Sam", age = 4, sortOrder = 0},
            new Dog() {id = 4, name = "Jim", age = 12, sortOrder = 5},
            new Dog() {id = 5, name = "Spotty", age = 2, sortOrder = 4},
            new Dog() {id = 6, name = "Alfred", age = 4, sortOrder = 1}
        };

        printDogNames();
        printDogsInOrder();
        printDogsOverAge3();

        Console.Read();
    }
}
