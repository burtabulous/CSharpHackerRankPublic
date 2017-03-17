using fst.books.Models;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace fst.Books.Services
{
    class BookService
    {
        public async static void GetBooks(string url)
        {
            HttpClient client = new HttpClient();
            HttpResponseMessage response = await client.GetAsync(url);
            HttpContent content = response.Content;
            string contentString = await content.ReadAsStringAsync();
            ShowBooks(contentString);
        }

        public static List<Book> ShowBooks(string data)
        {
            List<Book> bookList = new List<Book>();

            JObject bookObject = JObject.Parse(data);

            var items = bookObject["items"];
            foreach (var item in items)
            {
                Book b = new Book();

                var si = item["saleInfo"];
                var vi = item["volumeInfo"];

                b.Title = vi["title"].ToString();
                b.PageCount = Convert.ToInt32(vi["pageCount"]);
                b.IsEbook = Convert.ToBoolean(si["isEbook"]);
                b.AverageRating = Convert.ToDouble(vi["averageRating"]);

                bookList.Add(b);
                Console.WriteLine("\nTitle: {0} \nNumber of pages: {1} \nIs epublished: {2} \nAverage rating: {3} \n-------------------",
                    b.Title, b.PageCount, b.IsEbook, b.AverageRating);
            }

            return bookList;
        }

    }
}
