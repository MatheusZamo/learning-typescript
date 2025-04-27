const returnValue = <T>(value: T) => value;

const message = returnValue<string>("Hello World");

const count = returnValue<number>(5);

const getFirstValueFromArray = <Type>(array: Type[]) => {
  return array[0];
};

const firstValueFromStringArray = getFirstValueFromArray<string>(["1", "2"]);
const firstValueFromNumberArray = getFirstValueFromArray<number>([10, 20]);
