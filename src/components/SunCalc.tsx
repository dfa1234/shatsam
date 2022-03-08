export const SunCalc = ()=>{


    const sunrise = new Date("2022-03-09T04:00:17.844Z");
    const sunset = new Date("2022-03-09T15:45:14.622Z");


    const nbSecondesDay = Math.round(
        (sunset.getTime() - sunrise.getTime())
        /1000);

    console.log(nbSecondesDay)

    const halfDay = 12 * 60 * 60;

    const intervalMsDay = Math.round(nbSecondesDay * 1000 / halfDay);

    console.log(intervalMsDay)

    const nbSecondesNight = halfDay * 2 - nbSecondesDay;

    const intervalMsNight = Math.round(nbSecondesNight * 1000 / halfDay);

    console.log(intervalMsNight)

    return <></>
}