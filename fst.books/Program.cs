﻿using fst.Books.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace fst.books
{

    /// <summary>
    /// Objective: fetch and display all of J.K. Rowling's books using google books api
    /// google books documentation - https://developers.google.com/books/docs/v1/using#WorkingVolumes 
    /// 
    /// Instructions:
    /// Create a C# Class to Convert the json into
    /// Send a request to google books api search for J.K. Rowling as the author
    /// print out to the console each book's:
    ///     -title
    ///     -number of pages
    ///     -if it is epublished
    ///     -its average rating 
    /// 
    /// </summary>
    class Program
    {
        static void Main(string[] args)
        {
            string url = "https://www.googleapis.com/books/v1/volumes?q=+inauthor:J.K.Rowling&key=AIzaSyDtKSe8z4oQYD6t5qqYYs15zZsCa1mAl5U";
            BookService.GetBooks(url);
            Console.ReadLine();
        }


    }
}
