import React from "react";

const HomePage = () => {
  return (
    <>
      <section className="text-white bg-purple-600 h-[400px] text-center px-10 py-20 flex justify-center">
        <div className="border rounded-md w-fit ">
          <h1 className="text-4xl font-bold mb-6 mt-6">
            Programming in reality is <br /> actually easy
          </h1>
          <p className="text-2xl max-w-2xl mx-auto text-sm mb-3">
            Many people think programming is a very difficult task. In reality,
            programming is actually not that difficult. Our courses teach you
            just how to program well. Most of the courses are actually free.
          </p>
        </div>
      </section>
      <main className="flex  justify-center border">
        <div className="container border border-blue-950 h-98 w-80 m-5">
          <div className="">
            <img
              src="https://th.bing.com/th/id/OIP.7T5pMoBz7dsBllOSXamURwHaHZ?w=170&h=180&c=7&r=0&o=5&pid=1.7"
              className="h-60 w-full p-5"
            />
          </div>
          <p className="p-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            unde iure, odit tenetur quis, tempora quae error incidunt saepe
            nostrum officia aliquam dignissimos quo officiis ipsum nesciunt quas
            culpa cum?
          </p>
        </div>
        <div className="container border border-blue-950 h-98 w-80 m-5 ">
          <div className="">
            <img
              src="https://th.bing.com/th/id/OIP.a4lnSyRZqSjtnROwkCREBQHaFE?w=281&h=192&c=7&r=0&o=5&pid=1.7"
              className="h-60 w-full p-5"
            />
          </div>
          <p className="p-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            unde iure, odit tenetur quis, tempora quae error incidunt saepe
            nostrum officia aliquam dignissimos quo officiis ipsum nesciunt quas
            culpa cum?
          </p>
        </div>
        <div className="container border border-blue-950 h-98 w-80 m-5 ">
          <div className="">
            <img
              src="https://th.bing.com/th/id/OIP.Xy3MEyqhqGeKjY5VznKpUgHaHa?w=184&h=187&c=7&r=0&o=5&pid=1.7"
              className="h-60 w-full p-5"
            />
          </div>
          <p className="p-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            unde iure, odit tenetur quis, tempora quae error incidunt saepe
            nostrum officia aliquam dignissimos quo officiis ipsum nesciunt quas
            culpa cum?
          </p>
        </div>
      </main>
    </>
  );
};

export default HomePage;
