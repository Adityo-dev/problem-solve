function StringFilter(params) {
  const satisfies = params.filter((element) => typeof element === "string");
  return satisfies;
}

const array = [1, "Javascript", true, "React", "Next js"];
console.log(StringFilter(array));
