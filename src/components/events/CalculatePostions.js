export const CalculatePostions = (data, divWidth) => {
  let padding = 20;
  let hourAmonut = 19;
  let hourSizePx = (divWidth - 2 * padding) / (hourAmonut + 1);
  let minuteSize = hourSizePx / 60;
  let size = 205;

  let array = data.map((event, index) => {
    const { dateStart, dateEnd } = event;
    let dateZero = new Date(
      dateStart.getFullYear(),
      dateStart.getMonth(),
      dateStart.getDate(),
      4,
      0
    );

    let durationMin = (dateEnd - dateStart) / 60000;
    let startMin = (dateStart - dateZero) / 60000;

    let start = minuteSize * startMin + padding + hourSizePx / 2;
    let duration = minuteSize * durationMin;
    let end = start + duration;

    return {
      start,
      end,
      duration
    };
  });

  array.unshift({
    start: 0,
    end: 0,
    duration: 0
  });
  array.push({
    start: divWidth,
    end: divWidth,
    duration: 0
  });

  let arrayValues = [
    { start: 0, end: 0, level: "top" },
    { start: 0, end: 0, level: "bottom" }
  ];
  for (let i = 1; i < array.length - 1; i++) {
    let baseLevel = "top";
    let baseValue = array[i].duration;

    let arrayTemp = arrayValues.filter(element => element.level === "top");

    let rangeToLeft = array[i].start - arrayTemp[arrayTemp.length - 1].end;
    if (rangeToLeft < size) {
      baseValue -= size - rangeToLeft;

      let rangeToRight = array[i + 1].start - array[i].end - baseValue;
      let sizeOnRight = array[i].duration - baseValue;
      if (rangeToRight < sizeOnRight) {
        baseLevel = "bottom";
        baseValue = array[i].duration;

        arrayTemp = arrayValues.filter(element => element.level === "bottom");
        rangeToLeft = array[i].start - arrayTemp[arrayTemp.length - 1].end;
        if (rangeToLeft < size) {
          baseValue -= size - rangeToLeft;
        }
      }
    }

    let endBox = array[i].end - baseValue;
    arrayValues.push({
      start: 0,
      end: endBox,
      level: baseLevel
    });

    array[i] = {
      ...array[i],
      height: baseLevel,
      value: baseValue
    };
  }

  array.shift();
  array.pop();
  console.log(array);
  return array;
};
