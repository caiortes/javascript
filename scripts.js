function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes("C");
  const fahrenheitExists = degree.toUpperCase().includes("F");
  //fluxo de erro
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error("Grau não identificado"); // throw - lança uma exceção definida pelo usuário, A execução da função atual vai parar( as instruções após o THROW não serão executadas)
  }
  // fluxo ideal, F -> C
  let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  let degreeSign = "C";
  // fluxo alternativo, C -> F
  if (celsiusExists) {
    updatedDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = (celsius) => (celsius * 9) / 5 + 32;
    degreeSign = "F";
  }
  return formula(updatedDegree) + degreeSign;
}

try {
  console.log(transformDegree("100F"));
  console.log(transformDegree("100C"));
  transformDegree("100Z")
} catch (error) {
  console.log(error.message);
}
