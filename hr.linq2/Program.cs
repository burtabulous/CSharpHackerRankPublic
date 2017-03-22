﻿/*
 * 
 * Using the Classes defined below (Order, Customer, Address, OrderItem) solve the three problems using LINQ. Using the pre-populated list named "Orders"

    -Select all customer addresses from Orders that have more than 1 order item associated with it
    -Select all order items from all orders
    -Set the order's tax and total properties using the order items for each order.
       -calculate tax using 7.75%
       -total = subtotal + tax
 */


using System;
using System.Collections.Generic;
using System.Linq;

namespace LinqAdvanced
{
    internal class MyClass
    {
        public int id { get; set; }

        public void print()
        {
            Console.WriteLine("id - " + id);
        }
    }
    internal class Order : MyClass
    {
        public Customer customer { get; set; }
        public List<OrderItem> items { get; set; }
        public double tax { get; set; }
        public double total { get; set; }

        public new void print()
        {
            base.print();
            Console.WriteLine("tax - {0}", this.tax.ToString("C"));
            Console.WriteLine("total - {0}", this.total.ToString("C"));
        }
    }

    internal class Customer : MyClass
    {
        public string name { get; set; }
        public Address address { get; set; }
    }

    internal class Address : MyClass
    {
        public string street { get; set; }
        public string zip { get; set; }
        public string city { get; set; }
        public string state { get; set; }

        public new void print()
        {
            base.print();
            Console.WriteLine("street - {0}", this.street);
            Console.WriteLine("zip - {0}", this.zip);
            Console.WriteLine("city - {0}", this.city);
            Console.WriteLine("state - {0}\n", this.state);
        }

    }

    internal class OrderItem : MyClass
    {
        public string name { get; set; }
        public double price { get; set; }
        public int qty { get; set; }

        public new void print()
        {
            base.print();
            Console.WriteLine("name - {0}", this.name);
            Console.WriteLine("price - {0}", this.price.ToString("C"));
            Console.WriteLine("quantity - {0}\n", this.qty);
        }
    }

    class Program
    {
        /*****************************************************************/

        //Select and return a list of the customer address for all orders that have more then 1 order item associated with it
        public static List<Address> getAddressList()
        {
            //todo
            Console.WriteLine("--------------------\nGet Address List \n--------------------");

            List<Address> addressList = new List<Address>();

            List<Address> addressesByOrder = orders.Where(o => o.items.Count > 1).Select(c => c.customer.address).ToList();

            foreach (Address address in addressesByOrder)
            {
                addressList.Add(address);

            }

            return addressList;
        }


        //select all order items from all orders as a list
        public static List<OrderItem> getAllOrderItems()
        {
            //todo
            Console.WriteLine("--------------------\nGet All Order Items \n--------------------");

            List<OrderItem> ordersList = new List<OrderItem>();

            var orderItems = orders.SelectMany(o => o.items);

            foreach (var item in orderItems)
            {
                ordersList.Add(item);

            }

            return ordersList;
        }

        //update each orders tax and total based on it's order items
        public static void setTotals()
        {
            double subTotal = 0;
            double tax = 0;

            foreach (var order in orders)
            {
                foreach (var item in order.items)
                {
                    subTotal = (item.qty * item.price);
                    tax = (subTotal * .0775);
                }

                order.tax = tax;
                order.total = subTotal + tax;
            }

        }

        /*****************************************************************/





        public static List<Order> orders;
        static void Main(string[] args)
        {

            orders = new List<Order>()
            {
                new Order()
                {
                    id = 1,
                    customer = new Customer()
                    {
                        id = 100,
                        name = "Joes Bike Shop",
                        address = new Address()
                        {
                            id = 500,
                            street = "123 fake st.",
                            zip = "95264",
                            city = "LA",
                            state = "CA"
                        }
                    },
                    items = new List<OrderItem>()
                    {
                        new OrderItem()
                        {
                            id = 1000,
                            name = "button",
                            price = 25.25,
                            qty = 21
                        },
                        new OrderItem()
                        {
                            id = 1001,
                            name = "box",
                            price = 13.21,
                            qty = 7
                        }
                    }
                },
                new Order()
                {
                    id = 2,
                    customer = new Customer()
                    {
                        id = 101,
                        name = "Billy's Pawn Shop",
                        address = new Address()
                        {
                            id = 501,
                            street = "321 faker ave.",
                            zip = "92175",
                            city = "Irvine",
                            state = "CA"
                        }
                    },
                    items = new List<OrderItem>()
                    {
                        new OrderItem()
                        {
                            id = 1002,
                            name = "button",
                            price = 25.25,
                            qty = 2
                        },
                        new OrderItem()
                        {
                            id = 1003,
                            name = "calendar",
                            price = 10.75,
                            qty = 10
                        }
                    }
                }
            };

            //q1 customer addresses
            var addresses = getAddressList();
            addresses.ForEach(a => a.print());
            //q2 order items
            var items = getAllOrderItems();
            items.ForEach(i => i.print());
            //q3 set totals
            setTotals();


            foreach (var order in orders)
            {
                order.print();
                order.customer.print();
                order.customer.address.print();
                foreach (var item in order.items)
                {
                    item.print();
                }
            }

            Console.ReadLine();
        }
    }
}

