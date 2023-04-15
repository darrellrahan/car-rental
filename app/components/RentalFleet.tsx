import React from "react";
import { carDetails, cars } from "../data/content";
import { useCurrentValueContext } from "../context/currentValue";
import Image from "next/image";

function RentalFleet() {
  const { rentalFleet, setRentalFleet } = useCurrentValueContext();

  const carDetail = carDetails.find((data) => data.car === rentalFleet);

  if (!carDetail) return <h1>shite</h1>;

  return (
    <div className="px-8 py-16 text-center space-y-8">
      <div className="font-bold space-y-2">
        <h3 className="text-xl">Vehicle Models</h3>
        <h1 className="text-4xl leading-tight">Our rental fleet</h1>
        <p className="font-normal text-custom-grey p-4">
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {cars.map((data) => (
          <button
            key={data.id}
            className={`${
              rentalFleet === data.car
                ? "bg-custom-orange text-white"
                : "bg-lighter-grey text-black"
            } text-left p-4 text-xl font-semibold hover:bg-custom-orange hover:text-white transition-all duration-300 ease-linear`}
            onClick={() => setRentalFleet(data.car)}
          >
            {data.car}
          </button>
        ))}
      </div>
      <div>
        <Image
          src={`/images/${carDetail.car}.png`}
          alt={carDetail.car}
          width={300}
          height={300}
          className="m-auto"
        />
        <h1>${carDetail.price} / rent per day</h1>
        <table>
          <tr>
            <td>Model</td>
            <td>{carDetail.model}</td>
          </tr>
          <tr>
            <td>Mark</td>
            <td>{carDetail.mark}</td>
          </tr>
          <tr>
            <td>Year</td>
            <td>{carDetail.year}</td>
          </tr>
          <tr>
            <td>Doors</td>
            <td>{carDetail.doors}</td>
          </tr>
          <tr>
            <td>AC</td>
            <td>{carDetail.ac}</td>
          </tr>
          <tr>
            <td>Transmission</td>
            <td>{carDetail.transmission}</td>
          </tr>
          <tr>
            <td>Fuel</td>
            <td>{carDetail.fuel}</td>
          </tr>
        </table>
        <button>Reserve Now</button>
      </div>
    </div>
  );
}

export default RentalFleet;
