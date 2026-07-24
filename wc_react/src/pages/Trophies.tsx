import '../App.css'
import { useEffect, useState } from "react";
import PageButton from '../Button';

interface Bot {
  Id: string;
  Name: string;
  Profile: string;
  Trophies: string[];
}

interface TrophyBot extends Bot {
  categories: Record<string, string[]>;
  categoryPoints: Record<string, number>;
  points: number;
}


const trophyCategories = [
  "WCC",
  "NCC",
  "ACC",
  "FCC",
  "LCC",
  "WCTourney"
];


function getCategory(trophy: string) {

  if (/^S\d+_/.test(trophy)) {
    return "WCC";
  }

  return trophy.split("_")[0];

}


function getPoints(trophy: string) {

  let medalPoints = 0;

  if (trophy.includes("Gold")) {
    medalPoints = 3;
  }
  else if (trophy.includes("Silver")) {
    medalPoints = 2;
  }
  else if (trophy.includes("Bronze")) {
    medalPoints = 1;
  }


  const category = getCategory(trophy);


  if (category === "WCC") {
    return medalPoints * 3;
  }


  if (category === "NCC") {
    return medalPoints * 2;
  }


  return medalPoints;

}



function Trophies() {

  const [bots, setBots] = useState<TrophyBot[]>([]);
  const [sortType, setSortType] = useState<string>("Total");



  useEffect(() => {

    fetch("/officialData.json")
      .then(res => res.json())
      .then((data: Bot[]) => {

        const trophyData = data.map(bot => {

          const categories: Record<string, string[]> = {};
          const categoryPoints: Record<string, number> = {};

          let totalPoints = 0;


          bot.Trophies.forEach(trophy => {

            const category = getCategory(trophy);
            const points = getPoints(trophy);


            if (!categories[category]) {
              categories[category] = [];
              categoryPoints[category] = 0;
            }


            categories[category].push(trophy);
            categoryPoints[category] += points;

            totalPoints += points;

          });


          return {
            ...bot,
            categories,
            categoryPoints,
            points: totalPoints
          };

        });


        trophyData.sort((a,b) => b.points - a.points);

        setBots(trophyData);

      });

  }, []);



  function sortBy(type: string) {

    setSortType(type);

    const sorted = [...bots].sort((a,b) => {

      if (type === "Total") {
        return b.points - a.points;
      }

      return (
        (b.categoryPoints[type] ?? 0) -
        (a.categoryPoints[type] ?? 0)
      );

    });


    setBots(sorted);

  }



  return (
    <>
      <PageButton />

      <h1>Trophy Rankings</h1>


      <table id="seasonTable">

        <thead>

          <tr>

            <th>#</th>
            <th>Bot</th>
            <th>Profile</th>


            {trophyCategories.map(category => (

              <th
                key={category}
                onClick={() => sortBy(category)}
                style={{cursor:"pointer"}}
              >
                {category}
              </th>

            ))}


            <th
              onClick={() => sortBy("Total")}
              style={{cursor:"pointer"}}
            >
              Points
            </th>

          </tr>

        </thead>



        <tbody>

          {bots.map((bot,index) => (

            <tr key={bot.Id}>

              <td>
                {index + 1}
              </td>


              <td>
                {bot.Name}
              </td>


              <td>
                <img
                  className="botImg"
                  src={"/" + bot.Profile}
                  alt={bot.Name}
                />
              </td>



              {trophyCategories.map(category => (

                <td
                  key={category}
                  className="trophyCell"
                >

                  {bot.categories[category]?.map(trophy => (

                    <img
                      key={trophy}
                      className="trophyImg"
                      src={`/img/Trophy/${trophy}.png`}
                      alt={trophy}
                    />

                  ))}


                  {bot.categoryPoints[category] &&
                    <div>
                      {bot.categoryPoints[category]} pts
                    </div>
                  }


                </td>

              ))}



              <td>
                {bot.points}
              </td>


            </tr>

          ))}


        </tbody>

      </table>

    </>
  );

}


export default Trophies;