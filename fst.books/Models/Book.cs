using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace fst.books.Models
{
    class Book
    {
        public string Title { get; set; }

        public int PageCount { get; set; }

        public bool IsEbook { get; set; }

        public double AverageRating { get; set; }
    }
}
