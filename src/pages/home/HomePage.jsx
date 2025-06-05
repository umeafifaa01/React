import React from "react";

const HomePage = () => {
  return (
    <>
      <section>
        <div>
          <h1 className="text-4xl font-bold">
            Programming in reality is actually easy
          </h1>
        </div>
      </section>
      <main className="flex  gap-11">
        <div className="container border border-red-800 h-98 w-80 m-5">
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
        <div className="container border border-red-800 h-98 w-80 m-5 ">
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
        <div className="container border border-red-800 h-98 w-80 m-5 ">
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
